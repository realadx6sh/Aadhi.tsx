import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#0000AA] font-dos select-none">
      <div className="flex flex-col items-center justify-center w-2xl h-screen font-dos gap-10">
        <h2 className="text-[17px] text-[#0000AA] bg-[#AAAAAA] px-1">
          404 - Unexpected Portfolio Exception
        </h2>
        <span className="flex flex-col items-start justify-center w-full">
          {" "}
          <p className="text-[17px] text-[#ffffff] pl-1">
            A critical navigation error has occurred.
          </p>
          <p className="text-[17px] text-[#ffffff] pl-1">
            The requested resource failed to initialize.
          </p>
        </span>
        <span className="flex flex-col items-start justify-center w-full">
          {" "}
          <p className="text-[17px] text-[#ffffff] pl-1">Possible causes:</p>
          <p className="text-[17px] text-[#ffffff] pl-1">
            - Curiosity exceeded available pages
            <br />- The link escaped into the void
            <br />- The content is still compiling
            <br />- Reality encountered an undefined route
          </p>
        </span>
        <span className="flex flex-col items-start justify-center w-full">
          {" "}
          <p className="text-[17px] text-[#ffffff] pl-1">
            Technical information:
          </p>
          <p className="text-[17px] text-[#ffffff] pl-1">
            Error: 404 : RESOURCE_NOT_FOUND
            <br />
            Module: aadhi.tsx
            <br />
            Status: Unrecoverable
          </p>
        </span>
        <span className="flex flex-col items-start justify-center w-full">
          {" "}
          <p className="text-[17px] text-[#ffffff] pl-1">Recommended action:</p>
          <p className="text-[17px] text-[#ffffff] pl-1">
            Press H to return Home.
            <br />
            Press any key to continue _
            <br />
          </p>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
