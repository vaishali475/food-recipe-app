import React from "react";
import Header from "./components/Header.js";
import Recipe from "./components/Recipe.js";
import Axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "chicken",
      recipe: [],
    };
  }
  onInputChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  onSearchClick = () => {
    this.getRecipes();
  };

  async componentDidMount() {
    console.log("hii");
    const search = this.state.search;
    await this.getRecipes(search);
  }

  getRecipes = async (search) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${this.state.search}&app_id=5c066c38&app_key=
      186459c7d6352f69f3bae3ad510516a3`
    );
    console.log(response.data.hits);
    this.setState({
      recipe: response.data.hits,
    });
  };
  render() {
    console.log(this.state.search);
    return (
      <div className="App">
        <Header
          search={this.state.search}
          onInputChange={this.onInputChange}
          onSearchClick={this.onSearchClick}
        />
        <div className="container">
          <Recipe recipe={this.state.recipe} />
        </div>
      </div>
    );
  }
}

export default App;
