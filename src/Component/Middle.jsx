import React from "react";
import { CiHeart } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";
const Middle = ({ value }) => {
  return (
    <>
      <div className="flex flex-col gap-10 items-center ">
        <section className="w-[55vw] justify-center text-white flex  gap-5 md:py-5 max-md:w-[100vw]" key={Math.random()}>
          <div className="flex flex-row-reverse  gap-5  overflow-y-hidden overflow-x-scroll h-[80px] w-[40vw] max-md:w-[100vw] scrollbar max-md:pl-3 max-md:pr-2">
            {value.map((val, ind) => {
              const { avatar_url, login } = val;
              // console.log(val);
              return (
                <main className="flex flex-col justify-center  items-center " key={ind}>
                  <img
                    src={avatar_url}
                    className=" rounded-[50%] grades p-[2px] img"
                    key={ind}
                  />
                  <p className="text-[12px] capitalize">{login}</p>
                </main>
              );
            })}
          </div>
        </section>
        <article className='flex flex-col-reverse gap-5 text-white  '>
          {value.map((vals, inds) => {
            const { avatar_url, login } = vals;
            // console.log(val);
            return (
              <div className=" border border-gray-600 rounded-[8px] p-2 w-[28vw] flex flex-col gap-3 max-md:w-[90vw]" key={inds}>
                <main className="flex  justify-between  items-center w-[100%]  px-2" >
                  <div className="flex gap-2 justify-center items-center ">
                    <img
                      src={avatar_url}
                      className=" rounded-[50%] grades p-[2px] w-[30px] h-[30px]  "
                      
                    />
                    <p className="text-[13px] capitalize">{login}</p>
                    <span className='text-gray-500 font-semibold'>• {inds}m</span>
                  </div>
                  <span className="text-gray-600">•••</span>
                </main>

                <section className="flex justify-center py-2 px-4 " >
                  <img src={avatar_url} className=" rounded   "  />
                </section>

                <section className="flex justify-between items-center px-4 ">
                  <div className="flex gap-4 items-center">
                    <CiHeart className="text-3xl" />
                    <FiMessageCircle className="text-2xl" />
                    <BsSend className="text-xl" />
                  </div>
                  <BsBookmarkPlus className="text-2xl" />
                </section>
                <p className="text-white px-6">29 likes</p>
                <span className="text-[12px] font-thin  px-5 max-md:text-[14px]">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam, a reiciendis nam voluptates eveniet.
                </span>
                <div className="px-5 flex justify-between items-center"><input type="text" className="roundeed bg-transparent border-none outline-none p-1" placeholder="Add a comment.............." />
                <MdOutlineEmojiEmotions/></div>
              </div>
            );
          })}
          
        </article>
       
      </div>
    </>
  );
};

export default Middle;
