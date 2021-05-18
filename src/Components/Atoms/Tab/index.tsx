import { useContext } from "react";
import { ThemeContext } from "../../../Contexts";

type AppProps = {
  title: string;
  isActive: boolean;
  onClick: any;
  lightIcon: string;
  darkIcon: string;
};

const Tab = ({ title, isActive, onClick, lightIcon, darkIcon }: AppProps): JSX.Element => {
  const { theme }: any = useContext(ThemeContext);

  return isActive ? (
    <div onClick={onClick} className="cursor-pointer w-1/5 h-10 opacity-80 hover:opacity-50 bg-white dark:bg-tertiaryDark rounded-md m-1 text-black flex flex-row justify-center items-center transition-all duration-500">
      <p className="text-black font-semibold text-sm dark:text-white transition-all duration-500 hidden lg:block">{title}</p>
      <img src={theme === "light" ? lightIcon : darkIcon} className="w-5 h-5 lg:hidden" />
    </div>
  ) : (
    <div onClick={onClick} className="cursor-pointer w-1/5 h-10 opacity-80 hover:opacity-50 hover:bg-white dark:hover:bg-tertiaryDark bg-transparent rounded-md m-1 text-black flex flex-row justify-center items-center transition-all duration-500">
      <p className="text-black font-semibold text-sm dark:text-white  transition-all duration-500 hidden lg:block">{title}</p>
      <img src={theme === "light" ? lightIcon : darkIcon} className="w-5 h-5 lg:hidden" />
    </div>
  );
};

export default Tab;
