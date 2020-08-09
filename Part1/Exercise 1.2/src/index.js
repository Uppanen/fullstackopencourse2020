import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.parts.part1} exercise={props.parts.exercises1} />
      <Part part={props.parts.part2} exercise={props.parts.exercises2} />
      <Part part={props.parts.part3} exercise={props.parts.exercises3} />
    </>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  var parts = {
    part1: "Fundamentals of React",
    exercises1: 10,
    part2: "Using props to pass data",
    exercises2: 7,
    part3: "State of a component",
    exercises3: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts.exercises1 + parts.exercises2 + parts.exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
