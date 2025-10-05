let day = 7;

day = prompt("Enter the day number (1-7):");

switch (day) {
  case 1:
    console.log("Chest Day");
    break;

  case 2:
    console.log("Back Day");
    break;

  case 3:
    console.log("Leg Day");
    break;
  case 4:
    console.log("Arm Day");
    break;
  case 5:
    console.log("Shoulder Day");
    break;
  case 6:
    console.log("Core Day");
    break;
  case 7:
    console.log("Rest Day");
    break;

  default:
    console.log("Invalid day! Please enter a number between 1 and 7.");
    break;
}
