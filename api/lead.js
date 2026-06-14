// Vercel Serverless Function — websayt formasidan kelgan lead'ni
// Telegram bot orqali guruh yoki lichkaga yuboradi.
// Token va chat ID — Vercel Environment Variables'da (yashirin).

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  if (!TOKEN || !CHAT_ID) {
    return res.status(500).json({ ok: false, error: 'Bot not configured' });
  }

  try {
    const b = req.body || {};
    const name = (b.name || '').trim();
    const phone = (b.phone || '').trim();
    if (!name || !phone) {
      return res.status(400).json({ ok: false, error: 'Name and phone required' });
    }

    const esc = (s) => String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const text =
      `🎓 <b>Yangi ariza — Korea Pro Website</b>\n\n` +
      `👤 <b>Ism:</b> ${esc(name)}\n` +
      `📞 <b>Telefon:</b> ${esc(phone)}\n` +
      `📚 <b>Ta'lim:</b> ${esc(b.edu) || '—'}\n` +
      `🎯 <b>Dastur:</b> ${esc(b.program) || '—'}\n` +
      `💬 <b>Xabar:</b> ${esc(b.message) || '—'}\n` +
      `🌐 <b>Til:</b> ${esc((b.lang || '').toUpperCase())}\n` +
      `🕒 ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}`;

    const tg = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML', disable_web_page_preview: true }),
    });
    const data = await tg.json();
    if (!data.ok) throw new Error(data.description || 'Telegram API error');

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e && e.message || e) });
  }
}
