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
      {items.map((item) =>(
          <tr className={css.bodyItem}>
          <td className={css.cell}>{item.type}</td>
          <td className={css.cell}>{item.amount}</td>
          <td className={css.cell}>{item.currency}</td>
          </tr>
        ))}
</table>
    );
    }