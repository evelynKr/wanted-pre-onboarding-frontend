import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className=''>
      <Link to='/' className=''>
        <h1>홈</h1>
      </Link>
      <nav>
        <Link to='/signin'>로그인</Link>
        <Link to='/signup'>회원가입</Link>
        <Link to='/todo'>투두리스트</Link>
      </nav>
    </header>
  );
}
