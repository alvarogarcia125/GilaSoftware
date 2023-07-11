import React, { useState, useEffect } from 'react';
import { getLogs } from '../../services/API';
import './LogsTable.css';

const LogsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const apiData = await getLogs();
      setData(apiData.data);
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="table-container">
      <div className="content">
        <h2>Log history</h2>
        <table>
          <thead>
            <tr>
              <th>Created at</th>
              <th>Subscriber</th>
              <th>Category</th>
              <th>Notification Type</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((log) => (
              <tr key={log._id}>
                <td>{log.createdat}</td>
                <td>{log.subscriber.name}</td>
                <td>{log.category}</td>
                <td>{log.notificationtype}</td>
                <td>{log.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsTable;
