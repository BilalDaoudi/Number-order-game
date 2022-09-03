var T = [];

// Fonction Pour Retourne une nombre aléatoire
function Random_Between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Pour Remplir Le tableau T avec les nombre 1-8 sauf 9
while (T.length <= 8) {
    let test = false;
    let nb = Random_Between(1, 9);
    for (i = 0; i < T.length; i++) {
        if (T[i] == nb) {
            test = true
        }
    }
    if (test == false)
        T.push(nb);
}




// Pour transfert les tableau T au tableau de T_2D de deux dimansion
var T_2D = [];
var indice = 0;
for (i = 0; i < 3; i++) {
    let U = [];
    for (j = indice; j < indice + 3; j++) {
        U.push(T[j]);
    }
    T_2D.push(U)
    indice += 3;
}



// fonction Pour Creer Le table de jeux  avec DOM
function Creer_Jeux() {
    let tbl = document.createElement("table");
    tbl.setAttribute("id", "tab");
    tbl.setAttribute("border", "1");
    let tr = tbl.rows;
    for (i = 0; i < 3; i++) {
        let tr = document.createElement("tr");
        for (j = 0; j < 3; j++) {
            let td = document.createElement("td");
            if (T_2D[i][j] != 9)
                td.textContent = T_2D[i][j];
            else
                td.textContent = "";
            td.addEventListener("click", function () {
                let row = tr.rowIndex;
                let cell = td.cellIndex;

                if ((row != 0 && cell != 2) || (row != 1 && cell != 2) || (row != 2 && cell != 2)) {
                    if (tbl.rows[row].cells[cell + 1].textContent == "") {
                        tbl.rows[row].cells[cell + 1].textContent = tr.cells[cell].textContent;
                        tr.cells[cell].textContent = "";
                    }
                }
                if ((row != 0 && cell != 0) || (row != 1 && cell != 0) || (row != 2 && cell != 0)) {
                    if (tbl.rows[row].cells[cell - 1].textContent == "") {
                        tbl.rows[row].cells[cell - 1].textContent = tr.cells[cell].textContent;
                        tr.cells[cell].textContent = "";
                    }
                }
                if ((row != 0 && cell != 0) || (row != 0 && cell != 1) || (row != 0 && cell != 2)) {
                    if (tbl.rows[row - 1].cells[cell].textContent == "") {
                        tbl.rows[row - 1].cells[cell].textContent = tr.cells[cell].textContent;
                        tr.cells[cell].textContent = "";
                    }
                }
                if ((row != 2 && cell != 0) || (row != 2 && cell != 1) || (row != 0 && cell != 2)) {
                    if (tbl.rows[row + 1].cells[cell].textContent == "") {
                        tbl.rows[row + 1].cells[cell].textContent = tr.cells[cell].textContent;
                        tr.cells[cell].textContent = "";
                    }
                }
                Fin_jeux();
            })
            tr.appendChild(td);
        }
        tbl.appendChild(tr)
    }
    document.getElementById("jeux").appendChild(tbl);
}


// Fonction Pour Dire Que le Joueur Gagné
var speech = new SpeechSynthesisUtterance();
function dire() {
    speech.text = "Bien Joué, Tu as gagné !!!";
    speech.volume = 1;
    speech.lang = "fr-Fr";
    speechSynthesis.speak(speech);
}
// Fonction Pour test est ce que le joueur et gagné
function Fin_jeux() {
    let tbl = document.getElementById("tab");
    let v1 = tbl.rows[0].cells[0].textContent;
    let v2 = tbl.rows[0].cells[1].textContent;
    let v3 = tbl.rows[0].cells[2].textContent;
    let v4 = tbl.rows[1].cells[0].textContent;
    let v5 = tbl.rows[1].cells[1].textContent;
    let v6 = tbl.rows[1].cells[2].textContent;
    let v7 = tbl.rows[2].cells[0].textContent;
    let v8 = tbl.rows[2].cells[1].textContent;
    if (v1 == 1 && v2 == 2 && v3 == 3 && v4 == 4 && v5 == 5 && v6 == 6 && v7 == 7 && v8 == 8) {
        dire();
        document.getElementById("rejouer").setAttribute("style", " background-color: rgb(244, 27, 27);")
    }
}