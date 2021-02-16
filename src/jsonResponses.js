const jokes = [{
        q: 'What do you call a very small valentine?',
        a: 'A valen-tiny!',
    },
    {
        q: 'What did the dog say when he rubbed his tail on the sandpaper?',
        a: 'Ruff, Ruff!',
    },
    {
        q: "Why don't sharks like to eat clowns?",
        a: 'Because they taste funny!',
    },
    {
        q: 'What did the boy cat say to the girl cat?',
        a: "You're Purr-fect!",
    },
    {
        q: "What is a frog's favorite outdoor sport?",
        a: 'Fly Fishing!',
    },
    {
        q: 'I hate jokes about German sausages.',
        a: 'Theyre the wurst.',
    },
    {
        q: 'Did you hear about the cheese factory that exploded in France?',
        a: 'There was nothing left but de Brie.',
    },
    {
        q: 'Our wedding was so beautiful ',
        a: 'Our wedding was so beautiful ',
    },
    {
        q: 'Is this pool safe for diving?',
        a: 'It deep ends.',
    },
    {
        q: 'Dad, can you put my shoes on?',
        a: 'I dont think theyll fit me.',
    },
];

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

const getRandomJokeResponse = (request, response, params) => {
    response.writeHead(200, {
        'Content-Type': 'application/json',
    });
    response.write(getRandomJokeJSON(params.limit));
    response.end();
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;