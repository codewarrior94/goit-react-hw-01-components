import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableHead_item}>Type</th>
          <th className={css.tableHead_item}>Amount</th>
          <th className={css.tableHead_item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td className={css.tableRowItem}>{item.type}</td>
              <td className={css.tableRowItem}>{item.amount}</td>
              <td className={css.tableRowItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
