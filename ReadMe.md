
# GitHub Trending Repo Clone

In this site you can see GitHub oauth login and after login it directly redirect to repositories page. In repositories page , You can see all repositories in pagination way. In a single page you can see only 10 repositories. 

When you click on one repo name it directly redirect to that repo information like. Repo watchers, fork , stars and braches.



## API Reference

#### Get all items

```http
  GET /api/repositories
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | https://api.github.com/repositories

#### Get item

```http
  GET /api/repos/repo-name
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | https://api.github.com/repos/${repo-name} |




## technology add
* React.js
* Tailwind CSS for UI Styling
* React-redux for state management
* React-router for router
* Axios for fetching the data
## Tech Stack

**Client:** React, Redux, TailwindCSS, React-router

**Server:** Node, Express


## Run Locally

Clone the project

```bash
  git clone https://github.com/Abinash7077/NewGitSIte
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

