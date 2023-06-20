import { Routes, Route } from 'react-router-dom';
import Caterories from '../categories/categories';
import NotFound from '../notFound/NotFound';
import Homepage from '../home/homepage';

const Navpage = () => (
  <Routes>
    <Route index element={<Homepage />} />
    <Route path="homepage" element={<Homepage />} />
    <Route path="categories" element={<Caterories />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Navpage;
