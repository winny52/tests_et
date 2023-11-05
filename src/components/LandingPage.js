import React from 'react';
import image from './image.jpg'; 
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (
        <div className="bg-blue-200 p-12 h-screen flex flex-col">
           <Navbar/>
            <h1 className="text-4xl text-blue-900 mb-4">LATTO'S EXPENSE TRACKER</h1>
            <div className="flex  justify-center  items-center justify-between p-4 text-white">
                <div>
                <div className="flex flex-col items-center text-blue p-4 h-24rounded">
                   
                   <h2 className="text-5xl text-blue-900 mb-1">The Expense Tracker 
                   </h2>
                   <h2 className="text-4xl text-blue-700 mb-4"> that works for you.</h2>


                </div>
                <Link to ={"/signup"} className="bg-blue-800 text-white px-8 py-4 rounded hover:bg-blue-900">GET STARTED</Link>

                </div>
                <img src={image} alt="Illustration" className="w-5/12 rounded-full" />

            </div>
        </div>
    );
}

export default LandingPage;     