import React, { Component } from "react";
import axios from "axios";
import "./index1.css";
import CustomSpinner from "../april1tasks/spinner/spinner";

class ProductFilter extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      favouriteColor: "green",
      minPrice: 0, // Minimum price filter
      maxPrice: Infinity // Maximum price filter
    };
  }

  componentDidMount() {
    document.title = "Product Listing";
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/products");
      this.setState({
        products: result.data.products
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  lowToHigh = () => {
    const result = this.state.products.sort((a, b) => a.price - b.price);
    this.setState({
      products: result
    });
  };

  highToLow = () => {
    const result = this.state.products.sort((a, b) => b.price - a.price);
    this.setState({
      products: result
    });
  };

  // Handle input change for minimum price
  handleMinPriceChange = event => {
    this.setState({
      minPrice: parseFloat(event.target.value)
    });
  };

  // Handle input change for maximum price
  handleMaxPriceChange = event => {
    this.setState({
      maxPrice: parseFloat(event.target.value)
    });
  };

  applyFilters = () => {
    const { minPrice, maxPrice, products } = this.state;
    const filteredProducts = products.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );
    this.setState({
      products: filteredProducts
    });
  };

  render() {
    return (
      <>
        <h4 style={{ color: this.state.favouriteColor }}>Product Listing</h4>
        <div style={{textAlign: "center"}}>
          <label>Min Price:</label>
          <input type="number" value={this.state.minPrice} onChange={this.handleMinPriceChange} />
        </div>
        <div style={{textAlign: "center"}}> 
          <label>Max Price:</label>
          <input type="number" value={this.state.maxPrice} onChange={this.handleMaxPriceChange} />
        </div>
        <div style={{textAlign: "center"}}>
        <button onClick={this.applyFilters} >Apply Filters</button>
        <button onClick={this.lowToHigh} >Filter by low to high</button>
        <button onClick={this.highToLow} >Filter by high to low</button></div>
        
        {this.state.products.length > 0 ? (
          <div className="productList">
            {this.state.products.map(eachObject => {
              const { description, title, thumbnail, price, id } = eachObject;
              return (
                <div className="cards" key={id}>
                  <h3>{title}</h3>
                  <h4>{description}</h4>
                  <img src={thumbnail} alt={title} width={200} height={200} />
                  <h5 style={{ color: "red" }}>₹{price}</h5>
                </div>
              );
            })}
          </div>
        ) : (
          <>
          <div style={{textAlign: "center", color: "red"}}>OOPS!!! <br></br> NO RESULT FOUND</div>
          
          <CustomSpinner />
          </>
        )}
      </>
    );
  }
}

export default ProductFilter;
