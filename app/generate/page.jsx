"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import Navbar from "@/components/Navbar";
import SpringModal from "@/components/SpringModal";
//import { LoadingCards, Card, CardTitle, CardDescription } from "../components/Cards";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//import { assert } from "console";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Generate() {
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState(new Array(flashcards.length).fill(false))
  const [openSave, setOpenSave] = useState(false);

  const handleGenerate = async () => {
    if(prompt.length === 0) return;
  
    setLoaded(false);
    setSubmitted(true);
  
    fetch('api/gen', {
      method: 'POST',
      headers: {
        'Content-Type': 'text'
      },
      body: prompt,
    })
    .then((res) => res.json())  
    .then((data) => {
      setFlashcards(data);
      setLoaded(true);
    })
    .catch((err) => console.error('Error:', err));
  }

  const flipCard = (index) => {
    setFlipped((prevFliped) => {
      const newHash = [...prevFliped];
      newHash[index] = !newHash[index];
      return newHash;
    })
  } 

  const handleSave = () => {
    //assert(flashcards.length > 0);
    setOpenSave(true);
  }

  return (
    <main>
      <Navbar />
      <div className='bg-gradient-to-t from-slate-900 to black fixed w-full h-full z-0' ></div>

      <div className="relative flex flex-col gap-4 items-center justify-center px-4 py-10 my-10 mx-5">

        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center p-4 border-b-[1px] border-white">
          Generate Flashcards With AI
        </div>

        <div className="flex flex-col gap-2 items-center justify-center p-5" >

          <textarea className="min-h-[15vh] w-[40vw]
          rounded-xl py-4 px-5 mb-4
          focus:border-slate-700 focus:border-4 focus:ring-0 focus:px-4 focus:py-3 focus:outline-none 
          border-black text-white bg-opacity-40 bg-slate-600" 
          placeholder="Type specific topic or source material..." type="text" value={prompt} 
          onChange={(e) => setPrompt(e.target.value)}/> 

          <button onClick={handleGenerate} className="bg-black transition-all duration-300 hover:font-bold hover:border-4 hover:border-slate-700 hover:scale-105 hover:px-3 hover:py-1 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Generate
          </button>

        </div>

      </div>

      {submitted && (<div className="flex relative flex-1">
        <motion.div 
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.2,
            ease: "easeInOut",
          }}
          className=" m-10 p-2 md:p-10 rounded-2xl border border-neutral-700 bg-slate-950 w-full h-full">

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
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => flipCard(index)} 
                className="relative text-left group block p-2 h-full w-full">
                  {flipped[index] ? (
                    <Card className="bg-gradient-to-t from-slate-900">
                      <CardTitle>Answer:</CardTitle>
                        <CardDescription>
                          {flashcard.back}
                        </CardDescription>
                    </Card>) 
                  : (
                    <Card>
                      <CardTitle>
                        {flashcard.front}
                      </CardTitle>
                    </Card>
                    )
                  }
                </motion.button>
              ))}

            </motion.div>

            <div className="flex items-center justify-center mt-10">
              <button onClick={handleSave}
              className="bg-black transition-all duration-300 hover:font-bold hover:border-4 hover:border-slate-700 hover:scale-105 hover:px-3 hover:py-1 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                Save Flashcards!
              </button>
              <SpringModal isOpen={openSave} setIsOpen={setOpenSave} />
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

// export const Card = ({
//   children,
// }) => {
//   return (
//     <div
//     className="transition ease-in-out delay-150 rounded-lg h-full w-full p-4 overflow-hidden
//       bg-black border hover:border-4 hover:p-3
//       dark:border-white/[0.2] hover:border-slate-700 relative z-20">

//       <div className="relative z-50">
//         <div className="p-4">{children}</div>
//       </div>

//     </div>
//   );
// };

export const Card = ({
  className,
  children,
}
// : {
//   className?: string;
//   children: React.ReactNode;
// } 
) => {
  return (
    <div
    className={cn(
      "transition ease-in-out delay-150 rounded-lg h-full w-full p-4 overflow-hidden bg-black border hover:border-4 hover:p-3 dark:border-white/[0.2] hover:border-slate-700 relative z-20",
        className
      )}>

      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>

    </div>
  );
};


export const CardTitle = ({
  children,
}) => {
  return (
    
    <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
      <ReactMarkdown>
        {children}
      </ReactMarkdown>
      
    </h4>
  );
};

export const CardDescription = ({
  children,
}) => {
  return (
    <p
      className="text-zinc-400 text-wrap relative mb-4 h-full w-full tracking-wide leading-relaxed text-sm">
        <ReactMarkdown>
          {children}
        </ReactMarkdown>
      
    </p>
  );
};