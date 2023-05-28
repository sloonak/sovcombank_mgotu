import React from 'react';
import '../css/RegisterCo.css';
import reg from '../source/reg.svg';

function Login() {
  return (
    <body className="parentRegisterCo">
        <div className="contentRegisterCo">
          <p className="titleRegisterCo">Регистрация соискателя</p>
          <p className="subtitleRegisterCo">Электронная почта или телефон</p>

          <form className="formaRegisterCo" action="" method="POST">
            <div>
                <input className="inputRegisterCo" type="email" name="email" placeholder="Ваша почта"/>
            </div>
            <div>
                <button type="submit" className="reg-buttonRegisterCo">Зарегистрироваться</button>
            </div>
          </form>
        </div>
        <div className="photoRegisterCo">
            <img src={reg} className="human-imageRegisterCo" />
        </div>
    </body>
  )
}
export default Login;