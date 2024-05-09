import React, { useEffect, useRef } from "react";
import { About, LichSuHinhThanh, ThanhVienSangLap } from "components";

const Introduce = () => {
  const introRef = useRef(null);

  useEffect(() => {
    introRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="w-full" ref={introRef}>
      <div className="w-full mb-4" id="top">
        <img
          src="https://t4.ftcdn.net/jpg/02/27/88/83/240_F_227888305_Ji8fPeditvKC5VAcyYSGZ4SYxOIA2FJC.jpg"
          alt="bg-introduce"
          className="w-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-y-8">
        <About />
        <LichSuHinhThanh />
        <ThanhVienSangLap />
      </div>
    </div>
  );
};

export default Introduce;
