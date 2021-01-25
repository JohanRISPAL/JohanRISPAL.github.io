$( document ).ready(function(){
	var number = $("#number").val();
    var indice = 2;

	$("#addPlayer").click(function(event){
        addPlayer(indice);
        indice += 1;
    });  

    $("#deletePlayer").click(function(event){
        var select = document.getElementById('containerPlayer');
        select.removeChild(select.lastChild);
        indice -= 1;
    });

    function addPlayer (indice) {
        var divCol = document.createElement("div");
        divCol.setAttribute('class', "col l4");

        var divPlayer = document.createElement("div");
        divPlayer.setAttribute("class", "player");

        var input = document.createElement("INPUT");
        input.setAttribute("type", "text");
        input.setAttribute("id", "name"+indice);
        input.setAttribute("placeholder", "Nom :")

        var p = document.createElement("p");
        var text = document.createTextNode("Joueur "+indice+" :");
        p.appendChild(text);

        divPlayer.appendChild(p);
        divPlayer.appendChild(input);
        divCol.appendChild(divPlayer);

        var container = document.getElementById("containerPlayer");
        container.appendChild(divCol);
    }

    $("#confirm").click(function(event) {
        var nbChamp = $(".player").length;
        var url = "index.php?p=game&player0=";
        var i = 1;

        while(i <= nbChamp){
            var name = document.getElementById("name"+i);
            
            if(name.value != ""){
                if(i == nbChamp){
                    url = url+name.value;
                    document.location = url;
                }else{
                    url = url+name.value+"&player"+i+"=";
                }
            }else{
                var empty = document.getElementById("errorEmpty");
                empty.innerHTML = "Eh ! Tu me prends pour un enseignant !? rempli tous les champs avant de pouvoir commencer."; 
            }

            i += 1;
        }

       
    });    

});