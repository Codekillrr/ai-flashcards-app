"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="justify-center flex flex-row items-center">
      <div className="w-full h-[60px] bg-gradient-to-t from-10% to-90% from-slate-900 to-black border-b border-neutral-500 fixed z-40 top-0">

        <div className="mx-[10vw] h-[60px] items-center justify-between flex flex-row">

          <button className="font-bold text-lg">
            Abdur Rehman
          </button>

          <div className="h-[60px] items-center flex flex-row">

            <Link href={'/generate'} passHref className='w-full'>
              <button className="bg-black hover:transition-all ease-in-out hover:py-2 px-5 py-1 border border-white rounded-lg mr-10">
                Generate
              </button>
            </Link>
            <Link href={'/saved-flashcards'} passHref className='w-full'>
              <button className="bg-black hover:transition-all ease-in-out hover:py-2 px-5 py-1 border border-white rounded-lg">
                Saved
              </button>
            </Link>

          </div>

        </div>
        
      </div>

      <button className="w-[200px] font-bold text-3xl hover:transition-all ease-in-out hover:bg-gradient-to-t hover:from-slate-500 hover:to-slate-50 hover:bg-clip-text hover:text-transparent justify-center flex flex-row items-center fixed top-0 h-[60px] z-50">
        FlashTellect
      </button>
    </div>
  );
}