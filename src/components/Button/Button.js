import "./Button.css";
const { useState } = require("react");

function HideText() {
  const [hideText, setHideText] = useState(true);

  return (
    <div className="App">
      {hideText && (
        <h3>
          You wouldn't plant a seed and then dig it up every few minutes to see
          if it has grown. So why do you keep questioning yourself, your hard
          work and your decisions? Have patience, stop overthinking and keep
          watering your seeds.
        </h3>
      )}
      <button onClick={() => setHideText(!hideText)}>Toggle Text</button>
    </div>
  );
}
export default HideText;
