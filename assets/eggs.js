var _eggs = 0;
var colors = ['salmon', 'pink', 'coral','gold', 'plum', 'orange', 'khaki', 'olive', 'teal'];
// Fact 7) I thought it would be funny to use "word" html colors instead of hex bc I like working within constraint and will manufacture it if it is not there

function camefirst(){

	// there is a chicken and an egg on this page. Fact 1) I like questions that don't have clear answers, like this one.
	var thisone = document.getElementById("egg0");
	var thatone = document.getElementById("chicken");
	thisone.setAttribute("class", "hide");
	thatone.setAttribute("class", "hide");

	// which one should we show first? It is a coin toss
	which = Math.floor(Math.random() * 2);
	if(which == 1){
		// it is the chicken.
		thatone.setAttribute("class", "show");
	} else {
		// it is the egg.
		thisone.setAttribute("class", "show");
	}
	// it would be funny if sometimes it shows a dinosaur, not a chicken, as they are the the original egg layers
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
  document.getElementById('basket').prepend(newegg); // Fact 2) I like puns, oh well.
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

	// future: crack animation or svg swap
}


// END OF THE CHICKEN AND EGG BUSINESS //
// HERE ARE THE NUTS AND BOLTS BELOW	 //


// change any SVG color
function setFill(who, color){
	who.setAttribute("fill", color);
}

// the pinata effect
let intv;
function pinata() { // Fact 3) I appreciate chaos
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
Synth.setVolume(0.5517); // Fact 4) 5517 is Liss upside down on a calculator

// sound workaround for iOS + Safari
function unlockAudio(){ // Fact 5) this is annoying but I appreciate Safari requiring user consent before playing sound.
	Synth.setVolume(0.0); // shhhhhhhh
	notes.play('C', 2, .1);
}
document.body.addEventListener('click', unlockAudio);
document.body.addEventListener('touchstart', unlockAudio);


// play the note associated to the color
function play(who) {
	//alert(who);
	// Fact 6) I am trying to cram as many types of logic in here as possible, a real cornucopia of vanilla js, for my own enjoyment
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
