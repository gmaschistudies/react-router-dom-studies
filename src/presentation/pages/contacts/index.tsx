import React, { FunctionComponent as FC, ReactElement as RE } from "react";
import { useHistory } from "react-router-dom";

const Contacts: FC = (): RE => {
  const history = useHistory();

  const handleReturn = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
};

export default Contacts;
