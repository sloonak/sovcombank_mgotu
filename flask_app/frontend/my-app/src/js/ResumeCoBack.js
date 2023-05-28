import React, {useState} from 'react';
import '../css/ResumeCo.css';
import { useNavigate } from 'react-router-dom';
import Button from '../Instruction/Button';
import union from '../source/Union.png';

function ResumeCo() {
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
        const inputs = document.getElementsByClassName('inputResumeCo');
        let count = 0;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() !== '') {
                count++;
            }
        }
        setFilledCount(count);
        const percentage = (count / 9) * 100;
        setProgressPercentage(percentage);
    };
    const handleInputClear = () => {
        const inputs = document.getElementsByClassName('inputResumeCo');
        let count = 0;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() !== '') {
                count++;
            }
        }
        setFilledCount(count);
        const percentage = (count / 9) * 100;
        setProgressPercentage(percentage);
    };
    
    return (
    <div className="resume-co-container">
        <div className="leftResumeCo">
            <div className="red-circleResumeCo"></div>
        </div>
        <form className="centerResumeCo" action="" method="POST">
            <p className="titleResumeCo">Создание вакансии</p>
            <div className="inputdivResumeCo">
                <input name="Сompany" type="text" className="inputResumeCo" placeholder="Компания" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResumeCo" />
            </div>
            <div className="inputdivResumeCo">
                <input name="City" type="text" className="inputResumeCo" placeholder="Город" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResumeCo" />
            </div>
            <div className="inputdivResumeCo">
                <input name="Phone" type="text" className="inputResumeCo" placeholder="Телефон" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResumeCo" />
            </div>
            <div className="inputdivResumeCo">
                <input name="Vacancy" type="text" className="inputResumeCo" placeholder="Вакансия" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResumeCo" />
            </div>
            <div className="inputdivResumeCo">
                <input name="WorkEx" type="text" className="inputResumeCo" placeholder="Необходимый опыт работ" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResumeCo" />
            </div>
            <div className="inputdivResumeCo">
                <input name="LvlEdu" type="text" className="inputResumeCo" placeholder="Необходимый уровень образования" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResumeCo" />
            </div>
            <div className="inputdivResumeCo">
                <input name="Skills" type="text" className="inputResumeCo" placeholder="Навыки" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResumeCo" />
            </div>
            <div className="inputdivResumeCo">
                <input name="InfoVacancy" type="text" className="inputResumeCo" placeholder="Краткая информация о вакансии" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResumeCo" />
            </div>
            <div className="inputdivResumeCo">
                <input name="Salary" type="text" className="inputResumeCo" placeholder="З/П" onChange={handleInputFill} onInput={handleInputClear} />
                <img src={union} alt="Иконка" className="input-iconResumeCo" />
            </div>
            <div style={{alignItems:"left", width:"100%"}}>
                <button type="submit" className="reg-buttonResumeCo">Отправить</button>
            </div>
        </form>
        <div className="rightResumeCo">
            <div className="progress-bar-containerResumeCo">
                <p className="subtitleResumeCo">Заполняемость анкеты</p>
                <progress className="progress-barResumeCo" max="100" value={progressPercentage}></progress>
            </div>
        </div>
    </div>
    )
}
export default ResumeCo;