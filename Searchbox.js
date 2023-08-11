import React from 'react';
 

 const Searchbox = ({ searchChange }) => {
 	return (
 		<div className='tc pa3'>
 		<input 
 		 className='pa2 b--green bg-lightest-blue'
 		 type ='search'
 		 placeholder='search robot'
 		 onChange={searchChange} 
 		 />
 		 </div>
 		 );
 	
 }


 export default Searchbox;