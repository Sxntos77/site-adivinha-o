    function adduser() {
        player1name = document.getElementById("player1input").value
        player2name = document.getElementById("player2input").value
        localStorage.setItem("player1key", player1name)
        localStorage.setItem("player2key", player2name)
        window.location = "gamepage.html"
        


        
    }