import React from "react";
import "./options.scss";

var MilkType = React.createClass({
  propTypes: {
    handleChange: React.PropTypes.func,
    key: React.PropTypes.string,
    value: React.PropTypes.string
  },

  render: function() {
    return (
      <select
        className="milk-type"
        name="milk-type"
        value={this.props.value}
        onChange={this.props.handleChange}
      >
        <option value="default" disabled>
          Milk Type
        </option>
        <option value="almond-milk">Almond Milk</option>
        <option value="soy-milk">Soy Milk</option>
        <option value="Oat-milk">Oat Milk</option>
        <option value="whole-milk">Whole Milk</option>
        <option value="Skim-milk">Skim Milk</option>
      </select>
    );
  }
});

module.exports = MilkType;
