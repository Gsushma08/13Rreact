import { Component } from "react";
import axios from "axios";
import "./index.css"; 

import CustomSpinner from "../april1tasks/spinner/spinner";

class ProductListing extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");

    this.setState({
      products: result.data.products,
    });
  };

  deleteProduct = (index) => {
    this.setState((prevState) => ({
      products: prevState.products.filter((products, i) => i !== index),
    }));
  };
  render() {
    console.log(this.state.products, "log from render");
    return (
      <div className="productList">
        {this.state.products.map((eachObject, index) => {
          const { id, description, title, thumbnail, price } = eachObject;
          return (
            <div className="cards" key={id}>
              <div className="card-inner">
                <div className="card-front">
                  <h3>{title}</h3>
                  <h4>{description}</h4>
                  <img src={thumbnail} alt={title} width={200} height={200} />
                  <h5 style={{ color: "red" }}>₹{price}</h5>
                </div>
                <div className="card-back">
                <button className="delete-button" onClick={(e) => {
                    e.stopPropagation(); // Prevent event propagation to parent elements
                    this.deleteProduct(index); 
                }}><h3>Delete</h3></button>
                  
                </div>
              </div>
            </div>
          );
        })}
        <CustomSpinner />
      </div>
    );
  }
}

export default ProductListing;