// Light       Action
// red         "Stop"
// yellow      "Slow Down"
// green       "Go"

const getTrafficAction = (light:string):string => {
    if(light==="red") return "Stop";
    else if(light === "yellow") return "Slow Down";
    else return "Go";
};



// TEST CASE
console.log(getTrafficAction("red"));
console.log(getTrafficAction("yellow"));
console.log(getTrafficAction("green"));