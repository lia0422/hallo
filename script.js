function showMessage() {
    alert("⚽ Welcome to the FIFA World Cup 2026 website!");
}

function showMatches(groupId) {

    let allMatches = document.querySelectorAll(".matches");

    allMatches.forEach(match => {
        if (match.id !== groupId) {
            match.style.display = "none";
        }
    });

    let selected = document.getElementById(groupId);

    if (selected.style.display === "block") {
        selected.style.display = "none";
    } else {
        selected.style.display = "block";
    }
}
