import React from "react";
import GroupImage from './images/GroupImage.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




export default function Leftbar() {
    const value = 60;
    return (
        <div className="bg-gray-100 ">
            <div className="xxs:h-screen p-3 shadow w-70 sm:h-full lg:fixed  bg-white rounded-l-3xl" >
                <div className="flex justify-between mt-16 m-8">
                    <div className="w-6 h-6 rounded-full bg-gray-300 "></div>
                    <div className="w-6 h-6 rounded-full bg-gray-300 "></div>
                </div>

                <div>
                    <div className="flex justify-center">
                       <h1 class="font-semibold text-black text-[20px] ml-1 mt-5">Statistics</h1>
                    </div>
                    <div className="">
                        <div className="m-4 w-50 h-10 mt-5 flex justify-between bg-gray-200 text-gray-400 text-xs rounded-full">
                            <div><h1 className="flex p-1 justify-start mx-10 ">downloads <br></br> this week</h1></div>
                            <div className="w-10 p-1">
                                  <CircularProgressbar value={value} strokeWidth={14} background text={`${value}`} styles={buildStyles({
                                                                pathColor: "#C51A2D",
                                                                trailColor: "#D9D9D9",
                                                                backgroundColor: "#FFFFFF",
                                                                textColor: "#7a7a7a",
                                                                textSize:"42",
                                                                rotation: 0.5 + (1 - value / 100) / 2
                                 })}/>
                            </div>
                        </div>

                        <div className="m-4 w-50 h-10 mt-5 flex justify-between bg-gray-200 text-gray-400 text-xs  rounded-full">
                            <div><h1 className="flex p-1 justify-start mx-10">available <br></br> space</h1></div>
                            <div className="w-10 p-1">
                                  <CircularProgressbar value={20} strokeWidth={14} background text={`${20}`} styles={buildStyles({
                                                                pathColor: "#C51A2D",
                                                                trailColor: "#D9D9D9",
                                                                backgroundColor: "#FFFFFF",
                                                                textColor: "#7a7a7a",
                                                                textSize:"42",
                                                                rotation: 0.5 + (1 - value / 100) / 2
                                 })}/>
                            </div>
                        </div>

                        <div className="m-4 w-50 h-10 mt-5 flex justify-between bg-gray-200 text-gray-400 text-xs  rounded-full">
                            <div><h1 className="flex p-1 justify-start mx-10">shared<br></br> files </h1></div>
                            <div className="w-10 p-1">
                                  <CircularProgressbar value={40} strokeWidth={14} background text={`${40}`} styles={buildStyles({
                                                                pathColor: "#C51A2D",
                                                                trailColor: "#D9D9D9",
                                                                backgroundColor: "#FFFFFF",
                                                                textColor: "#7a7a7a",
                                                                textSize:"42",
                                                                rotation: 0.5 + (1 - value / 100) / 2
                                 })}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-52 flex justify-center md:flex lg:bottom-0  md:justify-center sm:flex sm:justify-center xs:flex xs:justify-center xxs:flex xxss:justify-center">
                    <img className=" lg:bottom-20 md:bottom-60 w-52" src={GroupImage}  alt="image"/>
                </div>
                <button class="flex justify-center bg-red-800 lg:w-full xxs:w-60 xs:60 md:60 m-auto lg:bottom-0 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full">Submit</button>

            </div>
        </div>
    );
}
