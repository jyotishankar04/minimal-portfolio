import { userDB } from "@/app/constants/db";
import FollowMeSocials from "@/components/app/about/follow-me-socials";
import HeroAbout from "@/components/app/hero-about";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowUp } from "react-icons/io";

const page = () => {
  return (
    <div className="h-full w-full px-4 md:px-0">
      <div className="flex  flex-col lg:flex-row py-8 justify-between w-full items-baseline">
        <div className="flex-1 flex gap-3 flex-col mr-6">
          <h1 className=" text-3xl md:text-4xl font-bold ">
            About Me {userDB.openToWork ? "👋" : "👋🏻"}
          </h1>

          <div className="grid md:grid-cols-2 grid-cols-1 w-full">
            <div className="relative flex gap-3 items-center rounded-xl w-fit justify-start h-fit overflow-hidden">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://res.cloudinary.com/djby1yfko/image/upload/v1741018911/IMG_0303_jq2uxj.jpg"
                  alt="Hover Effect Image"
                  width={800}
                  height={800}
                  className="rounded-xl grayscale hover:grayscale-0 object-cover duration-300 cursor-pointer transition-transform ease-in-out transform hover:scale-105 hover:brightness-110 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="my-3">
            <Link
              href={"/stats/github"}
              className="btn group hover:text-accent hover:shadow-md hover:shadow-accent/40 hover:bg-base-100 w-fit btn-ghost"
            >
              Vew My GitHub Stats{" "}
              <span className="text-2xl">
                <IoMdArrowUp className="rotate-45 duration-300 transition-transform  group-hover:translate-x-2 group-hover:-translate-y-2" />
              </span>
            </Link>
          </div>
          <ul className="flex flex-col text-lg  gap-3 pb-5 justify-between ">
            {userDB.about.map((about, index) => {
              return <li key={index}>&nbsp; &nbsp;{about}</li>;
            })}
          </ul>
        </div>
        <div className="flex lg:w-3/12 w-full  flex-col gap-5">
          <Link
            href={"/contact"}
            className="flex w-fit items-center gap-2 hover:text-accent cursor-pointer group"
          >
            Contact Me
            <span className="text-2xl">
              <IoMdArrowUp className="rotate-45 duration-300 transition-transform  group-hover:translate-x-2 group-hover:-translate-y-2" />
            </span>
          </Link>
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-2xl font-bold ">Education</h1>
            <ul className="flex flex-col text-lg w-full gap-5 mt-5 pb-5 ">
              {userDB.education.map((edu, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-1 cursor-pointer group hover:outline-neutral hover:outline-1 hover:outline-offset-1 p-2 hover:shadow-inset rounded-lg hover:shadow-md"
                >
                  <h3 className="font-bold group-hover:text-accent">
                    {edu.degree}
                  </h3>
                  <p
                    className="text-sm text-base-content
                    
                  "
                  >
                    {edu.university}
                  </p>
                  <p className="text-sm text-base-content/50">{edu.location}</p>
                  <div className="flex text-md gap-2 justify-between">
                    <p className="">{edu.startYear}</p>

                    <p className="">{edu.endYear}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <HeroAbout />
      <FollowMeSocials />
    </div>
  );
};

export default page;
