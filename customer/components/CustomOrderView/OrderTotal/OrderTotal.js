import React from "react";
import OrderTotalRow from "../OrderTotalRow/OrderTotalRow";
import OrderTax from "../OrderTax/OrderTax";
import OrderTotalTotal from "../OrderTotalTotal/OrderTotalTotal";
import "./order-total.scss";

var OrderTotal = React.createClass({
  propTypes: {
    orderItems: React.PropTypes.array,
    handleDeleteItemFromOrder: React.PropTypes.func,
    toggleDeleteNotification: React.PropTypes.func
  },

  render: function() {
    var orderItems = this.props.orderItems.map((item, index) => {
      return (
        <OrderTotalRow
          itemDetails={item}
          handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder}
          toggleDeleteNotification={this.props.toggleDeleteNotification}
          key={index}
          index={index}
        />
      );
    });

    return (
      <div>
        <section id="order-total">
          <h2>Order Total</h2>
          <table className="order-total-table">
            <tbody>
              {orderItems}
              {/* <OrderTax orderTax={orderTax} /> */}
              <OrderTotalTotal
                orderTotal={orderTotal}
                orderItems={this.props.orderItems}
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
});

module.exports = OrderTotal;
