import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(listElement => {
          return (
            <li className="item">
              <span className="label">{listElement.label}</span>
              <span className="percentage">{listElement.percentage}</span>
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
    }).isRequired,
  ),
};
