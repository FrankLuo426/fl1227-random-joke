const errorPage = `
<html>
    <head>
        <title>404 - File Not Found!</title>
    </head>
    <body>
        <h1>404 - File Not Found!</h1>
        <p>Check your URL, or your typing!</p>
        <p>Pherhps you are looking for <a href="/random-joke">/random-joke</a> or <a href="/random-jokes?limit=10">/random-jokes?limit=10</a>?
        <p>:-o</p>
    </body>
</html>`;

const get404Response = (request, response) => {
  response.writeHead(404, {
    'Content-Type': 'text/html',
  });
  response.write(errorPage);
  response.end();
};

module.exports.get404Response = get404Response;
