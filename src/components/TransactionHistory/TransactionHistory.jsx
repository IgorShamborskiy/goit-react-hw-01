import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

export default function TransactionHistory({items}){
    return(
        <table className={css.table}>
  <thead className={css.head}>
    <tr>
      <th  className={css.border}>Type</th>
      <th className={css.border}>Amount</th>
      <th className={css.border}>Currency</th>
    </tr>
  </thead>
      {items.map(transact =>(
          <tr className={(css.colorBgWhite, transact.id % 2 ? css.colorBgGrey : css.colorBgWhite)
          } key={transact.id}>
            <td className={css.cell}>{transact.type}</td>
            <td className={css.cell}>{transact.amount}</td>
            <td className={css.cell}>{transact.currency}</td>
          </tr>
        ))}
</table>
    );
    }

    TransactionHistory.propTypes = {
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
    };
