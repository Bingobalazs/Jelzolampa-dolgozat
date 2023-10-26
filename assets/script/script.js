var Jpiros = document.getElementById("Jpiros")
var Jsarga = document.getElementById("Jsarga")
var Jzold = document.getElementById("Jzold")

var Vpiros1 = document.getElementById("Vpiros1")
var Vpiros2 = document.getElementById("Vpiros2")
var Vfeher = document.getElementById("Vfeher")
var position = 1
var automatikus = false

function Load(params) {
    Jpiros.style="display:block;"
    Jsarga.style="display:none;"
    Jzold.style="display:none;"

    Vpiros1.style="display:none;"
    Vpiros2.style="display:none;"
    Vfeher.style="display:none;"
}
var valto = null
document.getElementById("Jpiros").addEventListener("click", Jelzovalt)
document.getElementById("Jpiros").addEventListener("dblclick", Automata)

document.getElementById("Jsarga").addEventListener("click", Jelzovalt)
document.getElementById("Jsarga").addEventListener("dblclick", Automata)


document.getElementById("Jzold").addEventListener("click", Jelzovalt)
document.getElementById("Jzold").addEventListener("dblclick", Automata)


document.getElementById("J").addEventListener("click", Jelzovalt)
document.getElementById("J").addEventListener("dblclick", Automata)

document.getElementById("V").addEventListener("click", Vasutvalt)
document.getElementById("Vpiros1").addEventListener("click", Vasutvalt)
document.getElementById("Vpiros2").addEventListener("click", Vasutvalt)
document.getElementById("Vfeher").addEventListener("click", Vasutvalt)
function Jelzovalt(params) {
    console.log("valtas");
    if (position == 1)
        {
            Jpiros.style.display = "block";
            position = 2;
        }
        else if (position == 2)
        {
            Jpiros.style.display = "block";
            Jsarga.style.display = "block";
            Jzold.style.display = "none";
            position = 3;
        }
        else if (position == 3)
        {
            Jpiros.style.display = "none";
            Jsarga.style.display = "none";
            Jzold.style.display = "block";
            position = 4;
        }
        else if (position == 4)
        {
            Jsarga.style.display = "block";
            Jzold.style.display = "none";
            position = 5;
        }
        else if (position == 5)
        {
            Jpiros.style.display = "block";
            Jsarga.style.display = "none";
            position = 2;
        }
    
}

function Automata()
{
    console.log("AUTOMATIKUS");
    if (!automatikus)
    {
        automatikus = true;

        valto = setInterval(Jelzovalt, 500);
    }
    else
    {
        clearInterval(valto);
        automatikus = !automatikus
    }
}
var VasutPvalto=null
var Vstop = true
function Vasutvalt() {
    console.log("vasut");
    clearInterval(VasutPvalto)
    Vstop = !Vstop
    if (Vstop) {
        VasutPvalto= setInterval(() => {
            Vfeher.style="display:none;" 
            if (Vpiros1.style.display=="none") {
                Vpiros1.style="display:block;"
            Vpiros2.style="display:none;"
            console.log("a");
            } else {
                Vpiros1.style="display:none;"
            Vpiros2.style="display:block;"
            console.log("b");
            }
        }, 500);
    } else {
        Vpiros1.style="display:none;"
            Vpiros2.style="display:none;"
        VasutPvalto=setInterval(() => {
            if (Vfeher.style.display=="none") {
                Vfeher.style="display:block;"
                console.log("FEHER BE");
            } else {
                Vfeher.style="display:none;"   
                console.log("FEHER KI");
            }
        }, 500);
    }
}
Vasutvalt()
Jelzovalt()