
import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "SUSHI",
      price: 350,
      rating: 4.5,
      image: "https://i.pinimg.com/564x/ed/fc/08/edfc08ca5b88e27067af976d65bfde41.jpg",
      quantity: 0
    },
    {
      id: 2,
      name: "NOODLES",
      category: "Chinese Food",
      price: 120,
      rating: 4.2,
      image: "https://i.pinimg.com/236x/7a/8a/ae/7a8aae6babf5cfa554e78d72927a66e3.jpg",
      quantity: 0
    },
    {
      id: 3,
      name: "BIBIMBAP",
      category: "Korean Food",
      price: 15,
      rating: 4.7,
      image: "https://i.pinimg.com/236x/81/82/82/8182827c14716f4526df10338142be86.jpg",
      quantity: 0
    },
    {
      id: 4,
      name: "ADOBO",
      category: "Filipino Food",
      price: 13,
      rating: 4.8,
      image: "https://i.pinimg.com/236x/9b/b1/34/9bb134b9d04c34a193860f6ed9bfac63.jpg",
      quantity: 0
    },
    {
      id: 5,
      name: "DOROYAKI",
      category: "Japanese Food",
      price: 13,
      rating: 4.8,
      image: "https://i.pinimg.com/564x/29/40/e3/2940e34cdee0b3866ad83a6a99efae90.jpg",
      quantity: 0
    },
    {
      id: 6,
      name: "DANGO",
      category: "Japanese Food",
      price: 13,
      rating: 4.8,
      image: "https://i.pinimg.com/236x/90/96/37/909637ee93b8acba8359ecf2f1956c88.jpg",
      quantity: 0
    },
    {
      id: 7,
      name: "MANGO PUDDING",
      category: "Chinese Food",
      price: 13,
      rating: 4.8,
      image: "https://i.pinimg.com/236x/b6/e7/52/b6e752f03989442e4d108b80ac842bf3.jpg",
      quantity: 0
    },
    {
      id: 8,
      name: "TAHO",
      category: "Filipino Food",
      price: 13,
      rating: 4.8,
      image: "https://i.pinimg.com/236x/b0/5d/fc/b05dfca8d377b53a02206f5e843a4273.jpg",
      quantity: 0
    },
    {
      id: 9,
      name: "SWEET SUNRISE",
      
      price: 13,
      rating: 4.8,
      image: "https://i.pinimg.com/236x/bc/10/03/bc1003e83cc46794c30dfe22332fa455.jpg",
      quantity: 0
    },
    {
      id: 10,
      name: "COTTON CANDY MOCKTAIL",
     
      price: 13,
      rating: 4.8,
      image: "https://i.pinimg.com/236x/c6/06/39/c6063905ac2e6ac9d081d82b57021cd3.jpg",
      quantity: 0
    },
    {
      id: 11,
      name: "ROSEMARY TEA",
      
      price: 13,
      rating: 4.8,
      image: "https://i.pinimg.com/236x/e0/0d/32/e00d3207042080504262230eae47d3b0.jpg",
      quantity: 0
    },
    {
      id: 12,
      name: "THAI BOBA MILK TEA",
      
      price: 13,
      rating: 4.8,
      image: "https://i.pinimg.com/236x/3e/d2/ae/3ed2ae7f4b4332fd03befab8e81dcf7d.jpg",
      quantity: 0
    },
  ]);

  const handleIncrement = (id) => {
    const updatedMenuItems = menuItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setMenuItems(updatedMenuItems);
  };

  const handleDecrement = (id) => {
    const updatedMenuItems = menuItems.map(item => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">KTANI</div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Chinese Food</a></li>
            <li><a href="#">Korean Food</a></li>
            <li><a href="#">Filipino Food</a></li>
            <li><a href="#">Reservation</a></li>
          </ul>
        </nav>
      </header>
      <div className="menu">
        {menuItems.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <p>Price: ${item.price}</p>
              <p>Rating: {item.rating}</p>
              <div className="quantity">
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
