
const date = new Date();

console.log(date.getDay());

const fun = () => date.getDate();


switch (fun() % 7) {
  case 0: { console.log("sunday"); }
    break;
  case 1: { console.log("monday"); }
    break;
  case 2: { console.log("tuesday"); }
    break;
  case 3: { console.log("wednesday"); }
    break;
  case 4: { console.log("thusday"); }
    break;
  case 5: { console.log("friday"); }
    break;
  case 6: { console.log("saturday"); }
    break;
} 
