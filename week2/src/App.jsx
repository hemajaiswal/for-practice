import React from "react";
function Student(props) {
return (
<div>
<h2>Name: {props.name}</h2>
<p>Course: {props.course}</p>
</div>
);
}
function App() {
return (
<div>
<h1>Student Details</h1>
<Student name="Hema" course="BCA" />
<Student name="Kiran" course="BCA" />
</div>
);
}
export default App;