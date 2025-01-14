import React from 'react';
import { Avatar } from '../ui/Avatar';
import useTodoStore from '../../store/todoStore';

export const UserPresence = () => {
  const activeUsers = useTodoStore((state) => state.activeUsers);

  return (
    <div className="flex items-center space-x-2">
      {activeUsers.map(user => (
        <Avatar
          key={user.id}
          src={user.avatar}
          fallback={user.name[0]}
          className="w-8 h-8"
        />
      ))}
    </div>
  );
};