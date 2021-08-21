function addUser(){
    player1= document.getElementById("player1_nameinput").value;
    player2 = document.getElementById("player2_nameinput").value;

    localStorage.setItem("Player1" , player1);
    localStorage.setItem("Player2" , player2);

    window.location = "game_page.html";
}