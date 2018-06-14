import React from 'react';
import Profile from './Profile';
import ChatLog from './ChatLog';
import ChatForm from './ChatForm';

const User = (props) => {
  const { id, name, users, log, updateName } = props;
  console.log(props)
  return (
    <div className="user">
      <Profile id={id} name={name} updateName={updateName} />
      <ChatLog />
      <ChatForm />
    </div>
  )
}

export default User;
