import { useEffect, useState } from "react";
import { useToggle } from "../provider/context";
import { useHistory } from "react-router-dom";

export default function TopNavigation() {
  let history = useHistory();
  const { toggle } = useToggle();
  const [name, setName] = useState("");

  const logout = () => {
    localStorage.clear();
    let path = `/`;
    history.push(path);
  };

  useEffect(() => {
    let username = localStorage.getItem("username");
    setName(username);
  }, []);
  return (
    <header className="h-16 md:h-20 shadow bg-white items-center relative z-10">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-white z-10">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex group h-full items-center relative w-12">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={toggle}
              className="text-4xl text-gray-700 focus:outline-none lg:hidden"
            >
              &#8801;
            </button>
          </div>

          <div className="flex items-center justify-end ml-5 mr-0 p-1 relative text-gray-700 w-full sm:mr-0 sm:right-auto">
            <div className="mr-10">Welcome {name}</div>
            <a href="#" className="block pr-5 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
            <a href="#" onClick={logout} className="block relative">
              <img
                alt="Stone Cold Steve Austin"
                src="/images/1.jpg"
                className="h-10  object-cover rounded-full w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
