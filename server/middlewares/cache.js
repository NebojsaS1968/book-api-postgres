const redis = require("redis");
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const cache = (req, res, next) => {
  const redis_key = "books";

  client.get(redis_key, (err, data) => {
    if (err) {
      console.log(err);
    }

    const json = JSON.parse(data);

    if (json !== null) {
      //console.log("Fetching from redis cache ...");
      res.status(200).json({
        status: 200,
        results: json.length,
        data: {
          books: json,
        },
      });
    } else {
      next();
    }
  });
};

module.exports = {
  cache,
};
