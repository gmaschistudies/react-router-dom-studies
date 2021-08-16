import React, { FunctionComponent as FC, ReactElement as RE } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Blog: FC = (): RE => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const handleReturn = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Blog</h1>
      <div>
        <Link to={`${location.pathname}/first-post`}>
          <h2>First Post</h2>
        </Link>
        <Link to={`${location.pathname}/second-post`}>
          <h2>Second Post</h2>
        </Link>
      </div>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
};

export default Blog;
