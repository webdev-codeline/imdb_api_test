import { Link } from "react-router-dom";

export const MoviePageHeader = ({ active }) => {
  return (
    <>
      <h2 className="random-page-title">Random Movie Picker</h2>
      <div className="tab-options-container">
        <Link to="/random" className="tab-link">
          <h3
            className={`tab-option ${
              active === "random" && "tab-option-active"
            }`}
          >
            Random
          </h3>
        </Link>
        <Link to="/most-popular" className="tab-link">
          <h3
            className={`tab-option ${
              active === "popular" && "tab-option-active"
            }`}
          >
            Most Popular
          </h3>
        </Link>
      </div>
    </>
  );
};
