import { Outlet } from 'react-router-dom';
import { AppBar } from './appBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader margin={'40px'} />}>
        <Outlet />
      </Suspense>
    </>
  );
};
