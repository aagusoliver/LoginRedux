import './App.css';
import Login  from './componentes/Login/Login';
import { Provider } from 'react-redux';
import genereteStore from './Redux/store';

function App() {

  const store = genereteStore()

  return (
    <div>
      <Provider store={store}>
        <Login/>
      </Provider>
    </div>
  );
}

export default App;
