import  {useEffect, useRef, useState} from 'react';
import './App.css';
import ParticlesBackground from './ParticlesBackground';
import videoBg from './assests/videoBg.mp4'

// import Particle from './components/Particle';


function App() {


  const [text,setText]=useState('')
  const textRef=useRef()
  let colors= ["#ffff00","#90ee90","#ffa500","#ff68ff","a9a9e7"]

  const gettext=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data) => {
      let randomnum = Math.floor(Math.random() * data.length)
      setText(data[randomnum])
    })
  }

  useEffect(()=>{
    gettext();
  },[])

  useEffect(()=>{
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
  },)

  return (
    <>
    
    <div className=' min-h-screen flex'>
      {/* <Particle/> */}
      
      <video className=' w-full h-screen object-cover ' src={videoBg} autoPlay loop muted/>
      <h1 className=' absolute text-4xl text-red-600 font-black font-mono ml-[430px] bg-[#333] mt-12 rounded-[4px]'>Random Text Generator</h1>
      <div className=' absolute ml-[440px] mt-[90px] text-white w-[100%] max-w-[400px] min-h-[180px] p-[30px] bg-[#333] rounded-[4px] shadow-xl shadow-black flex flex-col justify-between items-center '>
        
        <h1 className='text-3xl underline font-black'>Title</h1>
        <p className='text-3xl  break-words text-center font-extrabold' ref={textRef}>{text.title}</p>
        <p className='text-xl break-words mt-8 font-bold' ref={textRef}>{text.body}</p>
        <div className=''>
        <button onClick={gettext} className=' ml-[12px] mt-5 bg-[#6b68ff] duration-500 font-extrabold hover:bg-green-500 rounded-[4px] w-[100px] cursor-pointer px-[10px] py-2 '>Get Text</button>
        </div>
      </div>
      </div>
      {/* <ParticlesBackground/> */}
    </>
  );
}

export default App;
