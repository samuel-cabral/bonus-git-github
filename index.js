const express = require('express');

const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
  return res.json({ hello: 'world 2' });
});

app.listen(3333, () => console.log(`🚀 Server listening on port 3333`));
