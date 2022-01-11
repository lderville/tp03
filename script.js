
function Ajouter(qualifiedName, value) {
    let valeurdeLinput = document.getElementById('monSavoir').value;
    let valeurAuteur = document.getElementById('auteur').value;
    let date = document.getElementById('date').value;
    let monLi = document.createElement('li');
    let maDiv = document.createElement('div')


    if(date.trim().length==0 || valeurdeLinput.trim().length==0 ||valeurAuteur.trim().length==0){

        alert("champ obligatoire");
    }
else {
        let monP = document.createElement('p');
        maDiv.setAttribute('type', 'button');
        maDiv.setAttribute('onclick', 'removediv();');
        maDiv.setAttribute('id', 'salut');
        monLi.setAttribute('id', 'intituler')
        monP.setAttribute('id', 'nometdate');

        monLi.innerText = valeurdeLinput;
        monP.innerText = "par " + valeurAuteur + ", le " + formatDate(date);
//monD.innerText = date;


        let monUl = document.getElementById('maliste');

        monUl.appendChild(maDiv);
        maDiv.appendChild(monLi)
        monLi.appendChild(monP);

        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [day, month, year].join('/');
        }
    }
}

function removediv() {
    let intituler = document.getElementById('intituler').childNodes[0].textContent;


    console.log(intituler);
//    window.confirm("Voulez-vous supprimer" + intituler + "?");

    if (window.confirm("Voulez-vous supprimer " + intituler + "?")){

        var elem = document.getElementById("salut");
        elem.parentNode.removeChild(elem);
    }
}