import React from 'react';
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600">AST</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex justify-center">
                    <button onClick={() => navigate("/registration")}>
                        <img src="attend1.jpg" alt="Registration" className="w-40 h-40 object-cover rounded-md shadow-md hover:shadow-lg transition-shadow duration-300" />
                    </button>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => navigate("/attendence")}>
                        <img src="attend2.jpg" alt="Attendence" className="w-40 h-40 object-cover rounded-md shadow-md hover:shadow-lg transition-shadow duration-300" />
                    </button>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => navigate("/studentdetails")}>
                        <img src="attend3.jpg" alt="StudentDetails" className="w-40 h-40 object-cover rounded-md shadow-md hover:shadow-lg transition-shadow duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
