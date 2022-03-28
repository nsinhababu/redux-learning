import './App.css';
// Import components
import NavBar from './Navbar';
import CounterApp from './CounterApp';
// Import Redux
import { Provider } from 'react-redux';
// Import store
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <CounterApp />
      </div>
    </Provider>
  );
}

export default App;
