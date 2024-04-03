// const heading = React.createElement("h1", {id: "heading"}, "Hello World from react!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div", {id: "parent" }, [
	React.createElement("div", {id: "child"}, [
		React.createElement("h1", {}, "hello h1"),
		React.createElement("h2", {}, "hello h2"),
	]),
	React.createElement("div", {id: "child2"}, [
		React.createElement("h1", {}, "hello c2 h1"),
		React.createElement("h2", {}, "hello c2 h2"),
	]),
] );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);