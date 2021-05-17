import { useContext } from "react";
import { ThemeContext } from "../../../Contexts";

const SwitchMode = (): JSX.Element => {
  const { theme, setTheme }: any = useContext(ThemeContext);

  return (
    <div className="toggle toggle--daynight">
      <input
        type="checkbox"
        id="toggle--daynight"
        className="toggle--checkbox"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <label className="toggle--btn" htmlFor="toggle--daynight"></label>
    </div>
  );
};

export default SwitchMode;
