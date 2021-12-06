function navigate(NewLoc) {
    window.location.replace(NewLoc);
}

function fillRows() {
    var rows = [
        {
            "ID": "KL1042724",
            "Nosaukums": "Katalizators",
            "Tips": "Aprīkojums",
            "Apakštips": "Trauks",
            "Skaits": 23,
            "Svars": null,
            "Komntāri": "Daži komentāri"
        },
        {
            "ID": "KL1042723",
            "Nosaukums": "Birete",
            "Tips": "Aprīkojums",
            "Apakštips": "Trauks",
            "Skaits": 20,
            "Svars": null,
            "Komntāri": "Daži komentāri"
        },
        {
            "ID": "KL1042722",
            "Nosaukums": "HCl",
            "Tips": "Viela",
            "Apakštips": "Skābe",
            "Skaits": 19,
            "Svars": 40,
            "Komntāri": "Daži komentāri"
        },
        {
            "ID": "KL1042725",
            "Nosaukums": "Kolba",
            "Tips": "Aprīkojums",
            "Apakštips": "Trauks",
            "Skaits": 20,
            "Svars": null,
            "Komntāri": "Daži komentāri"
        },
        {
            "ID": "KL1042754",
            "Nosaukums": "Fe",
            "Tips": "Viela",
            "Apakštips": "Metāls",
            "Skaits": 48,
            "Svars": 10,
            "Komntāri": "Daži komentāri"
        },
        {
            "ID": "KL1042731",
            "Nosaukums": "Na",
            "Tips": "Viela",
            "Apakštips": "Metāls",
            "Skaits": 20,
            "Svars": 20,
            "Komntāri": "Daži komentāri"
        }
    ]

    const table = document.getElementById("myTable");
    rows.forEach(item => {
        let row = table.insertRow();
        let ID = row.insertCell(0);
        ID.innerHTML = item.ID;
        let Nosaukums = row.insertCell(1);
        Nosaukums.innerHTML = item.Nosaukums;
        let Tips = row.insertCell(2);
        Tips.innerHTML = item.Tips;
        let Apakštips = row.insertCell(3);
        Apakštips.innerHTML = item.Apakštips;
        let Skaits = row.insertCell(4);
        Skaits.innerHTML = item.Skaits;
        let Svars = row.insertCell(5);
        Svars.innerHTML = item.Svars;
        let Komntāri = row.insertCell(6);
        Komntāri.innerHTML = item.Komntāri;
    });
}

function filter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (var c = 0; c < td.length; c++) {
            var tdi = td[c];
            if (tdi) {
                txtValue = tdi.textContent || tdi.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "table-row";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

function filterSelection(filter) {
    var aprikojumsBttn, vielaBttn, allbttn;
    aprikojumsBttn = document.getElementById("aprikojumsBttn");
    vielaBttn = document.getElementById("vielaBttn");
    allbttn = document.getElementById("allBttn");

    if (filter !== "all") {

        if(filter === "Aprīkojums") {
            aprikojumsBttn.classList.add("active")
            vielaBttn.classList.remove("active")
            allbttn.classList.remove("active")
        } else {
            aprikojumsBttn.classList.remove("active")
            vielaBttn.classList.add("active")
            allbttn.classList.remove("active")
        }

        var input, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                    tr[i].style.display = "table-row";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } else {
        aprikojumsBttn.classList.remove("active")
        vielaBttn.classList.remove("active")
        allbttn.classList.add("active")

        var input, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            tr[i].style.display = "table-row";
        }
    }
}