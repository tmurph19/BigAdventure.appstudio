let playerInvite = prompt("Would you like to play The Big Adventure, if so please type yes in no caps")
if (playerInvite == "yes") {
  alert("Awesome! There are 6 rooms you need to visit: Bedroom, Kitchen, Living Room, Game Room, Bathroom and Basement.")
  alert("Your may only move forward.")
} else {
  alert("Take Care")
}

let rooms = ["Bedroom", "Kitchen", "Living Room", "Game Room", "Bathroom", "Basement"]

/* Valid Moves (exact spelling/capitalization) = "forward"
tracks user's first move, recalculates remaining rooms left in the adventure to visit.*/


let initialMove = prompt("Start by entering your first move.")
if (initialMove == "forward") {
  alert("You are now in the " + rooms[0])
  rooms.splice(0, 1)
  roomsLeft = rooms.length
  alert(`Congrats, you still need to visit ${roomsLeft} rooms.`)
} else if (initialMove !== "forward") {
  alert("Wrong Way")
  }

/* tracks user's second move, recalculates remaining rooms left in the adventure to visit.*/

let secondMove = prompt("Enter your second move.")
if (secondMove == "forward") {
  alert("You are now in the " + rooms[0])
  rooms.splice(0, 1)
  roomsLeft = rooms.length
  alert(`Congrats, you still need to visit ${roomsLeft} rooms.`)
} else if (secondMove !== "forward") {
  alert("Wrong Way")
  }
  
/* tracks user's third move, recalculates remaining rooms left in the adventure to visit.*/
  
let thirdMove = prompt("Enter your third move.")
if (thirdMove == "forward") {
  alert("You are now in the " + rooms[0])
  rooms.splice(0, 1)
  roomsLeft = rooms.length
  alert(`Congrats, you still need to visit ${roomsLeft} rooms.`)
} else if (thirdMove !== "forward") {
  alert("Wrong Way")
  }
  
/* tracks user's fourth move, recalculates remaining rooms left in the adventure to visit.*/
  
let fourthMove = prompt("Enter your fourth move.")
if (fourthMove == "forward") {
  alert("You are now in the " + rooms[0])
  rooms.splice(0, 1)
  roomsLeft = rooms.length
  alert(`Congrats, you still need to visit ${roomsLeft} rooms.`)
} else if (fourthMove !== "forward") {
  alert("Wrong Way")
  }
  
/* tracks user's fifth move, recalculates remaining rooms left in the adventure to visit.*/
  
let fifthMove = prompt("Enter your fifth move.")
if (fifthMove == "forward") {
  alert("You are now in the " + rooms[0])
  rooms.splice(0, 1)
  roomsLeft = rooms.length
  alert(`Congrats, you still need to visit ${roomsLeft} rooms.`)
} else if (fifthMove !== "forward") {
  alert("Wrong Way")
  }
  
/* tracks user's sixth move, CONGRATULATES user upon completing the adventure*/

let sixthMove = prompt("Enter your sixth move.")
if (sixthMove == "forward") {
  alert("You are now in the " + rooms[0])
  rooms.splice(0, 1)
  roomsLeft = rooms.length
  alert(`Congrats, YOU HAVE COMPLETED THE ADVENTURE!`)
} else if (sixthMove !== "forward") {
  alert("Wrong Way")
  }


  

  
  
  
  
  
  
  
  
  