import { Octokit } from "octokit";

const github_api_key = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
  auth: github_api_key,
});
const user = "jyotishankar04";

export const getRepos = async () => {
  const response = await octokit.request(`GET /users/${user}/repos`, {
    username: user,
  });
  return response.data;
};

export const getUserData = async () => {
  const response = await octokit.request(`GET /users/${user}`, {
    username: user,
  });
  return response.data;
};

export const getFollowers = async () => {
  const response = await octokit.request(`GET /users/${user}/followers`, {
    username: user,
  });
  return response.data;
};

export default octokit;
