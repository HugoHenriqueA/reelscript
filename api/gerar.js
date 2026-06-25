export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim().lengt
    const resposta = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
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
    const texto = json.choices?.[0]?.message?.content || '';

    return res.status(200).json({ texto });

  } catch (e) {
    return res.status(500).json({ error: 'Erro interno. Tente novamente.' });
  }
}
