import { Link } from "react-router-dom";

type AppProps = {
  title: string;
  link?: string;
  isBordered?: boolean;
  isSection?: boolean;
};

const Button = ({
  title,
  link = "",
  isBordered = false,
  isSection = false,
}: AppProps): JSX.Element => {
  if (isBordered) {
    return !isSection ? (
      <Link to={link}>
        <button className="h-full text-abuza border-2 border-abuza dark:text-white dark:border-white py-2 px-8 focus:outline-none hover:bg-primary dark:hover:text-abuza rounded text-md transition-all duration-500">
          {title}
        </button>
      </Link>
    ) : (
      <a href={link}>
        <button className="h-full text-abuza border-2 border-abuza dark:text-white dark:border-white py-2 px-8 focus:outline-none hover:bg-primary dark:hover:text-abuza rounded text-md transition-all duration-500">
          {title}
        </button>
      </a>
    );
  }

  return !isSection ? (
    <Link to={link}>
      <button className="h-full text-white bg-abuza dark:bg-white dark:text-abuza border-0 py-2 px-8 focus:outline-none hover:bg-opacity-70 rounded text-md transition-all duration-500">
        {title}
      </button>
    </Link>
  ) : (
    <a href={link}>
      <button className="h-full text-white bg-abuza dark:bg-white dark:text-abuza border-0 py-2 px-8 focus:outline-none hover:bg-opacity-70 rounded text-md transition-all duration-500">
        {title}
      </button>
    </a>
  );
};

export default Button;
