const app = require('express')();

const PORT = process.env.CLIENT_PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () =>
  console.log(`Client running on http://localhost:${PORT}`)
);
