import './App.scss';
import TableContainer from './components/Table/TableContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TableContainer />
      </div>
    </Provider>
  );
}

export default App;
