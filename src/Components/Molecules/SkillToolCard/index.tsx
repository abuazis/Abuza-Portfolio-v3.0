import Fade from "react-reveal/Fade";

type AppProps = {
  name: string;
  className: string;
};

const SkillToolCard = ({ name, className }: AppProps): JSX.Element => {
  return (
    <Fade>
      <div className="flex flex-col justify-center items-center mb-6 md:mb-12 mx-4 md:mx-9">
        <i className={`${className} colored text-4xl md:text-6xl`}></i>
        <p className="mx-auto leading-relaxed text-sm text-center md:text-md mt-4 dark:text-fontDark transition-all duration-500">
          {name}
        </p>
      </div>
    </Fade>
  );
};

export default SkillToolCard;
