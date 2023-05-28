import React from 'react';
import '../css/Register.css';
import reg from '../source/reg.svg';

function Login() {
  return (
    <body className="parentRegister">
        <div className="contentRegister">
          <p className="titleRegister">Регистрация соискателя</p>
          <p className="subtitleRegister">Электронная почта или телефон</p>

          <form className="formaRegister" action="" method="POST">
            <div>
                <input className="inputRegister" type="email" name="email" placeholder="Ваша почта"/>
            </div>
            <div>
                <button type="submit" className="reg-buttonRegister">Зарегистрироваться</button>
            </div>
          </form>
        </div>
        <div className="photoRegister">
            <img src={reg} className="human-imageRegister" />
        </div>
    </body>
  )
}
export default Login;