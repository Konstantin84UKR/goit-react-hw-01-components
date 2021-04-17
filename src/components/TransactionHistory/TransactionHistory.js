import React from "react";
import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";

// function transactions(type, amount, currency) {
//   return (
//     <tr>
//       <td>{type}</td>
//       <td>{amount}</td>
//       <td>{currency}</td>
//     </tr>
//   );
// }

function TransactionHistory({ items }) {
  return (
    <table className={style.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Default props
TransactionHistory.defaultProps = {
  items: [],
};

// PropTypes
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
