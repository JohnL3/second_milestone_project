# All about testing will be discussed here

## Automated Testing with Jasmine

I feel i did extensive testing with Jasmine which can be viewed in the following files.   
The following is a link to the test index.html: [index.html](./dev/Tests/index.html)  
The following is a link to the test specs: [simonSpec.js](./dev/Tests/spec/simonSpec.js)  
The following is a link to the javascript code being tested: [main.js](./dev/js/main.js)

## Manual Testing

For different screen sizes I used Chrome dev tools to check how it would look on various screen sizes and also tried it
out on my tablet and htc phone.

While I did a lot of tests on jasmine I always like to manually test things and try to catch myself out and see is there anything I failed to code for.

### Tests for when on off is in off position

1. When game is off I should get no response from clicking any of the panels: True
2. When game is off and  strict button is pressed little circle above it should not change color: True
3. When game is off nothing should happen when I click start button: True

### Tests for when on off is in on position

1. When I set on off button to on position I should be able to click panels and still nothing happens: True
2. When I set on off button to on position, if I click strict button the circle above it should turn red: True
3. When I set on off button to on position and I click the start button, the game should start, a random panel will flash, a sound will play and the level indicator should display 1: True
4. If I press the strict button again the circle should change back to original color: True
5. If I press the start button again nothing should happen: True

### Tests for when I turn on off button back to off position

1. When I turn on off button from on back to off level indicator should reset to __ display: True
2. When I turn on off button from on back to off if strict had been clicked and little circle above was red it should reset back to original color: True
3. When I turn on off button from on back to off if simon is playing its sequence it should stop simon sequence, and if panel was flashing should reset panel to original color: True

### Tests for when start button pressed and on off is in on position

1. When start button pressed and on off is in on position a random panel flashes and a sound is made: True

### Tests for when panel is clicked and on off is on and start has being pressed.

1. If the proper panel is pressed after simon has played his choice It should flash and play a sound: True
2. When it finishes it should revert to simon making its next choice: True
3. If i press a panel while simon is playing its choice nothing should happen: True
4. If strict is not set and I press the wrong panel i should receive a error sound and level counter should flash !! and when flashing finished display the level it was on and I have to try choosing another panel: True
5. If strict is set and I press the wrong panel I should receive a error sound and level counter should flash !! and when flashing is finished reset the level back to 0 and simon starts again: True




