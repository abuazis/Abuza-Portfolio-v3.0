import { Link } from "react-router-dom";

type AppProps = {
  width?: number;
  height?: number;
};

const Gap = ({ width, height }: AppProps): JSX.Element => {
  return <div style={{ width, height }} />;
};

export default Gap;
