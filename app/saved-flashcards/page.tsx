"use client";

import { motion } from "framer-motion";
import React from 'react'
import { useState } from "react";
import Navbar from "@/components/Navbar";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SavedFlashcards = () => {
  const [flashcardCollection, setFlashcardsCollection] = useState(
    [
      {
        title: 'The User made title',
        flashcards:[
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
        ] 
      }, 
      {
        title: 'The User made title',
        flashcards:[
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
          {
            front: 'This the the front with the Question?',
            back: 'This is the back with the Answer.This is the back with the Answer.This is the back with the Answer.This is the back with the Answer.This is the back with the Answer.'
          },
          {
            front: 'This the the front with the Question?',
            back: 'This is the back with the Answer.This is the back with the Answer.This is the back with the Answer.This is the back with the Answer.This is the back with the Answer.'
          },
        ] 
      }, 
      {
        title: 'The User made title',
        flashcards:[
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
          {
            front: 'This the the front with the Question?',
            back: 'This is the back with the Answer.'
          },
        ] 
      }, 
      {
        title: 'The User made title',
        flashcards:[
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
        ] 
      }, 
    ]
  );

  const [flipped, setFlipped] = useState(
    flashcardCollection.map(collection => new Array(collection.flashcards.length).fill(false))
  );

  const flipCard = (collectionIndex: number, flashcardIndex: number) => {
    setFlipped(prevFlipped => {
      const newFlipped = prevFlipped.map(arr => [...arr]);  // Create a deep copy of the 2D array
      newFlipped[collectionIndex][flashcardIndex] = !newFlipped[collectionIndex][flashcardIndex];  // Toggle the specific flashcard
      return newFlipped;
    });
  };

  const func = () => { console.log('hello') };

  return (
    <main>
      <Navbar />
      <div className='bg-gradient-to-t from-slate-900 fixed w-full h-full z-0' ></div>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4 py-10 my-10 mx-5">

        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center p-4 border-b-[1px] border-white">
          Saved Flashcards
        </div>

      </div>

      <div className="flex relative flex-col flex-1 mx-20">
        {flashcardCollection.map((flashcardList, collectionIndex) => (
          <motion.div 
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.2,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        className="m-10 p-2 md:p-10 rounded-2xl border border-neutral-700 bg-slate-950 w-auto h-full">
          
          <h1 className="text-4xl md:text-5xl dark:text-white text-center p-4"> {flashcardList.title} </h1>

          <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.2,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 sm:mt-5 lg:grid-cols-4 pt-2 m-10">

            {flashcardList.flashcards.map((flashcard, flashcardIndex) => (
              <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => flipCard(collectionIndex, flashcardIndex)} 
              className="relative text-left group block p-2 h-full w-full">

                {flipped[collectionIndex][flashcardIndex] ? (
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

        </motion.div>
        ))}
        
      </div>

    </main>
    
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
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

export default SavedFlashcards