require("dotenv").config();
const express = require("express");

const app = express();

// const port = 3000;

const githubData = {
  login: "meetprgiri",
  id: 157962834,
  node_id: "U_kgDOCWpSUg",
  avatar_url: "https://avatars.githubusercontent.com/u/157962834?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/meetprgiri",
  html_url: "https://github.com/meetprgiri",
  followers_url: "https://api.github.com/users/meetprgiri/followers",
  following_url:
    "https://api.github.com/users/meetprgiri/following{/other_user}",
  gists_url: "https://api.github.com/users/meetprgiri/gists{/gist_id}",
  starred_url: "https://api.github.com/users/meetprgiri/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/meetprgiri/subscriptions",
  organizations_url: "https://api.github.com/users/meetprgiri/orgs",
  repos_url: "https://api.github.com/users/meetprgiri/repos",
  events_url: "https://api.github.com/users/meetprgiri/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/meetprgiri/received_events",
  type: "User",
  site_admin: false,
  name: "meetprgiri",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2024-01-28T12:10:28Z",
  updated_at: "2024-05-30T05:40:42Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/insta", (req, res) => {
  res.send("This is insta of pkg");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
