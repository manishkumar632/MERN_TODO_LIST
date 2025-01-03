import React, { useState } from "react";
import Create from "./Create";

const Home = () => {
	const [todos, setTodos] = useState([]);
	return (
		<div>
			<h1 className="home">Todo List</h1>
			<Create />
			{todos.length === 0 ? (
				<p>No todos found.</p>
			) : (
				todos.map((todo) => (
					<div key={todo.id}>
						<span>{todo.title}</span>
						<button
							onClick={() =>
								setTodos(todos.filter((t) => t.id !== todo.id))
							}
						>
							Delete
						</button>
					</div>
				))
			)}
		</div>
	);
};

export default Home;
