import React,{useState} from 'react';
import DataTable from 'react-data-table-component';
import data from './data.json';
import DownloadIcon from './images/download-icon.png';
import eyeIcon from './images/eyeIcon.png';
import leftArrow from './images/left-arrow.png'
import { useNavigate } from "react-router-dom";
import generatePDF from './PdfGenerate'



function Table() {
	const navigate = useNavigate(); 
	const [viewData, setviewData] = useState([])

	const dummy = [{
    	name: 'Id',
    	Inspected_Date: 'name',
    	FPS_No: '1245821000',
		Suggested_Action :'89yhuh'
 	}]

	const handleDownload=(e)=>{
		generatePDF(dummy)
	}

	const handleView=(e)=>{
		console.log(e,'oooo');
		setviewData(dummy)
	}


	const columns = [
  		{
  		  name: 'Id',
  		  selector: row => row.name,
  		  sortable: true,
  		},
  		{
  		  name: 'Inspected Date',
  		  selector: row => row.dob,
  		  sortable: true,
  		},
  		{
  		  name: 'FPS No.',
  		  selector: row => row.phone,
  		  sortable: true,
  		},
  		{
  		  name: 'Suggested Action',
  		  selector: row => row.dob,
			sortable: true,
  		},
  		{
  		  name: 'recommended Action',
  		  selector: row => row.dob,
			sortable: true,
  		},
  		{
  		  name: 'View',
  		  cell: row =><label htmlFor="my-modal-5" className=""> <img className='cursor-pointer' onClick={()=>{handleView(row.name)}}  height="24px" width="24px"  src={eyeIcon} /></label>,
			center:true
  		},
  		{
  		  name: 'Download',
  		  cell: row => <img className='cursor-pointer'  onClick={()=>handleDownload(row.name)} height="24px" width="24px"  src={DownloadIcon} />,
			center:true
  		},
	];		

    return (
  	<>
   		<div className='md:ml-16 xxs:ml-12 mt-10 mb-6'>
   			<a><img onClick={()=>{navigate('/')}} className='cursor-pointer' height="36px" width="36px"  src={leftArrow} /></a>
   		</div>
   		<div className="App md:mr-16 md:ml-16  xxs:mr-12 xxs:ml-12">
     		<DataTable
        		title 	= "Consolidated Reports"
        		columns = {columns}
        		data 	= {data}
        		pagination
        		highlightOnHover
      		/>
    	</div>
		<input type="checkbox" id="my-modal-5" className="modal-toggle" />
		<div className="modal">
		 <div className="modal-box w-11/12 max-w-5xl">
			{viewData.map((value)=>(
				<>
				<h3 className="font-bold text-lg flex justify-center">Consolidated Reports</h3>
		    	<p className="py-4">Name: {value.name}</p>
		    	<p className="py-4">FPS NO : {value.FPS_No}</p>
		    	<p className="py-4">Inspected_Date: {value.Inspected_Date}</p>
		    	<p className="py-4">Suggested_Action: {value.Suggested_Action}</p>

		    <div className="modal-action">
		      <label htmlFor="my-modal-5" className="btn">OK</label>
		    </div>
			</>
			))}
			
		  </div>
		</div>
    </>
  )
}

export default Table











