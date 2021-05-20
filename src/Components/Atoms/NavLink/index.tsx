import React from "react";
import { Link } from "react-router-dom";

type AppProps = {
  title: string;
  link: string;
  active: boolean;
  isMobile?: boolean;
  isSection?: boolean;
  onClick?: any;
};

const NavLink = ({
  title,
  link,
  active = false,
  isMobile = false,
  isSection,
  onClick,
}: AppProps): JSX.Element => {
  return isMobile ? (
    isSection ? (
      <a
        onClick={onClick}
        href={link}
        className="text-secondary dark:text-white w-full text-center hover:text-opacity-60 block px-3 py-3 rounded-md text-base font-medium transition-all duration-500"
        aria-current="page"
      >
        {title}
      </a>
    ) : (
      <Link to={link} onClick={onClick}>
        <a
          href={link}
          className="text-secondary dark:text-white w-full text-center hover:text-opacity-60 block px-3 py-3 rounded-md text-base font-medium transition-all duration-500"
          aria-current="page"
        >
          {title}
        </a>
      </Link>
    )
  ) : (
    <React.Fragment>
      {isSection ? (
        <a
          onClick={onClick}
          href={link}
          className="flex flex-col items-center justify-center text-secondary dark:text-white hover:text-opacity-60 font-medium transition-all duration-500"
        >
          {title}
        </a>
      ) : (
        <Link to={link} onClick={onClick} className="flex flex-col items-center justify-center">
          <a
            href={link}
            className="text-secondary dark:text-white hover:text-opacity-60 font-medium transition-all duration-500"
          >
            {title}
          </a>
          {active && (
            <div className="w-2/5 h-1 mt-1 rounded-full bg-tertiary" />
          )}
        </Link>
      )}
    </React.Fragment>
  );
};

export default NavLink;
