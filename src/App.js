import Fish from './Fish';
import './App.css';

function App() {
  const name = 'Shark'
  const sayHello = () => {
    console.log ('Hello!')
  }
  return (
    <div>
      <Fish name = {name} sayHello ={sayHello} />
    </div>
  );
}

export default App;
