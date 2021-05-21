import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("main");

  return (
    <section id="projects" className="text-gray-600 pt-14 body-font">
      <div className="container px-8 sm:px-20 py-28 pb-14 mx-auto">
        <Fade>
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-white transition-all duration-500">
              {t("portfolio.title")}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-fontDark transition-all duration-500">
              {t("portfolio.subtitle")}
            </p>
          </div>
        </Fade>
        <div className="container pb-14">
          <Tabs
            datas={[
              { name: t("apps.all"), light: IcAll, dark: IcAllWhite },
              { name: t("apps.mobile"), light: IcMobile, dark: IcMobileWhite },
              { name: t("apps.web"), light: IcWeb, dark: IcWebWhite },
              {
                name: t("apps.desktop"),
                light: IcDesktop,
                dark: IcDesktopWhite,
              },
              {
                name: t("apps.ml"),
                light: IcMachine,
                dark: IcMachineWhite,
              },
              {
                name: t("apps.library"),
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
