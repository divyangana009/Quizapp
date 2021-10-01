const myQuestions = [
  {
    questions: " Q1 Who invented JavaScript?",

      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Rahul",

    correctAnswer: "ans3"
  },
  {
    questions: " Q2 Which one of these is a JavaScript package manager?",

      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "dis",

    correctAnswer: "ans3"
  },
  

  {
    questions: " Q3 In IGDTUW what stands for G?",

      a: "Gandhi",
      b: "Gangotri",
      c: "Ganga",
      d: "Gyaan",

    correctAnswer: "ans1"
  },
  {
    questions: " Q4 Which one of these is a JavaScript package manager?",

      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "dis",

    correctAnswer: "ans3"
  },
  {
    questions: " Q5 Which tool can you use to ensure code quality?",

      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",

    correctAnswer: "ans4"
  }
];

const  question=document.getElementById('question');
const option1=document.getElementById('option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers =document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let count=0;
let score=0;

const loadquestion =() => {
  const questionlist=myQuestions[count];
  question.innerHTML=questionlist.questions;
  option1.innerHTML=questionlist.a;
  option2.innerHTML=questionlist.b;
  option3.innerHTML=questionlist.c;
  option4.innerHTML=questionlist.d;

};
loadquestion();
const gettanswer=() =>{
  let answer;
  answers.forEach((cuurentans) => {
    if(cuurentans.checked){
      answer = cuurentans.id;
    }

  }
);

return answer;
};
const deselectall = () =>{
  answers.forEach((currentans) => {
    currentans.checked=false;

  });


}
submit.addEventListener('click', () =>{
  const checkanswer= gettanswer();
  console.log(checkanswer);
  if(checkanswer== myQuestions[count].correctAnswer){
    score++;
  };
  count++;
  deselectall();
  if(count<myQuestions.length){
    loadquestion();
  }else{
    showscore.innerHTML= `<h3> you scored ${(score)}/${(myQuestions.length) } 👏👏</h3>
    <button class="btn" onclick="location.reload()">  Play Again</button>`
    showscore.classList.remove('showarea');
  }
});
