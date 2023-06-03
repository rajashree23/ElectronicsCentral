import LoaderSvg from "../../assets/LoaderSvg.svg";

import "./loader.mobile.layout.css"

export const Loader = () => {
  return (
    <div className="loader-container">
      <img src={LoaderSvg} alt="loader" />
    </div>
  );
};
