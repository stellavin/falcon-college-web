import { useState } from "react";
import AddLecture from "./addLecture";
import Dialogue from "./dialogue";
import EditLecture from "./editLecture";

const ManageTeachers = ({ title, Students }) => {
  const [edit, setEdit] = useState(false);
  const [deleteme, setDelete] = useState(false);
  const [add, setAdd] = useState(false);

  const showEdit = () => {
    setEdit(true);
  };

  const showDelete = () => {
    setDelete(true);
  };

  const showAdd = () => {
    setAdd(true);
  };
  const handleCancel = () => {
    setDelete(false);
  };

  const handleDelete = () => {
    setDelete(false);
  };

  const handleEditCancel = () => {
    setEdit(false);
  };

  const handleCancelAdd = () => {
    setAdd(false);
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <h3 className="mb-4 font-semibold bg-gradient-3 rounded-xl py-4 px-2 sm:px-4">
        University President Dashboard
      </h3>
      <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row ">
        <div className="flex items-center w-full md:w-1/2 space-x-4">
          <div className="w-1/2">
            <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
              <p className="text-2xl text-black dark:text-white font-bold">
                {Students.length}
              </p>
              <p className="text-gray-400 text-sm">Total Teachers</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto"></div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex justify-end ">
              <button
                onClick={showAdd}
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-4  px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
              >
                Add Teacher
              </button>
            </div>
          </div>
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
                          Teacher Name
                        </th>

                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Email
                        </th>

                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Has Password
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Department
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Delete</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {Students.map((student, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {index + 1}
                          </td>

                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {student.name}
                          </td>

                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {student.email}
                          </td>

                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {student.haspassword}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {student.department}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              href="#"
                              onClick={showEdit}
                              className="bg-gradient-5 hover:text-indigo-900"
                            >
                              Edit
                              <span className="sr-only">, {student.name}</span>
                            </a>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              href="#"
                              onClick={showDelete}
                              className="bg-gradient-6 hover:text-indigo-900"
                            >
                              Delete
                              <span className="sr-only">, {student.name}</span>
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
      {edit && <EditLecture onEditCancel={handleEditCancel} />}
      {deleteme && <Dialogue onCancel={handleCancel} onDelete={handleDelete} />}
      {add && <AddLecture oncancelAdd={handleCancelAdd} />}
    </main>
  );
};

export default ManageTeachers;
