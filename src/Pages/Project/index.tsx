import Fade from "react-reveal/Fade";
import { ProjectCard, Tabs } from "../../Components";
import { ProjectsResource } from "../../Resources";
import {
  IcAll,
  IcAllWhite,
  IcDesktop,
  IcDesktopWhite,
  IcLibrary,
  IcLibraryWhite,
  IcMachine,
  IcMachineWhite,
  IcMobile,
  IcMobileWhite,
  IcWeb,
  IcWebWhite,
} from "../../Assets";

const Detail = (): JSX.Element => {
  return (
    <section id="projects" className="text-gray-600 pt-14 body-font">
      <div className="container px-8 sm:px-20 py-28 pb-14 mx-auto">
        <Fade>
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-white transition-all duration-500">
              Portfolio Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-fontDark transition-all duration-500">
              All portfolio project I have ever worked on is below here
            </p>
          </div>
        </Fade>
        <div className="container pb-14">
          <Tabs
            datas={[
              { name: "All Projects", light: IcAll, dark: IcAllWhite },
              { name: "Mobile Apps", light: IcMobile, dark: IcMobileWhite },
              { name: "Web Apps", light: IcWeb, dark: IcWebWhite },
              { name: "Desktop Apps", light: IcDesktop, dark: IcDesktopWhite },
              {
                name: "Machine Learning",
                light: IcMachine,
                dark: IcMachineWhite,
              },
              {
                name: "Library / Tool",
                light: IcLibrary,
                dark: IcLibraryWhite,
              },
            ]}
          />
        </div>
        <div className="flex flex-wrap flex-row justify-center -m-4">
          {ProjectsResource.map((_) => (
            <ProjectCard />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detail;
