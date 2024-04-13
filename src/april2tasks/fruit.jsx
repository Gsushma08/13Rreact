import { Component } from "react";

class FruitList extends Component {
    state = {
        fruits: ['Apple', 'Banana', 'Orange'],
        newFruit: ''
    }

    UpdateFruit = (event) => {
        this.setState({ newFruit: event.target.value });
    }

    addFruit = () => {
        if (this.state.newFruit !== '') {
            this.setState((prevState) => ({
                fruits: [...prevState.fruits, prevState.newFruit],
                newFruit: ''
            }));
        }
        if (this.state.newFruit.trim() === '') {
            alert('Please enter the fruit name to add.');
            return; 
        }
    }
    deleteFruit = (index) => {
        this.setState((prevState) => ({
            fruits: prevState.fruits.filter((fruit, i) => i !== index)
        }));
    }


    render() {
        return (
            <div>
                <h1>Fruit List</h1>
                <ul>
                    {this.state.fruits.map((fruit, index) => (
                        <li key={index}>{fruit}
                        <br></br>
                        <button onClick={() => this.deleteFruit(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={this.state.newFruit}
                    onChange={this.UpdateFruit}

                    placeholder="Enter a fruit"
                />
                <button onClick={this.addFruit}>Add Fruit</button>
                
                
            </div>
        );
    }
}

export default FruitList;
