import PropTypes from 'prop-types';
import { StatList } from '../StatList/StatList';
import css from './Statistics.module.css';

export const Statistics = ({ title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <StatList />
    </section>
  );
};

Statistics.defaultProps = {
  title: 'Percentage Values',
};

Statistics.propTypes = {
  title: PropTypes.string,
};
