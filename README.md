# Using MailChimp API on NodeJS

Sample application to show how to add subscribers to a MailChimp list using nodeJS.
It took me a few hours finding how to do this, piecing together from their
documentation, some answers, debugging and reading the source code, so I decided to
put together this repo to make it easier for others.

## How to use

Replace the values in `config.js` with your API key and list id so you can experiment
with this code. This is a regular express application, run `npm i` and `npm start` and
navigate to [localhost:8000](http://localhost:8000).

The code you need to use in your application is on `mc/index.js`. The example included uses
the endpoint to add a subscriber, but those are the same principles to use any other endpoint,
like getting subscriber info, or updating their information.

For more information on the mailchimp api check out the official Mailchimp
[documentation](https://developer.mailchimp.com/documentation/mailchimp/guides/an-introduction-to-rest/),
or in the documentation for the [API wrapper](https://www.npmjs.com/package/mailchimp-api-v3) we're using.

Checkout the code on this commit to see exactly what you need
[e0283b6](https://github.com/code-corgi/blog-nodejs-mailchimp/commit/e0283b6bac04d0ad63d033b10e2a9671978599d6).

### Find your API Key

To find or generate an API Key go to your account settings > Api Keys, as described
[here](https://kb.mailchimp.com/integrations/api-integrations/about-api-keys).

### Find your List id

The list id is not the id on the query parameters when you look at your subscribers,
you have to go to the list settings > list name and defaults, and close to the list
name you'll see the list id. As detailed
[here](https://kb.mailchimp.com/lists/manage-contacts/find-your-list-id).

## Security Tips

Always keep your API key and List ID private, if you share them with anyone
they will potentially have access to all your subscribers's information and
information about your account. And ill intentioned people can use this
information to damage your brand's reputation or delete your subscribers to
mess with you.

Always use different API keys for every application, and give
separate ones to your collaborators, MailChimp gives you an option to invalidate
keys so you can revoke access to people when they no longer need it.
