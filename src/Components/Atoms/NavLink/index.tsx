import { Link } from "react-router-dom";

type AppProps = {
  title: string;
  link: string;
  active: boolean;
  isMobile?: boolean;
};

const NavLink = ({
  title,
  link,
  active = false,
  isMobile = false,
}: AppProps): JSX.Element => {
  return isMobile ? (
    <a
      href={link}
      className="text-secondary dark:text-white w-full text-center hover:text-opacity-60 block px-3 py-3 rounded-md text-base font-medium transition-all duration-500"
      aria-current="page"
    >
      {title}
    </a>
  ) : (
    <Link to={link} className="flex flex-col items-center justify-center">
      <a
        href={link}
        className="text-secondary dark:text-white hover:text-opacity-60 font-medium transition-all duration-500"
      >
        {title}
      </a>
      {active && <div className="w-2/5 h-1 mt-1 rounded-full bg-tertiary" />}
    </Link>
  );
};

export default NavLink;
