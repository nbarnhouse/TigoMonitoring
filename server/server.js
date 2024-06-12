const express = require('express');
const starRouter = require('./routes/star.router');
const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.static('build'));

app.use('/api/apod', starRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
