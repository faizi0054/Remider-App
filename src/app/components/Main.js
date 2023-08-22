// import React, { useState } from "react";

// const Main = ({ onLogout }) => {
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState("");
//   const [color, setColor] = useState("black");

//   const handleAddItem = () => {
//     if (newItem.trim() !== "") {
//       setItems([...items, { text: newItem, color }]);
//       setNewItem("");
//     }
//   };

//   const handleRemoveItem = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//   };

//   return (
//     <div className="container">
//       <h1 className="app-title">Reminder App</h1>
//       <button className="logout" onClick={onLogout}>
//         LOGOUT
//       </button>
//       <div className="input-container">
//       <input
//   className="text-input"
//   type="text"
//   value={newItem}
//   onChange={(e) => setNewItem(e.target.value)}
//   placeholder="Enter text"
// />

//         <button className="add-button" onClick={handleAddItem}>
//           +
//         </button>
//         <input
//           className="color-picker"
//           type="color"
//           value={color}
//           onChange={(e) => setColor(e.target.value)}
//         />
//       </div>
//       <ul className="item-list">
//         {items.map((item, index) => (
//           <li key={index} className="list-item">
//             <span className="list-text" style={{ color: item.color }}>
//               {item.text}
//             </span>
//             <button
//               className="remove-button"
//               onClick={() => handleRemoveItem(index)}
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Main;















































import React, { useState } from "react";

const Main = ({ onLogout }) => {
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the item being edited

  const [newItem, setNewItem] = useState("");
  const [color, setColor] = useState("black");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      setItems([...items, { text: newItem, time: currentTime, color }]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setNewItem(items[index].text); // Set the input value to the current item's text
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editingIndex].text = newItem;
      setItems(updatedItems);
      setEditingIndex(null);
      setNewItem("");
    }
  };

  return (
    <div className="container">
      <h1 className="app-title">Reminder App</h1>
      <button className="logout" onClick={onLogout}>
        LOGOUT
      </button>
      <div className="input-container">
        <input
          className="text-input"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter text"
        />
        <button className="add-button" onClick={handleAddItem}>
          +
        </button>
        <input
          className="color-picker"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <div className="item-content">
              {editingIndex === index ? (
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />
              ) : (
                <span className="list-text" style={{ color: item.color }}>
                  {item.text}
                </span>
              )}
              <span className="list-time">{item.time}</span>
            </div>
            <div className="button-container">
              {editingIndex === index ? (
                <button className="save-button" onClick={handleSaveEdit}>
                  Save
                </button>
              ) : (
                <button className="edit-button" onClick={() => handleEditItem(index)}>
                  Edit
                </button>
              )}
              <button
                className="remove-button"
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
