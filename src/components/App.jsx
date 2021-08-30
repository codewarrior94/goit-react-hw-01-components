import 'modern-normalize/modern-normalize.css';
import { Profile } from './Profile/Profile';
import user from '../user.json';

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
    </>
  );
};
