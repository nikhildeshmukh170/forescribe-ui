"use client";

import React from "react";

type CardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgColor: string ;
};

const Card = ({ title, subtitle, icon, bgColor }: CardProps) => {
  return (
    <div className="relative w-[300px] flex flex-col justify-center items-center rounded-xl bg-[#ffffff]/50 opacity-20 hover:opacity-40 transition-opacity duration-300">
      
      <div className="relative p-4 w-full flex flex-col justify-center items-center rounded-xl bg-[#ffffff] ">
        
        <div className="relative flex p-4 items-center justify-center w-full h-auto rounded-xl mb-12" style={{ backgroundColor: bgColor }}>
          <div className="relative w-24 h-24 rounded-full flex items-center justify-center">
            
            {icon}
          
          </div>
        </div>

        <div className="relative flex flex-col p-4 items-center justify-center w-full h-auto rounded-3xl">
          <div className="font-semibold text-2xl text-blue-950">
            {title}
          </div>
          <div className="text-lg font-light text-gray-600">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;