import React, { useState } from 'react';


const Main = ({ onLogout }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [color, setColor] = useState('black');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { text: newItem, color }]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className='container'>
      <h1 className='app-title'>Reminder App</h1>
      <button className='logout' onClick={onLogout}>
        LOGOUT
      </button>
      <div className='input-container'>
        <input
          className='text-input'
          type='text'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder='Enter text'
        />
        <button className='add-button' onClick={handleAddItem}>+</button>
        <input
          className='color-picker'
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <ul className='item-list'>
        {items.map((item, index) => (
          <li key={index} className='list-item'>
            <span className='list-text' style={{ color: item.color }}>{item.text}</span>
            <button className='remove-button' onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
