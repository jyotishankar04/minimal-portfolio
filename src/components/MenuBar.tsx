import { _menuIcons } from "@/app/constants/db";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2  bg-base-200 border border-base-300/80 p-2 rounded-full">
      <div className="flex flex-row items-center space-x-4">
        {_menuIcons.map((icon) => (
          <Link
            href={icon.link}
            key={icon.title}
            className="text-4xl bg-base-300 p-2 rounded-full text-base-content/60
            hover:text-base-content hover:scale-110 duration-300 hover:bg-base-300 tooltip 
            "
            data-tip={icon.title}
          >
            <icon.icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
