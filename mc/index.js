const Config = require('../config');
const Mailchimp = require('mailchimp-api-v3');

const mailchimp = Config.MAILCHIMP_API_KEY ? new Mailchimp(Config.MAILCHIMP_API_KEY) : {};

const addSubscriber = (email, data, update) => {
    if (!email || !Config.MAILCHIMP_API_KEY || !Config.MAILCHIMP_LIST_ID) {
        const msg = `Ignoring adding subscriber, missing params ${!email ? 'email': 'config'}`;
        console.warn(msg);
        return Promise.resolve({ msg });
    }

    return mailchimp.post(`lists/${Config.MAILCHIMP_LIST_ID}`, {
        update_existing: update !== undefined ? update : true,
        members: [{
            email_address: email.toLowerCase(),
            status : data.status || 'subscribed',
            merge_fields: {
                "FNAME": data.name,
            },
        }],
    }).then(m => {
        if (m.errors) {
            console.log('Error adding new subscriber to MC', m.errors);
        }
        return m;
    }).catch(err => {
        console.warn('Failed adding subscriber', email, err);
    });
}

module.exports = {
    addSubscriber,
}
