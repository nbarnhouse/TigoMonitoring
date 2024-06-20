const express = require('express');
const tigoRouter = require('./routes/tigo.router');
const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.static('build'));

app.use('/api/tigo', tigoRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
