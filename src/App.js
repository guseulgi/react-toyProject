import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './pages/Header';
import Users from './pages/Users';
import Login from './pages/Login';
import Board from './pages/Board';
import Todo from './pages/Todo';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/board" element={<Board />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
