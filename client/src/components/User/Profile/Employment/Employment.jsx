//External Import
import { Accordion } from "flowbite-react";

//Internal Import
import EmploymentHistory from "./EmploymentHistory";
import EmploymentHistoryArmi from "./EmploymentHistoryArmi";

const Employment = (values) => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Employment History</Accordion.Title>
        <Accordion.Content>
          <EmploymentHistory {...values} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Employment History(For Retired Army Person)
        </Accordion.Title>
        <Accordion.Content>
          <EmploymentHistoryArmi {...values} />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Employment;
