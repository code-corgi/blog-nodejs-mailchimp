const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./mc');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const PORT = process.env.PORT || 8000;

app.post('/email/new', (req, res) => {
    mc.addSubscriber(req.body.email, { name: req.body.name }).then(m => {
        res.json({
            formValues: req.body,
            md: {
                errors: m.errors,
                total_created: m.total_created,
                total_updated: m.total_updated,
                error_count: m.error_count,
            }
        });
    });
});

app.listen(PORT, () => {
  console.log(`Sample Node/Mailchimp app running on port: ${PORT}!`);
});
