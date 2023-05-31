import './server/server';
import Home from './pages/Cars/Home';
import About from './pages/Cars/About';
import Cars from './pages/Cars/Cars';
import CarDetails from './pages/Cars/CarDetails';
import DashBoard from './pages/Host/DashBoard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostCars from './pages/Host/HostCars';
import HostCarDetails from './pages/Host/HostCarDetails';
import HostCarInfo from './pages/Host/HostCarInfo';
import HostCarPricing from './pages/Host/HostCarPricing';
import HostCarPhotos from './pages/Host/HostCarPhotos';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import NotFound from './pages/Notfound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

export default function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='cars' element={<Cars />} />
              <Route path='cars/:id' element={<CarDetails />} />
              <Route path='/host' element={<HostLayout />}>
                 <Route index element={<DashBoard />} />
                 <Route path='income' element={<Income />} />
                 <Route path='reviews' element={<Reviews />} />
                 <Route path='cars' element={<HostCars />} />
                 <Route path='cars/:id' element={<HostCarDetails />}>
                    <Route index element={<HostCarInfo />} />
                    <Route path='pricing' element={<HostCarPricing />} />
                    <Route path='photos' element={<HostCarPhotos />} />
                 </Route>
              </Route>
           <Route path='*' element={<NotFound />} />
          </Route>
       </Routes>
    </BrowserRouter>
  );
}
