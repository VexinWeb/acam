"use client";
import React, { useState } from "react";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";

// Card of courses not full
const CardMaxCourse = ({
  title,
  date1,
  date2,
  date3,
  location,
  src,
  alt,
  description,
}) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleImageClick = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  const descriptionWithLineBreaks = description
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <div>
      <div className="absolute -rotate-3 opacity-75 z-10 bg-yellow-300 h-10 py-8 px-6 drop-shadow-2xl flex items-center">
        Il reste des places
      </div>
      <div className="h-auto flex flex-col my-12 bg-white p-6 md:flex-row">
        <div
          className="flex items-center border-4 border-yellow-100 md:w-1/2"
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        >
          <Image
            className={`h-96 ${isImageExpanded ? "h-full" : ""}`}
            src={src}
            alt={alt}
            width={800}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="text-black px-0 mt-3 sm:px-3 md:mt-0 md:w-1/2">
          <h3 className="mb-3 ml-7 text-md font-bold sm:text-2xl">{title}</h3>
          <div className="flex gap-2 items-center">
            <div className="w-6 h-10 flex items-center">
              <ScheduleIcon />
            </div>
            <div className="">
              <h4 className="text-md my-1 sm:text-md">{date1}</h4>
              <h4 className="text-md my-1 sm:text-md">{date2}</h4>
              <h4 className="text-md my-1 sm:text-md">{date3}</h4>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-6 h-10 flex items-center">
              <PlaceIcon />
            </div>
            <h4 className="text-md my-1 sm:text-md">{location}</h4>
          </div>
          <p className="mt-3 ml-7 text-sm sm:text-base">
            {descriptionWithLineBreaks}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardMaxCourse;
