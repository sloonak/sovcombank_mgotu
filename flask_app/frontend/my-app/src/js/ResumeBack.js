import React, {useState} from 'react';
import '../css/Resume.css';
import { useNavigate } from 'react-router-dom';
import Button from '../Instruction/Button';
import union from '../source/Union.png';

function ResumeBack() {
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
    
    const [filledCount, setFilledCount] = useState(0);
    const [progressPercentage, setProgressPercentage] = useState(0);
    
    const handleInputFill = () => {
        const inputs = document.getElementsByClassName('inputResume');
        let count = 0;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() !== '') {
                count++;
            }
        }
        setFilledCount(count);
        const percentage = (count / 10) * 100;
        setProgressPercentage(percentage);
    };
    const handleInputClear = () => {
        const inputs = document.getElementsByClassName('inputResume');
        let count = 0;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() !== '') {
                count++;
            }
        }
        setFilledCount(count);
        const percentage = (count / 10) * 100;
        setProgressPercentage(percentage);
    };
    
    return (
    <div className="resume-co-container">
        <div className="leftResume">
            <div className="red-circleResume"></div>
        </div>
        <form className="centerResume" action="" method="POST">
            <p className="titleResume">Создание резюме</p>
            <div className="inputdivResume">
                <input name="FIO" type="text" className="inputResume" placeholder="ФИО" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div className="inputdivResume">
                <input name="Date" type="date" className="inputResume" placeholder="Дата рождения" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div className="inputdivResume">
                <input name="City" type="text" className="inputResume" placeholder="Город" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div className="inputdivResume">
                <input name="Phone" type="text" className="inputResume" placeholder="Телефон" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div className="inputdivResume">
                <input name="Position" type="text" className="inputResume" placeholder="Желаемая должность" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div className="inputdivResume">
                <input name="Edu" type="text" className="inputResume" placeholder="Образования" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div className="inputdivResume">
                <input name="WorkEx" type="text" className="inputResume" placeholder="Опыт работы" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div className="inputdivResume">
                <input name="Course" type="text" className="inputResume" placeholder="Курсы" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div className="inputdivResume">
                <input name="AboutMe" type="text" className="inputResume" placeholder="О себе" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div className="inputdivResume">
                <input name="Salary" type="text" className="inputResume" placeholder="Желаема З/П" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResume" />
            </div>
            <div style={{alignItems:"left", width:"100%"}}>
                <button type="submit" className="reg-buttonResume">Отправить</button>
            </div>
        </form>
        <div className="rightResume">
            <div className="progress-bar-containerResume">
                <p className="subtitleResume">Заполняемость анкеты</p>
                <progress className="progress-barResume" max="100" value={progressPercentage}></progress>
            </div>
        </div>
    </div>
    )
}
export default ResumeBack;