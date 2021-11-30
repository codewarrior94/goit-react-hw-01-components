import 'modern-normalize/modern-normalize.css';
import { Container } from './Container/Container';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Container>
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};
