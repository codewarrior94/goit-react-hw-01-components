import 'modern-normalize/modern-normalize.css';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics'
import user from '../user.json';
import statisticalData from '../statistical-data.json'

export const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

    </>
  );
};
