import React, { useState } from 'react';
import './leaves.css';

const Leave = () => {
  const leaveData = [
    { label: 'Sick Leaves', used: 3, remaining: 10, total: 20 },
    { label: 'Paid Leaves', used: 5, remaining: 15, total: 20 },
    { label: 'Causal Leaves', used: 2, remaining: 8, total: 10 },
    { label: 'Maternity Leaves', used: 0, remaining: 12, total: 12 },
    { label: 'Unpaid Leaves', used: 2, remaining: 8, total: 10 }
  ];

  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderLeaveCards = () => {
    return leaveData.map((data, index) => {
      const total = data.total;
      const usedPercentage = (data.used / total) * 100;
      const remainingPercentage = ((data.remaining) / total) * 100;
      const unusedPercentage = 100 - usedPercentage - remainingPercentage;

      return (
        <div className="leave-card" key={index}>
          <h2>{data.label}</h2>
          <div className="leave-card-content">
            <div className="leave-circle-graph">
              <div className="leave-circle" style={{ '--used': `${usedPercentage}%`, '--remaining': `${remainingPercentage}%`, '--unused': `${unusedPercentage}%` }}></div>
            </div>
            <div className="leave-info">
              <p>unspend: {data.remaining}</p>
              <p>Used: {data.used}</p>
              <p>Total: {data.total}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  const leaveDataDetails = [
    { applyDate: '2024-04-26', type: 'Sick Leave', applyDays: '02', reason: 'Fever', status: 'Approved' },
    { applyDate: '2024-04-26', type: 'Sick Leave', applyDays: '02', reason: 'Fever', status: 'Reject' },
    { applyDate: '2024-04-26', type: 'Sick Leave', applyDays: '02', reason: 'Fever', status: 'Pending' },
    { applyDate: '2024-04-26', type: 'Sick Leave', applyDays: '02', reason: 'Fever', status: 'Reject' },
    { applyDate: '2024-04-26', type: 'Sick Leave', applyDays: '02', reason: 'Fever', status: 'Approved' },
    { applyDate: '2024-04-26', type: 'Sick Leave', applyDays: '02', reason: 'Fever', status: 'Approved' },
    { applyDate: '2024-04-26', type: 'Sick Leave', applyDays: '02', reason: 'Fever', status: 'Reject' },
    { applyDate: '2024-04-26', type: 'Sick Leave', applyDays: '02', reason: 'Fever', status: 'Approved' }
  ];

  const renderTableRows = () => {
    let filteredData = leaveDataDetails;
    if (activeTab !== 'all') {
      filteredData = leaveDataDetails.filter(data => data.status.toLowerCase() === activeTab.toLowerCase());
    }

    return filteredData.map((data, index) => (
      <tr key={index}>
        <td>{data.applyDate}</td>
        <td>{data.type}</td>
        <td>{data.applyDays}</td>
        <td>{data.reason}</td>
        <td>{data.status}</td>
      </tr>
    ));
  };

  return (
    <div className="leave-screen">
      <div className="leave-cards">
        {renderLeaveCards()}
      </div>

      <div className="tabs">
        <button className={activeTab === 'all' ? 'active' : ''} onClick={() => handleTabChange('all')}>All Leaves</button>
        <button className={activeTab === 'approved' ? 'active' : ''} onClick={() => handleTabChange('approved')}>Approved</button>
        <button className={activeTab === 'reject' ? 'active' : ''} onClick={() => handleTabChange('reject')}>Reject</button>
        <button className={activeTab === 'pending' ? 'active' : ''} onClick={() => handleTabChange('pending')}>Pending</button>
      </div>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Apply Date</th>
            <th>Type of Leave</th>
            <th>Apply Days</th>
            <th>Reason</th>
            <th>Leave Status</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>

      <div style={{ textAlign: 'center' }}>
        <button className="apply-button">Apply for Leave</button>
      </div>
    </div>
  );
};

export default Leave;
