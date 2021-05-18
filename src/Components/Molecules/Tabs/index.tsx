import { useState } from "react";
import { Tab } from "../../Atoms";

type AppProps = {
  datas: any;
};

const Tabs = ({ datas }: AppProps): JSX.Element => {
  const [active, setActive] = useState("All Projects");

  const handleClickTab = (title: string) => {
    setActive(title);
  };

  return (
    <div className="bg-gray-200 dark:bg-primaryDark w-auto h-auto rounded-lg flex flex-row p-1 transition-all duration-500">
      {datas.map((value) => (
        <Tab
          title={value.name}
          isActive={value.name === active ? true : false}
          lightIcon={value.light}
          darkIcon={value.dark}
          onClick={() => handleClickTab(value.name)}
        />
      ))}
    </div>
  );
};

export default Tabs;
