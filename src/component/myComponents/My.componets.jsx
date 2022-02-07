import React from 'react';
// import CloseIconPage from "../closeIcon/closeIcon";

const MyComponent = ({selectedGrid}) => {
    
    if (selectedGrid != null)
        return (
            <div
             className={`images ${selectedGrid.popup}`} 
             key={ selectedGrid.id } 
             style={{ backgroundImage: `url(${ selectedGrid.img })`}}
             > 
                <div className='grid-content'> 
                    <h1>{ selectedGrid.head }</h1>
                    <h2 className='cards-title'>{selectedGrid.name}</h2>   
                </div> 
            </div>

        );
    else
        return (
            <div></div>
        );
}


export default MyComponent;