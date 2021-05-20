import Fade from "react-reveal/Fade";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../Contexts";
import {
  IcBack,
  IcBackWhite,
  IcBrowser,
  IcBrowserWhite,
  GooglePlayBadge,
  AppStoreBadge,
  GithubBadge,
} from "../../Assets";

const Detail = (): JSX.Element => {
  const { goBack } = useHistory();

  const { theme }: any = useContext(ThemeContext);

  return (
    <section id="projects" className="pt-14 body-font">
      <div className="container px-8 sm:px-20 pt-28 mx-auto flex flex-col items-center xl:items-start xl:flex-row">
        <div className="lg:z-10 lg:absolute">
          <a
            className="cursor-pointer flex flex-row items-center"
            onClick={() => goBack()}
          >
            <img
              src={theme === "light" ? IcBack : IcBackWhite}
              className="w-8 h-8 mr-2"
            />
            <p className="inline-flex text-base font-medium dark:text-white transition-all duration-500">
              Back to Projects
            </p>
          </a>
        </div>
        <div className="flex flex-col w-full mt-12 xl:mt-0">
          <Fade>
            <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-white transition-all duration-500">
              Savana - Mobile Saving App
            </h1>
            <p className="lg:w-2/3 text-center mx-auto leading-relaxed text-base dark:text-fontDark transition-all duration-500">
              I have contributed as Mobile Developer on this project
            </p>
          </Fade>
          <div className="flex flex-col w-full mt-20 mb-14">
            <div className="h-24 w-full sm:w-1/2 xl:w-1/3 mb-8">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center rounded-lg"
                src="https://dummyimage.com/300x200"
              />
            </div>
            <p className="leading-7 mb-8 dark:text-fontDark transition-all duration-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
              tenetur ab. Repudiandae beatae quibusdam incidunt esse possimus
              quod, ex quisquam deserunt quasi, placeat deleniti est. Quo
              delectus voluptate eius exercitationem. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Consequuntur, amet laudantium
              nobis aut sint omnis reprehenderit in assumenda ratione reiciendis
              dolore, possimus rem aliquam, eius impedit dignissimos a cum
              minus? possimus rem aliquam, eius impedit dignissimos a cum minus?
            </p>
            <a className="cursor-pointer flex flex-row items-center" href="#">
              <img
                src={theme === "light" ? IcBrowser : IcBrowserWhite}
                className="w-8 h-8 mr-2"
              />
              <p className="inline-flex text-base font-medium dark:text-white transition-all duration-500">
                Visit Projects
              </p>
            </a>
          </div>
          <div className="flex flex-col xl:flex-row w-full xl:space-x-10 mb-12 xl:mb-8">
            <div className="h-64 mb-8 w-full xl:w-1/2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center rounded-lg"
                src="https://dummyimage.com/300x300"
              />
            </div>
            <div className="flex flex-col w-full xl:w-1/2">
              <h2 className="text-2xl text-secondary font-bold mb-4 dark:text-white transition-all duration-500">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </h2>
              <p className="leading-7 dark:text-fontDark transition-all duration-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam, tenetur ab. Repudiandae beatae quibusdam incidunt esse
                possimus quod, ex quisquam deserunt quasi, placeat deleniti est.
                Quo delectus voluptate eius exercitationem. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Consequuntur, amet
                laudantium nobis aut sint omnis reprehenderit in assumenda
                ratione reiciendis dolore,
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row w-full xl:space-x-10 mb-12 xl:mb-10">
            <div className="flex flex-col w-full xl:w-1/2">
              <h2 className="text-2xl text-secondary font-bold mb-4 dark:text-white transition-all duration-500">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </h2>
              <p className="leading-7 dark:text-fontDark transition-all duration-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam, tenetur ab. Repudiandae beatae quibusdam incidunt esse
                possimus quod, ex quisquam deserunt quasi, placeat deleniti est.
                Quo delectus voluptate eius exercitationem. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Consequuntur, amet
                laudantium nobis aut sint omnis reprehenderit in assumenda
                ratione reiciendis dolore,
              </p>
            </div>
            <div className="h-64 mb-8 w-full xl:w-1/2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center rounded-lg"
                src="https://dummyimage.com/300x300"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-16">
            <h2 className="text-2xl text-secondary text-center font-bold mb-5 dark:text-white transition-all duration-500">
              Savana Is Available On :
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://play.google.com/store/apps/details?id=co.genpi.genpi"
                target="_blank"
              >
                <img src={GooglePlayBadge} className="h-20" />
              </a>
              <a href="https://apps.apple.com/app/id1445841819" target="_blank">
                <img src={AppStoreBadge} className="h-14" />
              </a>
              {/* <a href="https://github.com/abuazis" target="_blank">
                <img src={GithubBadge} className="w-48 h-14" />
              </a> */}
            </div>
          </div>
          <div className="flex flex-col w-full mb-10">
            <h2 className="text-2xl text-secondary font-bold mb-10 dark:text-white transition-all duration-500">
              Technology & Architecture
            </h2>
            <div className="flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-36">
              <div className="flex flex-col">
                <h3 className="text-xl text-secondary font-bold mb-5 dark:text-white transition-all duration-500">
                  Language :
                </h3>
                <ul className="list-disc ml-5">
                  <li className="mb-2 dark:text-fontDark transition-all duration-500">
                    Dart
                  </li>
                  <li className="mb-2 dark:text-fontDark transition-all duration-500">
                    Javascript
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl text-secondary font-bold mb-5 dark:text-white transition-all duration-500">
                  Framework :
                </h3>
                <ul className="list-disc ml-5">
                  <li className="mb-2 dark:text-fontDark transition-all duration-500">
                    Flutter
                  </li>
                  <li className="mb-2 dark:text-fontDark transition-all duration-500">
                    React JS
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl text-secondary font-bold mb-5 dark:text-white transition-all duration-500">
                  Database :
                </h3>
                <ul className="list-disc ml-5">
                  <li className="mb-2 dark:text-fontDark transition-all duration-500">
                    Firebase
                  </li>
                  <li className="mb-2 dark:text-fontDark transition-all duration-500">
                    MongoDB
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl text-secondary font-bold mb-5 dark:text-white transition-all duration-500">
                  Library :
                </h3>
                <ul className="list-disc ml-5">
                  <li className="mb-2 dark:text-fontDark transition-all duration-500">
                    Geolocation
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-10">
            <h2 className="text-xl text-secondary font-bold mb-7 dark:text-white transition-all duration-500">
              Architecture Pattern
            </h2>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-10 mb-8 lg:mb-0">
              <div className="h-64 mb-8 w-full xl:w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/300x300"
                />
              </div>
              <div className="h-64 mb-8 w-full xl:w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/300x300"
                />
              </div>
            </div>
            <p className="leading-7 dark:text-fontDark transition-all duration-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
              tenetur ab. Repudiandae beatae quibusdam incidunt esse possimus
              quod, ex quisquam deserunt quasi, placeat deleniti est. Quo
              delectus voluptate eius exercitationem. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Consequuntur, amet laudantium
              nobis aut sint omnis reprehenderit in assumenda ratione reiciendis
              dolore,
            </p>
          </div>
          <div className="flex flex-col w-full mb-10">
            <h2 className="text-xl text-secondary font-bold mb-7 dark:text-white transition-all duration-500">
              Database & Resource
            </h2>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-10 mb-8 lg:mb-0">
              <div className="h-64 mb-8 w-full xl:w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/300x300"
                />
              </div>
              <div className="h-64 mb-8 w-full xl:w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                  src="https://dummyimage.com/300x300"
                />
              </div>
            </div>
            <p className="leading-7 dark:text-fontDark transition-all duration-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
              tenetur ab. Repudiandae beatae quibusdam incidunt esse possimus
              quod, ex quisquam deserunt quasi, placeat deleniti est. Quo
              delectus voluptate eius exercitationem. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Consequuntur, amet laudantium
              nobis aut sint omnis reprehenderit in assumenda ratione reiciendis
              dolore,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
