const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const cors=require("cors")


const app = express();
app.use(cors())

const GITHUB_CLIENT_ID = '9f7df7c78d203a4237d3';
const GITHUB_CLIENT_SECRET = 'e07b46b068b7d53d9d1ec4bbde9be5751845b1db';


app.get('/auth/github', (req, res) => {
  const params = querystring.stringify({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: 'http://localhost:3000/auth/github/callback',
    scope: 'user',
  });

  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});

app.get('/auth/github/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const accessToken = response.data.access_token;
    // You can store the access token in a session or pass it back to the client-side

    // Retrieve user information using the access token
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const userData = userResponse.data;
    // Handle user data and perform necessary actions (e.g., save user to the database)

    res.redirect('/Main');
  } catch (error) {
    console.error('Error during authentication:', error);
    res.redirect('/Login');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});