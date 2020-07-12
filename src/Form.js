import React from 'react';
import './App.css';

// Form yang dipanggil pada halaman shops

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            blood: '',
            houses: '',
            uniforms: [
                {id: 1, value: "3 sets of Plain Work Robes (Black)", isChecked: false},
                {id: 2, value: "Plain Poited Hat (Black)", isChecked: false},
                {id: 3, value: "A Pair of Protective Gloves", isChecked: false},
                {id: 4, value: "Winter Cloak (Black)", isChecked: false},
            ],
            books: [
                {id: 1, value: "The Standard Book of Spells", isChecked: false},
                {id: 2, value: "A History of Magic", isChecked: false},
                {id: 3, value: "Magical Theory", isChecked: false},
                {id: 4, value: "A Beginner's Guide to Transfiguration", isChecked: false},
                {id: 5, value: "One Thousand Magical Herbs and Fungi", isChecked: false},
            ],
        };
        
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  
handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    this.setState({ [name]: value });
};

handleBloodChange = (e) => {
    const blood = e.target.value;
    this.setState({ blood });
};

handleHousesChange = (e) => {
    const houses = e.target.value;
    this.setState({ houses });
};

handleUniformsChange = (i) => {
    var state = this.state;
    state.uniforms[i].isChecked = !state.uniforms[i].isChecked;
    this.setState(state);
}

handleBooksChange = (i) => {
    var state = this.state;
    state.books[i].isChecked = !state.books[i].isChecked;
    this.setState(state);
}

handleSubmit(event) {
    alert('Form was submitted!');
    event.preventDefault();
}
 
render() {
    return (
        <div className="containerform">
            <form onSubmit={this.handleSubmit} className="form">
                <div className="field">
                    <label>Name:</label><br />
                        <input 
                            name="name" 
                            type="text" 
                            className="name" 
                            value={this.state.name} 
                            placeholder="Enter your name" 
                            onChange={this.handleChange} />
                </div>
                <div className="field">
                    <label>Blood:</label><br />
                    <label>
                        <input
                            value="pureblood"
                            checked={this.state.blood === 'pureblood'}
                            onChange={this.handleBloodChange}
                            type="radio" />
                        Pure Blood
                    </label><br />
                    <label>
                        <input
                            value="halfblood"
                            checked={this.state.blood === 'halfblood'}
                            onChange={this.handleBloodChange}
                            type="radio" />
                        Half-Blood
                    </label><br />
                    <label>
                        <input
                            value="muggleborn"
                            checked={this.state.blood === 'muggleborn'}
                            onChange={this.handleBloodChange}
                            type="radio" />
                        Muggle-Born
                    </label>
                </div>
                <div className="field">
                    <label>Houses:</label><br />
                        <select value={this.state.houses} onChange={this.handleHousesChange}>
                            <option></option>
                            <option value="gryff">Gryffindor</option>
                            <option value="huffle">Hufflepuff</option>
                            <option value="raven">Ravenclaw</option>
                            <option value="slyth">Slytherin</option>
                        </select>
                </div>
                <div className="field">
                    <label>Uniforms:</label><br />
                        {this.state.uniforms.map((uniform, i) =>
                            <>
                                <label key={i}>
                                <input
                                    name="uniforms"
                                    value={uniform.id}
                                    checked={uniform.isChecked}
                                    onChange={() => this.handleUniformsChange(i)}
                                    type="checkbox" />
                                {uniform.value}
                                </label><br/ >
                            </>
                        )}
                </div>
                <div className="field">
                    <label>Books:</label><br />
                        {this.state.books.map((book, i) =>
                        <>
                            <label key={i}>
                            <input
                                name="books"
                                value={book.id}
                                checked={book.isChecked}
                                onChange={() => this.handleBooksChange(i)}
                                type="checkbox" />
                            {book.value}
                            </label><br/ >
                        </>
                        )}                  
                </div>
                <center>
                    <button className="rounded" type="submit" onclick={this.handleSubmit}>
                        Purchase
                    </button>
                </center>
            </form>
        </div>
      );
    }
}

export default Form;