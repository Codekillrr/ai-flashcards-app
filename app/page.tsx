"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main>
    <div className='bg-gradient-to-t from-slate-900 to black fixed w-full h-full z-0' ></div>

        <div className="relative flex flex-col gap-4 items-center justify-center pl-5 my-20 mb-10 m-auto w-3/4">

            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center p-4 px-20 border-b-[1px] border-white">
            FlashTellect
            </div>

            <section className="text-center w-full ">
                <h2 className='text-3xl p-5'>Revolutionize Your Learning with AI</h2>
                <div className="flex flex-row justify-centre w-full">
                    <div className='border-r text-left w-full p-10'>
                        <h3 className="text-xl pl-4">🚀 Why Choose FlashTellect?</h3>
                        <div className='p-4'>
                            <ul className="">
                                <li><strong>[Key Feature 1]</strong>: Brief description of how this feature benefits the user.</li>
                                <li><strong>[Key Feature 2]</strong>: Brief description of another significant feature.</li>
                                <li><strong>[Key Feature 3]</strong>: Highlight a unique or standout feature.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='text-left w-full p-10'>
                        <h3 className="text-xl pl-6">🎯 What You Can Achieve with FlashTellect</h3>
                        <div className='p-6 py-4'>
                            <ul className="">
                                <li><strong>[Benefit 1]</strong>: Explain how your app helps users accomplish something important.</li>
                                <li><strong>[Benefit 2]</strong>: Describe another benefit that addresses a common user pain point.</li>
                                <li><strong>[Benefit 3]</strong>: Mention a benefit that distinguishes your app from competitors.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <div className="flex flex-row gap-20 items-center w-1/3 justify-around m-10 p-25" >
                <Link href={'/signup'} passHref className='w-full'>
                    <button className="bg-black w-full transition-all duration-300 hover:border-4 hover:font-bold hover:border-slate-700 hover:scale-105 dark:bg-white rounded-full text-white dark:text-black hover:py-1 hover:px-2 px-3 py-2">
                        Signup
                    </button>
                </Link>
                
                <Link href={'/login'} passHref className='w-full'>
                    <button className="bg-black w-full transition-all duration-300 hover:border-4 hover:font-bold hover:border-slate-700 hover:scale-105 dark:bg-white rounded-full text-white dark:text-black hover:py-1 hover:px-3 px-4 py-2">
                    Login
                    </button>  
                </Link>

            </div>
        </div>

        <div className="relative flex flex-col gap-4 items-center justify-center my-5 m-auto w-[85%]">
            <section className="w-full text-center px-20 py-10 flex flex-col rounded-2xl border border-neutral-700 bg-slate-950">

                <h3 className='text-5xl pb-10 my-10' >
                    🖥️ How It Works
                </h3>

                <motion.div
                className="w-[50vw] h-[40vh] text-left mr-auto flex items-center justify-center border-4 border-neutral-500 rounded-lg px-2 py-2 mb-20 shadow-md bg-black"
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        delay: 0.3,
                        duration: 0.3 // Animation duration
                    }
                }}
                viewport={{ once: true }}
                >
                    <p className='text-2xl p-6'><strong>Step 1</strong>:<br/> Briefly describe the first step in using the app.</p>
                </motion.div>

                <motion.div
                className="w-[50vw] h-[40vh] text-left ml-auto flex items-center justify-center border-4 border-neutral-500 rounded-lg px-2 py-2 my-5 mb-20 shadow-md bg-black"
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: 50 
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        delay: 0.3,
                        duration: 0.3 // Animation duration
                    }
                }}
                viewport={{ once: true }}
                >
                    <p className='text-2xl p-6'><strong>Step 2</strong>:<br/> Explain the next step, highlighting ease of use or efficiency.</p>
                </motion.div>

                <motion.div
                className="w-[50vw] h-[40vh] text-left mr-auto flex items-center justify-center border-4 border-neutral-500 rounded-lg px-2 py-2 my-5 mb-20 shadow-md bg-black"
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        delay: 0.3,
                        duration: 0.3 // Animation duration
                    }
                }}
                viewport={{ once: true }}
                >
                    <p className='text-2xl p-6'><strong>Step 3</strong>:<br/> Finish with the final step, emphasizing the result or output.</p>
                </motion.div>

                
            </section>
        </div>

        <div className="text-center relative w-full my-20 px-20 py-20 border-t border-b border-neutral-700 bg-slate-950">
            <h3 className='text-4xl pb-10'>🔗 Get Started Today</h3>
            <Link href={'/signup'} passHref className='w-full'>
                <button className="bg-black w-[30vw] transition-all duration-300 hover:border-4 hover:font-bold hover:border-slate-700 hover:scale-105 dark:bg-white rounded-full text-white dark:text-black hover:py-1 hover:px-2 px-3 py-2">
                    Sign Up For Free
                </button>
            </Link>
        </div>

        <div className='text-center relative m-5'>
            <div className="pb-4">
                <h3>Additional Links:</h3>
                <a href="#">Pricing</a> | 
                <a href="#"> Features</a> | 
                <a href="#"> Contact Us</a>
            </div>

            <h3>Follow Us: </h3>
            <p>Social Media: 
                <a href="#"> Twitter</a> | 
                <a href="#"> Facebook</a> | 
                <a href="#"> LinkedIn</a>
            </p>
           
        </div>

                

        <footer className="text-center relative">
            <div className="text-center">
            <p className='mb-5'>&copy; 2024 FlashTellect. All rights reserved.</p>
            </div>
        </footer>

    </main>

  )
}

export default Home