import FollowMeSocials from "@/components/app/about/follow-me-socials";
import { IoMdArrowUp } from "react-icons/io";

const page = () => {
  return (
    <div className="h-full w-full md:px-0 px-4 ">
      <div className="py-3 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold ">Contact Me</h1>
        <p className="text-sm">
          If you have any questions or inquiries, please don&apos;t hesitate to
          get in touch with me.
        </p>
      </div>
      <div className=" flex justify-center md:p-10 p-5 items-center gap-2 bg-base-200 rounded-lg">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-4">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="">
              Name
            </label>
            <input
              type="text"
              className="outline-none w-full  py-2 duration-200 border-b-2 border-base-300 hover:border-accent focus:border-accent"
              placeholder="What's your name?"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="">
              Email
            </label>
            <input
              type="email"
              className="outline-none w-full  py-2 duration-200 border-b-2 border-base-300 hover:border-accent focus:border-accent"
              placeholder="What's your email?"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="phone" className="">
              Phone
            </label>
            <div className="flex items-center border-b-2 border-base-300 hover:border-accent focus-within:border-accent duration-200">
              <span className="text-accent mr-2 text-lg">+91</span>
              <input
                id="phone"
                type="number"
                className="outline-none w-full py-2 bg-transparent"
                placeholder="What's your phone number?"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="">
              Subject
            </label>
            <input
              type="text"
              className="outline-none w-full  py-2 duration-200 border-b-2 border-base-300 hover:border-accent focus:border-accent"
              placeholder="What's your subject?"
            />
          </div>
          <div className="w-full md:col-span-2 flex flex-col gap-2">
            <label htmlFor="" className="">
              Message
            </label>
            <textarea
              className="outline-none w-full max-h-40 h-40  py-2 duration-200 border-b-2 border-base-300 hover:border-accent focus:border-accent"
              placeholder="What's your message?"
            />
          </div>

          <div className="w-full flex justify-start">
            <button className="flex w-fit btn  items-center gap-2 hover:text-accent cursor-pointer group">
              Send Message
              <span className="text-2xl">
                <IoMdArrowUp className="rotate-45 duration-300 transition-transform  group-hover:translate-x-2 group-hover:-translate-y-2" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <hr className="my-5  text-base-content/30" />

      <FollowMeSocials />
    </div>
  );
};

export default page;
