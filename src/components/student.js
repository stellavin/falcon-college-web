import { useEffect, useState } from "react";
import AddCredit from "./addcredit";
import axios from "axios";

const StudentDashboard = ({ title, Lectures }) => {
  const [add, setAdd] = useState(false);
  const [userData, setUser] = useState("");
  const [department, setDepartment] = useState("");
  const [lectures_, setLectures] = useState([]);

  const showAdd = () => {
    setAdd(true);
  };

  const handleCancelAdd = () => {
    setAdd(false);
  };

  useEffect(() => {
    let user = localStorage.getItem("user");
    let x = JSON.parse(user);
    setDepartment(x);
    getAllLectures();
  }, []);

  const getAllLectures = () => {
    let token = localStorage.getItem("Token");
    let user = localStorage.getItem("usertype");
    setUser(user);
    let newUser = localStorage.getItem("user");
    let userObj = JSON.parse(newUser);

    axios
      .post(`http://localhost:8080/api/getFaculties`, {
        department: userObj.departmentid,
      })
      .then((res) => {
        let obj = res.data;
        setLectures(obj);
      });
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      {userData !== "" && (
        <h3 className="mb-4 font-semibold bg-gradient-3 rounded-xl py-4 px-2 sm:px-4">
          {department.departments[0]} Student Dashboard
        </h3>
      )}

      <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row ">
        <div className="flex items-center w-full md:w-1/2 space-x-4">
          <div className="w-1/2">
            <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
              <p className="text-2xl text-black dark:text-white font-bold">4</p>
              <p className="text-gray-400 text-sm">Overall GPA</p>
            </div>
          </div>

          <div className="w-1/2">
            <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
              <p className="text-2xl text-black dark:text-white font-bold">A</p>
              <p className="text-gray-400 text-sm">Overall Credit</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Number</span>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Lecture Name
                        </th>

                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Department
                        </th>

                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Student Credit
                        </th>

                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          GPA
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Add GPA</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {lectures_.map((lecture, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {index + 1}
                          </td>

                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {lecture.name}
                          </td>
                          {lecture.departments.length > 1 ? (
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              Common Unit
                            </td>
                          ) : (
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {lecture.departments[0]}
                            </td>
                          )}

                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            -
                          </td>

                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            _
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              href="#"
                              onClick={showAdd}
                              className="bg-gradient-5  hover:text-indigo-900"
                            >
                              Add Credit
                              <span className="sr-only">, {lecture.name}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {add && <AddCredit oncancelAdd={handleCancelAdd} />}
    </main>
  );
};

export default StudentDashboard;
