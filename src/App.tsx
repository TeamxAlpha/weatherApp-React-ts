
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import WeatherContainer from './components/WeatherContainer';
import "./App.css"


const store = createStore(rootReducer);

function App() {
  return (
    <div className='App'>
        <Provider store={store}>
        <WeatherContainer />
    </Provider>
    </div>

  );
}

export default App;
