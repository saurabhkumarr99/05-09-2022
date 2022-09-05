//Quiz List
let QuizLists = new Array();


let Quiz = {

  count: 1,
  Quiz_Questions: new Array(),

  //Create Quiz 
  CreateQuizName() {
    document.getElementById("box2").setAttribute("class", "box2");

    // Create Quiz Name
    var QuizName = document.createElement("h2");
    QuizName.setAttribute("id", "QuizName");
    QuizName.style.color = "blue";
    QuizName.innerHTML = document.getElementById("FormName").value;
    document.getElementById("box2").appendChild(QuizName);

  },

  //Create Question

  CreateQuestion() {

    let Question = {
      Question: document.getElementById("Question").value,
      Answer: "Answer ",
      Optons: [document.getElementById("opt1").value, document.getElementById("opt2").value, document.getElementById("opt3").value, , document.getElementById("opt4").value]
    }
    this.Quiz_Questions.push(Question);

    div = document.createElement("div");
    div.setAttribute("class", "question");

    //Questions
    var questionNo = document.createElement("h5");
    questionNo.style.display = "inline";
    questionNo.innerHTML = "Question " + this.count + ": ";
    div.appendChild(questionNo);

    var question = document.createElement("P");
    question.style.display = "inline";
    question.setAttribute("id", "Question" + this.count);
    question.innerHTML = document.getElementById("Question").value + "             ";
    div.appendChild(question);
    var br = document.createElement("br");
    question.appendChild(br);

    //Answer
    var Answer = document.createElement("h5");
    Answer.style.display = "inline";
    Answer.innerHTML = "Answer :"
    div.appendChild(Answer);

    var ans = document.createElement("P");
    ans.style.display = "inline";
    ans.innerHTML = "Answer";
    div.appendChild(ans);
    div.appendChild(br);

    //Options
    var options = document.createElement("h5");
    options.style.display = "inline";
    options.innerHTML = "Options: ";
    div.appendChild(options);

    var opt = document.createElement("P");
    opt.style.display = "inline";
    opt.setAttribute("id", "Options");
    opt.innerHTML = document.getElementById("opt1").value + " " + document.getElementById("opt2").value + " " + document.getElementById("opt3").value + " " + document.getElementById("opt4").value;
    div.appendChild(opt);


    document.getElementById("box2").appendChild(div);
    //document.getElementById("Question").value = "";
    this.count++;

  },

  CreateQuiz() {

    let q = {
      Quiz_Name: document.getElementById("FormName").value,
      que: this.Quiz_Questions
    }
    QuizLists.push(q);
    alert(JSON.stringify(QuizLists));

    document.getElementById("QuizList").innerHTML = "";
    let QuizList = document.getElementById("QuizList");
    QuizLists.forEach(function (element, index) {

      let li = document.createElement('li');

      let Q_N = document.createElement('text');
      Q_N.textContent = element.Quiz_Name;
      Q_N.style.color = "blue";
      li.appendChild(Q_N);

      let button = document.createElement("button");
      button.setAttribute("id", index);
      button.setAttribute("onclick", "generatePrandomNo(" + index + ")");
      button.style.marginLeft = "20px";
      button.innerHTML = "Launch Quiz";
      li.appendChild(button);

      let PrandonmNo = document.createElement("h5");
      PrandonmNo.setAttribute("id", "Prandom" + index);
      PrandonmNo.style.display = "inline";
      li.appendChild(PrandonmNo);

      QuizList.appendChild(li);
    });

  }

}

function generatePrandomNo(n) {
 // var PrandonmNo = n;
 var PrandonmNo = Math.floor(n*1000+(Math.random() * 100));
  document.getElementById(n).style.backgroundColor = "green";
  document.getElementById("Prandom" + n).setAttribute("class", "prandom");
  document.getElementById("Prandom" + n).innerHTML = PrandonmNo;
}


var check = ["First Quiz", "Second Quiz", "Third Quiz"];
function startQuiz() {
  document.getElementById("container3").setAttribute("class", "container3");
  var prdNo = document.getElementById("prdNo.").value;
  document.getElementById("container3").innerHTML = check[prdNo];
}

// [
//    { "Quiz_Name": "First Quiz", 
//      "que": [{ "Question": "Question 1", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }, 
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }, 
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] },
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }, 
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }, 
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }
//             ]
//    },

//    { "Quiz_Name": "Second Quiz", 
//      "que": [{ "Question": "Question 1", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] },
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] },
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] },
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }, 
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }, 
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }
//             ]
//    }, 

//   { "Quiz_Name": "Third Quiz",
//     "que":  [{ "Question": "Question 1", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] },
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] },
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] },
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }, 
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }, 
//              { "Question": "Question 2", "Answer": "Answer ", "Optons": ["Option1", "Option2", "Option3", null, "Option4"] }
//             ]
//   },
// ] 