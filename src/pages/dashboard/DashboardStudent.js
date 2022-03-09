import React from 'react'
import './Dashboard.css'

const DashboardStudent = () => {
    return (
        <div className='dashboard'>
            <div className='title'> Student Account </div>
            <div className='views'>
                <div className='cardview'>
                    <div className='cardviewNumber'>0</div>
                    <div className='cardviewTitle'>All Time Views</div>
                </div>
                <div className='cardview'>
                    <div className='cardviewNumber'>0</div>
                    <div className='cardviewTitle'>Last 7 Days</div>
                </div>
                <div className='cardview'>
                    <div className='cardviewNumber'>0</div>
                    <div className='cardviewTitle'>This month</div>
                </div>
                <div className='cardview'>
                    <div className='cardviewNumber'>0</div>
                    <div className='cardviewTitle'>Last month</div>
                </div>
            </div>
            <div className='studentTaught'>
                <div className='cardview'>
                    <div className='cardviewNumber'>10</div>
                    <div className='cardviewTitle'>Number of classes joined</div>
                </div>
                <div className='cardview'>
                    <div className='cardviewNumber'>2</div>
                    <div className='cardviewTitle'>Classes joining</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardStudent