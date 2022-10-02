//External Import
import { forwardRef, useRef } from "react";
import {
  AiFillPhone,
  AiOutlineHome,
  AiOutlinePrinter,
  AiOutlineEye,
} from "react-icons/ai";
import { BiEnvelope, BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import parse from "html-react-parser";

const SingleTemplate = () => {
  const componentRef = useRef();
  const { id } = useParams();
  const { TemplateList } = useSelector((state) => state.Template);
  const { UserDetails } = useSelector((state) => state.User);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900  py-10">
      <div className="w-[800px] m-auto">
        <div className="flex justify-end mx-[-30px] mb-4">
          <Link to="/template">
            <BiArrowBack className="text-[24px] ml-4 dark:text-white  block" />
          </Link>

          <ReactToPrint
            trigger={() => (
              <AiOutlinePrinter className="text-[24px] ml-4 dark:text-white  block cursor-pointer" />
            )}
            content={() => componentRef.current}
          />
        </div>

        {id === "1" ? (
          <SingleTemplateOne UserDetails={UserDetails} ref={componentRef} />
        ) : (
          <SingleTemplateTwo UserDetails={UserDetails} ref={componentRef} />
        )}
      </div>
    </section>
  );
};

export default SingleTemplate;

const SingleTemplateOne = forwardRef(({ UserDetails }, ref) => {
  console.log(UserDetails);

  return (
    <div className="w-[800px] m-auto" ref={ref}>
      <div className="flex mx-[-15px] bg-[#151b29] text-[white]">
        <div className="px-[15px] w-full">
          <div className="p-5 text-center">
            <img
              src="https://res.cloudinary.com/dtcoomque/image/upload/v1663317145/vz7iz88hfniwxejirvjw.png"
              className="w-[150px] rounded-[50%] mx-auto"
              alt="user"
            />
            <p className="text-white text-[40px] mt-3">
              {UserDetails?.FullName}
            </p>
            <p className="text-white text-xl mt-2">{UserDetails?.Dejection}</p>
          </div>
        </div>
      </div>
      <div className="flex mx-[-15px]  text-[#7b7b7b] bg-white">
        <div className="px-[15px] w-full md:w-5/12">
          <div className="p-5">
            <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
              Contact
            </p>

            {UserDetails?.Phone && (
              <p>
                <AiFillPhone className="inline" /> &nbsp;&nbsp;
                {UserDetails?.Phone}
              </p>
            )}

            {UserDetails?.Email && (
              <p>
                <BiEnvelope className="inline" /> &nbsp;&nbsp;
                {UserDetails?.Email}
              </p>
            )}

            {UserDetails?.Address && (
              <>
                <p>
                  <AiOutlineHome className="inline" /> &nbsp;&nbsp;
                  {UserDetails?.Address}
                </p>
                <br />
              </>
            )}

            {UserDetails?.Skills.length !== 0 && (
              <>
                <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
                  my skills
                </p>
                <ul className="skills">
                  {UserDetails?.Skills.map((skill, index) => {
                    return (
                      <li key={index}>
                        <span>{skill.Technology}</span>
                      </li>
                    );
                  })}
                </ul>
                <br />
              </>
            )}

            {UserDetails?.Education.length !== 0 && (
              <>
                <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
                  Education
                </p>
                {UserDetails?.Education.map((edu, index) => {
                  return (
                    <>
                      <p className="text-sm my-3">
                        Qualification : {edu.Qualification} ({edu.YearRange}){" "}
                        <br />
                        Institution : {edu.Institution}
                      </p>
                    </>
                  );
                })}
                <br />
              </>
            )}
          </div>
        </div>

        <div className="px-[15px] w-full md:w-7/12">
          <div className="content-box">
            <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
              Carrier Objective
            </p>
            <p className="text-sm">
              {UserDetails && parse(UserDetails?.CarrierObjective)}
            </p>
            <br />

            {UserDetails?.Experience.length !== 0 && (
              <>
                <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
                  Employment Records:
                </p>
                {UserDetails?.Experience.map((skill, index) => {
                  return (
                    <>
                      <a
                        href={skill.Website}
                        target="_black"
                        className="text-purple-900"
                      >
                        {skill.Company}
                      </a>
                      <p className="text-sm my-3">Address: {skill.Place}</p>
                      <p className="text-sm my-3">
                        Year Range: {skill.YearRange}
                      </p>
                    </>
                  );
                })}
                <br />
              </>
            )}

            {UserDetails?.Projects.length !== 0 && (
              <>
                <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
                  Project
                </p>
                {UserDetails?.Projects.map((project, index) => {
                  return (
                    <>
                      <p className="text-md uppercase font-normal text-[#151b29]">
                        {project.Title} ({project.YearRange}){" "}
                        <a href={project.Link} target="_blank">
                          <AiOutlineEye className="inline" />
                        </a>
                      </p>
                      <p className="text-sm my-3">
                        Description: {project.Description}
                      </p>
                      <p className="text-sm my-3">
                        Year Range: {project.YearRange}
                      </p>
                    </>
                  );
                })}
                <br />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const SingleTemplateTwo = forwardRef(({ UserDetails }, ref) => {
  return (
    <div className="w-[800px] m-auto" ref={ref}>
      <div className="flex mx-[-15px] text-[#7b7b7b] bg-white">
        <div className="px-[15px] w-full">
          <div className="p-5 text-center">
            <img
              src="https://res.cloudinary.com/dtcoomque/image/upload/v1663317145/vz7iz88hfniwxejirvjw.png"
              className="w-[150px] rounded-[50%] mx-auto"
              alt="user"
            />
            <p className="text-[#151b29] text-[40px] mt-3">
              {UserDetails?.FullName}
            </p>
            <p className="text-[#151b29] text-xl mt-2">
              {UserDetails?.Dejection}
            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-[-15px]  bg-[#151b29] text-[white]">
        <div className="px-[15px] w-full md:w-5/12">
          <div className="p-5">
            <p className="text-lg uppercase font-semibold my-5 text-[white]">
              Contact
            </p>

            {UserDetails?.Phone && (
              <p>
                <AiFillPhone className="inline" /> &nbsp;&nbsp;
                {UserDetails?.Phone}
              </p>
            )}

            {UserDetails?.Email && (
              <p>
                <BiEnvelope className="inline" /> &nbsp;&nbsp;
                {UserDetails?.Email}
              </p>
            )}

            {UserDetails?.Address && (
              <>
                <p>
                  <AiOutlineHome className="inline" /> &nbsp;&nbsp;
                  {UserDetails?.Address}
                </p>
                <br />
              </>
            )}

            {UserDetails?.Skills.length !== 0 && (
              <>
                <p className="text-lg uppercase font-semibold my-5 text-[white]">
                  my skills
                </p>
                <ul className="skills">
                  {UserDetails?.Skills.map((skill, index) => {
                    return (
                      <li key={index}>
                        <span>{skill.Technology}</span>
                      </li>
                    );
                  })}
                </ul>
                <br />
              </>
            )}

            {UserDetails?.Education.length !== 0 && (
              <>
                <p className="text-lg uppercase font-semibold my-5 text-[white]">
                  Education
                </p>
                {UserDetails?.Education.map((edu, index) => {
                  return (
                    <>
                      <p className="text-sm my-3">
                        Qualification : {edu.Qualification} ({edu.YearRange}){" "}
                        <br />
                        Institution : {edu.Institution}
                      </p>
                    </>
                  );
                })}
                <br />
              </>
            )}
          </div>
        </div>

        <div className="px-[15px] w-full md:w-7/12">
          <div className="content-box">
            <p className="text-lg uppercase font-semibold my-5 text-[white]">
              Carrier Objective
            </p>
            <p className="text-sm">
              {UserDetails && parse(UserDetails?.CarrierObjective)}
            </p>
            <br />

            {UserDetails?.Experience.length !== 0 && (
              <>
                <p className="text-lg uppercase font-semibold my-5 text-[white]">
                  Employment Records:
                </p>
                {UserDetails?.Experience.map((skill, index) => {
                  return (
                    <>
                      <a
                        href={skill.Website}
                        target="_black"
                        className="text-[#1c64f2]"
                      >
                        {skill.Company}
                      </a>
                      <p className="text-sm my-3">Address: {skill.Place}</p>
                      <p className="text-sm my-3">
                        Year Range: {skill.YearRange}
                      </p>
                    </>
                  );
                })}
                <br />
              </>
            )}

            {UserDetails?.Projects.length !== 0 && (
              <>
                <p className="text-lg uppercase font-semibold my-5 text-[white]">
                  Project
                </p>
                {UserDetails?.Projects.map((project, index) => {
                  return (
                    <>
                      <p className="text-md uppercase font-normal text-[white]">
                        {project.Title} ({project.YearRange}){" "}
                        <a href={project.Link} target="_blank">
                          <AiOutlineEye className="inline" />
                        </a>
                      </p>
                      <p className="text-sm my-3">
                        Description: {project.Description}
                      </p>
                      <p className="text-sm my-3">
                        Year Range: {project.YearRange}
                      </p>
                    </>
                  );
                })}
                <br />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
