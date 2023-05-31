import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <div
      style={{
        padding: 20
      }}
      className="error"
    >
        <h1>
            Sorry, the page you were<br />
            looking for is not found.
        </h1>
        <div className="return-btn">
        <Link to='/'>Return to home</Link>
        </div>
    </div>
  );
};