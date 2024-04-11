import React from 'react';

const items = [
    { id: 1, name: 'Apple', type: 'fruit' },
    { id: 2, name: 'Carrot', type: 'vegetable' },
    { id: 3, name: 'Banana', type: 'fruit' },
    { id: 4, name: 'Broccoli', type: 'vegetable' },
    { id: 5, name: 'Grapes', type: 'fruit' },
    { id: 6, name: 'Spinach', type: 'vegetable' },
];

const CustomListShow= () => {
    return (
        <div>
            

            <h2>Fruits</h2>
            <ul>
                {items.map(item => (
                    item.type === 'fruit' && (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    )
                ))}
            </ul>

            <h2>Vegetables</h2>
            <ul>
                {items.map(item => (
                    item.type === 'vegetable' && (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};

export default CustomListShow;
