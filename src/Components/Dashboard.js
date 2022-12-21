import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import CenterPortion from "./centerPortion";
import Leftbar from "./leftBar";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {
    const navigate = useNavigate();


    const items = [
        <SidebarItem href="/consolidated-report" > <a href="#" className="flex items-center p-2 mt-12  rounded-md" >
        <span className="font-semibold text-sm text-black">Consolidated Reports</span></a></SidebarItem>,
        <SidebarItem > <a href="#" className="flex items-center p-2  rounded-md" >
        <span className="font-semibold text-sm text-black">RI based Inspection View</span></a></SidebarItem>,
        <SidebarItem > <a href="/login" className="flex items-center p-2  rounded-md" >
        <span className="font-semibold text-sm text-black">Current month Inspection</span></a><hr/></SidebarItem>,
        // <SidebarItem > <a href="#" className="flex items-center p-2  rounded-md" >
        // <span className="font-semibold text-sm text-black">File Requirements</span></a></SidebarItem>,
        // <SidebarItem > <a href="#" className="flex items-center p-2 rounded-md" >
        // <span className="font-semibold text-sm text-black">Deleted Files</span></a><hr/></SidebarItem>,

        <SidebarItem > <a href="#" className="flex items-center p-2  rounded-md" >
        <span className="font-semibold text-sm text-black">Platform Settings</span></a></SidebarItem>,
        // <SidebarItem > <a href="#" className="flex items-center p-2  rounded-md" >
        // <span className="font-semibold text-sm text-black">Music</span></a></SidebarItem>,
        <SidebarItem onClick={navigate('consolidated-report')}> <a href="#" className="flex items-center p-2  rounded-md" >
        <span className="font-semibold text-sm text-black">User Management</span></a><hr/></SidebarItem>,
      ];
    return (
        <>    
          <Sidebar width={250}   hoverHighlight={"rgba(236, 236, 236)"}   background={"#FFFFFF"} toggleIconColor={'#606060'} content={items}>
            <Grid container spacing={1}>
              <Grid lg={9.5} md={12}  sm={12} xs={12} xxs={12}>
                <CenterPortion/>
              </Grid>
              <Grid lg={2.5} md={12} sm={12} xs={12}>
                <Leftbar/>
              </Grid>
            </Grid>
          </Sidebar>
        </>
    );
}


