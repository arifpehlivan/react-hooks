import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

const container = document.getElementById('app');
const root = createRoot(container);

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       count: 0
//     }
//   }
//   render() {
//     return (
//       <div>
//         <p>Clicked {this.state.count}</p>
//         <button onClick={()=> this.setState({count: this.state.count +1})}>+1</button>
//       </div>
//     )
//   }
// }

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("");
  return (
    <div>
      <p>Clicked {count}</p>
      <p>Text: {text}</p>
      <button onClick={()=> setCount(count+1)}>+1</button>
      <button onClick={()=> setCount(count-1)}>-1</button>
      <button onClick={()=> setCount(props.count)}>reset</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

App.defaultProps = {
  count: 0
}

root.render(<App/>);
