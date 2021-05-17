import { Link } from "react-router-dom";
import { AbuzaLogo } from "../../../Assets";

type AppProps = {
  title: string;
};

const Brand = ({ title }: AppProps): JSX.Element => {
  return (
    <Link to="/">
      <a
        href="/"
        className="flex title-font font-medium items-center text-gray-900 md:mb-0"
      >
        <img src={AbuzaLogo} className="w-10 h-10 rounded-full" />
        <span className="ml-4 font-semibold text-xl dark:text-white transition-all duration-500">
          {title}
        </span>
      </a>
    </Link>
  );
};

export default Brand;
