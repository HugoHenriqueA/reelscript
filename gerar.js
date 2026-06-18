api/gerar.js
// Endpoint serverless Vercel — protege a API key da Anthropic
// A chave NUNCA chega ao browser do usuário

export default async function handler(req, res) {

  // Só aceita POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({ error: 'Campo prompt é obrigatório' });
  }

  // Limite simples de tamanho para evitar abuso
  if (prompt.length > 2000) {
    return res.status(400).json({ error: 'Prompt muito longo' });
  }

  try {
    const resposta = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY, // ← vem da variável de ambiente
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!resposta.ok) {
      const erro = await resposta.json().catch(() => ({}));
      return res.status(resposta.status).json({
        error: erro?.error?.message || `Erro da API: ${resposta.status}`,
      });
    }

    const json = await resposta.json();
    const texto = json.content?.[0]?.text || '';

    return res.status(200).json({ texto });

  } catch (e) {
    return res.status(500).json({ error: 'Erro interno. Tente novamente.' });
  }
}
