const { useState } = require("react");

function HideText() {
  const [hideText, setHideText] = useState(true);

  return (
    <div className="App">
      {hideText && <h1>This text will show!</h1>}
      <button onClick={() => setHideText(!hideText)}>Toggle Text</button>
    </div>
  );
}
export default HideText;
