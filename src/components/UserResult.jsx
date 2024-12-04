import React from "react";
import profile from "../assets/Oval.svg";
import url from "../assets/url.svg";
import twitter from "../assets/twitter.svg";
import company from "../assets/office-building.svg";
import location from "../assets/location.svg";
import urlLight from "../assets/url-light.svg";
import twitterLight from "../assets/twitter-light.svg";
import companyLight from "../assets/office-building-light.svg";
import locationLight from "../assets/pin-light.svg";
import { useTheme } from "../Context/ThemContext";
import { useGithub } from "../Context/GithubContext";
import { split } from "postcss/lib/list";
const UserResult = () => {
  const { theme } = useTheme();
  const { user, loading, error } = useGithub();
  const {
    avatar_url,
    login,
    name,
    location: locationP,
    bio,
    public_repos,
    followers,
    following,
    created_at,
    company: organization,
    html_url,
    twitter_username,
  } = user;
  const date = `${new Date(created_at).toDateString()}`.split(" ");

  console.log(organization);
  if (loading) return <div className="spinner show"></div>;
  if (error) {
    return;
  }
  return (
    <div className="dark:bg-primary-700  bg-white shadow-xl px-5 py-6 rounded-2xl mt-3 dark:text-white my-8">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <div>
            <img className="w-20 rounded-full" src={avatar_url} alt="" />
          </div>
          <div>
            <h1 className="dark:text-white h3 font-semibold">{name}</h1>
            <h4 className="h4 text-blue-900">@{login}</h4>
            <p className="h4 dark:text-white text-primary-200">
              Joined {`${date[2]} ${date[1]} ${date[3]}`}
            </p>
          </div>
        </div>

        <p className="h4 leading-[25px]">{bio}</p>

        <div className="flex justify-between items-center dark:bg-primary bg-[#F6F8FF] dark:text-white py-4 px-8 rounded-xl">
          <div className="flex flex-col gap-2 items-center">
            <h4 className="h4">Repos</h4>
            <span className="h3 font-semibold">{public_repos}</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h4 className="h4">Followers</h4>
            <span className="h3 font-semibold">{followers}</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h4 className="h4">Following</h4>
            <span className="h3 font-semibold">{following}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <div className="flex gap-3">
            {theme ? (
              <img src={locationLight} alt="" />
            ) : (
              <img src={location} alt="" />
            )}
            <span>{locationP}</span>
          </div>
          <div className="flex gap-3">
            {theme ? <img src={urlLight} alt="" /> : <img src={url} alt="" />}
            <a className="hover:underline h4" href={html_url}>
              {html_url}
            </a>
          </div>
          <div className="flex gap-3">
            {theme ? (
              <img src={twitterLight} alt="" />
            ) : (
              <img src={twitter} alt="" />
            )}
            <span className={`${!twitter_username && "text-primary-200"}`}>
              {twitter_username || "Not Available"}
            </span>
          </div>
          <div className="flex gap-3">
            {theme ? (
              <img src={companyLight} alt="" />
            ) : (
              <img src={company} alt="" />
            )}
            <span className={`${!organization && "text-primary-200"}`}>
              {organization || "Not Available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserResult;
