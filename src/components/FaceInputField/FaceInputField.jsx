import React, { useState,useEffect,useRef} from 'react';

import * as faceapi from 'face-api.js';
import uploadImg from "../../image/upload.png"
import {FaceDetection} from '../FaceDetection/FaceDetection';
import Navbar from '../Navbar/Navbar';

const FaceInputField = ({name,entries,handleImage}) => {

  const [imageUrl, setImageUrl] = useState('');
  const [faceDetectionData, setFaceDetectionData] = useState('');
  const [count,setCount]=useState(0)

  const imageInputRef = useRef();
  const canvasRef = useRef()

  useEffect(()=>{
   const loadModels =  ()=>{
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
       faceapi.nets.faceExpressionNet.loadFromUri('/models'),
       faceapi.nets.ageGenderNet.loadFromUri('/models'),
    ]).then(console.log("models loaded"))
    .catch(e => console.log(e))
   }
   imageInputRef.current && loadModels()
   if(faceDetectionData){
    window.scrollTo(0, document.body.scrollHeight);
  }
  },[faceDetectionData])

   const handleChange=()=>{

    const image = imageInputRef.current.files[0];
    setImageUrl(URL.createObjectURL(image));
    
  }
  const handleClick=()=>{
    setImageUrl("")
    setFaceDetectionData('');
  }
  const handleImageUpload = async (e) => {

    const image = imageInputRef.current.files[0];
  
    // Convert Blob object to HTMLImageElement
    const imageElement = new Image();
    imageElement.src = URL.createObjectURL(image);
    await imageElement.decode();
  
    // Detect faces in image
    const detections = await faceapi
      .detectAllFaces(imageElement, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      .withAgeAndGender();
  
    setFaceDetectionData(detections);
  
    canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(imageElement);
    faceapi.matchDimensions(canvasRef.current, {
      width: 350,
      height: 400,
    });
    const resized = faceapi.resizeResults(detections, {
      width: 350,
      height: 400,
    });
    const detectionCanvas = canvasRef.current.getContext('2d');
    detectionCanvas.lineWidth = 4;
    detectionCanvas.strokeStyle = 'blue';
  
    handleImage(e);
    faceapi.draw.drawFaceExpressions(detectionCanvas, resized);
    faceapi.draw.drawDetections(detectionCanvas, resized);
  };
  
 
  return (
    <>
    <Navbar/>
  <div className="container h-96 w-auto items-center m-auto">
    <div className="container grid grid-row-2 bg-blue-200 rounded-lg mt-5  ">
    <div className="flex   items-center justify-center">
      <div className="flex items-center justify-center" >
        <button className="m-8 p-4 shadow-lg rounded-lg hover:ring-2" >
        <label htmlFor="file">
        <img src={uploadImg} alt="" className="h-9 w-9 m-auto " />
          </label>
          <label  className="text-black m-4 font-light">
        Choose your image
          </label>
        </button>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          ref={imageInputRef}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
    </div>
    <div
      className="flex items-center justify-center text-4xl font-bold text-black"
      style={{ fontFamily: "Syne Mono" }}
    >
    {`${name},your current entrie count is.....`}
      <span className="text-black">{entries}</span>
    </div>
  
    <button
      className="box-border  font-mono relative z-30 m-2 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-900 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
      
      onClick={handleImageUpload}
    >
      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span
        className="relative z-20 flex items-center text-sm"
      >
        <svg
          className="relative w-5 h-5 mr-2 text-slate-400"
          fill="none"
          strokeWidth="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            strokeWidth={"2"}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
        Click Me
      </span>
    </button>
  
    </div>
    <div className='mb-5'>
    { imageUrl&&
     <FaceDetection
       imageUrl={imageUrl}
       canvasRef={canvasRef}
       faceDetectionData={faceDetectionData}
     />}
    </div>
  </div>
    </>
  );
};
export default FaceInputField;
