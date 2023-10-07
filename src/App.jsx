import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          {/* <Route path=":half" element={<HalfPage />} /> */}
          {/* </Route> */}

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
