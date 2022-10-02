//External Import
import { Accordion } from "flowbite-react";

//Inernal Import
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";

const Personal = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Personal Details</Accordion.Title>
        <Accordion.Content>
          <PersonalDetails />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Address Details</Accordion.Title>
        <Accordion.Content>
          <AddressDetails />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Personal;
