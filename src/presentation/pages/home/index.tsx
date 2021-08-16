import React, { FunctionComponent as FC, ReactElement as RE } from "react";
import { useHistory } from "react-router-dom";

const Home: FC = (): RE => {
  const history = useHistory();
  //   const handleRoutePush = (route: string): void => history.push(route);

  //   const handleOnRouteSelect = (
  //     event: React.MouseEvent<HTMLDivElement, MouseEvent>
  //   ): void => {
  //     event.preventDefault();
  //     console.log(event.currentTarget.innerHTML);
  //     handleRoutePush("/about-us");
  //   };

  const handleClick = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ): void => {
    switch (e.currentTarget.innerHTML) {
      case "About Us":
        history.push("/about-us");
        break;
      case "Contacts":
        history.push("/contacts");
        break;
      case "Blog":
        history.push("/blog");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <h3 onClick={handleClick} style={{ cursor: "pointer" }}>
        About Us
      </h3>
      <h3 onClick={handleClick} style={{ cursor: "pointer" }}>
        Contacts
      </h3>
      <h3 onClick={handleClick} style={{ cursor: "pointer" }}>
        Blog
      </h3>
    </div>
  );
};

export default Home;
