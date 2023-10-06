import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Christian Kelly
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Offensive Security & Penetration Testing
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am passionate and enthusiastic about cybersecurity. In my free time I
        enjoy testing my current knowledge and expanding it in other areas
        through online challenges and CTFs, on popular platforms such as
        "TryHackMe" and "HackTheBox". I also have a blog where I document
        security research projects I have conducted independently in areas of
        cybersecurity that peak my interest such as:
        <br />
        securing wifi networks,software defined radio and programming, to
        develop tools and understand malware using Python. Please see links
        below for examples from my blog. Also take a look at my timeline to
        better understand my story so far.
        {""}
        <a
          //        href="https://youtube.com/fknight"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        ></a>{" "}
      </p>
    </div>
  );
}

export default Intro;
