//External Import
import { forwardRef, useRef } from "react";
import { AiFillPhone, AiOutlineHome, AiOutlinePrinter } from "react-icons/ai";
import { BiEnvelope, BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";

const SingleTemplate = () => {
  const componentRef = useRef();
  const { id } = useParams();
  const { TemplateList } = useSelector((state) => state.Template);

  const gettemplate = () => {
    switch (id) {
      case "1": {
        return <SingleTemplateOne ref={componentRef} />;
      }
      case "2": {
        return <SingleTemplateTwo ref={componentRef} />;
      }
      default: {
        <SingleTemplateOne ref={componentRef} />;
      }
    }
  };

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

        {gettemplate()}
      </div>
    </section>
  );
};

export default SingleTemplate;

const SingleTemplateOne = forwardRef((props, ref) => {
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
              MANOJ <span>ADHIKARI</span>
            </p>
            <p className="text-white text-xl mt-2">UI / UX Designer</p>
          </div>
        </div>
      </div>
      <div className="flex mx-[-15px]  text-[#7b7b7b] bg-white">
        <div className="px-[15px] w-full md:w-4/12">
          <div className="p-5">
            <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
              Contact
            </p>
            <p>
              <AiFillPhone className="inline" /> &nbsp;&nbsp;898392888
            </p>
            <p>
              <BiEnvelope className="inline" /> &nbsp;&nbsp;dummymail.com
            </p>
            <p>
              <AiOutlineHome className="inline" /> &nbsp;&nbsp;United Kingdom
            </p>
            <br />
            <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
              my skills
            </p>
            <ul className="skills">
              <li>
                <span>Web Design</span>
              </li>
              <li>
                <span>Grapic Design</span>
              </li>
              <li>
                <span>HTML-5</span>
              </li>
              <li>
                <span>CSS-3</span>
              </li>
              <li>
                <span>Java Script</span>
              </li>
              <li>
                <span>Jquery</span>
              </li>
            </ul>
            <br />
            <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
              awards
            </p>
            <p>CSS Design Awards</p>
            <p>D&amp;AD Awards</p>
            <p>CSS Winner Awards</p>
            <p>The Shorty Awards</p>
            <p>Awwwards</p>
            <br />
            <p className="head">Languages</p>
            <p>Hindi</p>
            <p>English</p>
          </div>
        </div>

        <div className="px-[15px] w-full md:w-8/12">
          <div className="content-box">
            <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
              profile
            </p>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <br />
            <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
              EXPERIENCE
            </p>
            <p className="text-md uppercase font-normal text-[#151b29]">
              UI DESIGNER IN LOREM IPSUM (2018 - NOW)
            </p>
            <p className="text-sm my-3">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of
              Type And Scrambled It To Make A Type Specimen Book.
            </p>
            <p className="text-md uppercase font-normal text-[#151b29]">
              UI DESIGNER (2013 - 2015)
            </p>
            <p className="text-sm my-3">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s
            </p>
            <p className="text-md uppercase font-normal text-[#151b29]">
              GRAPIC DESIGNER(2010)
            </p>
            <p className="text-sm my-3">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of
              Type And Scrambled It To Make A Type Specimen Book.
            </p>
            <br />
            <p className="text-lg uppercase font-semibold my-5 text-[#151b29]">
              Education
            </p>
            <p className="text-sm my-3">HIGH SCHOOL OF CBSE (2009 - 2010)</p>
            <p className="text-sm my-3">
              BACHELOR OF COMPUTER APPLICATION (2013 - 2015)
            </p>
            <p className="text-sm my-3">
              MASTER OF COMPUTER APPLICATION (2015 - 2018)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

const SingleTemplateTwo = forwardRef((props, ref) => {
  return (
    <div className="w-[800px] m-auto" ref={ref}>
      <div className="flex mx-[-15px]  text-[#7b7b7b] bg-white">
        <div className="px-[15px] w-full">
          <div className="p-5 text-center">
            <img
              src="https://res.cloudinary.com/dtcoomque/image/upload/v1663317145/vz7iz88hfniwxejirvjw.png"
              className="w-[150px] rounded-[50%] mx-auto"
              alt="user"
            />
            <p className="text-[#151b29] text-[40px] mt-3">
              MANOJ <span>ADHIKARI</span>
            </p>
            <p className="text-[#151b29] text-xl mt-2">UI / UX Designer</p>
          </div>
        </div>
      </div>
      <div className="flex mx-[-15px] bg-[#151b29] text-[white]">
        <div className="px-[15px] w-full md:w-4/12">
          <div className="p-5">
            <p className="text-lg uppercase font-semibold my-5 text-white">
              Contact
            </p>
            <p>
              <AiFillPhone className="inline" /> &nbsp;&nbsp;898392888
            </p>
            <p>
              <BiEnvelope className="inline" /> &nbsp;&nbsp;dummymail.com
            </p>
            <p>
              <AiOutlineHome className="inline" /> &nbsp;&nbsp;United Kingdom
            </p>
            <br />
            <p className="text-lg uppercase font-semibold my-5 text-white">
              my skills
            </p>
            <ul className="skills">
              <li>
                <span>Web Design</span>
              </li>
              <li>
                <span>Grapic Design</span>
              </li>
              <li>
                <span>HTML-5</span>
              </li>
              <li>
                <span>CSS-3</span>
              </li>
              <li>
                <span>Java Script</span>
              </li>
              <li>
                <span>Jquery</span>
              </li>
            </ul>
            <br />
            <p className="text-lg uppercase font-semibold my-5 text-white">
              awards
            </p>
            <p>CSS Design Awards</p>
            <p>D&amp;AD Awards</p>
            <p>CSS Winner Awards</p>
            <p>The Shorty Awards</p>
            <p>Awwwards</p>
            <br />
            <p className="head">Languages</p>
            <p>Hindi</p>
            <p>English</p>
          </div>
        </div>

        <div className="px-[15px] w-full md:w-8/12">
          <div className="content-box">
            <p className="text-lg uppercase font-semibold my-5 text-white">
              profile
            </p>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <br />
            <p className="text-lg uppercase font-semibold my-5 text-white">
              EXPERIENCE
            </p>
            <p className="text-md uppercase font-normal text-white">
              UI DESIGNER IN LOREM IPSUM (2018 - NOW)
            </p>
            <p className="text-sm my-3">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of
              Type And Scrambled It To Make A Type Specimen Book.
            </p>
            <p className="text-md uppercase font-normal text-white">
              UI DESIGNER (2013 - 2015)
            </p>
            <p className="text-sm my-3">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s
            </p>
            <p className="text-md uppercase font-normal text-white">
              GRAPIC DESIGNER(2010)
            </p>
            <p className="text-sm my-3">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of
              Type And Scrambled It To Make A Type Specimen Book.
            </p>
            <br />
            <p className="text-lg uppercase font-semibold my-5 text-white">
              Education
            </p>
            <p className="text-sm my-3">HIGH SCHOOL OF CBSE (2009 - 2010)</p>
            <p className="text-sm my-3">
              BACHELOR OF COMPUTER APPLICATION (2013 - 2015)
            </p>
            <p className="text-sm my-3">
              MASTER OF COMPUTER APPLICATION (2015 - 2018)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
