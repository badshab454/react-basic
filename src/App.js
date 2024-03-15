import './index.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BasicExample() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  );
}


function App() {
  return (
    <div className="App">
      <h2 style={{ color: "red", backgroundColor: "Green" }}>Hello React</h2>
      <BasicExample />
      <h2 className='text-5xl'>Badsha Hossain</h2>
    </div>
  );
}

export default App;
