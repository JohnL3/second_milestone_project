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
  // Start the simon game
	this.startSimon = function() {
		if(this.on_off === true && this.started === false){
		this.started = true;
		this.simonMakesMusic();
		return this.started;
		}
		return this.started;
	}
  
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

  // logic used by computer to make sound and flash panels 
	this.simonMakesMusic = function() {
		this.addPanels(this.randColor());
		//this.start = setInterval(()=>{this.simonPlayNotes()},500);
	}
  
  // used to push to the panels array
	this.addPanels = function(item) {
		if(this.on_off === true && this.started === true) { 
		this.panels.push(item);
		return item;
		}
		return null;
	}
  
  // used to get colors to push to panels array to show what the simon game played
	this.randColor = (colors = ['.red','.green','.yellow','.blue']) => colors[randomNum(0,3)];
  let randomNum = (min = 0, max = 3) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  	// used to flash the panel colors
	this.getColor = (nameC)=>{
		switch(nameC) {
			case '.red':
				return (this.flash)? '#b50000':'#f15b5b';
			case '.green':
				return (this.flash)? '#005500':'#30ab30';
			case '.yellow':
				return (this.flash)? '#dad518':'#f1f15b';
			case '.blue':
				return (this.flash)? '#000075':'#4b4bd2';
		}
	}
	// used to play sound when its the games turn or when human presses a simon panel
	this.playSound = (nameC = errorAudio) => {
			switch(nameC) {
			case '.red':
				//this.playTone('red');
				redAudio.play();
				break;
			case '.green':
				//this.playTone('green');
				greenAudio.play();
				break;
			case '.yellow':
				//this.playTone('yellow');
				yellowAudio.play();
				break;
			case '.blue':
				//this.playTone('blue');
				blueAudio.play();
				break;
			default:
				nameC.play();
			  }
	};
}

let simon = new Simon();

$('.start-btn').click(() => {
	simon.startSimon();
})

$('.on-off').click(()=>{
	simon.game_on_off();
})

$('.strict').click(()=>{
	simon.setStrict();
})