import React from "react";
import "./options.scss";

var Size = React.createClass({
  propTypes: {
    handleChange: React.PropTypes.func,
    key: React.PropTypes.string,
    value: React.PropTypes.string
  },

  render: function() {
    return (
      <select
        className="size"
        name="size"
        value={this.props.value}
        onChange={this.props.handleChange}
      >
        <option value="default" disabled>
          Size
        </option>
        <option value="Small."></option>
        <option value="Medium.">Medium.</option>
        <option value="Large">Large</option>
      </select>
    );
  }
});

module.exports = Size;
