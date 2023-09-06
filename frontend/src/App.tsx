import React from 'react';
import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';

const AuthContext = React.createContext<String | null>(null);

function App() {
  const fakeAuth = (): Promise<String> =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });
  const [token, setToken] = React.useState<String | null>(null);
  
  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
  }
  return (
    <AuthContext.Provider value={token}>
    <div className="App">
     <Routes>
      <Route element={<PrivateRoute token={token}/>}>

        <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="login" element={<AuthRootComponent/>}/>
      <Route path="register" element={<AuthRootComponent/>}/>
     </Routes>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
