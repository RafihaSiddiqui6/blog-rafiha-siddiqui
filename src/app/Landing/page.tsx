"use client"

import React from "react";
import Link from "next/link";
import { FileText,SquarePen } from "lucide-react";
import { HeartPulse } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-12"
        style={{ backgroundImage: 'url("/gif.mp4")', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
         Welcome to<span className="text-blue-500"> <br/>Health & Fitness  blogs <HeartPulse /> </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
        Empowering Your Journey to a Healthier, Stronger You.
        </p>
      </div>

  

      <div className="grid gap-6 md:grid-cols-1">
        <div className=" border rounded-lg shadow-lg transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">Write something about health and fitness here.</h2>
          <p className="mt-2">
          In todays fast-paced world, taking care of our health has never been more important.
           Health and fitness are not just about looking good; they are about feeling great, boosting energy, and ensuring
          that we are living our best lives, physically and mentally. Whether it is through regular exercise,
          balanced nutrition, or focusing on mental well-being, a healthy lifestyle is essential for long-term happiness 
          and success.


          </p>
          <button className="mt-4 px-4 py-2 font-medium border rounded-full transition-all hover:bg-opacity-20 hover:bg-pink-400">
            <Link href={"/input"} className="flex justify-center items-center gap-2">
            <SquarePen className="text-blue-600"/>
            <span>Share some tips by click here</span>
            </Link>
          </button>
        </div>

        <div className=" border rounded-lg shadow-lg transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">Investing in your health today will pay off for years to come</h2>
          <p className="mt-2">
          Ready to take the first step towards a healthier you? Dive into our blog for expert tips and
           real-life success stories!
          </p>
          <button className="mt-4 px-4 py-2 font-medium border rounded-full transition-all hover:bg-opacity-20 hover:bg-pink-400">
            <Link href="/blogs" className="flex justify-center items-center gap-2">
            <FileText className="inline text-blue-600"/>
            <span>Discover Fitness tips by click here</span>
            </Link>
          </button>
        </div>

       
      </div>
    </div>
  );
};

export default LandingPage;
