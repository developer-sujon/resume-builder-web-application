//External Import
import { Accordion } from "flowbite-react";

//Internal Import
import AcademicSummary from "./AcademicSummary";
import ProfessionalCertification from "./ProfessionalCertification";
import TrainingSummary from "./TrainingSummary";

const EducationTraining = (values) => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Academic Summary</Accordion.Title>
        <Accordion.Content>
          <AcademicSummary {...values} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Training Summary</Accordion.Title>
        <Accordion.Content>
          <TrainingSummary {...values} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Professional Certification Summary</Accordion.Title>
        <Accordion.Content>
          <ProfessionalCertification {...values} />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default EducationTraining;
