import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Routes>
            <Route 
              path='/' 
              element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
              } 
              />
            <Route element={<PublicRoute /> }>
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
