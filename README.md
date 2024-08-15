# preact-php-server-render-example
Example on using Preact and PHP V8-JS to server-render preact components.

This project consists of two bundles: One for the server (bundle-server.js) and one for the client (bundle-client.js). When running index.php 
with your webserver of choice, PHP will output the rendered Preact component. After the onload event, client-side rendering and event handling will be executed at
browser level.


## Requeriments

- PHP >5.6
- PHP v8js Extension: http://php.net/manual/en/book.v8js.php
- NPM Package manager
- Webpack
- Nodejs

## Setup
```
git clone git@github.com:helloguille/preact-php-server-render-example.git
cd preact-php-server-render-example
npm install
npm run build
```
