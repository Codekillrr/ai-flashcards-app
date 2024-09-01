"use client";

import React from 'react';

const Home = () => {
  return (
    <main>


        <div className="relative flex flex-col gap-4 items-center justify-center pl-5 my-20 m-auto w-3/4">

            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center p-4 px-20 border-b-[1px] border-white">
            FlashTellect
            </div>

            <section className="text-center w-full ">
                <h2 className='text-3xl p-4'>Revolutionize Your Learning with AI</h2>
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

            <div className="flex flex-row gap-20 items-center w-1/3 justify-around p-25" >

                <button className="bg-black w-full transition-all duration-300 hover:border-4 hover:font-bold hover:border-slate-700 hover:scale-105 dark:bg-white rounded-full text-white dark:text-black hover:py-1 hover:px-2 px-3 py-2">
                    Sign Up
                </button>
                
                <button className="bg-black w-full transition-all duration-300 hover:border-4 hover:font-bold hover:border-slate-700 hover:scale-105 dark:bg-white rounded-full text-white dark:text-black hover:py-1 hover:px-3 px-4 py-2">
                    Login
                </button>  

            </div>

            <section>

                <h3>🖥️ How It Works</h3>
                <ol className="steps">
                <li><strong>Step 1</strong>: Briefly describe the first step in using the app.</li>
                <li><strong>Step 2</strong>: Explain the next step, highlighting ease of use or efficiency.</li>
                <li><strong>Step 3</strong>: Finish with the final step, emphasizing the result or output.</li>
                </ol>

                <h3>💬 What Our Users Say</h3>
                <blockquote>
                <p><strong>User Testimonial 1</strong>: "A brief but powerful quote from a satisfied user."</p>
                </blockquote>
                <blockquote>
                <p><strong>User Testimonial 2</strong>: "Another testimonial highlighting a different aspect of the app."</p>
                </blockquote>

                <div className="cta">
                <h3>🔗 Get Started Today</h3>
                <a href="#">Sign Up for Free</a>
                </div>

                <div className="cta">
                <h3>Additional Links:</h3>
                <a href="#">Pricing</a> | 
                <a href="#">Features</a> | 
                <a href="#">Contact Us</a>
                </div>

                <h3>👥 About Us</h3>
                <p>A short paragraph about the team behind the app, your mission, and what drives you.</p>

                <h3>📢 Follow Us</h3>
                <p>Social Media Links: 
                <a href="#">Twitter</a> | 
                <a href="#">Facebook</a> | 
                <a href="#">LinkedIn</a>
                </p>
            </section>
        </div>

        <footer className="footer">
            <div className="container">
            <p>&copy; 2024 FlashTellect. All rights reserved.</p>
            </div>
        </footer>
    </main>

  )
}

export default Home