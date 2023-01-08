import React from "react";
import music from './kahani-suno.mp3'
import music2 from './hymen for the weekend.mp3';
import music3 from './dil dil pakistan.mp3'
import music4 from './on my way.mp3'
import music5 from './Dunyia.mp3'
import dilimg from './Dil-Dil-Pakistan-Show.jpg'
import hymnfor from './hymen for weekend.jpg'
import kahanisunoimg from './kahani-suno-lyrics.jpg';
import duniaimg from './dunia.jpg';
import onmywaying from './on my way.jpg';
import { useState } from "react";
import './audio.css'
import {AiFillPlayCircle}  from 'react-icons/ai'
import {BiSkipNextCircle} from 'react-icons/bi'
import {BiSkipPreviousCircle} from 'react-icons/bi'
import {AiOutlinePause} from 'react-icons/ai';
import {FiMusic} from 'react-icons/fi'

const Aaudio =()=>
{
    
const sound = new Audio(music);
const sound2 = new Audio(music2);
const sound3 = new Audio(music3);
const sound4 = new Audio(music4);
const sound5 = new Audio(music5);

const time = sound.duration;

const audioObj =[{
    imgg :kahanisunoimg,
    song : sound,
    Name: "Kahani Suno ",
    singer: "Kafi Khalil"
},
{
    imgg : hymnfor,
    song : sound2,
    Name: "Hymen for the Weekend ",
    singer:"Allan Walker"
},
{
    imgg :onmywaying,
    song : sound4,
    Name: "On my Way ",
    singer:"Allan Walker"
},

{
    imgg : dilimg,
    song : sound3,
    Name: "Dil Dil Pakistan ",
    singer:"Junaid Jamshed"
},
{
    imgg : duniaimg,
    song : sound5,
    Name: "Dunyia ",
    singer :"Arijit Singh"
}]

const [arrayindex, setarratindex]= useState(0);
const [showani,setshowani] = useState(false);
let [current, setcurrent] = useState(0);
const[playing,setplaying] = useState("Play")
// let [showsongrunning, setshowsongrunning] = useState(true);
// let [showsongstop, setshowsongstop] = useState(true);

const rand1 =Math.floor(Math.random() * 256);
const rand2 =Math.floor(Math.random() * 256);
const rand3 =Math.floor(Math.random() * 256);

const back ={
    backgroundColor: `rgb(${rand1}, ${rand2}, ${rand3})`
}


const nextclic =()=>
{
    setarratindex(arrayindex+1);
    audioObj[current]?.song.pause();
    setcurrent(current+1);
    if(current === 4)
    {
      setcurrent(0);
      setarratindex(0);
    }

  
}

const prevclic=()=>
{
    setarratindex(arrayindex-1)
    audioObj[current]?.song.pause();
    setcurrent(current-1);

    if(current === 0)
    {
      setcurrent(4);
      setarratindex(4);
    }
}


   const playclic =()=>
   {
    
    
    audioObj[current]?.song.play();
    
   }

   const pausesong=()=>
   {
      audioObj[current]?.song.pause(); 
   }

//    const show=()=>
//    {
//     setshowani(true)
//    }

//    const gaib=()=>
//    {
//     setshowani(false)
//    }



    return (

        <div>
        <div className="headingaudio"> <h1>Music Player</h1></div> 

        <div className="mainaudio" style={back}>

           
           <div className="audioimg"> <img src={audioObj[arrayindex]?.imgg}/></div>
           <div className="audiosongname"><h2>{audioObj[arrayindex]?.Name}</h2></div> 
           <div className="audiosingername"> <h3>{audioObj[arrayindex]?.singer}</h3></div>


           
           <div className="butons">
            <button className="btnnn" onClick={prevclic}><BiSkipPreviousCircle/></button>
            <button className="btnnns" onClick={playclic} > {playing} </button> 
             <button className="btnnns" onClick={pausesong} > Pause</button>
            <button className="btnnn"  onClick={nextclic}><BiSkipNextCircle/> </button>
            
            </div>

         <div className="animatio">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
            <div className="line5"></div>
            <div className="line6"></div>
            <div className="line7"></div>
           </div>

            </div>

            <div className="foot">
                <p>	&#169; ASHAB RAHMAN. All Rights Reserved | Terms and Conditions</p>
            </div>

        
          
      
        </div>
    )
}

export default Aaudio;