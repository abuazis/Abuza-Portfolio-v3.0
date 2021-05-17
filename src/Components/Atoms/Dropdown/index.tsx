import { useState } from "react";
import Fade from "react-reveal/Fade";

type AppProps = {
  active: string;
  datas: string[];
};

const Dropdown = ({ active = "EN", datas }: AppProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full py-6 text-sm font-medium text-secondary dark:text-white hover:text-opacity-60 focus:outline-none transition-all duration-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleOpen}
        >
          {active}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {open && (
        <Fade duration={500}>
          <div
            className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white dark:bg-primaryDark transition-all duration-500"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {datas.map((value) => (
                <a
                  href="/"
                  className="text-gray-700 block px-4 py-2 text-sm dark:text-fontDark hover:bg-primaryDark hover:opacity-40 transition-all duration-500"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  {value}
                </a>
              ))}
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Dropdown;
