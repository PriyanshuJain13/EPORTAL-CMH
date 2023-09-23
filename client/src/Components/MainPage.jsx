import React from "react";
import bgImage from "../assets/LandingBg.png";

const MainPage = () => {
  let bgStyle = {
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <>
      <div className="p-48 pt-60" style={bgStyle}>
        <div className="space-y-6">
            <h1 className="text-8xl font-bold">CourtConnect</h1>
            <h3 className="text-4xl font-extralight w-1/2">Where cases find clarity - Pre trial Case Management Hearing</h3>
            <button className="btn p-5 text-white">
              <a href="/login" className="font-bold">LogIn</a>  
            </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
