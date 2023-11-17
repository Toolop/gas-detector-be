import './App.css';
import Room from './page/room';
import Gas from './page/gas';
import Battery from './page/battery';
import Grafik from './page/grafik';
import { Routes, Route, Navigate } from "react-router-dom";
import Board from './components/board';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Board />}>
          <Route path="/room" element={<Room />} />
          <Route path='room/sensor/:id' element={<Grafik />} />
          <Route path="/gas" element={<Gas />} />
          <Route path='gas/sensor/:id' element={ <Grafik /> }/>
          <Route path="/battery" element={<Battery />} />
          <Route path='battery/sensor/:id' element={ <Grafik /> }/>
          <Route index element={<Navigate to="/room" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
