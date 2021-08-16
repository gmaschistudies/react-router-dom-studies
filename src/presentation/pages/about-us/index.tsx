import React, { FunctionComponent as FC, ReactElement as RE } from "react";
import { useHistory } from "react-router-dom";

const AboutUs: FC = (): RE => {
  const history = useHistory();

  const handleClickReturn = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>About-us</h1>
      <button onClick={handleClickReturn}>Return</button>
    </div>
  );
};

export default AboutUs;
