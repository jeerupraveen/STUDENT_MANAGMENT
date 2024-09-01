import React, { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        branch: '',
        regno: '',
        year: '',
        phone: '',
        email: '',
        dob: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost.com:8000/insertdata', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data) {
                console.log(`Data inserted successfully: ${JSON.stringify(data)}`);
            } else {
                console.log("Error while inserting data");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="branch" className="block text-gray-700 font-bold mb-2">Branch:</label>
                    <input
                        type="text"
                        id="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="regno" className="block text-gray-700 font-bold mb-2">Registration Number:</label>
                    <input
                        type="text"
                        id="regno"
                        value={formData.regno}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year:</label>
                    <input
                        type="number"
                        id="year"
                        value={formData.year}
                        onChange={handleChange}
                        min="1"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
                    <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="submit"
                        value="Register"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
            </form>
        </div>
    );
};

export default Registration;
