import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './appBar/AppBar';
import { Suspense } from 'react';
import Footer from './footer/Footer';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
