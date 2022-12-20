import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthContext } from './AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case 'auth/invalid-email':
          setError('正しいメールアドレスの形式で入力してください。');
          break;
        case 'auth/weak-password':
          setError('パスワードは6文字以上を設定する必要があります。');
          break;
        case 'auth/email-already-in-use':
          setError('そのメールアドレスは登録済みです。');
          break;
        default:
          setError('メールアドレスかパスワードに誤りがあります。');
          break;
      }
    })
  };

  return (
  <div> 
    <h1>ユーザー登録</h1>
    <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p> }
      <div>
        <label htmlFor='email'>メールアドレス</label>
        <input id='email' name='email' type='email' placeholder='email' />
      </div>
      <div>
        <label htmlFor='password'>パスワード</label>
        <input id='password' name='password' type='password' placeholder='password' />
      </div>
      <button>登録</button>
    </form>
  </div>
  );
};

export default SignUp;
