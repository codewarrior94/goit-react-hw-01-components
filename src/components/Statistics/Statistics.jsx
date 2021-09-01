import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(listElement => {
          return (
            <li
              className={css.item}
              key={listElement.id}
              style={{ backgroundColor: listElement.bg }}
            >
              <span className={css.label}>{listElement.label}</span>
              <span className={css.percentage}>{listElement.percentage}&#37;</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      bg: PropTypes.string,
    }).isRequired,
  ),
};
