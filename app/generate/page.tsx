"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
//import { LoadingCards, Card, CardTitle, CardDescription } from "../components/Cards";

const items = ["The primary purpose of photosynthesis in plants is to convert light energy from the sun into chemical energy stored in glucose, a sugar that serves as food for the plant. Oxygen is also released as a byproduct during this process.", 'rock', "hello 2", "right", "foot", "up", "slide"];

export default function Generate() {
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const [prompt, setPrompt] = useState('');
  const [flashcards, setFlashcards] = useState([
    {
      front: 'This the the front with the Question?',
      back: 'This is the back with the Answer.'
    },
    {
      front: 'This the the front with the Question?',
      back: 'This is the back with the Answer.This is the back with the Answer.This is the back with the Answer.This is the back with the Answer.This is the back with the Answer.'
    },
    {
      front: 'This the the front with the Question?',
      back: 'This is the back with the Answer.'
    },
    {
      front: 'This the the front with the Question?',
      back: 'This is the back with the Answer.'
    },
    {
      front: 'This the the front with the Question?',
      back: 'This is the back with the Answer.'
    },
  ]);
  const [fliped, setFliped] = useState(new Array(flashcards.length).fill(false))

  const handleGenerate = async () => {
    setSubmitted(!submitted);
  }

  const flipCard = (index: number) => {
    setFliped((prevFliped: boolean[]) => {
      const newHash = [...prevFliped];
      newHash[index] = !newHash[index];
      return newHash;
    })
  } 

  return (
    <main>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4 py-10 my-10 mx-5">

        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center p-4 border-b-[1px] border-white">
          Generate Flashcards With AI
        </div>

        <div className="flex flex-row gap-2 items-center justify-center p-5" >

          <input className="flex-1 min-h-[50px] md:w-[700px]
          rounded-full p-2 pl-4 focus:border-slate-700 focus:border-4 
          focus:ring-0 focus:outline-none border-black text-white bg-opacity-40 bg-slate-600" 
          placeholder="Type here..." type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/> 
          {/* value={input} onChange={handleInputChange}  */}

          <button onClick={handleGenerate} className="bg-black transition-all duration-300 hover:font-bold hover:border-4 hover:border-slate-700 hover:scale-105 hover:px-3 hover:py-1 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
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

          <h1 className="text-4xl md:text-5xl dark:text-white text-center p-4"> Flashcards </h1>

          {loaded ? (
            <>
            <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="grid grid-cols-1 md:grid-cols-2 sm:mt-5 lg:grid-cols-4 pt-2 m-10">

              {flashcards.map((flashcard, index) => (
                <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => flipCard(index)} 
                className="relative text-left group block p-2 h-full w-full">
                  <Card>
                      {fliped[index] ? (
                        <>
                          <CardTitle>Answer:</CardTitle>
                          <CardDescription>
                            {flashcard.back}
                          </CardDescription>
                        </>) 
                      : (
                        <CardTitle>
                          {flashcard.front}
                        </CardTitle>)
                      }

                  </Card>
                  </motion.button>
              ))}

            </motion.div>

            <div className="flex items-center justify-center mt-10">
              <button
              className="bg-black transition-all duration-300 hover:font-bold hover:border-4 hover:border-slate-700 hover:scale-105 hover:px-3 hover:py-1 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                Save Flashcards!
              </button>
            </div>

            </>) : <LoadingCards />}

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
      bg-black border hover:border-4 hover:p-3
      dark:border-white/[0.2] hover:border-slate-700 relative z-20">

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