function add_user() {
    player1_name = document.getElementById("player1_id").value;
    player2_name = document.getElementById("player2_id").value;

    localStorage.setItem("player1_id", player1_name);
    localStorage.setItem("player2_id", player2_name);

    window.location = "page.html";
}