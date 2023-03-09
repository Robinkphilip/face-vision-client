import React from "react";

import Navbar from "../Navbar/Navbar";
import FaceInputField from "../FaceInputField/FaceInputField"


const Home = () => {

  return (
    <>
    <Navbar />
    <div className="container h-96 w-auto items-center m-auto">
    <FaceInputField/>
    </div>
    </>

  );
};
export default Home;
