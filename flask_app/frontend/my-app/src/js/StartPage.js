import React from 'react';
import '../css/StartPage.css';
import { useNavigate } from 'react-router-dom';
import human from '../source/human.png';
import human1 from '../source/human1.png';
import human2 from '../source/human2.png';
import Button from '../Instruction/Button';

function StartPage() {
    const navigate = useNavigate();
    const redirectToRegisterCoPage = () => {
        navigate('/registerCo');
    };
    const redirectToRegisterPage = () => {
        navigate('/register');
    };
    const redirectToForgotPasswordPage = () => {
        navigate('/forgot-password');
    };
return (
    <div>
        <div className="parent">
            <div className="content">
                <p className="title">СИСТЕМА<br/>АВТОМАТИЗАЦИИ<br/>РЕКРУТМЕНТА</p>
                <p className="subtitle">Находим лучшие таланты для вашего успеха!</p>
                <button className="start-button">Начать</button>
            </div>
            <div className="photo" style={{overflow: "hidden"}}>
                <img src={human} className="human-image" />
                <div className="red-circle"></div>
            </div>
        </div>
        <div className="parent-bottom">
            <div className="left">
                <img src={human1} className="human-image1" />
                <div className="lets-work">Соискателям<br/>
                    <Button className="lets-work-b lets-work-button custom-button" label="Найти работу" onClick={redirectToRegisterPage} />
                </div>
                <div className="red-circle-bottom"></div>
            </div>
            <div className="right">
                <img src={human2} className="human-image2" />
                <div className="lets-hunt">Работадателям<br/>
                    <Button className="lets-hunt-button custom-button" label="Дать работу" onClick={redirectToRegisterCoPage} />
                </div>
            </div>
        </div>
    </div>

)
}
export default StartPage;