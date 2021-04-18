const App = () => {
  console.log("Render of App component");
  let number = 23;
  return (
    <div>
      <p>Hello World</p>
      <p>{number}</p>
      <button
        onClick={() => {
          console.log("button was clicked");
          number = number + 1;
          console.log("Number is now", number);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
