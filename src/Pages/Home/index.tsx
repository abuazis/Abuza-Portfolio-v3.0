import React, { useContext, useState } from "react";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../Contexts";
import {
  ContactResource,
  IntroductionResource,
  ProjectsResource,
  SkillsResource,
} from "../../Resources";
import {
  IlHero,
  IcWhatsapp,
  IcCall,
  IcEmail,
  IcLinked,
  IcWhatsappWhite,
  IcCallWhite,
  IcEmailWhite,
  IcLinkedWhite,
} from "../../Assets";
import {
  Button,
  ContactCard,
  ProjectCard,
  SkillToolCard,
} from "../../Components";

const Home = (): JSX.Element => {
  const iconDark: string[] = [IcWhatsapp, IcCall, IcEmail, IcLinked];
  const iconLight: string[] = [
    IcWhatsappWhite,
    IcCallWhite,
    IcEmailWhite,
    IcLinkedWhite,
  ];

  const [more, setMore] = useState<boolean | string>(false);

  const { theme }: any = useContext(ThemeContext);

  const handleMore = () => {
    setMore(true);
  };

  return (
    <React.Fragment>
      {/* Introduction */}
      <section className="text-gray-600 body-font pt-14">
        <div className="container mx-auto flex px-8 sm:px-20 py-28 lg:flex-row flex-col items-center">
          <Fade>
            <div className="lg:flex-grow lg:w-1/2 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-gray-900 dark:text-white transition-all duration-500">
                {IntroductionResource.hiText}
              </h1>
              <h1 className="title-font sm:text-4xl text-3xl mb-5 font-semibold text-gray-900 dark:text-white transition-all duration-500">
                {IntroductionResource.introName}
              </h1>
              <p className="mb-8 leading-8 dark:text-fontDark transition-all duration-500">
                {IntroductionResource.whoMe}
              </p>
              <div className="flex justify-center space-x-6">
                {IntroductionResource.callToAction.map((value) => (
                  <Button
                    title={value.title}
                    link={value.route}
                    isBordered={value.isBordered}
                  />
                ))}
              </div>
            </div>
          </Fade>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Fade>
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={IlHero}
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-8 sm:px-20 py-6 pb-28 mx-auto">
          <Fade>
            <div className="flex flex-col text-center w-full mb-16">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-white transition-all duration-500">
                Selected Projects
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-fontDark transition-all duration-500">
                The best project I have ever worked on is below here
              </p>
            </div>
          </Fade>
          <div className="flex flex-wrap flex-row justify-center -m-4">
            {ProjectsResource.slice(0, 6).map((_) => (
              <ProjectCard />
            ))}
            {more && ProjectsResource.slice(6, 9).map((_) => <ProjectCard />)}
          </div>
          <div className="flex flex-row justify-center mt-16">
            <Fade bottom>
              {more ? (
                <Button title="Show More" link="/projects" isBordered={true} />
              ) : (
                <a onClick={handleMore}>
                  <Button title="Show More" isBordered={true} />
                </a>
              )}
            </Fade>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-8 md:px-20 py-6 pb-16 mx-auto">
          <Fade>
            <div className="flex flex-col text-center w-full mb-16">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-white transition-all duration-500">
                Skills & Tools
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-fontDark transition-all duration-500">
                The tech stack is growing so fast, we have to be prepared for it
              </p>
            </div>
          </Fade>
          <div className="flex flex-wrap flex-row justify-center">
            {SkillsResource.map((value) => (
              <SkillToolCard name={value.name} className={value.className} />
            ))}
            <div className="flex flex-col justify-center items-center mb-6 md:mb-12 mx-4 md:mx-9">
              <img
                src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png"
                className="w-9 h-9 md:w-14 md:h-14"
              />
              <p className="mx-auto leading-relaxed text-sm text-center md:text-md mt-4 dark:text-fontDark transition-all duration-500">
                Postman
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-8 md:px-20 py-6 pb-10 mx-auto">
          <Fade>
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-white transition-all duration-500">
                Contact Me
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-fontDark transition-all duration-500">
                Contact me if you are interested in executing your idea
              </p>
            </div>
          </Fade>
          <div className="flex flex-wrap flex-row justify-start sm:justify-center">
            {ContactResource.map((value, index) => (
              <Fade duration={1000}>
                <ContactCard
                  name={value.name}
                  contact={value.contact}
                  icon={theme === "dark" ? iconLight[index] : iconDark[index]}
                  link={value.link}
                />
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
