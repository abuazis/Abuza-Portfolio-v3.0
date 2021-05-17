import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "./Contexts";
import { Circle2 } from "react-preloaders2";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider initialTheme="light">
        <div className="w-full h-full bg-primaryLight dark:bg-secondaryDark transition-all duration-500">
          <Routes />
        </div>
      </ThemeProvider>
      <Circle2 background="#f6f8fd" color="#0b1622" time={2000} />
    </React.Fragment>
  );
};

export default App;
