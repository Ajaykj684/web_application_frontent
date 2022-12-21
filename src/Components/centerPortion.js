import React from "react";
import folderImage from './images/greyFolder.png'
import folderImage2 from './images/redFolder.png'
import bottomImg from './images/bottomImg.png'
import addImage from './images/addImage.png'



export default function CenterPortion() {
    return (

        <div className="bg-gray-100 lg:h-screen p-6">
            <div className="pt-2">
                <div className="lg:flex md:flex lg:justify-between md:justify-between mt-2">
                    <div className="mb-6  sm:flex xs:flex xxs:flex sm:justify-center xs:justify-center xxs:justify-center">
                       <h1 class=" font-bold  text-red-500  text-[20px] ml-3">FPS</h1>
                    </div>
                    <div class="flex rounded-full sm:flex xs:flex xxs:flex sm:justify-center xs:justify-center xxs:justify-center">
                        <input type="text" class="px-4 border-hidden h-10 py-1 w-60 rounded-full" placeholder="Search..."/>
                        <button class="flex mt-2 justify-center px-4">
                            <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div >
                    <div className="grid mt-6">
                       <h1 class=" text-black font-bold text-[15px] ml-2 mt-1">Recently Used</h1>
                    </div>
                    <div className="lg:flex  justify-around pt-4 w-200 md:max-lg:flex ">
                        <div className="flex sm:mt-2 xs:mt-2 xxs:mt-2 place-content-center items-center xs:self-center">
                            <img className="flex items-center" width="170" height="80" src={folderImage2}  alt="HeadPhoto"/>
                        </div>
                        <div className="flex sm:mt-3 xs:mt-3 xxs:mt-3 place-content-center items-center">
                            <img className="flex items-center " width="170" height="80" src={folderImage}  alt="HeadPhoto"/>
                        </div>
                        <div className="flex sm:mt-3 xs:mt-3 xxs:mt-3 place-content-center items-center">
                            <img className="flex items-center " width="170" height="80" src={folderImage}  alt="HeadPhoto"/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <div className="">
                           <h1 class="font-bold text-black text-[15px] ml-2 mt-5">New Files</h1>
                        </div>
                        <div className="">
                            <button className="mt-5 bg-white hover:bg-red-700 mx-auto hover:text-white text-gray-800 text-xs font-semibold px-4 border border-red-700 rounded-full shadow">
                                Add Files
                            </button>
                        </div>
                    </div>
                   
                    <div className="flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="p-1.5 w-full inline-block align-middle">
                                <div className="overflow-x border">
                                    <table className="table-auto overflow-scroll min-w-full divide-y divide-gray-800  rounded-full border-radius-90px">

                                        <tbody className="divide-y divide-gray-200">
                                            <tr className="rounded-tr cursor-pointer hover:bg-white hover:text-red-800 hover:font-bold rounded-full border-radius-10px;">
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap ">
                                                    <div class="flex  w-10 h-4 justify-center items-center">
                                                       <a href="#">
                                                          <img alt="profile" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" className=" rounded-full h-10 w-10 border-gray-200 border-4" />
                                                       </a>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Jone Doe
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Software
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Date
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    File
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                  <a href="#">
                                                     <img alt="addImage" src={addImage} />
                                                   </a>
                                                </td>
                                            </tr>

                                            <tr className="cursor-pointer hover:bg-white hover:text-red-800 hover:font-bold rounded-full border-radius-10px;">
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap ">
                                                    <div class="flex flex-col w-10 h-4 justify-center items-center">
                                                       <a href="#" >
                                                          <img alt="profile" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" class="object-cover rounded-full h-10 w-10 border-gray-200 border-4" />
                                                       </a>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Jone Doe
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Software
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Date
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    File
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                  <a href="#">
                                                    <img alt="addImage" src={addImage} />
                                                   </a>
                                                </td>
                                            </tr>

                                            <tr className="cursor-pointer hover:bg-white hover:text-red-800 hover:font-bold rounded-full border-radius-10px;">
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap ">
                                                <div class="flex flex-col w-10 h-4 justify-center items-center">
                                                   <a href="#" >
                                                      <img alt="profile" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" class="object-cover rounded-full h-10 w-10 border-gray-200 border-4" />
                                                   </a>
                                                </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Jone Doe
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Software
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Date
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    File
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                   <a href="#">
                                                     <img alt="addImage" src={addImage} />
                                                   </a>
                                                </td>
                                            </tr>

                                            <tr className="cursor-pointer hover:bg-white hover:text-red-800 hover:font-bold rounded-full border-radius-10px;">
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap ">
                                                <div class="flex flex-col w-10 h-4 justify-center items-center">
                                                   <a href="#">
                                                      <img alt="profile" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" class="object-cover rounded-full h-10 w-10 border-gray-200 border-4" />
                                                   </a>
                                                </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Jone Doe
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Software
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    Date
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                    File
                                                </td>
                                                <td className="px-6 py-4 text-sm  whitespace-nowrap">
                                                 <a href="#">
                                                    <img alt="addImage"  src={addImage} />
                                                   </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h1 class="font-bold text-black text-[15px] ml-2 mt-5">Shared With Me</h1>
                        </div>
                        <div className="lg:flex  justify-around  ">
                            <div className="lg:flex  justify-around md:flex md:6 md:justify-around  sm:flex sm:6 sm:justify-around xs:flex xs:6 xs:justify-around xs:mt-8 sm:mt-8 lg:mt-0 ">
                                <div className=" flex place-content-center  items-center  xxs:mt-4">
                                    <div className="flex items-center" >
                                        <h3 className="absolute text-sm px-5 ">manual <br></br>guidelines</h3>
                                    </div>
                                    <img className=" flex" width="200" height="100" src={bottomImg}  alt="HeadPhoto"/>
                                </div>
                                <div className="flex sm:6 place-content-center lg:mx-8 items-center xxs:mt-4">
                                    <div className="flex items-center" >
                                        <h2 className="absolute  text-sm px-5">manual <br></br>guidelines</h2>
                                    </div>
                                    <img className="flex  flex items-center" width="200" height="100" src={bottomImg}  alt="HeadPhoto"/>
                                </div>
                            </div>
                            <div className="lg:flex  justify-around md:flex sm:6 md:justify-around md:mt-8 sm:flex sm:6 sm:justify-around sm:mt-8 xs:flex xs:6 xs:justify-around xs:mt-8 lg:mt-0">
                                <div className="flex place-content-center items-center xxs:mt-4">
                                    <div className=" flex items-center" >
                                        <h2 className="absolute text-sm px-5">manual <br></br>guidelines</h2>
                                    </div>
                                    <img className="flex  flex items-center" width="200" height="100" src={bottomImg}  alt="HeadPhoto"/>
                                </div>
                                <div className="flex place-content-center lg:mx-8 items-center xxs:mt-4">
                                    <div className="flex items-center" >
                                        <h2 className="absolute text-sm px-5">manual <br></br>guidelines</h2>
                                    </div>
                                    <img className="flex  flex items-center" width="200" height="100" src={bottomImg}  alt="HeadPhoto"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}