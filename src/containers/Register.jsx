import React from 'react';
import '@styles/components/Register.scss';

const Register = () => {

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form'>
          <input className='input' type='text' placeholder='Nombre' />
          <input className='input' type='text' placeholder='Correo' />
          <input className='input' type='password' placeholder='Contraseña' />
          <button type='button' className='button'>Registrarme</button>
        </form>
        <a href='/login'>Iniciar sesión</a>
      </section>
    </section>
  );
};

export default Register;
