import React from 'react';

const CustomImage = () => {
  const listItems = [
    {
      name: "apple",
      type: "fruit",
      isFruit: true,
      imageURL: "https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg", 
      id: 1
    },
    {
      name: "mango",
      type: "fruit",
      isFruit: true,
      imageURL: "https://plantogram.com/wa-data/public/shop/products/55/06/655/images/1256/1256.970.jpg", 
      id: 2
    },
    {
      name: "banana",
      type: "fruit",
      isFruit: true,
      imageURL: "https://pngimg.com/uploads/banana/small/banana_PNG822.png", 
      id: 3
    },
    {
      name: "strawberry",
      type: "fruit",
      isFruit: true,
      imageURL: "https://freepngimg.com/thumb/strawberry/45-strawberry-png-images.png", 
      id: 4
    },
    {
      name: "blueberry",
      type: "fruit",
      isFruit: true,
      imageURL: "https://www.naturalhealth365.com/wp-content/uploads/2016/04/blueberries.jpg", 
      id: 5
    }
  ];

  const ListItems = ({ name, imageURL, id }) => {
    return (
      <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>{name}</h3>
        <img src={imageURL} alt={name} width={200} height={150} />
        <p style={{ marginTop: '10px' }}></p>
      </li>
    );
  };

  return (
    <div>
      <h1>Items List</h1>
      <ol>
        {listItems.map((eachObject) => {
          return (
            <ListItems
              key={eachObject.id}
              name={eachObject.name}
              imageURL={eachObject.imageURL}
              id={eachObject.id}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default CustomImage;
