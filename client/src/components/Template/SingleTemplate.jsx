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

import "./index.css";

const SingleTemplate = () => {
  const componentRef = useRef();
  const { id } = useParams();
  const { TemplateList } = useSelector((state) => state.Template);
  const { UserDetails } = useSelector((state) => state.User);

  return (
    <section className="min-h-screen py-10">
      <div className="w-[800px] m-auto">
        <div className="flex justify-end mx-[-30px] mb-4">
          <Link to="/template">
            <BiArrowBack className="text-[24px] ml-4 dark:text-white  block" />
          </Link>

          <ReactToPrint
            trigger={() => (
              <AiOutlinePrinter
                className="text-[24px] ml-4 dark:text-white  block cursor-pointer"
                title="PDF Format"
              />
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
  return (
    <div className="bg-white">
      <div className="w-[800px] m-auto py-10" ref={ref}>
        <div className="w-[800px] m-auto">
          <div className="text-sm bg-white">
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
            >
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <table
                      border={0}
                      align="center"
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            width="73%"
                            height=""
                            align="left"
                            valign="bottom"
                            className="BDJApplicantsName"
                          >
                            {UserDetails?.FirstName} {UserDetails?.LastName}
                          </td>
                          <td
                            width="27%"
                            rowSpan={2}
                            align="right"
                            valign="bottom"
                          >
                            <table
                              width={140}
                              height={140}
                              border={0}
                              align="center"
                              cellPadding={0}
                              cellSpacing={7}
                              bgcolor="#dadce1"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    width={126}
                                    height={135}
                                    align="center"
                                    bgcolor="#e2e4e5"
                                    valign="middle"
                                  >
                                    <img
                                      src={UserDetails?.Image}
                                      width={124}
                                      height={135}
                                      alt="user"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="BDJNormalText04"
                            align="left"
                            valign="middle"
                          >
                            {UserDetails?.PresentAddress?.Road}
                            <br />
                            Primary Mobile No: {UserDetails?.Phone}
                            <br />
                            Primary Email : {UserDetails?.Email}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
            >
              <tbody>
                <tr>
                  <td
                    colSpan={6}
                    style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
                  >
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td colSpan={6}>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Career Objective:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01"
                    style={{ paddingLeft: 5, wordBreak: "break-word" }}
                  >
                    {UserDetails?.CarrierObjective &&
                      parse(UserDetails?.CarrierObjective)}
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Career Summary:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01"
                    style={{ paddingLeft: 5, wordBreak: "break-word" }}
                  >
                    {UserDetails?.CareerSummary &&
                      parse(UserDetails?.CareerSummary)}
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Special Qualification:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01"
                    style={{ paddingLeft: 5, wordBreak: "break-word" }}
                  >
                    {UserDetails?.SpecialQualification &&
                      parse(UserDetails?.SpecialQualification)}
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Employment History:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01"
                    style={{ paddingLeft: 5 }}
                  >
                    <strong>Total Year of Experience :</strong> 1.8 yrs
                  </td>
                </tr>
              </tbody>
            </table>

            {UserDetails?.EmploymentHistorys?.map((employment, i) => {
              return (
                <table
                  key={i}
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  align="center"
                  width={750}
                  style={{ marginTop: 3 }}
                >
                  <tbody>
                    <tr>
                      <th
                        width={22}
                        align="center"
                        className="BDJNormalText05"
                        valign="top"
                        style={{ paddingLeft: 5 }}
                      >
                        {i + 1}
                      </th>
                      <th
                        colSpan={5}
                        className="BDJBoldText01"
                        width={750}
                        valign="top"
                        align="left"
                      >
                        {employment?.Designation}
                        <br />
                        <span className="BDJNormalText06">
                          {" "}
                          ({employment?.StartDate} - {employment?.EndDate})
                        </span>
                        <br />
                      </th>
                    </tr>
                    <tr>
                      <td className="BDJHeadline02" align="center">
                        &nbsp;
                      </td>
                      <td colSpan={5} className="BDJNormalText06" align="left">
                        <strong>{employment?.CompanyName}</strong>
                        <br />
                        <span className="BDJNormalText06">
                          {employment?.CompanyLocation}
                        </span>
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td className="BDJHeadline02" align="center">
                        &nbsp;
                      </td>
                      <td colSpan={5} className="BDJNormalText06" align="left">
                        <strong>Area of Expertise</strong>
                        <br />
                        <span className="BDJNormalText06">
                          {employment?.Department} (0.8 yr)
                        </span>
                        <br />
                        <strong>Duties/Responsibilities</strong>
                        <br />
                        {employment?.Responsibilities &&
                          parse(employment?.Responsibilities)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}

            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Academic Qualification:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01"
                    style={{ paddingLeft: 5 }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width="100%"
                      style={{
                        border: "1px solid rgb(102, 102, 102)",
                        wordBreak: "break-word",
                      }}
                    >
                      <tbody>
                        <tr className="BDJNormalText02">
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Exam Title</strong>
                          </td>
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Concentration/Major</strong>
                          </td>
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Institute</strong>
                          </td>
                          <td
                            width="12.5%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Result</strong>
                          </td>
                          <td width="12.5%" align="center">
                            <strong>Pas.Year</strong>
                          </td>
                        </tr>

                        {UserDetails?.Educations?.map((edu) => {
                          return (
                            <>
                              <tr className="BDJNormalText02">
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.ExamDegreeTitle} &nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.ConcentrationMajorGroup} &nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.InstituteName} &nbsp;
                                </td>
                                <td
                                  width="12.5%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.Result} &nbsp;
                                </td>
                                <td
                                  width="12.5%"
                                  align="center"
                                  style={{
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.YearOfPassing} &nbsp;
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Career and Application Information:</u>
                  </td>
                </tr>
                <tr>
                  <td colSpan={6} align="left" className="BDJNormalText01">
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width="100%"
                    >
                      <tbody>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Looking For
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.JobLevel}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Available For
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.JobNature}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Present Salary
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PresentSalary}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Expected Salary
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.ExpectedSalary}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Preferred Job Category
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PreferredAreas?.map((pre) => {
                              return pre + ", ";
                            })}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Preferred District{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PreferredJobLocationInsideBangladesh?.map(
                              (country) => {
                                return country.label + ", ";
                              },
                            )}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Preferred Country{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PreferredJobLocationOutsideBangladesh?.map(
                              (country) => {
                                return country.label + ", ";
                              },
                            )}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            valign="top"
                            style={{ paddingLeft: 5 }}
                          >
                            Preferred Organization Types
                          </td>
                          <td width="2%" align="center" valign="top">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PreferredOrganization?.map((pre) => {
                              return pre?.label + ", ";
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Specialization:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01"
                    style={{ paddingLeft: 5 }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width="100%"
                      style={{
                        border: "1px solid rgb(102, 102, 102)",
                        wordBreak: "break-word",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            width="40%"
                            className="BDJNormalText02"
                            align="center"
                            style={{
                              borderBottom: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Fields of Specialization</strong>
                          </td>
                        </tr>
                        <tr>
                          <td
                            width="40%"
                            align="left"
                            className="BDJNormalText03"
                          >
                            <ul>
                              {UserDetails?.Specialization?.map((skill, i) => {
                                return <li key={i}> {skill?.Skill}</li>;
                              })}
                            </ul>
                            <br />
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Language Proficiency:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01"
                    style={{ paddingLeft: 5 }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width={750}
                      style={{ border: "1px solid rgb(102, 102, 102)" }}
                    >
                      <tbody>
                        <tr className="BDJNormalText02">
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Language</strong>
                          </td>
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Reading</strong>
                          </td>
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Writing</strong>
                          </td>
                          <td width="25%" align="center">
                            <strong>Speaking</strong>
                          </td>
                        </tr>

                        <>
                          {UserDetails?.LanguageProficiency?.map((lan, i) => {
                            return (
                              <tr className="BDJNormalText02" key={i}>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {lan?.Language}&nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {lan?.Reading}&nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {lan?.Speaking}&nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {lan?.Writing}&nbsp;
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Personal Details :</u>
                  </td>
                </tr>
                <tr>
                  <td colSpan={6} align="left" className="BDJNormalText01">
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width="100%"
                      style={{ wordBreak: "break-word" }}
                    >
                      <tbody>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Father's Name{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.FatherName}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Mother's Name{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.MotherName}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Date of Birth
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.DateofBirth}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            {UserDetails?.Gender}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            Male
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Height (Meter)
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.HeightMeters}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Weight (Kg)
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.WeightKg}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Marital Status{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.MaritalStatus}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Nationality
                          </td>
                          <td align="center">:</td>
                          <td align="left">
                            {UserDetails?.PermanentAddress?.Country ||
                              "Bangladesh"}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Religion
                          </td>
                          <td align="center">:</td>
                          <td align="left">{UserDetails?.Religion}</td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Permanent Address
                          </td>
                          <td align="center">:</td>
                          <td align="left">
                            {UserDetails?.PresentAddress?.Road}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Current Location
                          </td>
                          <td align="center">:</td>
                          <td align="left">
                            {UserDetails?.PresentAddress?.District}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Blood Group
                          </td>
                          <td align="center">:</td>
                          <td align="left">{UserDetails?.BloodGroup}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <center>
              <div
                id="divCopyRight"
                className="BDJCopyRight"
                style={{
                  borderTop: "1px solid rgb(153, 153, 153)",
                  width: 595,
                }}
              />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
});

const SingleTemplateTwo = forwardRef(({ UserDetails }, ref) => {
  return (
    <div
      style={{
        backgroundColor: "#121241",
        color: "#fff",
      }}
    >
      <div
        className="w-[800px] m-auto py-10"
        ref={ref}
        style={{
          backgroundColor: "#121241",
          color: "#fff",
        }}
      >
        <div className="w-[800px] m-auto">
          <div
            className="text-sm"
            style={{
              backgroundColor: "#121236",
              color: "#fff",
            }}
          >
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{
                backgroundColor: "#121236",
                color: "#fff",
              }}
            >
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <table
                      border={0}
                      align="center"
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            width="73%"
                            height=""
                            align="left"
                            valign="bottom"
                            className="BDJApplicantsName "
                          >
                            {UserDetails?.FirstName} {UserDetails?.LastName}
                          </td>
                          <td
                            width="27%"
                            rowSpan={2}
                            align="right"
                            valign="bottom"
                          >
                            <table
                              width={140}
                              height={140}
                              border={0}
                              align="center"
                              cellPadding={0}
                              cellSpacing={7}
                              bgcolor="#dadce1"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    width={126}
                                    height={135}
                                    align="center"
                                    bgcolor="#e2e4e5"
                                    valign="middle"
                                  >
                                    <img
                                      src={UserDetails?.Image}
                                      width={124}
                                      height={135}
                                      alt="user"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="BDJNormalText04 text-[#121236]"
                            align="left"
                            valign="middle"
                          >
                            {UserDetails?.PresentAddress?.Road}
                            <br />
                            Primary Mobile No: {UserDetails?.Phone}
                            <br />
                            Primary Email : {UserDetails?.Email}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
            >
              <tbody>
                <tr>
                  <td
                    colSpan={6}
                    style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
                  >
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td colSpan={6}>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Career Objective:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className=" bg-gray-900 BDJNormalText01"
                    style={{
                      paddingLeft: 5,
                      wordBreak: "break-word",
                      backgroundColor: "#1182",
                      color: "#fff",
                    }}
                  >
                    {UserDetails?.CarrierObjective &&
                      parse(UserDetails?.CarrierObjective)}
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Career Summary:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01 bg-gray-900"
                    style={{
                      paddingLeft: 5,
                      wordBreak: "break-word",
                      backgroundColor: "#1182",
                      color: "#fff",
                    }}
                  >
                    {UserDetails?.CareerSummary &&
                      parse(UserDetails?.CareerSummary)}
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Special Qualification:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01 bg-gray-900"
                    style={{
                      paddingLeft: 5,
                      wordBreak: "break-word",
                      backgroundColor: "#1182",
                      color: "#fff",
                    }}
                  >
                    {UserDetails?.SpecialQualification &&
                      parse(UserDetails?.SpecialQualification)}
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Employment History:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01 bg-gray-900"
                    style={{
                      paddingLeft: 5,
                      backgroundColor: "#1182",
                      color: "#fff",
                    }}
                  >
                    <strong>Total Year of Experience :</strong> 1.8 yrs
                  </td>
                </tr>
              </tbody>
            </table>

            {UserDetails?.EmploymentHistorys?.map((employment, i) => {
              return (
                <table
                  key={i}
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  align="center"
                  width={750}
                  style={{ marginTop: 3 }}
                >
                  <tbody>
                    <tr>
                      <th
                        width={22}
                        align="center"
                        className="BDJNormalText05"
                        valign="top"
                        style={{
                          paddingLeft: 5,
                          backgroundColor: "#1182",
                          color: "#fff",
                        }}
                      >
                        {i + 1}
                      </th>
                      <th
                        colSpan={5}
                        className="BDJBoldText01"
                        width={750}
                        valign="top"
                        align="left"
                        style={{
                          backgroundColor: "#1182",
                          color: "#fff",
                        }}
                      >
                        {employment?.Designation}
                        <br />
                        <span
                          className="BDJNormalText06"
                          style={{
                            backgroundColor: "#1182",
                            color: "#fff",
                          }}
                        >
                          {" "}
                          ({employment?.StartDate} - {employment?.EndDate})
                        </span>
                        <br />
                      </th>
                    </tr>
                    <tr>
                      <td className="BDJHeadline02" align="center">
                        &nbsp;
                      </td>
                      <td
                        colSpan={5}
                        className="BDJNormalText06"
                        align="left"
                        style={{
                          backgroundColor: "#1182",
                          color: "#fff",
                        }}
                      >
                        <strong>{employment?.CompanyName}</strong>
                        <br />
                        <span
                          className="BDJNormalText06"
                          style={{
                            backgroundColor: "#1182",
                            color: "#fff",
                          }}
                        >
                          {employment?.CompanyLocation}
                        </span>
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td className="BDJHeadline02" align="center">
                        &nbsp;
                      </td>
                      <td
                        colSpan={5}
                        className="BDJNormalText06"
                        align="left"
                        style={{
                          backgroundColor: "#1182",
                          color: "#fff",
                        }}
                      >
                        <strong>Area of Expertise</strong>
                        <br />
                        <span
                          className="BDJNormalText06"
                          style={{
                            backgroundColor: "#1182",
                            color: "#fff",
                          }}
                        >
                          {employment?.Department} (0.8 yr)
                        </span>
                        <br />
                        <strong>Duties/Responsibilities</strong>
                        <br />
                        {employment?.Responsibilities &&
                          parse(employment?.Responsibilities)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}

            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Academic Qualification:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01 bg-gray-900"
                    style={{
                      paddingLeft: 5,
                      backgroundColor: "#1182",
                      color: "#fff",
                    }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width="100%"
                      style={{
                        border: "1px solid rgb(102, 102, 102)",
                        wordBreak: "break-word",
                      }}
                    >
                      <tbody>
                        <tr className="BDJNormalText02">
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Exam Title</strong>
                          </td>
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Concentration/Major</strong>
                          </td>
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Institute</strong>
                          </td>
                          <td
                            width="12.5%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Result</strong>
                          </td>
                          <td width="12.5%" align="center">
                            <strong>Pas.Year</strong>
                          </td>
                        </tr>

                        {UserDetails?.Educations?.map((edu) => {
                          return (
                            <>
                              <tr className="BDJNormalText02">
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.ExamDegreeTitle} &nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.ConcentrationMajorGroup} &nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.InstituteName} &nbsp;
                                </td>
                                <td
                                  width="12.5%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.Result} &nbsp;
                                </td>
                                <td
                                  width="12.5%"
                                  align="center"
                                  style={{
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {edu?.YearOfPassing} &nbsp;
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Career and Application Information:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01 bg-gray-900"
                    style={{
                      backgroundColor: "#1182",
                      color: "#fff",
                    }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width="100%"
                    >
                      <tbody>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Looking For
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.JobLevel}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Available For
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.JobNature}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Present Salary
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PresentSalary}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Expected Salary
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.ExpectedSalary}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Preferred Job Category
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PreferredAreas?.map((pre) => {
                              return pre + ", ";
                            })}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Preferred District{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PreferredJobLocationInsideBangladesh?.map(
                              (country) => {
                                return country.label + ", ";
                              },
                            )}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Preferred Country{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PreferredJobLocationOutsideBangladesh?.map(
                              (country) => {
                                return country.label + ", ";
                              },
                            )}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="32%"
                            align="left"
                            valign="top"
                            style={{ paddingLeft: 5 }}
                          >
                            Preferred Organization Types
                          </td>
                          <td width="2%" align="center" valign="top">
                            :
                          </td>
                          <td width="66%" align="left">
                            {UserDetails?.PreferredOrganization?.map((pre) => {
                              return pre + ", ";
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Specialization:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01 bg-gray-900"
                    style={{
                      paddingLeft: 5,
                      backgroundColor: "#1182",
                      color: "#fff",
                    }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width="100%"
                      style={{
                        border: "1px solid rgb(102, 102, 102)",
                        wordBreak: "break-word",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            width="40%"
                            className="BDJNormalText02"
                            align="center"
                            style={{
                              borderBottom: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Fields of Specialization</strong>
                          </td>
                        </tr>
                        <tr>
                          <td
                            width="40%"
                            align="left"
                            className="BDJNormalText03"
                          >
                            <ul>
                              {UserDetails?.Specialization?.map((skill, i) => {
                                return <li key={i}> {skill?.Skill}</li>;
                              })}
                            </ul>
                            <br />
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Language Proficiency:</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01 bg-gray-900"
                    style={{
                      paddingLeft: 5,
                      backgroundColor: "#1182",
                      color: "#fff",
                    }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width={750}
                      style={{ border: "1px solid rgb(102, 102, 102)" }}
                    >
                      <tbody>
                        <tr className="BDJNormalText02">
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Language</strong>
                          </td>
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Reading</strong>
                          </td>
                          <td
                            width="25%"
                            align="center"
                            style={{
                              borderRight: "1px solid rgb(102, 102, 102)",
                            }}
                          >
                            <strong>Writing</strong>
                          </td>
                          <td width="25%" align="center">
                            <strong>Speaking</strong>
                          </td>
                        </tr>

                        <>
                          {UserDetails?.LanguageProficiency?.map((lan, i) => {
                            return (
                              <tr className="BDJNormalText02" key={i}>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {lan?.Language}&nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {lan?.Reading}&nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderRight: "1px solid rgb(102, 102, 102)",
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {lan?.Speaking}&nbsp;
                                </td>
                                <td
                                  width="25%"
                                  align="center"
                                  style={{
                                    borderTop: "1px solid rgb(102, 102, 102)",
                                  }}
                                >
                                  {lan?.Writing}&nbsp;
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width={750}
              style={{ marginTop: 3 }}
            >
              <tbody>
                <tr>
                  <td colSpan={6} className="BDJHeadline01">
                    <u>Personal Details :</u>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    align="left"
                    className="BDJNormalText01 bg-gray-900"
                    style={{
                      paddingLeft: 5,
                      backgroundColor: "#1182",
                      color: "#fff",
                    }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      width="100%"
                      style={{ wordBreak: "break-word" }}
                    >
                      <tbody>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Father's Name{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.FatherName}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Mother's Name{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.MotherName}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Date of Birth
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.DateofBirth}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            {UserDetails?.Gender}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            Male
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Height (Meter)
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.HeightMeters}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Weight (Kg)
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.WeightKg}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td
                            width="22%"
                            align="left"
                            style={{ paddingLeft: 5 }}
                          >
                            Marital Status{" "}
                          </td>
                          <td width="2%" align="center">
                            :
                          </td>
                          <td width="76%" align="left">
                            {UserDetails?.MaritalStatus}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Nationality
                          </td>
                          <td align="center">:</td>
                          <td align="left">
                            {UserDetails?.PermanentAddress?.Country ||
                              "Bangladesh"}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Religion
                          </td>
                          <td align="center">:</td>
                          <td align="left">{UserDetails?.Religion}</td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Permanent Address
                          </td>
                          <td align="center">:</td>
                          <td align="left">
                            {UserDetails?.PresentAddress?.Road}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Current Location
                          </td>
                          <td align="center">:</td>
                          <td align="left">
                            {UserDetails?.PresentAddress?.District}
                          </td>
                        </tr>
                        <tr className="BDJNormalText03">
                          <td align="left" style={{ paddingLeft: 5 }}>
                            Blood Group
                          </td>
                          <td align="center">:</td>
                          <td align="left">{UserDetails?.BloodGroup}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <center>
              <div
                id="divCopyRight"
                className="BDJCopyRight"
                style={{
                  borderTop: "1px solid rgb(153, 153, 153)",
                  width: 595,
                }}
              />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
});
