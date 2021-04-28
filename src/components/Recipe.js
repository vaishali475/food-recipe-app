import React from "react";

import "../App";

class Recipe extends React.Component {
  render() {
    return (
      <div class="row">
        {this.props.recipe.map((recipes, index) => (
          <div class="col-md-3 mb-2 mt-5" key={index}>
            <div class="card py-2">
              <div class="card-body text-center">
                <img
                  src={recipes.recipe.image}
                  className="img-fluid w-100 rounded-circle "
                />
                <h5 className="mt-2">{recipes.recipe.label}</h5>
              </div>
              <ul class="list-group list-group-flush">
                {recipes.recipe.ingredientLines.map((ingredients) => (
                  <li className="list-group-item">{ingredients}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Recipe;
