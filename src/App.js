import './App.css';
import FormPage from './pages/FormPage'

function App() {
  return (
    <div className="lg:h-[100vh] h-[100vh] bg-Magnolia font-body relative z-10 lg:grid lg:place-content-center">
      <header className="bg-header-mb h-[10.75rem] w-[100%] lg:hidden bg-cover absolute z-[-10]"></header>
      <FormPage/>
    </div>
  );
}

export default App;