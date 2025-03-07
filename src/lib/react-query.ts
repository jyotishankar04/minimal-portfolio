import { useQuery } from "@tanstack/react-query";
import { getFollowers, getRepos, getUserData } from "./octokit-api";

export const useGetAllRepos = () => {
  return useQuery({
    queryKey: ["repos"],
    queryFn: () => getRepos(),
    staleTime: 1000 * 60 * 60,
    enabled: false,
  });
};

export const useGetUserGithubData = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUserData(),
    staleTime: 1000 * 60 * 60,
  });
};

export const useGetAllFollowers = () => {
  return useQuery({
    queryKey: ["followers"],
    queryFn: () => getFollowers(),
    staleTime: 1000 * 60 * 60,
  });
};
