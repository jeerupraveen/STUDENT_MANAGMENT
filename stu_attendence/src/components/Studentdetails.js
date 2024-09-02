import React, { useEffect, useState } from 'react';
const URL1="http://localhost:8000"
const URL2="https://student-managment-wine.vercel.app/AttDataYear"


const Studentdetails = () => {
  const [data, setData] = useState([]);
  const [year,setYear]=useState('1')
  useEffect(()=>{
    fetchData(year)
  },[year])

  const fetchData = async (selectedYear) => {
    try {
      const response = await fetch(`${URL2}/retDataYear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ year: selectedYear }),
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleYearClick = (selectedYear) => {
    setYear(selectedYear);
    fetchData(selectedYear);
  };

  return (
    <div className="p-6">
      <nav className="mb-4">
        <div className="flex justify-around items-center bg-gray-100 p-4 rounded-md shadow-md">
          <button
            onClick={() => handleYearClick('1')}
            className="btn"
          >
            1
          </button>
          <button
            onClick={() => handleYearClick('2')}
            className="btn"
          >
            2
          </button>
          <button
            onClick={() => handleYearClick('3')}
            className="btn"
          >
            3
          </button>
          <button
            onClick={() => handleYearClick('4')}
            className="btn"
          >
            4
          </button>
        </div>
      </nav>
      <main>
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Branch</th>
              <th className="px-4 py-2 border-b">Register Number</th>
              <th className="px-4 py-2 border-b">Year</th>
              <th className="px-4 py-2 border-b">Phone Number</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">DOB</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{element.Name}</td>
                <td className="px-4 py-2 border-b">{element.Branch}</td>
                <td className="px-4 py-2 border-b">{element.RegisterNumber}</td>
                <td className="px-4 py-2 border-b">{element.Year}</td>
                <td className="px-4 py-2 border-b">{element.Phonenumber}</td>
                <td className="px-4 py-2 border-b">{element.Email}</td>
                <td className="px-4 py-2 border-b">{element.DOB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Studentdetails;
