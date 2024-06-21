"use client";
import LoginWith from "@/components/LoginWith";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex h-full justify-center items-center ">
      <div className="w-1/2">
        <p className="lg:text-8xl text-4xl font-bold">Human stories & ideas</p>
        <p className="my-3">
          A place to read, write, and deepen your understanding
        </p>
        <LoginWith
          text="Start Reading"
          className="border w-full px-7 text-white py-3 rounded-full bg-gray-900"
        />
      </div>
      <div className="my-12 hidden lg:block">
        <Image
          src={"/flower.avif"}
          width={600}
          height={600}
          alt=""
          className="rounded"
        />
      </div>
    </div>
  );
};

export default page;
