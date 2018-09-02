function Simon() {
  let greenAudio  = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
		  redAudio  = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
		  yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
		  blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
      errorAudio = new Audio('https://raw.githubusercontent.com/JohnL3/Photos/master/errorbsound.mp3')
      
      this.start = '';
      this.clicked = '';
      this.index = 0;
      this.count = 0;
      this.flash = false;
      this.on_off = false;
      this.strict_on = false;
      this.panels = [];
      this.started = false;
      this.playerTurn = false;

      // Turn simon on or off
	this.game_on_off = function() {
		clearInterval(this.start);
		if (this.on_off === false) {
		    this.on_off = true;
			//this.init();
			//this.tones.audContext.resume();
		    this.start = '';
		    $('.switch').css('float', 'right');
			return this.on_off;
		} else {
		  clearInterval(this.start);
		  //this.tones.audContext.suspend();
		  this.start = '';
		  $('.switch').css('float', 'left');
		  $('.cou').text('--');
		  $('.strict-col').css('background-color', '#b96666');
		  $('.red').css('background-color', '#b50000');
		  $('.green').css('background-color', '#005500');
		  $('.blue').css('background-color', '#000075');
		  $('.yellow').css('background-color', '#dad518');
		  this.count = 0;
		  this.clicked = '';
		  this.strict_on = false;
		  this.on_off = false;
		  this.started = false;
		  this.index = 0;
		  this.panels = [];
		  this.flash = false;
		  this.playerTurn = false;
		  return this.on_off;
		}
  };
  
  // Set the game to strict mode
	this.setStrict = function(){
		if(this.on_off === true) {
			if(this.strict_on === false) {
				$('.strict-col').css('background-color', 'red');
				this.strict_on = true;
			} else {
				  $('.strict-col').css('background-color', '#b96666');
				  this.strict_on = false;
				}
		}
  }
  
  // used to get colors to push to panels array to show what the simon game played
	this.randColor = (colors = ['.red','.green','.yellow','.blue']) => colors[randomNum(0,3)];
	let randomNum = (min = 0, max = 3) => Math.floor(Math.random() * (max - min + 1)) + min;
}

let simon = new Simon();

$('.on-off').click(()=>{
	simon.game_on_off();
})

$('.strict').click(()=>{
	simon.setStrict();
})