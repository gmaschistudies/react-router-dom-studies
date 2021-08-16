import React, { FunctionComponent as FC, ReactElement as RE } from "react";

interface Props {
  children?: RE;
}

const App: FC<Props> = ({ children }: Props): RE => {
  return <div>{children}</div>;
};

export default App;
