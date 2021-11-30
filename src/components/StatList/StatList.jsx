import PropTypes from 'prop-types';
import statsData from '../../data/statistical-data.json';
import css from './StatList.module.css';

export const StatList = () => {
  return (
    <ul className={css.statList}>
      {statsData.map(listElement => {
        return (
          <li className={css.item} key={listElement.id} style={{ backgroundColor: listElement.bg }}>
            <span className={css.label}>{listElement.label}</span>
            <span className={css.percentage}>{listElement.percentage}&#37;</span>
          </li>
        );
      })}
    </ul>
  );
};

StatList.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      bg: PropTypes.string,
    }).isRequired,
  ),
};
