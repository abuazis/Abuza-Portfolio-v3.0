import Fade from "react-reveal/Fade";
import { useState } from "react";
import { useLocation } from "react-router";
import { NavbarResource } from "../../../Resources";
import { Brand, SwitchMode, NavLink, Dropdown, Toggle } from "../../Atoms";

const Navbar = (): JSX.Element => {
  const { pathname } = useLocation();

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Fade top>
      <nav className="bg-primary dark:bg-primaryDark py-3 px-4 lg:px-18 xl:px-20 w-full fixed z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <Toggle handleShow={handleShow} />
            </div>
            <div className="flex-1 flex items-center justify-center lg:items-center lg:justify-between">
              <div className="flex-shrink-0 flex items-center">
                <Brand title={NavbarResource.brandName} />
              </div>
              <div className="hidden lg:block lg:ml-6">
                <div className="flex space-x-10 lg:space-x-12">
                  {NavbarResource.navigations.map((value) => (
                    <NavLink
                      title={value.name}
                      active={false}
                      isMobile={false}
                      link={
                        pathname === "/"
                          ? value.route
                          : value.route === "/projects"
                          ? value.route
                          : "/"
                      }
                      isSection={
                        pathname === "/"
                          ? value.isSection
                          : value.route === "/projects"
                          ? value.isSection
                          : false
                      }
                    />
                  ))}
                  <Dropdown active="EN" datas={NavbarResource.languages} />
                  <div className="py-4">
                    <SwitchMode />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {show && (
          <Fade>
            <div className="lg:hidden" id="mobile-menu">
              <div className="px-2 pt-5 pb-3 space-y-1 flex flex-col items-center">
                {NavbarResource.navigations.map((value) => (
                  <NavLink
                    title={value.name}
                    active={false}
                    isMobile={true}
                    onClick={handleShow}
                    link={
                      pathname === "/"
                        ? value.route
                        : value.route === "/projects"
                        ? value.route
                        : "/"
                    }
                    isSection={
                      pathname === "/"
                        ? value.isSection
                        : value.route === "/projects"
                        ? value.isSection
                        : false
                    }
                  />
                ))}
              </div>
            </div>
          </Fade>
        )}
      </nav>
    </Fade>
  );
};

export default Navbar;
