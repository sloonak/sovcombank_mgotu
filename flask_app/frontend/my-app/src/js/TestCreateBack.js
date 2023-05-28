import React, { useState } from 'react';

function AnswerOptionForm({ index, handleOptionChange, handleValueChange }) {
  return (
    <div className="answer-option">
      <input
        type="text"
        placeholder={`Вариант ${index + 1}`}
        onChange={(e) => handleOptionChange(index, e.target.value)}
      />
      <input
        type="number"
        placeholder="Значение"
        onChange={(e) => handleValueChange(index, parseInt(e.target.value))}
      />
    </div>
  );
}

function QuestionForm({ handleQuestionChange, handleOptionChange, handleValueChange }) {
  const [options, setOptions] = useState([{ text: '', value: 0 }]);

  const addOption = () => {
    setOptions([...options, { text: '', value: 0 }]);
  };

  const removeOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  return (
    <div className="question-form">
      <textarea
        placeholder="Введите вопрос"
        onChange={(e) => handleQuestionChange(e.target.value)}
      ></textarea>
      <div className="answer-options">
        {options.map((option, index) => (
          <div key={index}>
            <AnswerOptionForm
              index={index}
              handleOptionChange={handleOptionChange}
              handleValueChange={handleValueChange}
            />
            <button type="button" onClick={() => removeOption(index)}>
              Удалить
            </button>
          </div>
        ))}
        <button type="button" onClick={addOption}>
          Добавить вариант ответа
        </button>
      </div>
    </div>
  );
}

function QuestionCreation() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);

  const handleQuestionChange = (value) => {
    setQuestion(value);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index].text = value;
    setOptions(updatedOptions);
  };

  const handleValueChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index].value = value;
    setOptions(updatedOptions);
  };

  const handleCreateQuestion = () => {
    // Создание вопроса с вариантами ответа и привязкой к шкалам
    const newQuestion = {
      question,
      options,
      scales: [], // Здесь необходимо добавить выбор привязки к шкалам
    };

    // Отправка вопроса на сервер в формате JSON
    fetch('/api/test/create_question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQuestion),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Успешно создан вопрос:', data);
        // Очистка формы после успешного создания вопроса
        setQuestion('');
        setOptions([]);
      })
      .catch((error) => {
        console.error('Ошибка при создании вопроса:', error);
      });
  };

  return (
    <div className="question-creation">
      <h2>Создание вопроса</h2>
      <QuestionForm
        handleQuestionChange={handleQuestionChange}
        handleOptionChange={handleOptionChange}
        handleValueChange={handleValueChange}
      />
      <button onClick={handleCreateQuestion}>Создать вопрос</button>
    </div>
  );
}

export default QuestionCreation;
