import React, { useState, useEffect } from 'react';
import { getCategories, sendNotification } from '../../services/API';
import './Form.css';

const Form = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      const apiData = await getCategories();
      setData(apiData.data);
      if (apiData.data.length > 0) {
        setSelectedCategory(apiData.data[0].name);
      }
    };

    fetchDataAsync();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendNotification({
        category: selectedCategory,
        message
      });
      window.alert(response.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div className="form-container">
      <div className="content">
        <h2>Submission form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="categories">Categories</label>
            <select
              id="categories"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {data.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
