
function darkToggleButtonNoIncrement() {

    if ( parseInt(localStorage.getItem("toggleCount")) % 2 == 1 ) {
        console.log("no inc enable dark toggle");

        document.getElementById('i-hate-this').innerHTML = '.toggle-slot { background-color: #374151;} .toggle-slot .toggle-button {background-color: #485367;box-shadow: inset 0px 0px 0px 0.2em white;transform: translate(.6em, .4em);} .toggle-slot .sun-icon-wrapper { opacity: 0; transform: translate(3em, 1em) rotate(0deg);} .toggle-slot .moon-icon-wrapper { opacity: 1; transform: translate(2.75em, .4em);}';

        darkModeTheme();
    }
    else {
        console.log("no inc disable dark toggle");

        document.getElementById('i-hate-this').innerHTML = '.toggle-slot { position: relative; height: 2.5em; width: 5em; border: 2.5px solid #e4e7ec; border-radius: 50em; background-color: white; box-shadow: 0px 5px 10px #e4e7ec; transition: background-color 1ms;}';
    }
}


function darkToggleButton() {

    var i = parseInt(localStorage.getItem("toggleCount"))
    localStorage.setItem("toggleCount", ++i);
    console.log( parseInt(localStorage.getItem("toggleCount")) )

    if ( parseInt(localStorage.getItem("toggleCount")) % 2 == 1 ) {
        console.log("enable dark toggle");

        document.getElementById('i-hate-this').innerHTML = '.toggle-slot { background-color: #374151;} .toggle-slot .toggle-button {background-color: #485367;box-shadow: inset 0px 0px 0px 0.2em white;transform: translate(.6em, .4em);} .toggle-slot .sun-icon-wrapper { opacity: 0; transform: translate(3em, 1em) rotate(0deg);} .toggle-slot .moon-icon-wrapper { opacity: 1; transform: translate(2.75em, .4em);}';

        darkModeTheme();
    }
    else {
        console.log("disable dark toggle");
        document.getElementById('i-hate-this').innerHTML = '';
        document.getElementById('i-hate-this').innerHTML = '.toggle-slot { position: relative; height: 2.5em; width: 5em; border: 2.5px solid #e4e7ec; border-radius: 50em; background-color: white; box-shadow: 0px 5px 10px #e4e7ec; transition: background-color 1ms;}';

        darkModeTheme();
    }
}