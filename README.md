# CSPC-439-Project-2-
CSPC-439 Project 1 (team: Low Effort Group) 
Members: Bennett, Kim 

Kim-Lan Hoang
CWID:895005478

Bennett Lawrenz 
CWID: 889955969

intro:
Turing Machine Functionality:
	"The current state of the machine" contains several grids that display what state the turing machine is on.
	RRight - reading the right side of the elements from its original position
	RMid - reading the elements on its original position
	RLeft - reading the left side of the elements from its original poisition
	Move - moving to the next element
	Write - writing the element below the array its currently reading

	The "Position of the TM" is displaying the current position of the turing machine. This can give a more
	clear visual representation on where it is and what it is doing.

	The "Top down view of what the TM printed" is the cells that the turing machine is drawing. This is where
	Cella-rule-150 is being displayed.

Cella-rule-150 algorithm:
	SetInterval() function is called to create a step by step movement of a turing machine. When the function
	inside setInterval is called, turing machine will perform actions based on its location and current states.
	The function will be called every half a second.
	
	On state 0, if the state machine is currently on the end of the array, it will move down to the next array.
	Otherwise, it will shift to the next element.
	
	On state 1, the state machine will move back and scan the previous elements. it will then store it into
	a temporary array set.

	On state 2, it will then move forward, back to its original position, and scan the middle elements.

	On state 3, it will move foward again, scanning the element in front of its original position.

	On state 4, the state machine will move back and check the temporary array set it stored. If that set matches
	with any of the other sets given, the state machine will then shift to state 5. Otherwise, the machine
	automatically moves to state 0.

	On state 5, the state machine will move down one cell and store a 1 in that element. That element will then
	be drawn, displaying the cell on the grid. The state machine will then move back to its original position
	and change its state to 0.

	There is a counter that counts each time a turing machine moves down an array during states 0. If the state machines
	reaches at the very bottom of the array(a.k.a. the counter reaches the size of the array vertically), the function
	clearInterval() is called, ending the turing machine.

Content:
README.txt
js-1.html
draw-stuff.js
styles.css

Setup:
Extract the zip file, and locate the file 'js-1.html' in the folder 'Js'. Drag the file onto the web browser.