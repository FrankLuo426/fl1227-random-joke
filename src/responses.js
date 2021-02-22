const jokes = [];
jokes[0] = {
  q: 'What do you call a very small valentine?',
  a: 'A valen-tiny!!!',
};
jokes[1] = {
  q: 'What did the dog say when he rubbed his tail on the sandpaper?',
  a: 'Ruff, Ruff!!!',
};
jokes[2] = {
  q: "Why don't sharks like to eat clowns?",
  a: 'Because they taste funny!!!',
};
jokes[3] = {
  q: 'What did the boy cat say to the girl cat?',
  a: "You're Purr-fect!!!",
};
jokes[4] = {
  q: "What is a frog's favorite outdoor sport?",
  a: 'Fly Fishing!!!',
};
jokes[5] = {
  q: 'I hate jokes about German sausages.',
  a: 'Theyre the wurst!!!',
};
jokes[6] = {
  q: 'Did you hear about the cheese factory that exploded in France?',
  a: 'There was nothing left but de Brie!!!',
};
jokes[7] = {
  q: 'Our wedding was so beautiful',
  a: 'Even the cake was in tiers!!!',
};
jokes[8] = {
  q: 'Is this pool safe for diving?',
  a: 'It deep ends!!!',
};
jokes[9] = {
  q: 'Dad, can you put my shoes on?',
  a: 'I dont think theyll fit me!!!',
};

const getRandomJokeJSON = (limit = 1) => {
  const limit1 = Number(limit);
  if (limit1 === 1) {
    const responseObj = jokes[Math.floor(Math.random() * 10)];
    return JSON.stringify(responseObj);
  }

  const responseObjArray = [];

  for (let i = 0; i < limit1; i += 1) {
    const responseObj = jokes[Math.floor(Math.random() * 10)];
    responseObjArray[i] = responseObj;
  }

  return JSON.stringify(responseObjArray);
};

const getRandomJokeXML = (limit = 1) => {
  const limit1 = Number(limit);
  if (limit1 === 1) {
    const responseObj = jokes[Math.floor(Math.random() * 10)];
    const xmlResponse = `
      <joke>
        <q>${responseObj.q}</q>
        <a>${responseObj.a}</a>
      </joke>
      `;
    return xmlResponse;
  }

  let xmlQA;
  let xmlList = `
    <jokes>
    `;

  for (let i = 0; i < limit1; i += 1) {
    const responseObj = jokes[Math.floor(Math.random() * 10)];
    xmlQA = `
      <joke>
        <q>${responseObj.q}</q>
        <a>${responseObj.a}</a>
      </joke>
      `;
    xmlList += xmlQA;
  }
  xmlList += '</jokes>';
  return xmlList;
};

const getRandomJokeResponse = (request, response, params, acceptedTypes) => {
  if (acceptedTypes.includes('text/xml')) {
    response.writeHead(200, {
      'Content-Type': 'text/xml',
    });
    response.write(getRandomJokeXML(params.limit));
    response.end();
  } else {
    response.writeHead(200, {
      'Content-Type': 'application/json',
    });
    response.write(getRandomJokeJSON(params.limit));
    response.end();
  }
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;
