# Issues with original code

## Client-side logic

The main issue with the original code is that it relies on a *client-side*
implementation of a validation logic. This is not an issue for small
single-purpose apps, because in the end the logic will still be in one place.

However, as an application grows in size and starts to have multiple front-ends
and multiple places that requires the usage of the same logic, it leads to
multiple sources of truth and code duplication. This could be, for example:

- having to send SMS notifications for beers outside the correct temperature
  range;
- having a phone app to monitor the temperatures;
- having to log time outside correct range to a database;

And more importantly for our task, this not only makes testing the business
logic harder, because it's not separated from the rendering/viewing logic but
also makes it impossible to make sure our tests actually test the functionality
in the future: if for example we need to send SMS notifications when beers are
in the incorrect temperature, we would need to write new tests for that as the
logic would not be in the same place.

![business-logic-decoupling](https://user-images.githubusercontent.com/2183824/119279601-1c42dd80-bc03-11eb-9212-a5ee44b45da3.png)

## Single-component design 

The original code has a single component in the front-end which takes care of
rendering everything in a single go. This makes it hard to test the
functionality of the component, because its functionality is to do everything!

If we instead separate that component in multiple components, each one with a
single main functionality, we can then independently test that functionality to
make sure the component does what it is supposed to do, without the need for
testing everything end-to-end (which is not robust because presentation might
change). End-to-end tests have their value, but unit tests of individual
functionality are also important.

# Future Work

1. End-to-end testing of the rendering code.
2. API endpoint testing/contract testing.
3. Presently, the client side code needs to know all the products for which it
will need to request data. This should be in the server, because otherwise any
addition or removal of products requires a new version of the front-end.

The reason these two types of testing take a lower priority over the ones I
implemented is that the issues are much easier to catch. If the APIs are not
working correctly, the app probably not work at all. Of course, ideally one
would also add testing for those cases. Now, consider the case where the app
works, but display the incorrect data: this will be harder to catch and has a
higher chance of being deployed to production, hence, writing tests that avoid
it has higher priority.

# Available scripts

## Root
- `npm install` - Installs dependencies client and server apps
- `npm start` - Runs client and server apps

## Client
- `npm start` - Start the application (Port 3000)
- `npm test` - Runs available tests

## Server
- `npm start` - Start the application (Port 8081)
