import React from 'react';
          

export const FaceDetection = ({imageUrl,canvasRef,faceDetectionData}) => {
  return (
    <div className="container grid grid-row-2  bg-blue-900 rounded-lg mt-5 ">
    <div className='m-auto my-5 '>
{imageUrl && (
  <>
  <div className=' flex  relative'>
  <img src={imageUrl} width="400"  height="400" className='rounded-xl' alt='face'/>
  <canvas className= ' absolute top-0 left-0 w-full h-full   s ' ref={canvasRef} width={'400'} height={'400'}/>
  </div>
    {faceDetectionData &&
      faceDetectionData.map((detection, i) => (
        <div className='text-black font-medium grid justify-center grid-flow-col gap-4 bg-blue-200  my-3 rounded' key={i}>
        <div> 
        Age: {
           Math.round(detection.age)

        }
        </div> 
        <div>
        Gender: {detection.gender}
        </div>
        </div>
      ))}
  </>
)}
</div>
</div>
  );
};

