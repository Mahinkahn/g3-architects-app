import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='ml-0 mr-0'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
