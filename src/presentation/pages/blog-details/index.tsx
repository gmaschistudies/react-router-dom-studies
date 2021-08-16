import React, { FunctionComponent as FC, ReactElement as RE } from "react";
import { useParams } from "react-router";
import { useHistory, useLocation } from "react-router-dom";

interface Props {
  articleId?: string | undefined;
}

const BlogDetails: FC = (): RE => {
  const match: Props = useParams();
  const history = useHistory();

  const location = useLocation();
  console.log(location);

  const handleReturn = () => {
    history.goBack();
  };
  return (
    <div>
      <h1>Blog Details Page</h1>
      <h3>Match URL: {match.articleId}</h3>
      <button onClick={handleReturn}>Return </button>
    </div>
  );
};

export default BlogDetails;
