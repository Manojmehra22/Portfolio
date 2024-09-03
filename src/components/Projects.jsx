import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div data-aos="zoom-in" name="Projects" className="flex  justify-center">
      <h1 className="mt-[30px] bg-orange-300 border">
        Working on Projects ,coming soon......!
      </h1>
    </div>
  );
}

export default Projects;
