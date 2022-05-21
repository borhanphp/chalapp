let poll = {
    question: "what is you favourite progaramming language?",
    answers:[
        "c", "java", "php", "javascript"
    ],
    pollCount: 20,
    answersWeight: [4, 4, 2, 10],
    secectedAnser: -1
  };
  
  let pollDOM = {
    question:document.querySelector(".poll .question"),
    answers:document.querySelector(".poll .answers")
  };
  
  pollDOM.question.innerText = poll.question;
  pollDOM.question.innerHTML = poll.answers.map(function(answer, i){
    return (
     
      <div className='answer' onclick="markAnswer(`${i}`)">
        ${answer}
        <span className="percentage-bar"></span>
        <span className="percentage-value"></span>
      </div>
  
    );
  }).join("");