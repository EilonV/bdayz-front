import '../src/assets/scss/styles.scss'
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/home';
import { Header } from './components/header';
import { Login } from './views/login';
import { Register } from './views/register';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;
