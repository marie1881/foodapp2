import React from "react";
import { Link } from "react-router";
import "./footer.scss";

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer-container">
        <div className="footer-col-1">
          <p className="footer-copyright">©2020 Double Shot, Inc.</p>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
