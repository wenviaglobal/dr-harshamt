import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// ─── WhatsApp booking endpoint ───
app.post('/api/book', async (req, res) => {
    const { name, phone, condition, message } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ error: 'Name and phone are required' });
    }

    const WA_PHONE_ID = process.env.WA_PHONE_NUMBER_ID;
    const WA_TOKEN = process.env.WA_ACCESS_TOKEN;
    const DOCTOR_WA = process.env.DOCTOR_WHATSAPP;

    if (!WA_PHONE_ID || !WA_TOKEN || !DOCTOR_WA) {
        console.error('Missing WhatsApp env vars');
        return res.status(500).json({ success: false });
    }

    const lines = [
        '\ud83d\udccb *New Appointment Request*',
        '',
        `\ud83d\udc64 *Name:* ${name}`,
        `\ud83d\udcde *Phone:* ${phone}`,
        `\ud83e\ude7a *Condition:* ${condition || 'Not specified'}`,
    ];
    if (message) lines.push(`\ud83d\udcac *Message:* ${message}`);
    lines.push('', '\u2014 Sent from Dr. Harsha MT website');

    try {
        const response = await fetch(
            `https://graph.facebook.com/v21.0/${WA_PHONE_ID}/messages`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${WA_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messaging_product: 'whatsapp',
                    to: DOCTOR_WA,
                    type: 'text',
                    text: { body: lines.join('\n') }
                })
            }
        );

        const data = await response.json();

        if (response.ok) {
            return res.json({ success: true });
        }

        console.error('WhatsApp API error:', data);
        return res.status(500).json({ success: false });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ success: false });
    }
});

// ─── Serve React build ───
app.use(express.static(join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
