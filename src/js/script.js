var inputs = []

function btn_1() {
    var q1 = document.getElementsByName('fav_market');
    var q2 = document.getElementsByName('fav_drink');
    var q3 = document.getElementsByName('fav_game');
    var q4 = document.getElementsByName('professor');
    var q5 = document.getElementsByName('activity');
    var q6 = document.getElementsByName('food');

    save_inputs(q1, q2, q3, q4, q5, q6);

    //console.log(inputs);
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
                //console.log(q[i].value);
                inputs.push(q[i].value) ;
            }
        }
    }

}

function result() {
    let chars = {
        xaris: 0,
        mikros: 0,
        seros: 0,
        themos: 0,
        geros: 0,
        petros: 0,
        black: 0,
        frem: 0,
        maxi: 0 };

        //q1
        if (inputs[0] == "ΙΟΝΙΟΝ") {
            chars.themos +=1;
            chars.petros +=1;
            chars.frem +=1;
        } else if (inputs[0] == "ΣΥΝΚΑ"){
            chars.seros +=1;
            chars.geros +=1;
        } else if (inputs[0] == "LIDL"){
            chars.black +=1;
            chars.mikros +=1;
            chars.xaris +=1;
        }

        //q2
        if (inputs[1] == "ΦΑΝΤΑ") {
            chars.themos +=1;
            chars.mikros +=1
            chars.xaris +=1
        } else if (inputs[1] == "ΝΕΡΟ") {
            chars.seros +=1;
        }
        else if (inputs[1] == "ΣΟΔΑ") {
            chars.frem +=1;
        }
        else if (inputs[1] == "ΚΟΚΑΚΟΛΑ") {
            chars.black +=1;
        }
        else if (inputs[1] == "ΝΤΟΜ") {
            chars.geros +=1;
            chars.petros +=1;
        }

        //q3
        if (inputs[2] == "Supreme") {
            chars.themos +=1;
            chars.frem +=1;
        } else if (inputs[2] == "Apex") {
            chars.seros +=1;
            chars.black +=1;
            chars.petros +=1;
        } else if (inputs[2] == "Kart") {
            chars.mikros +=1;
            chars.xaris +=1;
            chars.geros +=1;
            chars.mikros +=1;
        }
        //q4
        if (inputs[3] == "Χωριανοπουλος") {
            chars.xaris +=1;
            chars.themos +=1;
            chars.geros +=1;
            chars.black +=1;
            chars.frem +=1;
            chars.petros +=1;
        }
        else if (inputs[3] == "Καρυδης") {
            chars.mikros +=1;
            chars.seros +=1;
            
        }

        //q5
        if (inputs[4] == "σπιαναδα") {
            chars.frem +=1;
            chars.mikros +=1;
        } else if (inputs[4] == "Azur") {
            chars.petros +=1;
            chars.xaris +=1;
        } else if (inputs[4] == "gaming") {
            chars.seros +=1;
            chars.themos +=1;
            chars.black +=1;
        } else if (inputs[4] == "σκουπιδια") {
            chars.geros +=1;
        }

        //q6
        if (inputs[5] == "mama") {
            chars.xaris +=1;
            chars.petros +=1;
        } else if (inputs[5] == "λεσχη") {
            chars.geros +=1;
            chars.black +=1;
        } else if (inputs[5] == "Αρτεμης") {
            chars.frem +=1;
            chars.seros +=1;
        } else if (inputs[5] == "πανινι") {
            chars.themos +=1;
            chars.mikros +=1;
        }

        //q7
        if (inputs[6] == "Μιτσικελι") {
            chars.frem +=1;
            chars.seros +=1;
        } else if (inputs[6] == "Κωστηλατας") {
            chars.petros +=1;
            chars.black +=1;
        } else if (inputs[6] == "table") {
            chars.mikros +=1;
            chars.xaris +=1;
        } else if (inputs[6] == "πινω") {
            chars.themos +=1;
            chars.geros +=1;
            
        }

        //q8
        if (inputs[5] == "αλκοολ") {
            chars.frem +=1;
            chars.petros +=1;
        } else if (inputs[5] == "ψωμι") {
            chars.geros +=1;
            chars.black +=1;
        } else if (inputs[5] == "χαρτονι") {
            chars.themos +=1;
            chars.xaris +=1;
        } else if (inputs[5] == "πατατακια") {
            chars.seros +=1;
            chars.mikros +=1;
        }

    // find max in chars obj
    var maxKey = _.max(Object.keys(chars), function (o) { return chars[o]; });

    // print result in screen
    document.getElementById("who").innerHTML = "Εισαι ο..." + maxKey;
}
