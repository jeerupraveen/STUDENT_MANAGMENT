import React, { useEffect, useState } from 'react';
const URL1="http://localhost:8000"
const URL2="https://student-managment-wine.vercel.app"

const Attendance = () => {
  const [year, setYear] = useState("1");
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    fetchDataByYear(year)
  },[year])
  
  const fetchDataByYear = async (selectedYear) => {
    try {
      const response = await fetch(`${URL2}/AttDataYear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ year: selectedYear })
      });
      const data = await response.json();
      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleYearClick = (year) => {
    setYear(year);
    fetchDataByYear(year);
  };

  const handleAttendClick = async (index) => {
    const updatedStudents = [...students];
    const student = updatedStudents[index];
    student.Streak = (student.Streak || 0) + 1;

    try {
      const response = await fetch(`${URL2}/attendinsert`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: student.Name,
          branch: student.Branch,
          registernumber: student.RegisterNumber,
          year: student.Year,
          streak: student.Streak,
        }),
      });
      await response.json();
      setStudents(updatedStudents);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteClick = async (index) => {
    const updatedStudents = [...students];
    const student = updatedStudents[index];
  
    try {
      const response = await fetch(`${URL2}/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registernumber: student.RegisterNumber,
        }),
      });
      const result = await response.json();
      console.log('Delete Response:', result);
  
      if (result.success) {
        updatedStudents.splice(index, 1);
        setStudents(updatedStudents);
      } else {
        console.log('Failed to delete student');
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">ATTENDANCE</h1>
      <nav className="flex justify-center space-x-4 mb-6">
        {[1, 2, 3, 4].map((yearNumber) => (
          <button
            key={yearNumber}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => handleYearClick(String(yearNumber))}
          >
            {yearNumber}
          </button>
        ))}
      </nav>
      <main className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">S.NO</th>
              <th className="border border-gray-300 px-4 py-2">NAME</th>
              <th className="border border-gray-300 px-4 py-2">BRANCH</th>
              <th className="border border-gray-300 px-4 py-2">REGI.NO</th>
              <th className="border border-gray-300 px-4 py-2">YEAR</th>
              <th className="border border-gray-300 px-4 py-2">STREAK</th>
              <th className="border border-gray-300 px-4 py-2">ATTEND</th>
              <th className="border border-gray-300 px-4 py-2">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{student.Name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.Branch}</td>
                <td className="border border-gray-300 px-4 py-2">{student.RegisterNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{student.Year}</td>
                <td className="border border-gray-300 px-4 py-2">{student.Streak || 0}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                    onClick={() => handleAttendClick(index)}
                  >
                    ATTEND
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                    onClick={() => handleDeleteClick(index)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Attendance;
