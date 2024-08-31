"use client";

import { motion } from "framer-motion";
import React from 'react'

const Flashcards = () => {
  return (
    <main>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4 py-10 my-10 mx-5">

        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center p-4 border-b-[1px] border-white">
          Saved Flashcards
        </div>

      </div>

      <div className="flex flex-col flex-1 mx-20">
        {[...new Array(4)].map((i) => (
          <motion.div 
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.2,
            ease: "easeInOut",
          }}
        className="m-10 p-2 md:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-auto h-full">
          
          <h1 className="text-4xl md:text-5xl dark:text-white text-center p-4"> Title </h1>

          <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="grid grid-cols-1 md:grid-cols-2 sm:mt-5 lg:grid-cols-4 pt-2 m-10">

            {[...new Array(10)].map((i) => (
              <div className="relative group block p-2 h-full w-full">
                <Card>
                  <CardTitle>
                    item {i}
                  </CardTitle>
                  <CardDescription>
                    The primary purpose of photosynthesis in plants is to convert light energy from the sun into chemical energy stored in glucose, a sugar that serves as food for the plant. Oxygen is also released as a byproduct during this process.
                  </CardDescription>
                </Card>
                </div>
            ))}

          </motion.div>

        </motion.div>
        ))}
        
      </div>

    </main>
    
  )
}

export const Card = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className="transition ease-in-out delay-150 rounded-lg h-full w-full p-4 overflow-hidden
       bg-black border
       dark:border-white/[0.2] hover:border-slate-700 hover:border-8 hover:p-1 relative z-20">

      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
      {children}
    </h4>
  );
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p
      className="text-zinc-400 tracking-wide leading-relaxed text-sm">
      {children}
    </p>
  );
};

export default Flashcards