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

/* ===== AUTOMATIC GROUP A STANDINGS ===== */

let teams = {
    "Mexico": { P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 },
    "South Korea": { P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 },
    "South Africa": { P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 },
    "Czech Republic": { P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 }
};

function addMatch(team1, score1, team2, score2) {

    teams[team1].P++;
    teams[team2].P++;

    teams[team1].GF += score1;
    teams[team1].GA += score2;

    teams[team2].GF += score2;
    teams[team2].GA += score1;

    if (score1 > score2) {

        teams[team1].W++;
        teams[team1].Pts += 3;

        teams[team2].L++;

    } else if (score2 > score1) {

        teams[team2].W++;
        teams[team2].Pts += 3;

        teams[team1].L++;

    } else {

        teams[team1].D++;
        teams[team2].D++;

        teams[team1].Pts++;
        teams[team2].Pts++;
    }
}

/* GROUP A RESULTS */

/* Mexico 2-0 South Africa */
addMatch("Mexico", 2, "South Africa", 0);

/* South Korea 2-1 Czech Republic */
addMatch("South Korea", 2, "Czech Republic", 1);

/* Calculate Goal Difference */

for (let team in teams) {
    teams[team].GD = teams[team].GF - teams[team].GA;
}

/* Sort Standings */

let standings = Object.entries(teams);

standings.sort((a, b) => {

    if (b[1].Pts !== a[1].Pts) {
        return b[1].Pts - a[1].Pts;
    }

    return b[1].GD - a[1].GD;
});

/* Display Table */

const tableBody = document.getElementById("tableBody");

if (tableBody) {

    standings.forEach((team, index) => {

        tableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${team[0]}</td>
            <td>${team[1].P}</td>
            <td>${team[1].W}</td>
            <td>${team[1].D}</td>
            <td>${team[1].L}</td>
            <td>${team[1].GF}</td>
            <td>${team[1].GA}</td>
            <td>${team[1].GD}</td>
            <td>${team[1].Pts}</td>
        </tr>
        `;
    });
}