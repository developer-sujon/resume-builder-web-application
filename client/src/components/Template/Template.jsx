//External Import
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Template = () => {
  const { TemplateList } = useSelector((state) => state.Template);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-wrap -mx-4">
          {TemplateList &&
            TemplateList.map((item) => {
              return (
                <div className="w-full md:w-6/12 p-4" key={item._id}>
                  <div className="relative overflow-hidden rounded-md before:absolute before:inset-0 before:w-full before:h-full before:bg-[#000000ad] before:scale-0 hover:before:scale-150 before:transition-all before:duration-700 before:rounded-full hover:before:rounded-none before:origin-top-right group">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full object-scale-down"
                    />
                    <div className="group-hover:flex hidden text-white absolute inset-0  items-center justify-center flex-col">
                      <p className="text-xl">Simple Template </p>
                      <Link to={`/template/${item._id}`}>
                        <AiOutlineLink className="text-[30px] mt-4  block" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Template;
