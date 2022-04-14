var _eggs = 0;
var colors = ['salmon', 'pink', 'coral','gold', 'plum', 'orange', 'khaki', 'olive', 'teal'];


function camefirst(){

	// some transition on the background?!

	// there is a chicken and an egg on this page.
	var thisone = document.getElementById("egg0");
	var thatone = document.getElementById("chicken");
	thisone.setAttribute("class", "hide");
	thatone.setAttribute("class", "hide");

	// which one should we show first? It is a coin toss
	which = Math.floor(Math.random() * 2);
	if(which == 1){
		// it is the chicken.
		//setFill(thatone, "black");
		thatone.setAttribute("class", "show");
	} else {
		// it is the egg.
		thisone.setAttribute("class", "show");
	}

}

// if there is a chicken, we can lay an egg
function lay(){
	// quick what color is the chicken?
	_currentFill = document.getElementById("chicken").getAttribute("fill");
	// make a new egg
	newegg = document.getElementById('egg0').cloneNode(true);
	var eggcount = _eggs++;
	newegg.setAttribute("class", "show");
	newegg.id = "egg" + _eggs;
	newegg.setAttribute("class", _currentFill);
  document.getElementById('basket').prepend(newegg);
	// make it the same color as the chicken
	setFill(newegg,_currentFill);
	// could these have rando pattern fills like easter eggs?

}

// if there is an egg, we can break it
function crack(what){
	// play the note associated to the color
	var colornote = what.getAttribute("class");
	play(colornote);

	// is this the first egg? lay a CHICKEN
	document.getElementById("chicken").setAttribute("class", "show");
	// bye bye little egg
	what.setAttribute("class", "hide"); // delete
}


// END OF THE CHICKEN AND EGG BUSINESS //
// HERE ARE THE NUTS AND BOLTS BELOW	 //


// change any SVG color
function setFill(who, color){
	who.setAttribute("fill", color);
}

// the pinata effect
let intv;
function pinata() {
  if (!intv) {
    intv = setInterval(swap, 300);
  }
}

function swap() {
	var who = document.getElementById("chicken");
	var _currentFill = colors[Math.floor(Math.random() * colors.length)];
	who.setAttribute("fill", _currentFill)
}

// start a 5 second timer to pinata effect
setTimeout(function() {
	pinata();
}, 5000);

function nopinata() {
	// no having fun here.
  clearInterval(intv);
  intv = null;
}

// These notes are all generated in the moment thanks to this awesome
// bit of code from Keith Wohr: https://keithwhor.github.io/audiosynth/

Synth instanceof AudioSynth; // true
var notes = Synth.createInstrument('piano');
Synth.setSampleRate(20000);
Synth.setVolume(0.5517); // 5517 is Liss upside down on a calculator

// play the note associated to the color
function play(who) {
	//alert(who);
	// a switch statement! how novel.
	switch(who) {
	  case "teal":
			notes.play('D#', 3, .75);
	    break;
	  case "salmon":
			notes.play('E', 3, .75);
	    break;
		case "gold":
			notes.play('E', 2, .75);
			break;
		case "pink":
			notes.play('G', 2, .75);
			break;
		case "coral":
			notes.play('A', 2, .75);
			break;
		case "plum":
			notes.play('E', 4, .75);
			break;
		case "orange":
			notes.play('D#', 4, .75);
			break;
		case "khaki":
			notes.play('E', 4, .75);
			break;
		case "olive":
			notes.play('A#', 2, .75);
			break;
	  default:
			notes.play('C', 2, .75);
	}
}
