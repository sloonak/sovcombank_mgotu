import React, { useState, useEffect } from 'react';
import '../css/Resume.css';
import { useNavigate } from 'react-router-dom';
import Button from '../Instruction/Button';
import union from '../source/Union.png';

function ProfileBack() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

  try {
    const response = await fetch('/api/user/get_user/3'); // Замените URL на свой эндпоинт
    const jsonData = await response.json();

    // Проверяем, есть ли уже полученные данные
    if (Object.keys(data).length === 0) {
      setData(jsonData.user);
    }
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }

  setIsLoading(false);
};

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/user/user_update/3', {
        method: 'PUT', // Используйте метод PUT для обновления данных
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: data }), // Отправляем обновленные данные на сервер
      });

      if (response.ok) {
        console.log('Данные успешно обновлены');
      } else {
        console.error('Ошибка при обновлении данных');
      }
    } catch (error) {
      console.error('Ошибка при обновлении данных:', error);
    }

    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="resume-co-container">
      <div className="leftResume">
        <div className="red-circleResume"></div>
      </div>
      <form className="centerResume" onSubmit={handleSubmit}>
        <p className="titleResume">Профиль</p>
        <div className="inputdivResume">
          <input
            name="name"
            type="text"
            className="inputResume"
            placeholder="ФИО"
            value={data.name || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div className="inputdivResume">
          <input
            name="birthday"
            type="date"
            className="inputResume"
            placeholder="Дата рождения"
            value={data.birthday || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div className="inputdivResume">
          <input
            name="City"
            type="text"
            className="inputResume"
            placeholder="Город"
            value={data.sity || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div className="inputdivResume">
          <input
            name="Phone"
            type="text"
            className="inputResume"
            placeholder="Телефон"
            value={data.phone || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div className="inputdivResume">
          <input
            name="job_title"
            type="text"
            className="inputResume"
            placeholder="Желаемая должность"
            value={data.job_title || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div className="inputdivResume">
          <input
            name="education"
            type="text"
            className="inputResume"
            placeholder="Образование"
            value={data.education || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div className="inputdivResume">
          <input
            name="exp"
            type="text"
            className="inputResume"
            placeholder="Опыт работы"
            value={data.exp || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div className="inputdivResume">
          <input
            name="courses"
            type="text"
            className="inputResume"
            placeholder="Курсы"
            value={data.courses || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div className="inputdivResume">
          <input
            name="about"
            type="text"
            className="inputResume"
            placeholder="О себе"
            value={data.about || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div className="inputdivResume">
          <input
            name="salary"
            type="text"
            className="inputResume"
            placeholder="Желаемая З/П"
            value={data.salary || ''}
            onChange={handleInputChange}
          />
          <img src={union} alt="Иконка" className="input-iconResume" />
        </div>
        <div style={{ alignItems: "left", width: "100%" }}>
          <button type="submit" className="reg-buttonResume" disabled={isLoading}>
            {isLoading ? 'Загрузка...' : 'Сохранить'}
          </button>
        </div>
      </form>
      <div className="rightResume">
          
      </div>
    </div>
  );
}

export default ProfileBack;