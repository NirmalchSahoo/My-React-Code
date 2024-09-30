import logo from './logo.svg';
import './App.css';
import Datafetching from './components/Datafetching';
import DataFetchingById from './components/DataFetchingById';

function App() {
  return (
    <div className="App">
      {/* <Datafetching></Datafetching> */}
      <DataFetchingById></DataFetchingById>
    </div>
  );
}

export default App;
