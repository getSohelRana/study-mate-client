import React from 'react';
import Navbar from '../components/header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/footer/Footer';
import Loading from '../components/loading/Loading';


const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1 container mx-auto px-2">
        {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;