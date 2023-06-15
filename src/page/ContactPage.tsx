import React, {ReactElement} from "react";
import Form from "../components/contact/Form";
import Hero from "../components/contact/Hero";
import Map from "../components/contact/Map";
import MainContainer from "../components/MainContainer";

const ContactPage = (): ReactElement => {
  return (
    <>
      <MainContainer>
        <Hero />
        <Form />
      </MainContainer>
      <Map />
    </>
  );
};
export default ContactPage;
