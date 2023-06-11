const express = require("express");
const axios = require("axios");
var cors = require("cors");


const CLIENT_ID = "9f7df7c78d203a4237d3";
const CLIENT_SECRET = "e07b46b068b7d53d9d1ec4bbde9be5751845b1db";

const GITHUB_URL = "https://github.com/login/oauth/access_token";

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.get("/oauth/redirect", (req, res) => {
  axios({
    method: "POST",
    url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      const token = response.data.access_token;
      res.redirect(
        `http://localhost:3000?access_token=${response.data.access_token}`
      );
    })
    .catch((err) => {
      console.log("********************ERROR********************");
      console.log(`Error occured ${err}`);
    });
});

app.get("/user/data", (req, res) => {
  const token = req.headers["authorization"];
  axios({
    method: "GET",
    url: ` https://api.github.com/user`,
    headers: {
      Authorization: token,
    },
  })
    .then((resp) => {
      res.statusCode = 200;
      res.send(resp.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});