import './App.css';
// Import components
import NavBar from './Navbar';
// Import Redux
import { Provider } from 'react-redux';
// Import store
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
      </div>
    </Provider>
  );
}

export default App;
