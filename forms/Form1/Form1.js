let playerInvite = prompt("Would you like to play The Big Adventure")
if (playerInvite == "yes") {
  alert("This us your mission: There are 6 rooms you need to visit: Bedroom, Kitchen, Living Room, Game Room, Bathroom and Basement.")
  alert("In this game you may only move your avatar in 3 ways: forward, turn left and turn right.")
} else {
  alert("Ending Session...Goodbye!")
}

let room = ["Bedroom", "Kitchen", "Living Room", "Game Room", "Bathroom", "Basement"]

/* Valid Moves (exact spelling/capitalization) = "move forward" "turn right" "turn left" */

let initialMove = prompt("Start by entering your first move.")
if (initialMove == "forward") {
  alert("You are now in the " + room[1])
  rooms.splice(1, 1)
  roomsLeft = rooms.length
  alert(`You have ${roomsLeft} rooms remaining.`)
} else if (initialMove == "turn right")