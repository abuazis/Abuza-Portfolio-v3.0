type AppProps = {
  handleShow: () => void;
};

const Toggle = ({ handleShow }: AppProps): JSX.Element => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 text-secondary dark:text-white hover:text-opacity-60 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white transition-all duration-500"
      aria-controls="mobile-menu"
      aria-expanded="false"
      onClick={handleShow}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        className="hidden h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default Toggle;
