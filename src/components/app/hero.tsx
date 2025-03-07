import Image from "next/image";
import Link from "next/link";
import { IoMdArrowUp } from "react-icons/io";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start border-b md:items-start border-base-300 w-full  py-10 gap-8">
      <div className="aspect-square w-52 avatar overflow-hidden s rounded-full">
        <Image
          src="https://res.cloudinary.com/djby1yfko/image/upload/v1740933113/hero_thdemn.jpg"
          alt=""
          width={200}
          height={200}
          className="w-full h-full object-cover grayscale-50  overflow-hidden"
        />
      </div>
      <div className="flex-1 flex flex-col pb-5 justify-between h-full">
        <h1 className="text-4xl font-bold text-center md:text-left">
          Hello, I&apos;m <span className="text-accent">Suvam</span>
          <br />
          <span>A Full Stack Developer</span>
        </h1>
        <p className="mt-4 text-center md:text-left md:mr-20">
          I&apos;m a passionate and skilled full stack developer with a strong
          foundation in web development.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <Link
            href="/contact"
            className="mt-4 text-xl hover:text-accent  flex justify-center items-center gap-2 cursor-pointer group"
          >
            <span className=" ">Contact Me</span>
            <span className="text-2xl">
              <IoMdArrowUp className="rotate-45 duration-300 transition-transform  group-hover:translate-x-2 group-hover:-translate-y-2" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
