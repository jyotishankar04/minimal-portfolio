/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LoadingDiv from "@/components/loading-div";
import { useGetAllRepos, useGetUserGithubData } from "@/lib/react-query";
import Image from "next/image";
import { IoMdArrowUp } from "react-icons/io";

const Page = () => {
  const {
    data: user,
    isLoading: isUserLoading,
    isSuccess: isUserSuccess,
  } = useGetUserGithubData();

  const {
    data: repos,
    isLoading: isReposLoading,
    isSuccess: isReposSuccess,
    refetch: refetchRepos,
  } = useGetAllRepos();

  if (isUserLoading) {
    return <LoadingDiv />;
  }
  if (isUserSuccess) {
    refetchRepos();
  }

  return (
    <div className="h-full w-full py-4  px-4">
      <h1 className="text-2xl font-bold">GitHub Stats</h1>
      <p className="text-sm">View my GitHub stats and repositories</p>
      {isUserSuccess && (
        <div className="w-full mt-4 flex flex-col gap-3 pb-32">
          <div className="flex flex-col gap-4 border p-4 rounded">
            <div className="flex md:flex-row flex-col gap-5">
              <div className="w-56 h-56 ">
                <Image
                  src={user.avatar_url}
                  alt={user.name}
                  width={500}
                  height={500}
                  className="rounded-full w-full h-full object-cover duration-300 cursor-pointer transition-transform ease-in-out transform  hover:brightness-110 hover:shadow-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h1 className="text-xl font-bold">{user.name}</h1>
                <p className="text-sm w-[90%]">{user.bio}</p>
                <p className="text-sm text-accent">{user.location}</p>
                <div className="text-sm ">
                  Followers:
                  <span className="text-accent btn">{user.followers}</span>
                </div>
                <div className="text-sm ">
                  Following:
                  <span className="text-accent btn">{user.following}</span>
                </div>
                <p className="text-sm ">
                  Twitter:
                  {
                    <a
                      target="_blank"
                      href={"https://twitter.com/" + user.twitter_username}
                      className="text-accent hover:underline"
                    >
                      {user.twitter_username}
                    </a>
                  }
                </p>
                <p className="text-sm">
                  Website:
                  {
                    <a
                      target="_blank"
                      href={"https://" + user.blog}
                      className="text-accent hover:underline"
                    >
                      www.{user.blog}
                    </a>
                  }
                </p>
                <a href={user.html_url} target="_blank">
                  <button className="btn btn-ghost hover:text-accent group">
                    View Profile
                    <IoMdArrowUp className="rotate-45 duration-300 transition-transform  group-hover:translate-x-2 group-hover:-translate-y-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-4 border  p-4 rounded">
            {!isReposLoading ? (
              isReposSuccess && (
                <div className="flex flex-col  gap-4">
                  <h1 className="text-2xl font-bold">Repositories</h1>
                  <div className="flex flex-col gap-4 md:gap-1">
                    {repos.map((repo: any) => (
                      <div
                        key={repo.id}
                        className="flex md:flex-row flex-col gap-4 md:items-center border-b md:border-b-0 pb-2 md:pb-2-0 justify-between hover:border md:p-4 rounded w-full 
                        "
                      >
                        <div className="flex gap-4 items-center">
                          <Image
                            src={repo.owner.avatar_url}
                            alt={repo.owner.login}
                            width={500}
                            height={500}
                            className="rounded-full w-12 h-12 object-cover duration-300 cursor-pointer transition-transform ease-in-out transform  hover:brightness-110 hover:shadow-2xl"
                          />
                          <div className="flex flex-col">
                            <h1 className="text-lg font-bold">{repo.name}</h1>
                            <p className="text-sm">
                              {repo.owner.login}/{repo.name}
                            </p>
                          </div>
                        </div>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          className="btn btn-ghost  w-fit hover:text-accent group"
                        >
                          View Repository
                          <IoMdArrowUp className="rotate-45 duration-300 transition-transform  group-hover:translate-x-2 group-hover:-translate-y-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ) : (
              <LoadingDiv />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
