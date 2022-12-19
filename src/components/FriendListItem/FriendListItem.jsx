import s from './FriendListItem.module.css';
import { BsFillCircleFill } from 'react-icons/bs';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={s.status}>
        {isOnline ? (
          <BsFillCircleFill style={{ fill: 'green' }} />
        ) : (
          <BsFillCircleFill style={{ fill: 'red' }} />
        )}
      </span>

      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
