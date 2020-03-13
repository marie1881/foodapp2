// import React from "react";
// import OrderTotal from "../../CustomOrderView/OrderTotal/OrderTotal";
// import SpecialInstructionsOS from "../SpecialInstructionsOS/SpecialInstructionsOS";
// import Footer from "../../DashboardView/Footer/Footer";
// import { Link } from "react-router";
// import "../../App/app.scss";
// import "./order-summary.scss";

// var OrderSummaryView = React.createClass({
//   propTypes: {
//     items: React.PropTypes.array,
//     handleDeleteItemFromOrder: React.PropTypes.func,
//     specialInstructions: React.PropTypes.string
//     // handleOrderSubmit: React.PropTypes.func
//   },

//   render: function() {
//     return (
//       <div>
//         <div className="main-wrap">
//           <div className="order-summary-container">
//             <div className="title-cover">
//               <h1>Order Summary</h1>
//               <div className="userProgress">
//                 <div id="fourOfFive"></div>
//               </div>
//             </div>

//             <div className="os-order-total-container">
//               <OrderTotal
//                 orderItems={this.props.items}
//                 handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder}
//               />
//             </div>

//             <SpecialInstructionsOS
//               specialInstructions={this.props.specialInstructions}
//             />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// });

// module.exports = OrderSummaryView;
