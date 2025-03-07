import Link from "next/link";
import { IoMdArrowUp } from "react-icons/io";

const NotFound = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-3">
      <h1 className="text-2xl font-bold">404 Page Not Found</h1>
      <p>This page does not exist</p>
      <div>
        <Link
          href={"/"}
          className="btn group hover:text-accent hover:shadow-md hover:shadow-accent/40 hover:bg-base-100 w-fit btn-ghost"
        >
          Go Home
          <span className="text-2xl">
            <IoMdArrowUp className="rotate-45 duration-300 transition-transform  group-hover:translate-x-2 group-hover:-translate-y-2" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
