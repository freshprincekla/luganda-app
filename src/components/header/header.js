import React from 'react';
import { Link } from 'react-router-dom';



export const Header = (props) => {
    
    const handleChange = (event) => {
        props.handleLanguageChange(event.target.value)
    }

    return (
        <div>
            <div className="info">
                <Link to=""></Link>
            </div>
            <select onChange={handleChange}>
                <option value={false}>Luganda</option>
                <option value={true}>English</option>
            </select>
        </div>
    )
}
    
     
