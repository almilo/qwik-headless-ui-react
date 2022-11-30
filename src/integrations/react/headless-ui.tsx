/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Menu } from "@headlessui/react";

type DropDownProps = {
  options: string[];
};

export const DropDown = qwikify$(({ options }: DropDownProps) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className="inline-flex justify-center w-full rounded-md border
              border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium
              text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        Options Menu
      </Menu.Button>
      <Menu.Items
        className="origin-top:right absolute right-0 mt-2 w-56 rounded-md shadow-lg
              bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100
              focus:outline-none overflow-hidden"
      >
        {options.map((option, optionIndex) => (
          <Menu.Item key={optionIndex}>
            {({ active }) => (
              <a
                className={`group flex items-center px-4 py-2 text-sm
                  ${active ? "bg-indigo-500 text-white" : "text-gray-700"}`}
              >
                {option}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}, { eagerness: 'hover' });
