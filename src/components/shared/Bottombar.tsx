import { bottombarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";
export const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = link.route === pathname;
        return (
          <Link
            className={` flex-center flex-col gap-1 p-2 transition  ${
              isActive && "bg-primary-500 rounded-[10px]"
            }`}
            to={link.route}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              width={16}
              height={16}
              className={`group-hover:invert-white ${
                isActive && "invert-white"
              }`}
            />
            <p className="tiny-medium text-light-2">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};
