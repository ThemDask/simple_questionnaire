var inputs = []

var xaris = 0;
var mikros = 0;
var seros = 0;
var themos = 0;
var geros = 0;
var petros = 0;
var black = 0;

function btn_1() {
    var q1 = document.getElementsByName('fav_market');
    var q2 = document.getElementsByName('fav_drink');
    var q3 = document.getElementsByName('fav_game');
    var q4 = document.getElementsByName('professor');
    var q5 = document.getElementsByName('activity');
    var q6 = document.getElementsByName('food');

    save_inputs(q1, q2, q3, q4, q5, q6);

    console.log(inputs);
    result();

    document.getElementById("maincont").style.display = "none";
    document.getElementById("buttoncont").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function save_inputs(q_one, q_two, q_three,q_four,q_five,q_six){

    const table = [q_one, q_two, q_three,q_four,q_five,q_six]

    for (k=0; k< table.length; k++) {
        q= table[k]
        for(i = 0; i < q.length; i++) {
            if(q[i].checked) {
                console.log(q[i].value);
                inputs.push(q[i].value) ;
            }
    
        }
    }

}

function result() {
    var xaris = 0;
    var mikros = 0;
    var seros = 0;
    var themos = 0;
    var geros = 0;
    var petros = 0;
    var black = 0;

    var winner;

        if (inputs[0] = "ΙΟΝΙΟΝ") {
            themos +=1;
        }
        if (inputs[1] = "ΦΑΝΤΑ") {
            themos +=1;
        }
        if (inputs[2] = "Supreme") {
            themos +=1;
        }
        if (inputs[3] = "Χωριανοπουλος") {
            xaris +=1;
        }
        if (inputs[4] = "σπιαναδα") {
            xaris +=1;
        }
        if (inputs[5] = "mama") {
            xaris +=1;
        }

    if (themos>xaris) {
        winner = "Εισαι ο... Θεμος"
    } else {
        winner = "Εισαι ο... Χαρης"
    }

    document.getElementById("who").innerHTML = winner;
}