import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15);

  const questions = [
    {
      questionText: 'Quel est le capitaine du LOSC ?',
      answerOptions: [
        { answerText: 'Jonathan David', isCorrect: false },
        { answerText: 'Benjamin Andre', isCorrect: true },
        { answerText: 'Lucas Chevalier', isCorrect: false },
        { answerText: 'Angel Gomes', isCorrect: false },
      ],
    },
    {
      questionText: 'Quel est le classement du LOSC en ligue 1 actuellement',
      answerOptions: [
        { answerText: '3', isCorrect: false },
        { answerText: '2', isCorrect: false },
        { answerText: '4', isCorrect: true },
        { answerText: '5', isCorrect: false },
      ],
    },
    {
      questionText: 'Contre qui le losc va jouer en quart de final de ligue europa conférence',
      answerOptions: [
        { answerText: 'Dynomo Zagreb', isCorrect: false },
        { answerText: 'Fiorentina', isCorrect: false },
        { answerText: 'Club de Bruges', isCorrect: false },
        { answerText: 'Aston Villa', isCorrect: true },
        { answerText: 'PAOK', isCorrect: false },
      ],
    },
    {
      questionText: 'Quel est le meilleur buteur toute compétitions confondue dans les 5 grands championnats européen',
      answerOptions: [
        { answerText: 'Kylian mbappe', isCorrect: false },
        { answerText: 'Lautaro Martinez', isCorrect: false },
        { answerText: 'Wissam Ben weder', isCorrect: false },
        { answerText: 'Harry Kane', isCorrect: false },
        { answerText: 'Jonathan David', isCorrect: true },
      ],
    },
    {
      questionText: 'Que veux dire LOSC',
      answerOptions: [
        { answerText: 'Lille Olympique Sporting Club', isCorrect: true },
        { answerText: 'Lille Olympiades Sporting Club', isCorrect: false },
      ],
    },
    {
      questionText: 'Qui est le meilleur défenseur en ligue 1 actuellement',
      answerOptions: [
        { answerText: 'Medina', isCorrect: false },
        { answerText: 'Danso', isCorrect: false },
        { answerText: 'Yoro', isCorrect: true },
        { answerText: 'Dante', isCorrect: false },
      ],
    },
    {
      questionText: 'Quel est la capacité du Stade Pierre Mauroy ?',
      answerOptions: [
        { answerText: '60 000', isCorrect: false },
        { answerText: '55 000', isCorrect: false },
        { answerText: '45 000', isCorrect: false },
        { answerText: '50 000', isCorrect: true },
      ],
    },
    {
      questionText: 'Quel est le plus grand stade en france ?',
      answerOptions: [
        { answerText: 'Le groupama Stadium', isCorrect: false },
        { answerText: 'Le stade Vélodrome', isCorrect: false },
        { answerText: 'Le stade Pierre Mauroy', isCorrect: true },
        { answerText: 'Le stade Bollaert', isCorrect: false },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
      if (secondsLeft === 0) {
        boutonnoncliquer(false); 
      }
    }, 1500);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const boutonnoncliquer = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    setSecondsLeft(15);
  };

  return (
    <div className='quiz'>
      {currentQuestion >= questions.length ? (
        <div>
          <h2>le Quizz est terminé, Félicitations !</h2>
        </div>
      ) :
       (
        <div>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question  {currentQuestion + 1}</span>
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => boutonnoncliquer(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className='timer'>
            Temps restant : {secondsLeft} seconds
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
