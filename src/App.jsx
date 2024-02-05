import Routes from './Routes'
import './App.css'
import ApplicationHeader from './components/AplicationHeader';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
  <>
      <NavigationBar/>
      <ApplicationHeader/>
      <Routes />
  </>  
  );
}

export default App
