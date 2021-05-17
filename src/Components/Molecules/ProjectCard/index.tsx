import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import { IcEye } from "../../../Assets";

const SkillToolCard = (): JSX.Element => {
  return (
    <Zoom duration={500}>
      <div className="lg:w-1/3 md:w-1/2 w-full p-4">
        <Link to="/projects/abuza-app" className="w-full">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
              src="https://dummyimage.com/600x360"
            />
            <div className="flex flex-col justify-center items-center px-8 py-10 relative w-full h-60 border-4 border-tertiary bg-tertiary opacity-0 hover:opacity-50 transition-all duration-300 rounded-lg">
              <img src={IcEye} className="w-20 h-20" />
            </div>
          </div>
        </Link>
      </div>
    </Zoom>
  );
};

export default SkillToolCard;
