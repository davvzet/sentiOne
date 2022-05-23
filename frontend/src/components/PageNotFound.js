import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>404 PAGE NOT FOUND !!!</h1>
      <p>
        <Link to="/" className="link">
          Back to main page
        </Link>
      </p>
    </div>
  );
};

export { PageNotFound };
