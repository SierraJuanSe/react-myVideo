import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@styles/components/Register.scss';
import { connect } from 'react-redux';
import { registerUser } from '../actions';

const Register = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerUser(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Name'
            onChange={handleInput}
            required
          />
          <input
            name='email'
            className='input'
            type='email'
            placeholder='Email'
            onChange={handleInput}
            required
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Password'
            onChange={handleInput}
            required
          />
          <button type='submit' className='button'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
