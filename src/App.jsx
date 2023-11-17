import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ReadById from './components/ReadById/ReadById';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/:id" element={<ReadById />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <ReadById />,
    },
  ]);

  return <RouterProvider router={router} />
}
