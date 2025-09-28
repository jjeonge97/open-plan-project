import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Result from '@/pages/Result';
import { Route, Routes } from 'react-router-dom';

export const RouteSetup = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Result />} path="/result" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
};
