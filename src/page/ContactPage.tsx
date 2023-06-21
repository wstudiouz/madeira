import React, {ReactElement, useState, useEffect} from "react";
import Form from "../components/contact/Form";
import Hero from "../components/contact/Hero";
import Map from "../components/contact/Map";
import MainContainer from "../components/MainContainer";
import {getter} from "../ts/utils/Fetcher";
import {ContactPageListResponseDataItem} from "../ts/REST/api/generated";
import {useIsMounted} from "@qubixstudio/sphere";

const ContactPage = (): ReactElement => {
  const [contactPage, setContactPage] =
    useState<ContactPageListResponseDataItem>();

  const isMounted = useIsMounted();

  useEffect(() => {
    const getValue = async () => {
      const result = await getter("contact-page");

      if (result.ok && result.data) {
        setContactPage(result.data as ContactPageListResponseDataItem);
      }
    };

    if (isMounted()) {
      getValue();
    }
  }, [isMounted]);
  console.log(contactPage);

  return (
    <>
      <MainContainer>
        {contactPage && <Hero data={contactPage} />}
        <Form />
      </MainContainer>
      <Map />
    </>
  );
};
export default ContactPage;
