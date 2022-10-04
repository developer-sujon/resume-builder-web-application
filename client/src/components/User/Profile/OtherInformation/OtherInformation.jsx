//External Import
import { Accordion } from "flowbite-react";

//Internal Import
import LanguageProficiency from "./LanguageProficiency";
import References from "./References";
import Specialization from "./Specialization";

const OtherInformation = (values) => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Specialization</Accordion.Title>
        <Accordion.Content>
          <Specialization {...values} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Language Proficiency</Accordion.Title>
        <Accordion.Content>
          <LanguageProficiency {...values} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>References</Accordion.Title>
        <Accordion.Content>
          <References {...values} />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default OtherInformation;
