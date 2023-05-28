import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Test.css';

function TestCreate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState('');
  const [questionType, setQuestionType] = useState('single');
  const [answerOptions, setAnswerOptions] = useState([]);
  const [scales, setScales] = useState([]);
  const [createdQuestions, setCreatedQuestions] = useState([]);

  useEffect(() => {
    // Загрузка списка шкал с сервера
    fetch(`/api/test/get_scales/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setScales(data.scales);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке шкал:', error);
      });
  }, [id]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  const handleAddAnswerOption = () => {
    if (answerOptions.length < 5) {
      setAnswerOptions([...answerOptions, { value: '', scale: '' }]);
    }
  };

  const handleAnswerOptionChange = (index, value) => {
    const updatedOptions = [...answerOptions];
    updatedOptions[index].value = value;
    setAnswerOptions(updatedOptions);
  };

  const handleScaleChange = (index, value) => {
    const updatedOptions = [...answerOptions];
    updatedOptions[index].scale = value;
    setAnswerOptions(updatedOptions);
  };

  const handleSubmit = () => {
    // Создание вопроса и вариантов ответов
    const newQuestion = {
      question: question,
      option: answerOptions,
      question_type: questionType,
    };

    // Отправка вопроса на сервер в формате JSON
    fetch('/api/test/create_question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQuestion),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Вопрос успешно создан:', data);
        // Добавление нового вопроса в список созданных вопросов
        setCreatedQuestions([...createdQuestions, newQuestion]);
        // Обнуление полей ввода
        setQuestion('');
        setQuestionType('single');
        setAnswerOptions([]);
      })
      .catch((error) => {
        console.error('Ошибка при создании вопроса:', error);
      });
  };

  const handleFinishTest = () => {
    // Переход на следующую страницу "testFinish"
    navigate('/testFinish');
  };

  return (
    <div className="TestTitle">
      <div className="titleTestTitle">Создание вопроса</div>
      <div className="subtitleTestCreate">
        <label htmlFor="questionInput">Вопрос:</label>
        <input
          id="questionInput"
          className="inputTestTitle"
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Введите вопрос"
        />
      </div>
      <div className="subtitleTestCreate">
        <label htmlFor="questionTypeSelect">Тип ответа:</label>
        <select
          id="questionTypeSelect"
          className="inputTestTitle"
          value={questionType}
          onChange={handleQuestionTypeChange}
        >
          <option value="single">Выбрать 1 вариант ответа</option>
          <option value="multiple">Выбрать несколько вариантов ответа</option>
          <option value="text">Вписать слово</option>
        </select>
      </div>
      <div className="answerOptionsContainer">
        <div className="subtitleTestCreate">Варианты ответов:</div>
        {answerOptions &&
          answerOptions.map((option, index) => (
            <div className="answerOption" key={index}>
              <input
                className="inputAnswerOption"
                type="text"
                value={option.value}
                onChange={(e) => handleAnswerOptionChange(index, e.target.value)}
                placeholder="Введите вариант ответа"
              />
              <select
                className="selectScale"
                value={option.scale}
                onChange={(e) => handleScaleChange(index, e.target.value)}
              >
                <option value="">Выберите шкалу</option>
                {scales.map((scale) => (
                  <option value={scale.id} key={scale.id}>
                    {scale.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        <button className="buttonTestScale" onClick={handleAddAnswerOption}>
          Добавить вариант ответа
        </button>
      </div>
      <div className="buttonContainer">
        <button className="buttonTestScale" onClick={handleSubmit}>
          Создать еще
        </button>
        <button className="buttonTestScale" onClick={handleFinishTest}>
          Закончить
        </button>
      </div>
      <div className="createdQuestionsContainer">
        <div className="createdQuestionsTitle">Список созданных вопросов:</div>
        {createdQuestions.map((createdQuestion, index) => (
          <div className="createdQuestion" key={index}>
            <div className="questionText">{createdQuestion.question}</div>
            <div className="answerOptions">
              {createdQuestion.option &&
                createdQuestion.option.map((answerOption, index) => (
                  <div className="answerOption" key={index}>
                    <div>{answerOption.value}</div>
                    <div>Шкала: {answerOption.scale}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestCreate;
