$( document ).ready(function(){

    swal({
        text: "Il est temps de commencer la partie !",
        button : {
            text : "Commencer la partie",
            className: "startButton",
        }
    });

    let players = getURLParameters(document.location.href);

    var requestURL = './app/view/assets/js/event.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    var dice1Container = document.getElementById("dice1");
    var dice2Container = document.getElementById("dice2");
    var dice3Container = document.getElementById("dice3");

    request.onload = function() {
      var eventGame = request.response;

      $.ajax({
        url: "./app/view/assets/js/ajax_game.php",
        type: "POST",
        dataType: "json",
        data: { method: "getTab", ...players },
        success: (result) => { 
            var eventContainer = document.getElementById("event");

            for(var i = 0; i < result.length; i++){
                var newTr = document.createElement("tr");
                var newThName = document.createElement("th");
                var newThPoints = document.createElement("th");
                newThPoints.setAttribute("id", "pointsPlayer"+i);

                var newContentName = document.createTextNode(result[i]["_nom"]);
                var newContentPoints = document.createTextNode(result[i]["_points"]);

                newThName.appendChild(newContentName);
                newThPoints.appendChild(newContentPoints);

                newTr.appendChild(newThName);
                newTr.appendChild(newThPoints);

                var tabPlayer = document.getElementById("tabPlayer");
                tabPlayer.appendChild(newTr);
            }

            var nbPlayer = result.length,
            d1 = document.getElementById("d1"),
            d2 = document.getElementById("d2"),
            d3 = document.getElementById("d3"),
            numeroPlayerTurn = 0,
            maxPoints = 343,
            namePlayerTurn = document.getElementById("playerTurn"),
            win = "Bravo belle victoire de ";
            $("#throwDice").hide();
            $("#nextTurn").hide();
            $("#cdc").hide();
            $("#win").hide();

            $(".startButton").click(function(event){
                $("#startButton").hide();
                $("#throwDice").show();

                namePlayerTurn.innerHTML = "Tour de : " + result[0]["_nom"];
            });

            $("#throwDice").click(function(event){
                d1 = getRandomInt(6);
                d2 = getRandomInt(6);
                d3 = getRandomInt(6);

                if(d1 == 1){
                    dice1Container.innerHTML = "<img src='./app/view/assets/image/face1.png'>";
                }else if(d1 == 2){
                    dice1Container.innerHTML = "<img src='./app/view/assets/image/face2.png'>";
                }else if(d1 == 3){
                    dice1Container.innerHTML = "<img src='./app/view/assets/image/face3.png'>";
                }else if(d1 == 4){
                    dice1Container.innerHTML = "<img src='./app/view/assets/image/face4.png'>";
                }else if(d1 == 5){
                    dice1Container.innerHTML = "<img src='./app/view/assets/image/face5.png'>";
                }else if(d1 == 6){
                    dice1Container.innerHTML = "<img src='./app/view/assets/image/face6.png'>";
                }

                if(d2 == 1){
                    dice2Container.innerHTML = "<img src='./app/view/assets/image/face1.png'>";
                }else if(d2 == 2){
                    dice2Container.innerHTML = "<img src='./app/view/assets/image/face2.png'>";
                }else if(d2 == 3){
                    dice2Container.innerHTML = "<img src='./app/view/assets/image/face3.png'>";
                }else if(d2 == 4){
                    dice2Container.innerHTML = "<img src='./app/view/assets/image/face4.png'>";
                }else if(d2 == 5){
                    dice2Container.innerHTML = "<img src='./app/view/assets/image/face5.png'>";
                }else if(d2 == 6){
                    dice2Container.innerHTML = "<img src='./app/view/assets/image/face6.png'>";
                }

                if(d3 == 1){
                    dice3Container.innerHTML = "<img src='./app/view/assets/image/face1.png'>";
                }else if(d3 == 2){
                    dice3Container.innerHTML = "<img src='./app/view/assets/image/face2.png'>";
                }else if(d3 == 3){
                    dice3Container.innerHTML = "<img src='./app/view/assets/image/face3.png'>";
                }else if(d3 == 4){
                    dice3Container.innerHTML = "<img src='./app/view/assets/image/face4.png'>";
                }else if(d3 == 5){
                    dice3Container.innerHTML = "<img src='./app/view/assets/image/face5.png'>";
                }else if(d3 == 6){
                    dice3Container.innerHTML = "<img src='./app/view/assets/image/face6.png'>";
                }

                var elmtD1 = document.getElementById("dice1"),
                leftD1 = getRandomInt(100),
                topD1 = getRandomInt(100);
                elmtD1.style.left = leftD1 + "%";
                elmtD1.style.top = topD1 + "%";

                var elmtD2 = document.getElementById("dice2"),                
                leftD2 = getRandomInt(100),
                topD2 = getRandomInt(100);
                elmtD2.style.left = leftD2 + "%";
                elmtD2.style.top = topD2 + "%";

                var elmtD3 = document.getElementById("dice3"),
                leftD3 = getRandomInt(100),
                topD3 = getRandomInt(100);
                elmtD3.style.left = leftD3 + "%";
                elmtD3.style.top = topD3 + "%";

                if(leftD2 - 6 >= leftD1 >= leftD2 + 6 || leftD3 - 6 >= leftD1 >= leftD3 + 6 ){
                    if(leftD1 == 94){
                        leftD1 -= 6;
                    }else if(leftD1 == 95){
                        leftD1 -= 7;
                    }else if(leftD1 == 96){
                        leftD1 -= 8;
                    }else if(leftD1 == 97){
                        leftD1 -= 9;
                    }else if(leftD1 == 98){
                        leftD1 -= 10;
                    }else if(leftD1 == 99){
                        leftD1 -= 11;
                    }else if(leftD1 == 100){
                        leftD1 -= 12;
                    }else{
                        leftD1 += 6;
                    }
                }else if(leftD2 - 6 >= leftD3 >= leftD2 + 6){
                    if(leftD3 == 94){
                        leftD3 -= 6;
                    }else if(leftD3 == 95){
                        leftD3 -= 7;
                    }else if(leftD3 == 96){
                        leftD3 -= 8;
                    }else if(leftD3 == 97){
                        leftD3 -= 9;
                    }else if(leftD3 == 98){
                        leftD3 -= 10;
                    }else if(leftD3 == 99){
                        leftD3 -= 11;
                    }else if(leftD1 == 100){
                        leftD3 -= 12;
                    }else{
                        leftD3 += 6;
                    }
                }


                $("#dice1").show();
                $("#dice2").show();
                $("#dice3").show();

                var bevue = 0,
                points = 0;

                if(leftD1 > 98 || topD1 > 95 || leftD2 > 98 || topD2 > 95 || leftD3 > 98 || topD3 > 95){
                    bevue = 10;
                    swal({
                        text: "Bévue",
                        timer : 4000,
                    });
                }else{ 

                    if(d1 == d2 || d1 == d3 || d2 == d3){
                        if(d1 == d2 && d1 == d3){
                            if(d1 == 1){
                                points = 50;
                                swal({
                                    text: eventGame["cdc1"],
                                    timer : 4000,
                                });
                            }else if(d1 == 2){
                                points = 60;
                                swal({
                                    text: eventGame["cdc2"],
                                    timer : 4000,
                                });
                            }else if(d1 == 3){
                                points = 70;
                                swal({
                                    text: eventGame["cdc3"],
                                    timer : 4000,
                                });
                            }else if(d1 == 4){
                                points = 80;
                                swal({
                                    text: eventGame["cdc4"],
                                    timer : 4000,
                                });
                            }else if(d1 == 5){
                                points = 90;
                                swal({
                                    text: eventGame["cdc5"],
                                    timer : 4000,
                                });
                            }else if(d1 == 6){
                                points = 100;
                                swal({
                                    text: eventGame["cdc6"],
                                    timer : 4000,
                                });
                            }
                        }else{
                            if(d1 == d2 || d1 == d3){
                                points = d1 * d1;
                                if(d1 == 1){
                                    swal({
                                        text: eventGame["c1"],
                                        timer : 4000,
                                    });
                                }else if(d1 == 2){
                                    swal({
                                        text: eventGame["c2"],
                                        timer : 4000,
                                    });
                                }else if(d1 == 3){
                                    swal({
                                        text: eventGame["c3"],
                                        timer : 4000,
                                    });
                                }else if(d1 == 4){
                                    swal({
                                        text: eventGame["c4"],
                                        timer : 4000,
                                    });
                                }else if(d1 == 5){
                                    swal({
                                        text: eventGame["c5"],
                                        timer : 4000,
                                    });
                                }else if(d1 == 6){
                                    swal({
                                        text: eventGame["c6"],
                                        timer : 4000,
                                    });
                                }
                            }else if(d2 == d3){
                                points = d2 * d2;
                                if(d2 == 1){
                                    swal({
                                        text: eventGame["c1"],
                                        timer : 4000,
                                    });
                                }else if(d2 == 2){
                                    swal({
                                        text: eventGame["c2"],
                                        timer : 4000,
                                    });
                                }else if(d2 == 3){
                                    swal({
                                        text: eventGame["c3"],
                                        timer : 4000,
                                    });
                                }else if(d2 == 4){
                                    swal({
                                        text: eventGame["c4"],
                                        timer : 4000,
                                    });
                                }else if(d2 == 5){
                                    swal({
                                        text: eventGame["c5"],
                                        timer : 4000,
                                    });
                                }else if(d2 == 6){
                                    swal({
                                        text: eventGame["c6"],
                                        timer : 4000,
                                    });
                                }
                            }
                        }
                    }else if(d1 + d2 == d3){
                        points = 2 * (d3 * d3);
                        if(d3 == 2){
                            swal({
                                text: eventGame["v2"],
                                timer : 4000,
                            });
                        }else if(d3 == 3){
                           swal({
                                text: eventGame["v3"],
                                timer : 4000,
                            });
                        }else if(d3 == 4){
                            swal({
                                text: eventGame["v4"],
                                timer : 4000,
                            });
                        }else if(d3 == 5){
                            swal({
                                text: eventGame["v5"],
                                timer : 4000,
                            });
                        }else if(d3 == 6){
                           swal({
                                text: eventGame["v6"],
                                timer : 4000,
                            });
                        }
                    }else if(d1 + d3 == d2){
                        points = 2 * (d2 * d2);
                        if(d2 == 2){
                            swal({
                                text: eventGame["v2"],
                                timer : 4000,
                            });
                        }else if(d2 == 3){
                           swal({
                                text: eventGame["v3"],
                                timer : 4000,
                            });
                        }else if(d2 == 4){
                            swal({
                                text: eventGame["v4"],
                                timer : 4000,
                            });
                        }else if(d2 == 5){
                            swal({
                                text: eventGame["v5"],
                                timer : 4000,
                            });
                        }else if(d2 == 6){
                           swal({
                                text: eventGame["v6"],
                                timer : 4000,
                            });
                        }
                    }
                    else if(d3 + d2 == d1){
                        points = 2 * (d1 * d1);
                        if(d1 == 2){
                            swal({
                                text: eventGame["v2"],
                                timer : 4000,
                            });
                        }else if(d1 == 3){
                           swal({
                                text: eventGame["v3"],
                                timer : 4000,
                            });
                        }else if(d1 == 4){
                            swal({
                                text: eventGame["v4"],
                                timer : 4000,
                            });
                        }else if(d1 == 5){
                            swal({
                                text: eventGame["v5"],
                                timer : 4000,
                            });
                        }else if(d1 == 6){
                            swal({
                                text: eventGame["v6"],
                                timer : 4000,
                            });
                        }
                    }else{
                        var neant = getRandomInt(6);
                        swal({
                            text: eventGame["neant"]["n"+neant],
                            timer : 4000,
                        });
                    }
                }
                var pointsPlayer = document.getElementById("pointsPlayer"+numeroPlayerTurn);

                result[numeroPlayerTurn]["_points"] = result[numeroPlayerTurn]["_points"] - bevue;

                if(result[numeroPlayerTurn]["_points"] + points > maxPoints){
                    result[numeroPlayerTurn]["_points"] = result[numeroPlayerTurn]["_points"];
     
                    pointsPlayer.innerHTML = result[numeroPlayerTurn]["_points"];
                }else if (result[numeroPlayerTurn]["_points"] + points == maxPoints){
                    document.location = "index.php?p=endGame&winner="+result[numeroPlayerTurn]["_nom"];
                }else{
                    result[numeroPlayerTurn]["_points"] = result[numeroPlayerTurn]["_points"] + points;

                    pointsPlayer.innerHTML = result[numeroPlayerTurn]["_points"];
                }

                
                $("#throwDice").hide();
                $("#nextTurn").show();
            });

            $("#nextTurn").click(function(event){
                if(numeroPlayerTurn != nbPlayer - 1){

                    numeroPlayerTurn += 1;
                }else if(numeroPlayerTurn == nbPlayer - 1){
            
                    numeroPlayerTurn = 0;
                }
                $("#dice1").hide();
                $("#dice2").hide();
                $("#dice3").hide();

                $("#cdc").hide();

                $("#throwDice").show();
                $("#nextTurn").hide();

                namePlayerTurn.innerHTML = "Tour de : " + result[numeroPlayerTurn]["_nom"];

                eventContainer.innerHTML = " ";
            });

        },
        error: (err) => {
            console.log(err);
        }
    });


    }

   

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    function getURLParameters(url){
        var result = {};
        var hashIndex = url.indexOf("#");
        if (hashIndex > 0)
           url = url.substr(0, hashIndex);        
        var searchIndex = url.indexOf("?");
        if (searchIndex == -1 ) return result;
        var sPageURL = url.substring(searchIndex +1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {       
            var sParameterName = sURLVariables[i].split('=');      
            result[sParameterName[0]] = sParameterName[1];
        }
        return result;
    }
});