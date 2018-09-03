# Milestone Project Two


A simple game where you try and repeat the pattern of sounds played by the simon game. To do this you click a panel matching the panels that flash when simon plays.  

 Project Hosted at: [jl-simon](http://jl-simon.surge.sh)

## UX

This website is for anybody who would like to play a game of Simon.

As a user I should be able to turn the game on and off. This is achieved by an on off button.  
As a user I should be able to start the game. This is achieved by a start button.  
As a user I should be able to set the game to strict mode or non strict mode. This is a achieved by a strict button.  
As a user I should be able to see what level I am on. This is achieved by the use of a level indicator.  
As a user I should be able to click a panel to match what the simon game played. This is achieved with coloured panels.  

## Features

There is a center control section containing an on off switch, start button, strict button and a level indicator.
There are four coloured panels to click.

## Technologies Used

1. visusl studio code 
 - [visual studio]('https://visualstudio.microsoft.com/free-developer-offers/')
2. jQuery
 - Used as it simplifies Dom manipulation
 - [jQuery](https://api.jquery.com/)
3. Gulp
 - Used for automating tasks .... I used it maninly to covert scss to css
 - [Gulp](https://gulpjs.com/)

## Testing

Write up for testing is done here: [testing_doc](./testing_doc.md)

## Deployment

To deploy this project i used surge, information on surge can be found here: [surge](https://surge.sh/)  
You would need to do an npm install --global surge, if you have not used surge before.  
In visual studio terminal you first navigate to your dist folder and then you would just type the command: surge
If you have not used surge before you will be asked to add a email address and choose a password. surge will then 
choose a name for your site but you can arrow back to before the .surge.sh part and add your own site name, hit enter
and thats it, you will see success and web site address and when you visit this link you will see your site.  
If you wish to update any changes to your site you will need a CNAME.txt file in your dist folder. To update you just
navigate to you dist folder and type: surge and project will be pushed to the web address in your CNAME file and you 
will see your website now updated.  

To run the project locally in visual studio you just navigate to you root directory and type in the command: gulp  
this runs the default task in the gulp file.

