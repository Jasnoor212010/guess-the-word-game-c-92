player1_name= localStorage.getItem("player1name");
player2_name= localStorage.getItem("player2name");
question_turn="player1";
answer_turn="player2";
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn: "+player2_name;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    first_char=word.charAt(1);
    last_char=word.charAt(word.length-1);
    middle_char=word.charAt(Math.floor(word.length/2));

    remove_first_char=word.replace(first_char,"_");
    remove_last_char =remove_first_char.replace(last_char,"_");
    remove_middle_char =remove_last_char.replace(middle_char,"_");

question_word=remove_middle_char;

question_tag="<h4 id='question'> Q. "+question_word+"</h4> <br>";
answer_tag="answer: <input type='text' id='input_answer'><br>";
button_tag="<button onclick='check()' class='btn btn-warning'>Check</button>";
row = question_tag+answer_tag+button_tag;
document.getElementById("output").innerHTML=row;
document.getElementById("word").innerHTML=" ";
}

 function check(){
     var answerget_word= document.getElementById("input_answer").value;
     var answer_lword=answerget_word.toLowerCase();
     if (word==answer_lword) {
         if (answer_turn=="player1") {
             player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;   
         }
         if (answer_turn=="player2") {
            player2_score=player2_score+1;
       document.getElementById("player2_score").innerHTML=player2_score;   
        }
     }

     if (answer_turn=="player1") {
         answer_turn="player2";
         document.getElementById("player_answer").innerHTML="Answer Turn :"+player2_name;
     }
     else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn :"+player1_name;
     }

     if (question_turn=="player1") {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn :"+player2_name;
    }
    else{
       question_turn="player1";
       document.getElementById("player_question").innerHTML="Question Turn :"+player1_name;
    }
    document.getElementById("output").innerHTML=" ";
    document.getElementById("word").innerHTML=" ";
 }