// ItemsDisplay.js
import React from 'react';

const ItemsDisplay = ({ items }) => {
    return (
        <div className="items-display">
            <h2>Items in Cart:</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - ${item.cost}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemsDisplay;
