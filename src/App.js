import React,{useState} from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";


import "./App.css";
import Auth from "./components/Auth/Auth";

import FaceInputField from "./components/FaceInputField/FaceInputField"
import ParticlesBackground from "./components/Particles/particlesBackground";




const initalState={
  id:"",
  name: "",
  email: "",
  password: "",
  entries:0,
  joined:''
}

export default function App() {
  const [formData, setFormData] = useState(initalState);




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  const loadUser=(data)=>{
 setFormData({
    id:data.id,
    name:data.name,
    email:data.email,
    entries:data.entries,
    joined:data.joined
    })
  }
  

  

const handleImage=async(event)=>{
event.preventDefault();
  const user =  await axios.put("http://localhost:4000/auth/image",{
    id:formData.id
   })

   if(user.data){
   setFormData({
    name:formData.name,
    entries:user.data
   })
   }


}
  return (
    <div className="app">
      <ParticlesBackground />
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth handleChange={handleChange}  formData={formData} loadUser={loadUser}/>} />
           <Route path="/" element={<FaceInputField handleImage={handleImage} name={formData.name} entries={formData.entries}/>} />
        </Routes>
      </Router>
    </div>
  );
}