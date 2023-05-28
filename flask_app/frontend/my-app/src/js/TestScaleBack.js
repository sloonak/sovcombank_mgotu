import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Test.css';

function TestScale() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [scaleName, setScaleName] = useState('');
  const [scales, setScales] = useState([]);

  useEffect(() => {
    // Загрузка списка созданных шкал с сервера
    fetch(`/api/test/get_scales/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setScales(data.scales);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке шкал:', error);
      });
  }, [id]);

  const handleScaleNameChange = (e) => {
    setScaleName(e.target.value);
  };

  const handleCreateScale = () => {
    if (scaleName !== '') {
      // Создание объекта с данными о шкале
      const newScale = {
        name: scaleName,
        test_id: id,
      };

      // Отправка шкалы на сервер в формате JSON
      fetch(`/api/test/create_scale`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newScale),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Шкала успешно создана:', data);
          // Добавление новой шкалы в список
          setScales([...scales, newScale]);
          // Очистка поля ввода
          setScaleName('');
        })
        .catch((error) => {
          console.error('Ошибка при создании шкалы:', error);
        });
    }
  };

  const handleFinishTest = () => {
    // Переход на следующую страницу "testcreate"
    navigate(`/testCreate/${id}`);
  };

  return (
    <div className="TestTitle">
      <div className="titleTestTitle">Создание шкалы тестирования</div>
      <input
        className="inputTestTitle"
        type="text"
        value={scaleName}
        onChange={handleScaleNameChange}
        placeholder="Введите название шкалы"
      />
      <div className="buttonsTestScale">
        <button className="buttonTestScale" style={{ backgroundColor: '#5873ac' }} onClick={handleCreateScale}>
          Создать еще
        </button>

        <button className="buttonTestScale" onClick={handleFinishTest}>
          Закончить
        </button>
      </div>
      <div>Список созданных шкал</div>
      <div>
        {scales.map((scale) => (
          <div key={scale.id}>
            <div>{scale.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestScale;
