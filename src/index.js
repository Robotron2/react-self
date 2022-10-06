import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// import './index.css';
// import App from './App';

// const customStyle ={
//     color: "red",
//     border: "1px solid black",
//     fontSize: "25px"
// }

// customStyle.fontSize = "40px"
// root.render(
//     <h1 style={customStyle}>Hello Theo</h1>
// );

// Challenge

//Create a react app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12pm
//or Good afternoon if between 12pm and 6pm
//or Good night if betwween 6pm and Midnight
//apply the heading style in styles.css
//Dynamically change the color of the h1 using inline css styles
//Morning = red, Afternoon = green, Night = blue

// const customStyle ={
//     color: ""
// }
// let timeOfDay;

// let dateTime = new Date()

// let currentTime = dateTime.getHours()
// console.log(currentTime)
// if (currentTime >= 0 && currentTime < 12) {
//     customStyle.color = "red"
//     timeOfDay = "Good Morning"
// } else if(currentTime >= 12 && currentTime <= 18){
//     customStyle.color = "green"
//     timeOfDay = "Good Afternoon"
// }
// else if(currentTime >= 19 && currentTime <= 23){
//     customStyle.color = "blue"
//     timeOfDay = "Good Night"
// }

// root.render(
//     <h1 className='heading' style={customStyle}>{timeOfDay}</h1>
// );

// REACT COMPONENTS

// Creating A component

const MyComponent = () => {
	return <h1>My Favorite Foods</h1>;
};

const ListComponent = () => {
	return (
		<ul>
			<li>Food 1</li>
			<li>Food 2</li>
			<li>Food 3</li>
		</ul>
	);
};

root.render(
	<div>
		<MyComponent />
		<ListComponent />
		<ListComponent />
	</div>
);
