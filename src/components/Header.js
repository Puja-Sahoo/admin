import React from "react";
import { useState } from 'react';
// import Register from './Register';
import Blank from './Blank';
import AddNew from './AddFoodItemForm';

function Header() {

//   const [showRegister, setShowRegister] = useState(false);
//   const handleClick = () => {
//     setShowRegister(!showRegister);
//   };
  const [showAddFood, setAddFood] = useState(false);
  const handleClick = () => {
    setAddFood(!showAddFood);
  };



	return (
        <div>
        <header>

		<div className="logosec">
			<div className="logo">FoodOrderingWebsite</div>
			<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
				className="icn menuicn"
				id="menuicn"
				alt="menu-icon"></img>
		</div>

		<div className="searchbar">
			<input type="text"
				placeholder="Search"></input>
			<div className="searchbtn">
			<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
					className="icn srchicn"
					alt="search-icon"></img>
			</div>
		</div>

		<div className="message">
			<div className="circle"></div>
			<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
				className="icn"
				alt=""></img>
			<div className="dp">
			<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
					className="dpicn"
					alt="dp"></img>
			</div>
		</div>

	</header>

	<div className="main-container">
		<div className="navcontainer">
			<nav className="nav">
				<div className="nav-upper-options">
					<div className="nav-option option1">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
							className="nav-img"
							alt="dashboard"></img>
						<h3> Dashboard</h3>
					</div>

					<div className="option2 nav-option" onClick={handleClick} >
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
							className="nav-img"
							alt="articles"></img>

							{/* eithewr can be done through link tag or thoughg state componnet */}
					<a href="register">	<h3> Add Item</h3></a>
					{/* {showRegister ? <Register/> : <Blank />} */}
					</div>

					<div className="nav-option option3">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
							className="nav-img"
							alt="report"></img>
						<h3> View Item</h3>
					</div>

					<div className="nav-option logout">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
							className="nav-img"
							alt="logout"></img>
						<h3>Logout</h3>
					</div>

				</div>
			</nav>
		</div>
		<div className="main">

			<div className="searchbar2">
				<input type="text"
					name=""
					id=""
					placeholder="Search"></input>
				<div className="searchbtn">
				<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
						className="icn srchicn"
						alt="search-button"></img>
				</div>
			</div>

			{/* <div className="box-container">

				<div className="box box1">
					<div className="text">
						<h2 className="topic-heading">60.5k</h2>
						<h2 className="topic">Article Views</h2>
					</div>

					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
						alt="Views"></img>
				</div>

				<div className="box box2">
					<div className="text">
						<h2 className="topic-heading">150</h2>
						<h2 className="topic">Likes</h2>
					</div>

					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
						alt="likes"></img>
				</div>

				<div className="box box3">
					<div className="text">
						<h2 className="topic-heading">320</h2>
						<h2 className="topic">Comments</h2>
					</div>

					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
						alt="comments"></img>
				</div>

				<div className="box box4">
					<div className="text">
						<h2 className="topic-heading">70</h2>
						<h2 className="topic">Published</h2>
					</div>

					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published"></img>
				</div>
			</div> */}
			{showAddFood ? <AddNew/> : <Blank />}
	</div>

    </div>
	{/* <AddNew/> */}
    </div>)
}

export default Header;