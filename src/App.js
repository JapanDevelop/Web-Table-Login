
import './App.css';
import TableData from './Componet/TableData';
import Signin from './Componet/Sinin';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin/>
  }

  return (
    <div className="App">
      <TableData/>
    </div>
  );
}

export default App;
