import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DropDown } from "~/integrations/react/headless-ui";

export const title = "Qwik + React + Tailwind + HeadlessUI dropdown";
export const options = ["Foo", "Bar", "Baz"];

export default component$(() => {
  return (
    <>
      <h1>{title}</h1>
      <div className="min-h-screen bg-indigo-100 flex justify-end p-4">
        <DropDown options={options} />
      </div>
    </>
  );
});

export const head: DocumentHead = { title };
