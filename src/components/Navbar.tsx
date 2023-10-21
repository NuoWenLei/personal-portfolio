import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { projects, Project } from "../projects";

export default function Navbar() {
  return (
    <nav className="w-screen h-20 flex flex-row justify-end px-16 bg-transparent">
      <div className="flex flex-row gap-20 text-lg">
        <Link
          to="/home"
          className="text-gray-200 duration-150 hover:text-white my-auto w-1/3 outline-none font-semibold"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-200 duration-150 hover:text-white my-auto w-1/3 outline-none font-semibold"
        >
          About
        </Link>
        <ProjectDropdown />
      </div>
    </nav>
  );
}

function ProjectDropdown() {
  const [selected, setSelected] = useState<string>("");
  return (
    <Popover className="relative my-auto">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center my-auto text-gray-200 duration-150 hover:text-white outline-none font-semibold`}
          >
            <span>Projects</span>
            <ChevronDownIcon
              className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-gray-200 transition duration-150 ease-in-out group-hover:text-white`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/3 z-10 mt-3 w-60 h-60 rounded-lg overflow-y-scroll -translate-x-1/2 transform px-4 sm:px-0">
              <div className="relative bg-white flex flex-col w-full">
                {projects.map((project: Project, id: number) => (
                  <div
                    key={id}
                    className="hover:bg-[#748cab] duration-200 py-4 cursor-pointer text-center text-[#0d1321]"
                  >
                    {project.title}
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
