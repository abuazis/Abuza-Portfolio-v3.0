type AppProps = {
  name: string;
  contact: string;
  icon: string;
  link: string;
};

const ContactCard = ({ name, contact, icon, link }: AppProps): JSX.Element => {
  return (
    <a
      href={link}
      target="_blank"
      className="inline-flex items-center mx-2 md:mx-6 my-5 hover:opacity-75 transition-all"
    >
      <img
        alt="blog"
        src={icon}
        className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 object-cover object-center"
      />
      <span className="flex-grow flex flex-col pl-4">
        <span className="title-font font-medium dark:text-white transition-all duration-500">{contact}</span>
        <span className="text-gray-500 text-xs tracking-widest mt-0.5 dark:text-white transition-all duration-500">
          {name}
        </span>
      </span>
    </a>
  );
};

export default ContactCard;
