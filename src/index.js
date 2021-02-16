const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/random-joke': jsonHandler.getRandomJokeResponse,
  notFound: htmlHandler.get404Response,
  '/random-jokes': jsonHandler.getRandomJokeResponse,
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const {
    pathname,
  } = parsedUrl;

  const params = query.parse(parsedUrl.query);

  // let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
  // acceptedTypes = acceptedTypes || [];

  if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params);
  } else {
    urlStruct.notFound(request, response);
  }
};

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);