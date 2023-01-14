import React from "react"
import Heading from "./Header"
import Footer from "./Footer"
import Skills from "./Contacts"

const App = () => {
	return (
		<div>
			<Heading />
			<div className="container">
				<Skills title="React Component Title" img="./images/PlusMinus.png" alt="plus/minus" />
			</div>
			<Footer />
		</div>
	)
}

export default App
