const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/perguntas', (req, res) => {
  res.json([
    { pergunta: "2+2", resposta: 4 }
  ]);
});

app.post('/api/score', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});