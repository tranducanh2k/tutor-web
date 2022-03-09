import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
    return (
        <div className="home" >
            <div className='teacherHeader'>
                <h1>Help you find your right tutor easily</h1>
                <Link to='/search'>
                    <button> Search Now </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
