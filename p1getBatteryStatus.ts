
// Percentage      Status 
// 0–20            "Low"
// 21–50           "Medium"
// 51–90           "High"
// 91–100           "Full"



const getBatteryStatus = (percentage:number): string => {
    if(percentage >=0 && percentage <=20){
        return "Low";
    } else if(percentage >=21 && percentage <=50){
        return "Medium";
    } else if(percentage >=51 && percentage <=90){
        return "High";
    } else return "Full";
}



// TEST CASE
console.log(getBatteryStatus(0));
console.log(getBatteryStatus(20));
console.log(getBatteryStatus(21));
console.log(getBatteryStatus(50));
console.log(getBatteryStatus(51));
console.log(getBatteryStatus(90));
console.log(getBatteryStatus(91));
console.log(getBatteryStatus(100));