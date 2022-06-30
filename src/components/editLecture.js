import { useState } from "react";

const EditLecture = ({ onEditCancel }) => {
  const [hideedit, setHideEdit] = useState(false);
  return (
    <div
      class="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0"></div>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <div class="pointer-events-auto w-screen max-w-md">
              <form class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div class="h-0 flex-1 overflow-y-auto">
                  <div class="bg-gradient-2 py-6 px-4 sm:px-6">
                    <div class="flex items-center justify-between">
                      <h2 class="text-lg font-medium " id="slide-over-title">
                        Edit Lecture
                      </h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={onEditCancel}
                          class="rounded-md bg-red-700 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        >
                          <span class="sr-only">Close panel</span>
                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="mt-1">
                      <p class="text-sm ">Mechine Learning</p>
                    </div>
                  </div>
                  <div class="flex flex-1 flex-col justify-between">
                    <div class="divide-y divide-gray-200 px-4 sm:px-6">
                      <div class="space-y-6 pt-6 pb-5">
                        <div>
                          <label
                            for="project-name"
                            class="block text-sm font-medium text-gray-900"
                          >
                            {" "}
                            Lecture Name{" "}
                          </label>
                          <div class="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows="2"
                              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            ></textarea>
                          </div>
                        </div>
                        <div>
                          <label
                            for="description"
                            class="block text-sm font-medium text-gray-900"
                          >
                            {" "}
                            Lecture Credits{" "}
                          </label>
                          <div class="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows="2"
                              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-shrink-0 justify-end px-4 py-4">
                  <button
                    type="button"
                    onClick={onEditCancel}
                    class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLecture;
