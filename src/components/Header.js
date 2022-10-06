import React from "react";

const customStyle = {
  color: "",
};

let timeOfDay;

let dateTime = new Date();

let currentTime = dateTime.getHours();

// console.log(currentTime);
if (currentTime >= 0 && currentTime < 12) {
  customStyle.color = "red";
  timeOfDay = "Good Morning";
} else if (currentTime >= 12 && currentTime <= 18) {
  customStyle.color = "green";
  timeOfDay = "Good Afternoon";
} else if (currentTime >= 19 && currentTime <= 23) {
  customStyle.color = "blue";
  timeOfDay = "Good Night";
}

const Heading = () => {
  return (
    <h1 className="heading" style={customStyle}>
      {" "}
      {timeOfDay}
    </h1>
  );
};

export default Heading;
