import React from "react";
import Middleapi from "./Middleapi";
import Rightside from "./Rightside";

const Middles = () => {
  return (
    <>
      <section className="flex justify-around gap-3 w-[90vw] h-[100vh] overflow-x-hidden overflow-y-scroll flex-grow text-white scrollbar max-md:w-[100vw] max-md:px-3">
        <Middleapi />
        <Rightside />
      </section>
    </>
  );
};

export default Middles;
