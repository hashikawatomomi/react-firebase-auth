import { signOut } from 'firebase/auth';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthContext } from './AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  };

    return (
      <div>
        <h1>ホームページ</h1>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }

export default Home;
