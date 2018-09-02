describe('Test my Simon Game', function(){
	describe('It should create a new Instance of Simon', function(){
		beforeEach(function(){
			simon = new Simon();
		})
		it('simon should exist', function(){
			expect(simon).toBeDefined();
		})
		it('simon.start  should = ""', function(){
			expect(simon.start).toEqual('');
		})
		it('simon.count  should = 0', function(){
			expect(simon.count).toEqual(0);
		})
		it('simon.index should = 0', function(){
			expect(simon.index).toEqual(0);
		})
		it('simon.panels should = []', function(){
			expect(simon.panels).toEqual([]);
		})
		it('simon.on_off should be false', function(){
			expect(simon.on_off).toBe(false);
		})
		it('simon.started should be false', function(){
			expect(simon.started).toBe(false);
		})
		it('simon.playerTurn should be false', function(){
			expect(simon.playerTurn).toBe(false);
		})
		it('Should expect simon to have property game_on_off', function(){
			expect(simon.hasOwnProperty('game_on_off')).toBeTruthy();
		})
		it('Should expect simon to have property startSimon', function(){
			expect(simon.hasOwnProperty('startSimon')).toBeTruthy();
		})
		it('Should expect simon to have property simonMakesMusic', function(){
			expect(simon.hasOwnProperty('simonMakesMusic')).toBeTruthy();
		})
		it('Should expect simon to have property addPanels', function(){
			expect(simon.hasOwnProperty('addPanels')).toBeTruthy();
		})
		it('Should expect simon to have property simonPlayNotes', function(){
			expect(simon.hasOwnProperty('simonPlayNotes')).toBeTruthy();
		})
		it('Should expect simon to have property randColor', function(){
			expect(simon.hasOwnProperty('randColor')).toBeTruthy();
		})
		it('Should expect simon to have property getColor', function(){
			expect(simon.hasOwnProperty('getColor')).toBeTruthy();
		})
		it('Should expect simon to have property playSound', function(){
			expect(simon.hasOwnProperty('playSound')).toBeTruthy();
		})
		it('Should expect simon to have property setStrict', function(){
			expect(simon.hasOwnProperty('setStrict')).toBeTruthy();
		})
		it('Should expect simon to have property clickedPanel', function(){
			expect(simon.hasOwnProperty('clickedPanel')).toBeTruthy();
		})
		it('Should expect simon to have property playNoteHuman', function(){
			expect(simon.hasOwnProperty('playNoteHuman')).toBeTruthy();
		})
		it('Should expect simon to have property checkPanelClicked', function(){
			expect(simon.hasOwnProperty('checkPanelClicked')).toBeTruthy();
		})
		it('Should expect simon to have property resetPlayerTurn', function(){
			expect(simon.hasOwnProperty('resetPlayerTurn')).toBeTruthy();
		})
		it('Should expect simon to have property checkCount', function(){
			expect(simon.hasOwnProperty('checkCount')).toBeTruthy();
		})
		it('Should expect simon to have property runError', function(){
			expect(simon.hasOwnProperty('runError')).toBeTruthy();
		})
		
	})
	describe('Test simon.game_on_off ', function(){
		beforeEach(function(){
			simon = new Simon();
			setFixtures(`<div class="on-off" onclick="simon.game_on_off()"></div>
						<div class="red" style="background-color: red"></div>
						<div class="green"></div>
						<div class="yellow"></div>
						<div class="blue"></div>
						<h1 class="cou"></h1>`)
		})
		it('Clicking on element with class on-off should set simon.on-off to true if simon.on_off = false', function(){
			let spyEvent = spyOnEvent('.on-off', 'click');
			$('.on-off').trigger('click');
			
			expect(spyEvent).toHaveBeenTriggered();
			expect(simon.on_off).toBe(true);
		})
		it('Should return true when simon.game_on_off is called and simon.on_off = false', function(){
			let result = simon.game_on_off();
			
			expect(result).toBe(true);
		})
		it('Should return false when simon.game_on_off is called and simon.on_off = true', function(){
			let result; 
			simon.game_on_off();
			result = simon.game_on_off();
			
			expect(result).toBe(false);
		})
		it('Calling simon.game_on_off should reset all simon properties to their initial settings if simon.on_off = true', function(){
			
			simon.game_on_off();
			simon.game_on_off();
			
			expect(simon.start).toEqual('');
			expect(simon.index).toEqual(0);
			expect(simon.panels).toEqual([]);
			expect(simon.on_off).toBe(false);
			expect(simon.started).toBe(false);
			expect(simon.started).toBe(false);
		})
		it('calling simon.game_on_off when simon.on-off = true should set the panel of class .red of class .green of class .yellow of class .blue  to their starting colors of red,green,yellow,blue', function(){
			simon.game_on_off();
			simon.game_on_off();
			
			expect($('.red').css('background-color')).toEqual('rgb(181, 0, 0)');
			expect($('.green').css('background-color')).toEqual('rgb(0, 85, 0)');
			expect($('.yellow').css('background-color')).toEqual('rgb(218, 213, 24)');
			expect($('.blue').css('background-color')).toEqual('rgb(0, 0, 117)');
		})
		it('calling simon.game_on_off when simon.on-off = true should set text of class .cou to "--"', function(){
			simon.game_on_off();
			simon.game_on_off();
			
			expect($('.cou').text()).toEqual('--');
		})
	})
	describe('Test simon.startSimon ', function(){
		beforeEach(function(){
			simon = new Simon();
		})
		it('simon.startSimon() should return false when simon.startSimon is called and simon.on_off = false and simon.started = false', function(){
			let result = simon.startSimon();
			
			expect(result).toBe(false);
		})
		it('simon.startSimon() Should return true when called, and simon.on_off = true and simon.started = false', function(){
			let result;
			simon.game_on_off();
			result = simon.startSimon();
			
			expect(result).toBe(true);
		})
		it('simon.startSimon() should also call a function simonMakesMusic when game is on', function(){
			let simonMakesMusic = spyOn(simon,'simonMakesMusic');
			simon.on_off = true;
			simon.startSimon();
			
			expect(simonMakesMusic).toHaveBeenCalled();
		})
		it('simon.startSimon() should not call a function simonMakesMusic when game is off', function(){
			let simonMakesMusic = spyOn(simon,'simonMakesMusic');
			simon.startSimon();
			
			expect(simonMakesMusic).not.toHaveBeenCalled();
		})
	})
	describe('Test for method setStrict', function(){
		beforeEach(function() {
				simon = new Simon();
				setFixtures('<div class="strict" style="background-color: yellow"></div><div class="strict-col" style="background-color: #b96666"></div>')
			});
		it('Should expect strict button class strict to have a background-color : rgb(255, 255, 0)', function(){
				
			expect($('.strict').css('background-color')).toEqual('rgb(255, 255, 0)');
		})
		it('Should expect strict indicator light class strict-col to have a background-color : rgb(185,102,102) when not turned on', function(){
			
			expect($('.strict-col').css('background-color')).toEqual('rgb(185, 102, 102)');
		})
		it('Indicator light should not change color when setStrict called if simon.on_off  is false', function(){
			simon.setStrict();
			
			expect($('.strict-col').css('background-color')).toEqual('rgb(185, 102, 102)');
		})
		it('Indicator light should change to rgb(255,0,0) if setStrict is called and simon.game_on = true', function(){
			simon.game_on_off();
			simon.setStrict();
			
			expect($('.strict-col').css('background-color')).toEqual('rgb(255, 0, 0)');
		})
		it('calling setStrict should also set simon.strict_on to true when simon.game_on = true', function(){
			simon.game_on_off();
			simon.setStrict();
			
			expect(simon.strict_on).toBe(true);
		})
		it('Indicator light should change to rgb(185,102,102) when setStrict is called again and simon.strict_on = true and simon.game_on = true', function(){
			simon.game_on_off();
			simon.setStrict();
			simon.setStrict();
			
			expect($('.strict-col').css('background-color')).toEqual('rgb(185, 102, 102)');
		})
		it('Should also set simon.strict_on to false', function(){
			simon.game_on_off();
			simon.setStrict();
			simon.setStrict();
			
			expect(simon.strict_on).toBe(false);
		})
		it('Should set simon.strict_on to false and set Indicator light, background-color to rgb(185,102,102) if simon.game_on_off is called and simon.strict = true and indicator light is red', function(){
			simon.game_on_off();
			simon.setStrict();
			simon.game_on_off();
			
			expect($('.strict-col').css('background-color')).toEqual('rgb(185, 102, 102)');
			expect(simon.strict_on).toBe(false);
		})
	})
	
	describe('Tests for method simonMakesMusic', function(){
		beforeEach(function(){
			simon = new Simon();
			jasmine.clock().install();
		})
		afterEach(function(){
			jasmine.clock().uninstall();
		})
		it('Should call a function addPanels', function(){
			let addPanels = spyOn(simon,'addPanels');
			simon.simonMakesMusic();
			
			expect(addPanels).toHaveBeenCalled();
		})
		it('Should call a function simonPlayNotes', function(){
			let simonPlayNotes = spyOn(simon,'simonPlayNotes');
			simon.simonMakesMusic();
			jasmine.clock().tick(1000);
			
			expect(simonPlayNotes).toHaveBeenCalled();
		})
	})
	describe('Tests for method addPanels', function(){
		beforeEach(function(){
			simon = new Simon();
			jasmine.clock().install();
		})
		afterEach(function(){
			jasmine.clock().uninstall();
		})
		it('simon.addPanels(simon.randColor()) should add an item to simon.panels if simon.on-off = true and simon.started = true', function(){
			simon.on_off = true;
			simon.started = true
			let result;
			let item = simon.addPanels(simon.randColor());
			if(item === '.red' || item === '.yellow' || item === '.green' || item === '.blue') {
				result = item;
			}
			
			expect(item).toEqual(result);
		})
		it('simon.addPanels(simon.randColor()) should return null if simon.on_off = false', function(){
			let result = simon.addPanels(simon.randColor());
			
			expect(result).toEqual(null);
		})
		
	})
	describe('Test for simon.randColor()', function(){
		beforeEach(function(){
			simon = new Simon();
		})
		it('simon.randColor should return ".red" or ".green" or ".yellow" or ".blue"', function(){
			let item;
			let result = simon.randColor();
			if(result === '.red' || result === '.yellow' || result === '.green' || result === '.blue') {
				item = result;
			}
			
			expect(result).toEqual(item)
		})
	})
	describe('Test for getColor', function(){
		beforeEach(function(){
			simon = new Simon();
			jasmine.clock().install();
		})
		afterEach(function(){
			jasmine.clock().uninstall();
		})
		it('simon.getColor(".red") should return #f15b5b if simon.flash = false', function(){
			let getColor = spyOn(simon, 'getColor').and.callThrough();
			simon.getColor('.red');
			
			expect(getColor).toHaveBeenCalledWith('.red');
			expect(simon.getColor('.red')).toEqual('#f15b5b');
		})
		it('simon.getColor(".red") should return red if simon.flash = true', function(){
			simon.flash = true;
			
			expect(simon.getColor('.red')).toEqual('#b50000');
		})
		it('simon.getColor(".green") should return #30ab30 if simon.flash = false', function(){
			
			expect(simon.getColor('.green')).toEqual('#30ab30');
		})
		it('simon.getColor(".green") should return green) if simon.flash = true', function(){
			simon.flash = true;
			
			expect(simon.getColor('.green')).toEqual('#005500');
		})
		it('simon.getColor(".yellow") should return #f1f15b if simon.flash = false', function(){
			
			expect(simon.getColor('.yellow')).toEqual('#f1f15b');
		})
		it('simon.getColor(".yellow") should return yellow if simon.flash = true', function(){
			simon.flash = true;
			
			expect(simon.getColor('.yellow')).toEqual('#dad518');
		})
		it('simon.getColor(".blue") should return #4b4bd2 if simon.flash = false', function(){
			
			expect(simon.getColor('.blue')).toEqual('#4b4bd2');
		})
		it('simon.getColor(".blue") should return blue if simon.flash = true', function(){
			simon.flash = true;
			
			expect(simon.getColor('.blue')).toEqual('#000075');
		})
		
	})
	describe('Tests for simon.playSound', function(){
		beforeEach(function(){
			simon = new Simon();
			simon.game_on_off();
		})
		afterEach(function(){
			simon.game_on_off();
		})
		it('simon.playSound(".red") should call and play redAudio.play()', function(){
			let playSound = spyOn(simon,'playSound').and.callThrough();
			simon.playSound('.red');
			
			expect(playSound).toHaveBeenCalled();
			expect(simon.playSound(".red")).not.toEqual("Error");
		})
		it('simon.playSound(".green") should call and play greenAudio.play()', function(){
			let playSound = spyOn(simon,'playSound').and.callThrough();
			simon.playSound('.green');
			
			expect(playSound).toHaveBeenCalled();
			expect(simon.playSound(".green")).not.toEqual("Error");
		})
		it('simon.playSound(".yellow") should call and play yellowAudio.play()', function(){
			let playSound = spyOn(simon,'playSound').and.callThrough();
			simon.playSound('.yellow');
			
			expect(playSound).toHaveBeenCalled();
			expect(simon.playSound(".yellow")).not.toEqual("Error");
		})
		it('simon.playSound(".blue") should call and play blueAudio.play()', function(){
			let playSound = spyOn(simon,'playSound').and.callThrough();
			simon.playSound('.blue');
			
			expect(playSound).toHaveBeenCalled();
			expect(simon.playSound(".blue")).not.toEqual("Error");
		})
	})
	describe('Tests for method simonPlayNotes', function(){
		beforeEach(function(){
			simon = new Simon();
			simon.game_on_off();
			jasmine.clock().install();
			setFixtures(`<div class="red" style="background-color: red"></div>
						<div class="green"></div>
						<div class="yellow"></div>
						<div class="blue"></div>
						<h1 class="cou"></h1>`)
		})
		afterEach(function(){
			jasmine.clock().uninstall();
			simon.game_on_off();
		})
		it('When simonPlayNotes is called and simon.panels.length is >= 1 and simon.flash = false, simon.getColor and simon.playSound should be called', function(){
			simon.panels = ['.red'];
			let getColor = spyOn(simon, 'getColor');
			let playSound = spyOn(simon, 'playSound');
			simon.simonPlayNotes();
			
			expect(getColor).toHaveBeenCalled();
			expect(playSound).toHaveBeenCalled();
		})
		it('When simonPlayNotes is called and simon.panels.length is >= 1 and simon.flash = false, simon.false should set to true', function(){
			simon.panels = ['.red']
			simon.simonPlayNotes();
			
			expect(simon.flash).toEqual(true);
		})
		it('When simonPlayNotes is called and simon.panels.length is >= 1 and simon.flash = true, simon.false should be set to false', function(){
			simon.panels = ['.red']
			simon.flash = true;
			simon.simonPlayNotes();
			
			expect(simon.flash).toEqual(false);
		})
		it('When simonPlayNotes is called and simon.panels.length is >= 1 and simon.flash = true, simon.index should be set to 1', function(){
			simon.panels = ['.red']
			simon.flash = true;
			simon.simonPlayNotes();
			
			expect(simon.index).toEqual(1);
		})
		it('When simonPlayNotes is called and simon.panels.length is >= 1 and simon.flash = true, simon.getColor should be called and simon.playSound should NOT be called', function(){
			simon.panels = ['.red'];
			simon.flash = true
			let getColor = spyOn(simon, 'getColor');
			let playSound = spyOn(simon, 'playSound');
			simon.simonPlayNotes();
			
			expect(getColor).toHaveBeenCalled();
			expect(playSound).not.toHaveBeenCalled();
		})
		it('when simonPlayNotes is called and simon.index is Not less the simon.panels.length simon.playerTurn should be set to true', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.index = 1;
			simon.panels = ['.red'];
			simon.simonPlayNotes();
			
			expect(simon.playerTurn).toBe(true);
		})
		it('when simonPlayNotes is called and simon.index is Not less the simon.panels.length simon.index should be set to 0', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.index = 1;
			simon.panels = ['.red'];
			simon.simonPlayNotes();
			
			expect(simon.index).toEqual(0);
		})
		it('when simonPlayNotes is called and simon.flash = false, panel class .red should be color rgb(241, 91, 91)', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.index = 0;
			simon.panels = ['.red'];
			simon.simonPlayNotes();
			
			expect($('.red').css('background-color')).toEqual('rgb(241, 91, 91)')
		})
		it('when simonPlayNotes is called and simon.flash = true, panel class .red should be color rgb(181, 0, 0)', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.flash = true;
			simon.panels = ['.red'];
			simon.simonPlayNotes();
			
			expect($('.red').css('background-color')).toEqual('rgb(181, 0, 0)');
		})
		it('when simonPlayNotes is called and simon.flash = false, panel class .green should be color rgb(48, 171, 48)', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.index = 0;
			simon.panels = ['.green'];
			simon.simonPlayNotes();
			
			expect($('.green').css('background-color')).toEqual('rgb(48, 171, 48)')
		})
		it('when simonPlayNotes is called and simon.flash = true, panel class .green should be color green', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.flash = true;
			simon.panels = ['.green'];
			simon.simonPlayNotes();
			
			expect($('.green').css('background-color')).toEqual('rgb(0, 85, 0)');
		})
		it('when simonPlayNotes is called and simon.flash = false, panel class .yellow should be color rgb(241, 241, 91)', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.index = 0;
			simon.panels = ['.yellow'];
			simon.simonPlayNotes();
			
			expect($('.yellow').css('background-color')).toEqual('rgb(241, 241, 91)')
		})
		it('when simonPlayNotes is called and simon.flash = true, panel class .yellow should be color yellow', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.flash = true;
			simon.panels = ['.yellow'];
			simon.simonPlayNotes();
			
			expect($('.yellow').css('background-color')).toEqual('rgb(218, 213, 24)')
		})
		it('when simonPlayNotes is called and simon.flash = false, panel class .blue should be color rgb(75, 75, 210)', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.index = 0;
			simon.panels = ['.blue'];
			simon.simonPlayNotes();
			
			expect($('.blue').css('background-color')).toEqual('rgb(75, 75, 210)')
		})
		it('when simonPlayNotes is called and simon.flash = true, panel class .blue should be color blue', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.flash = true;
			simon.panels = ['.blue'];
			simon.simonPlayNotes();
			
			expect($('.blue').css('background-color')).toEqual('rgb(0, 0, 117)');
		})
		it('When simonPlayNotes is called it should set class .cou text to simon.panels.length', function(){
			spyOn(simon, 'simonPlayNotes').and.callThrough();
			simon.panels = ['.blue'];
			simon.simonPlayNotes();
			
			expect($('.cou').text()).toEqual('1');
		})
	})
	describe('Test method clickedPanel', function(){
		beforeEach(function(){
			simon = new Simon();
			jasmine.clock().install();
			setFixtures(`<div class="red panel" style="background-color: red"></div>
						<div class="green panel"></div>
						<div class="yellow panel"></div>
						<div class="blue panel"></div>
						<h1 class="cou">`)
		})
		afterEach(function(){
			jasmine.clock().uninstall();
		})
		it('If clickedPanel called expect it to be called with an argument', function(){
			
			let clickedPanel = spyOn(simon, 'clickedPanel');
			simon.clickedPanel('red');
			
			expect(clickedPanel).toHaveBeenCalledWith('red');
		})
		it('clickedPanel should check if simon.playerTurn = false, return null', function(){
			
			expect(simon.clickedPanel()).toEqual(null);
		})
		it('If clickedPanel called and simon.playerTurn = false, expect simon.checkPanelClicked to NOT be called', function(){
			simon.playerTurn = false;
			let checkPanelClicked = spyOn(simon, 'checkPanelClicked');
			simon.clickedPanel();
			
			expect(checkPanelClicked).not.toHaveBeenCalled();
		})
		it('If clickedPanel called and simon.playerTurn = false, expect simon.resetPlayerTurn NOT to be called', function(){
			simon.playerTurn = false;
			let resetPlayerTurn = spyOn(simon, 'resetPlayerTurn');
			simon.clickedPanel();
			
			expect(resetPlayerTurn).not.toHaveBeenCalled();
		})
		it('If clickedPanel called and simon.playerTurn = true and simon.on_off = true, return true', function(){
			simon.playerTurn = true;
			simon.on_off = true;
			
			expect(simon.clickedPanel()).toBe(true);
		})
		
		it('If clickedPanel called and simon.playerTurn = true and simon.on_off = true, expect simon.checkPanelClicked to be called', function(){
			simon.playerTurn = true;
			simon.on_off = true;
			let checkPanelClicked = spyOn(simon, 'checkPanelClicked');
			simon.clickedPanel();
			
			expect(checkPanelClicked).toHaveBeenCalled();
		})
		it('If clickedPanel called and simon.playerTurn = true and simon.on_off = true, expect simon.resetPlayerTurn to be called', function(){
			simon.playerTurn = true;
			simon.on_off = true;
			let resetPlayerTurn = spyOn(simon, 'resetPlayerTurn');
			simon.clickedPanel();
			
			expect(resetPlayerTurn).toHaveBeenCalled();
		})
	})
	describe('Test checkPanelClicked method', function(){
		beforeEach(function(){
			simon = new Simon();
			jasmine.clock().install();
			setFixtures(`<div class="red panel" style="background-color: red"></div>
						<div class="green panel"></div>
						<div class="yellow panel"></div>
						<div class="blue panel"></div>
						<h1 class="cou">`)
		})
		afterEach(function(){
			jasmine.clock().uninstall();
		})
		it('when checkPanelClicked is called, if simon.panels[simon.count] === this.clicked is true, simon.playNoteHuman should be called', function(){
			let playNoteHuman = spyOn(simon, 'playNoteHuman');
			simon.count = 0;
			simon.panels = ['.red'];
			simon.clicked = '.red';
			simon.checkPanelClicked();
			
			expect(playNoteHuman).toHaveBeenCalled();
		})
		it('And simon.playNoteHuman should have being called with this.clicked as an argument', function(){
			let playNoteHuman = spyOn(simon, 'playNoteHuman');
			spyOn(simon, 'checkPanelClicked').and.callThrough();
			simon.count = 0;
			simon.panels = ['.red'];
			simon.clicked = '.red';
			simon.checkPanelClicked();
			
			expect(playNoteHuman).toHaveBeenCalledWith('.red');
		})
		it('when checkPanelClicked is called, if simon.panels[simon.count] === this.clicked is true, simon.checkCount should be called', function(){
			let checkCount = spyOn(simon, 'checkCount');
			simon.count = 0;
			simon.panels = ['.red'];
			simon.clicked = '.red';
			simon.checkPanelClicked();
			
			expect(checkCount).toHaveBeenCalled();
		})
		it('when checkPanelClicked is called, if simon.panels[simon.count] === this.clicked is false, simon.runError should be called', function(){
			let runError = spyOn(simon, 'runError');
			simon.count = 0;
			simon.panels = ['.red'];
			simon.clicked = '.yellow';
			simon.checkPanelClicked();
			
			expect(runError).toHaveBeenCalled();
		})
	})
	describe('Test playNoteHuman', function(){
		beforeEach(function(){
			simon = new Simon();
			simon.game_on_off();
			jasmine.clock().install();
			setFixtures(`<div class="red panel" style="background-color: red"></div>
						<div class="green panel"></div>
						<div class="yellow panel"></div>
						<div class="blue panel"></div>
						<h1 class="cou">`)
		})
		afterEach(function(){
			jasmine.clock().uninstall();
			simon.game_on_off();
		})
		it('playNoteHuman() should call function getColor() with the argument passed with playNoteHuman ', function(){
			let getColor = spyOn(simon, 'getColor');
			simon.playNoteHuman('.red');
			
			expect(getColor).toHaveBeenCalledWith('.red');
		})
		it('playNoteHuman should change the background-color of the panel that was clicked', function(){
			simon.playNoteHuman('.yellow');
			
			expect($('.yellow').css('background-color')).toEqual('rgb(241, 241, 91)')
		})
		it('playNoteHuman should call the function humanNotes and humanNotes should be called with the argument passed to it', function(){
			let humanNotes = spyOn(simon, 'humanNotes').and.callThrough();
			spyOn(simon, 'playNoteHuman').and.callThrough();
			simon.playNoteHuman('.red')//.callThrough();
			jasmine.clock().tick(1000);
			
			expect(humanNotes).toHaveBeenCalledWith('.red');
		})
		it('When playNoteHuman is called getColor should be called 2 times', function(){
			let getColor = spyOn(simon, 'getColor');
			spyOn(simon, 'playNoteHuman').and.callThrough();
			simon.playNoteHuman('.red');
			jasmine.clock().tick(1000);
			
			expect(getColor).toHaveBeenCalledTimes(2);
		})
		it('When playNoteHuman is called and calls humanNotes expect the method playSound to be called', function(){
			let playSound = spyOn(simon, 'playSound');
			spyOn(simon, 'playNoteHuman').and.callThrough();
			simon.playNoteHuman('.red');
			jasmine.clock().tick(1000);
			
			expect(playSound).toHaveBeenCalled();
		})
		it('When playNoteHuman is called and calls humanNotes expect the method playSound to be called once', function(){
			let playSound = spyOn(simon, 'playSound');
			spyOn(simon, 'playNoteHuman').and.callThrough();
			simon.playNoteHuman('.red');
			jasmine.clock().tick(1000);
			
			expect(playSound).toHaveBeenCalledTimes(1);
		})
	})
	describe('Test checkCount', function(){
		beforeEach(function(){
			simon = new Simon();
		})
		it('checkCount should check if simon.count <= simon.panels.length, and increase simon.count by 1 if it is', function(){
			simon.panels = ['.red'];
			simon.count = 0;
			simon.checkCount();
			
			expect(simon.count).toEqual(1);
		})
		
	})
	describe('Test runError', function(){
		beforeEach(function(){
			simon = new Simon();
			jasmine.clock().install();
			setFixtures(`<div class="red panel" style="background-color: red"></div>
						<div class="green panel"></div>
						<div class="yellow panel"></div>
						<div class="blue panel"></div>
						<h1 class="cou">`)
		})
		afterEach(function(){
			jasmine.clock().uninstall();
		})
		it('runError should set simon.panels to [] if simon.strict_on = true ', function(){
			simon.panels = ['.red','.yellow'];
			simon.strict_on = true;
			simon.runError();
			
			expect(simon.panels).toEqual([]);
		})
		it('runError should not change simon.panels to [] if simon.strict_on = false ', function(){
			simon.panels = ['.red','.yellow'];
			simon.strict_on = false;
			simon.runError();
			
			expect(simon.panels).toEqual(['.red','.yellow']);
		})
		it('runError should change simon.count to 0 ', function(){
			simon.count = 2;
			simon.runError();
			
			expect(simon.count).toEqual(0);
		})
		it('runError should change class cou text  to !! ', function(){
			simon.runError();
			
			expect($('.cou').text()).toEqual('!!');
		})
		it('runError should change class cou text  back to simon.panels.length value if strict_on = false ', function(){
			simon.runError();
			simon.panels = ['.red'];
			jasmine.clock().tick(300);
			
			expect($('.cou').text()).toEqual('1');
		})
		it('runError should change class cou text  back to "0" if strict_on = true ', function(){
			simon.strict_on = true;
			simon.panels = ['.red'];
			simon.runError();
			jasmine.clock().tick(300);
			
			expect($('.cou').text()).toEqual('0');
		})
	})
	describe('Test resetPlayerTurn', function(){
		beforeEach(function(){
			simon = new Simon();
			jasmine.clock().install();
			setFixtures(`<div class="red panel" style="background-color: red"></div>
						<div class="green panel"></div>
						<div class="yellow panel"></div>
						<div class="blue panel"></div>
						<h1 class="cou">`)
		})
		afterEach(function(){
			jasmine.clock().uninstall();
		})
		it('resetPlayerTurn should check if simon.count === simon.panels.length, if it is it should set simon.count to 0', function(){
			simon.panels = ['.red'];
			simon.count = 1;
			simon.resetPlayerTurn();
			
			expect(simon.count).toEqual(0);
		})
		it('resetPlayerTurn should check if simon.count === simon.panels.length, if it is it should set simon.playerTurn to false', function(){
			simon.panels = ['.red'];
			simon.count = 1;
			simon.playerTurn = true;
			simon.resetPlayerTurn();
			
			expect(simon.playerTurn).toBe(false);
		})
		it('resetPlayerTurn should check if simon.count === simon.panels.length, if it is it should call simonMakesMusic()', function(){
			let simonMakesMusic = spyOn(simon, 'simonMakesMusic');
			simon.panels = ['.red'];
			simon.count = 1;
			simon.playerTurn = true;
			simon.resetPlayerTurn();
			jasmine.clock().tick(700);
			
			expect(simonMakesMusic).toHaveBeenCalled();
		})
	})

})