import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionTxt: "What country has won the most world cups?",
      ansOpt: [
        { ansOpt: "Argentina", isRight: false },
        { ansOpt: "Brazil", isRight: true },
        { ansOpt: "France", isRight: false },
        { ansOpt: "Germany", isRight: false },
      ],
    },

    {
      questionTxt: "Who is the goat of football?",
      ansOpt: [
        { ansOpt: "Messi", isRight: false },
        { ansOpt: "Ronaldo", isRight: false },
        { ansOpt: "Mbappe", isRight: false },
        { ansOpt: "David", isRight: true },
      ],
    },

    {
      questionTxt: 'Who is the player known who did the infamous "Hand of god"',
      ansOpt: [
        { ansOpt: "Pique", isRight: false },
        { ansOpt: "Neymar", isRight: false },
        { ansOpt: "Maradona", isRight: true },
        { ansOpt: "Ronaldo", isRight: false },
      ],
    },

    {
      questionTxt: "What do Arsenal fans call each themselves",
      ansOpt: [
        { ansOpt: "Gooners", isRight: true },
        { ansOpt: "Arses", isRight: false },
        { ansOpt: "Cannons", isRight: false },
        { ansOpt: "Snipers", isRight: false },
      ],
    },
  ];
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(false);
  const [scor, setScor] = useState(0);

  const butClick = (isRight) => {
    if(isRight === true){
      setScor(scor+1);
    }
    const nextQ = question + 1;
    if(nextQ < questions.length){
      setQuestion(nextQ);
    } else {
      setScore(true);
    }
  }

  const butClick2 = (choice) => {
    if(choice === true){
      setQuestion(0);
      setScor(0);
      setScore(false);
    }
  }
  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
    score when the user has answered all the questions */}
      {score ? (
        <div className="score-section">
          You scored {scor} out of {questions.length}
          <button onClick={() => butClick2(true)}>Reset</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>{question+1}</span>/{questions.length}
            </div>
            <div className="question-text">
             {questions[question].questionTxt}
            </div>
          </div>
          <div className="answer-section">
            {questions[question].ansOpt.map((ansOpt) => (<button onClick={() => butClick(ansOpt.isRight)}>{ansOpt.ansOpt}</button>))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
