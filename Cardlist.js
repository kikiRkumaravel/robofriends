import React from 'react';
import Card from './Card';



const Cardlist = ({ robots }) => {
    return(
        <div className='w-2 ma-20 pa-3'>
          {robots.map((user,i) => {
    	return(
    		<Card 
    	key={i} 
    	id={robots[i].id} 
    	name={robots[i].name} 
    	email={robots[i].email}/>
       );
    })
          }
        </div>
			);	
	
}

export default Cardlist;