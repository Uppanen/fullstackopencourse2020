import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.parts.part1} {props.parts.exercises1}
      </p>
      <p>
        {props.parts.part2} {props.parts.exercises2}
      </p>
      <p>
        {props.parts.part3} {props.parts.exercises3}
      </p>
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
