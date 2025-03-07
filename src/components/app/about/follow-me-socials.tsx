import { userDB } from "@/app/constants/db";
import Link from "next/link";

const FollowMeSocials = () => {
  return (
    <>
      <div className="w-full pb-30 mt-3 ">
        <h1 className="text-2xl font-bold ">Follow me on social media</h1>
        <div>
          <ul className="flex gap-5 mt-5 w-full flex-wrap justify-center">
            {userDB.socialLinks.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className="flex min-w-fit flex-row flex-1 items-center gap-2 text-lg cursor-pointer group btn btn-outline flex-wrap hover:text-accent"
              >
                {<social.icon />}
                <p>{social.name}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FollowMeSocials;
