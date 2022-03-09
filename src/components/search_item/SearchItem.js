import React from 'react'
import './SearchItem.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SearchItem = ({ image, name, type, subjects, experience, location }) => {
    return (
        <div className='searchItem'>
            <div className='image' style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1> 
            <h3 className='type'> {type} </h3>
            <h3>
                {subjects.join(', ')}
            </h3>
            <p>{experience}</p>
            <div className='bottom'>
                <div className='location'>
                    <LocationOnIcon style={{fill: 'red'}} /> {location}
                </div>
            </div>
        </div>
    )
}

export default SearchItem
