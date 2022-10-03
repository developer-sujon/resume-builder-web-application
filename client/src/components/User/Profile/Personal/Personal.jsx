//External Import
import { Accordion } from "flowbite-react";

//Inernal Import
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import CareerandApplicationInformation from "./CareerandApplicationInformation";
import PreferredAreas from "./PreferredAreas";
import OtherRelevantInformation from "./OtherRelevantInformation";
import NationalDisability from "./NationalDisability";

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
      <Accordion.Panel>
        <Accordion.Title>Career and Application Information</Accordion.Title>
        <Accordion.Content>
          <CareerandApplicationInformation />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Preferred Areas</Accordion.Title>
        <Accordion.Content>
          <PreferredAreas />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Other Relevant Information</Accordion.Title>
        <Accordion.Content>
          <OtherRelevantInformation />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Disability Information (if any)</Accordion.Title>
        <Accordion.Content>
          <NationalDisability />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Personal;
