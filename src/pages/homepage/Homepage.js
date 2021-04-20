import React from "react";
import Directory from "../../components/directory/directory";
import { HomePageContainer } from "./homepage.styles";

function Homepage(props) {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default Homepage;
