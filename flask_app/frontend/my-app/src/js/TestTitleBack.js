import React, {useState} from 'react';
import '../css/Test.css';
import { useNavigate } from 'react-router-dom';

function TestTitleBack() {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue !== '') {
      // Создаем объект с данными для отправки
      const data = { title: inputValue };

      // Опции запроса
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };

      // Отправляем запрос
      fetch('/api/test/create_test', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log('Успешно отправлено:', data);
          navigate(`/testScale/${data.id}`);
        })
        .catch((error) => {
          console.error('Ошибка при отправке:', error);
        });
    }
  };

  return (
    <form className="TestTitle" onSubmit={(e) => e.preventDefault()}>
      <div className="titleTestTitle">Введите название теста</div>
      <input
        name="title"
        type="text"
        className="inputTestTitle"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="buttonTestTitle"
        type="submit"
        onClick={handleSubmit}
        disabled={inputValue === ''}
      >
        Отправить
      </button>
    </form>
  );
}
export default TestTitleBack;