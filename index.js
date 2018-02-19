const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const PORT = process.env.PORT || 8000;

app.post('/email/new', (req, res) => {
    res.json({ formValues: req.body });
});

app.listen(PORT, () => {
  console.log(`Sample Node/Mailchimp app running on port: ${PORT}!`);
});
