import React from "react";
import loginImg from "./images/loginImg.png";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 h-screen w-screen">
        <img
          className="flex h-screen md:absolute xxs:hidden xs:hidden sm:hidden md:inline md:w-full"
          src={loginImg}
          alt="HeadPhoto"
        />
        <div className="bg-gray-300 h-screen w-screen flex justify-center items-center xxs:p-10">
          <div className="w-128 h-100 bg-white rounded-2xl flex">
            <div className="flex w-full">
              <div className="md:w-1/2 xs:hidden xxs:hidden sm:hidden md:inline">
                <div className="md:w-100 h-full flex items-center">
                  <h3 className="md:absolute text-white text-xs lg:px-32 md:px-32 ">
                    WELCOME <br></br> TO
                    <h1 className="md:absolute text-white text-4xl font-semibold">
                      FPS
                    </h1>
                  </h3>
                </div>
              </div>

              <div className="md:w-1/2 sm:p-20 xxs:w-full xxs:p-10">
                <div className="md:absolute">
                  <div className="flex justify-center pt-12 mb-10">
                    <h1 className="text-lg text-gray-400 font-medium">LOGIN</h1>
                  </div>
                  <form className="w-full">
                    <div className="mb-4">
                      <input
                        className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] bg-gray-200 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] bg-gray-200 shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-xs"
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      className="bg-red-700 hover:bg-red-900 rounded-full text-white w-full font-bold py-2 px-4  focus:outline-none focus:shadow-outline text-sm"
                      type="button" onClick={()=>{navigate('/')}}
                    >
                      LOGIN
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
