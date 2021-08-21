player_1_name = localStorage.getItem("Player1");
player_2_name = localStorage.getItem("Player2");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " :";
document.getElementById("player2_name").innerHTML = player_2_name + " :";

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;

function send_word(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase" + word);

    C1 = word.charAt(1);
    console.log(C1);

    w_1 = Math.floor(word.length / 2);
    C2 = word.charAt(w_1);
    console.log(C2);

    w_2 = word.length - 1;
    C3 = word.charAt(w_2);
    console.log(C3);

    R1 = word.replace(C1,"_");
    R2 = R1.replace(C2,"_");
    R3 = R2.replace(C3,"_");
    console.log(R3);

    Question = "<h4 id = 'word_display'>Q. "+R3+"</h4>";
    input = "answer:<input type = 'text' id='input_check_box'>";
    Button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button>";
    Row = Question + input + Button;

    document.getElementById("output").innerHTML = Row;
    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
console.log("Answer =" + answer);
if(answer == word){
    if(answer_turn == "player_1"){
        player_1_score++;
        document.getElementById("player1_score").innerHTML = player_1_score;
    }
    else{
        player_2_score++;
        document.getElementById("player2_score").innerHTML = player_2_score;
    }
}
if(question_turn == "player_1"){
    question_turn = "player_2";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player_2_name;
   }
   else{
       question_turn = "player_1";
       document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
   }

   if(answer_turn == "player_1"){
       answer_turn = "player_2";
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
   }
   else{
       answer_turn = "player_1";
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1_name;
   }
   
   document.getElementById("output").innerHTML = "";
}