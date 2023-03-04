import React, { useEffect, useState } from "react";

function App() {
  //array of objects that hold each question and its properties
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
  // this state is incremented to go through each question in the question array
  const [question, setQuestion] = useState(0);
  //used to tell if we are at the end of quiz
  const [end, setEnd] = useState(false);
  //holds user score
  const [scor, setScor] = useState(0);
  //used to hold which colour the background is going to be
  const [c, setC] = useState("");


  //usde effect that uses a timer to change the background for a select amount of time
  useEffect(() => {
    const timer = setTimeout(() => {
      setC("");
    }, 200)
    //change background colour to c
    document.body.style.backgroundColor = c;
    return () => clearTimeout(timer);
  }, [c])
  const butClick = (isRight) => {
    //if what user clicks is correct, increment their score
    if(isRight === true){
      setScor(scor+1);
      setC("green");
    } else{
      setC("red")
    }
    const nextQ = question + 1;
    //used to check if we are at the end of the quiz
    if(nextQ < questions.length){
      //if we are not at the end make question to the next(used for index of question)
      setQuestion(nextQ);
    } else {
      //make this true, because we have reached the end of quiz
      setEnd(true);
    }
  }
  

  //used to reset all of ours states so user can do quiz again
  const butClick2 = (choice) => {
    if(choice === true){
      setQuestion(0);
      setScor(0);
      setEnd(false);
    }
  }
  return (
    <div className="app">
      {/* this for when the user has come to the end of the quiz */}
      {end ? (
        <div className="score-section">
          You scored {scor} out of {questions.length}
          <button onClick={() => butClick2(true)}>Reset</button>
        </div>
        // otherwise map the options and do stuff with that screen
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              {/* this prints what question we are currently on */}
              <span>{question+1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {/* prints out the question that is being asked */}
             {questions[question].questionTxt}
            </div>
          </div>
          <div className="answer-section">
            {/* maps each option of the question we are on to a button */}
            {/* when user clicks a button, butClick is called and the boolean of isRight is passed into it */}
            {questions[question].ansOpt.map((ansOpt) => <button onClick={() => butClick(ansOpt.isRight)} >{ansOpt.ansOpt}</button>)}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
