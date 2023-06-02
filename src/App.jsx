import './server/server';
import Home from './pages/Cars/Home';
import About from './pages/Cars/About';
import Cars, { loader } from './pages/Cars/Cars';
import CarDetails, { loader as carDetailsLoader } from './pages/Cars/CarDetails';
import DashBoard from './pages/Host/DashBoard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostCars, { loader as hostCarsLoader } from './pages/Host/HostCars';
import HostCarDetails, { loader as hostCarDetailsLoader }  from './pages/Host/HostCarDetails';
import HostCarInfo from './pages/Host/HostCarInfo';
import HostCarPricing from './pages/Host/HostCarPricing';
import HostCarPhotos from './pages/Host/HostCarPhotos';
import Login, { action } from './pages/Login';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import NotFound from './pages/Notfound';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import './styles/App.css';
import Error from './components/Error';
import { requireAuth } from './utils';

const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route 
                path="login" 
                element={<Login />}
                action={action}
              />
              <Route
               path='cars' 
               element={<Cars />} 
               loader={loader}
               errorElement={<Error />}
               />
              <Route path='cars/:id' element={<CarDetails />} loader={carDetailsLoader}/>
              <Route 
               path='/host' 
               element={<HostLayout />}
               loader={ async () => await requireAuth() }
               >
                 <Route 
                     index 
                     element={<DashBoard />}
                     loader={ async () => await requireAuth() }
                 />
                 <Route 
                     path='income' 
                     element={<Income />}
                     loader={ async () => await requireAuth() }
                  />
                 <Route 
                     path='reviews' 
                     element={<Reviews />}
                     loader={ async () => await requireAuth() }
                     />      
                 <Route 
                     path='cars' 
                     element={<HostCars />}
                     loader={hostCarsLoader}
                     />
                 <Route 
                     path='cars/:id' 
                     element={<HostCarDetails />}
                     loader={hostCarDetailsLoader}
                  >
                    <Route 
                        index 
                        element={<HostCarInfo />}
                        loader={async () => await requireAuth()}
                     />
                    <Route 
                        path='pricing' 
                        element={<HostCarPricing />}
                        loader={ async () => await requireAuth() }
                     />
                    <Route 
                        path='photos' 
                        element={<HostCarPhotos />}
                        loader={ async () => await requireAuth() }
                     />
                 </Route>
              </Route>
              <Route path='*' element={<NotFound />} />
          </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}