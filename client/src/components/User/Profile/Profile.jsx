//External Import
import { useState } from "react";

//Internal Import
import ProfileForm from "./ProfileForm";

const Profile = () => {
  const [category, setCategory] = useState("PersonalInfo");

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h1 className=" text-xl dark:text-white">Update Profile</h1>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li class="mr-2">
              <button
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  category === "PersonalInfo"
                    ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                }`}
                onClick={() => setCategory("PersonalInfo")}
              >
                Personal Info
              </button>
            </li>
            <li class="mr-2">
              <button
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  category === "EducationTraining"
                    ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                }`}
                onClick={() => setCategory("EducationTraining")}
              >
                Education/Training
              </button>
            </li>
            <li>
              <button
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  category === "ExperienceProjects"
                    ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                }`}
                onClick={() => setCategory("ExperienceProjects")}
              >
                Experience / Projects
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">{<ProfileForm category={category} />}</div>
      </div>
    </section>
  );
};
export default Profile;
