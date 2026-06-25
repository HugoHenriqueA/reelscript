module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo nao permitido' });
  }

  var body = req.body;
  var prompt = body ? body.prompt : null;

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({ error: 'Campo prompt obrigatorio' });
  }

  if (prompt.length > 2000) {
    return res.status(400).json({ error: 'Prompt muito longo' });
  }

  try {
    var resposta = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!resposta.ok) {
      return res.status(resposta.status).json({ error: 'Erro da API: ' + resposta.status });
    }

    var json = await resposta.json();
    var texto = json.choices && json.choices[0] ? json.choices[0].message.content : '';

    return res.status(200).json({ texto: texto });

  } catch (e) {
    return res.status(500).json({ error: 'Erro interno.' });
  }
}
