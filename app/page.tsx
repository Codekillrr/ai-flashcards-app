"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
//import { LoadingCards, Card, CardTitle, CardDescription } from "../components/Cards";

const items = ["The primary purpose of photosynthesis in plants is to convert light energy from the sun into chemical energy stored in glucose, a sugar that serves as food for the plant. Oxygen is also released as a byproduct during this process.", 'rock', "hello 2", "right", "foot", "up", "slide"];

export default function Home() {
  const [generated, setGenerated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(true);

  return (
    <main>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4 py-10 my-10 mx-5">

        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center p-4 border-b-[1px] border-white">
          Generate Flashcards With AI
        </div>

        <div className="flex flex-row gap-2 items-center justify-center p-5" >

          <input className="flex-1 min-h-[50px] md:w-[700px]
          rounded-full p-2 pl-4 focus:border-white focus:border-4 
          focus:ring-0 focus:outline-none border-black text-white bg-opacity-40 bg-slate-700" 
          placeholder="Type here..." type="text" /> 
          {/* value={input} onChange={handleInputChange}  */}

          <button onClick={() => setSubmitted(!submitted)} className="bg-black transition-all duration-300 hover:border-2 hover:border-slate-700 hover:scale-105 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Generate
          </button>

        </div>

      </div>

      {submitted && (<div className="flex flex-1">
        <motion.div 
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.2,
            ease: "easeInOut",
          }}
          className=" m-10 p-2 md:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-full h-full">
          {/* <LoadingCards /> */}

          <h1 className="text-4xl md:text-5xl dark:text-white text-center p-4"> Flashcards </h1>

          {loaded ? (<>
            <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="grid grid-cols-1 md:grid-cols-2 sm:mt-5 lg:grid-cols-4 pt-2 m-10">

                {[...new Array(10)].map((i) => (
                  <div className="relative group block p-2 h-full w-full">
                    <Card>
                      <CardTitle>
                        The primary purpose of photosynthesis in plants is to convert light energy from the sun into chemical energy stored in glucose, a sugar that serves as food for the plant. Oxygen is also released as a byproduct during this process.
                      </CardTitle>
                    </Card>
                    </div>
                ))}

            </motion.div>
            <div className="flex items-center justify-center mt-10">
              <button
              className="bg-black dark:bg-white rounded-full w-fit text-white hover:border-2 hover:border-slate-700 transition-all duration-300 hover:scale-105 dark:text-black px-4 py-2">
                Save Flashcards!
              </button>
            </div>
            </>) : <LoadingCards />
            }

        </motion.div>
      </div> )}
    </main>
  );
}

export const LoadingCards = () => {
  return (
    <div className="flex gap-3 m-10">
      {[...new Array(4)].map((i) => (
        <div
          key={"first-array" + i}
          className="h-20 w-full rounded-lg dark:bg-neutral-800 animate-pulse"
        ></div>
      ))}
    </div>
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
      className="text-zinc-400 text-wrap relative mb-4 h-full w-full tracking-wide leading-relaxed text-sm">
      {children}
    </p>
  );
};