import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsFillClockFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

function Dashboard() {
  // Example data for weekly attendance (present and absent counts)
  const attendanceData = [
    { name: 'Monday', present: 50, absent: 5 },
    { name: 'Tuesday', present: 48, absent: 7 },
    { name: 'Wednesday', present: 45, absent: 10 },
    { name: 'Thursday', present: 52, absent: 3 },
    { name: 'Friday', present: 49, absent: 6 },
    { name: 'Saturday', present: 30, absent: 20 },
    { name: 'Sunday', present: 0, absent: 50 }, // Sundays are absent by default
  ];

  // Example data for monthly leaves
  const leavesData = [
    { name: 'January', leaves: 2 },
    { name: 'February', leaves: 1 },
    { name: 'March', leaves: 3 },
    { name: 'April', leaves: 0 },
    { name: 'May', leaves: 4 },
    { name: 'June', leaves: 2 },
    { name: 'July', leaves: 1 },
    { name: 'August', leaves: 3 },
    { name: 'September', leaves: 2 },
    { name: 'October', leaves: 5 },
    { name: 'November', leaves: 4 },
    { name: 'December', leaves: 2 },
  ];

  // Example data for employee status
  const employeeStatusData = [
    { name: 'On Time', value: 70 },
    { name: 'Late', value: 20 },
    { name: 'Absent', value: 10 },
  ];

  const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>HOLIDAYS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>EVENTS</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>03</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>MY-TEAM</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>10</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>01</h1>
        </div>
      </div>

      <div className='charts'>
        <div className='chart'>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={attendanceData}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="present" fill="#82ca9d" name="Present" />
              <Bar dataKey="absent" fill="#ff6b6b" name="Absent" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='chart'>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={leavesData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="leaves" stroke="#8884d8" name="Leaves" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className='additional-section'>
        <div className='pie-chart'>
        <h3 className="heading">Attendance</h3>

          <ResponsiveContainer width="90%" height={400}>
            <PieChart>
              <Pie
                data={employeeStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {employeeStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='timestamp-card'>
          <div className='timestamp-content'>
            <h3><BsFillClockFill className='card_icon' /> Timestamp</h3>
            <p>Current Time: {new Date().toLocaleTimeString()}</p>
            <div className='check-buttons'>
              <button>Check In</button>
              <button>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
