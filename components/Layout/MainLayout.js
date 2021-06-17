import React, { Fragment } from 'react';
import Header from '../UI/Header/Header';
import SideNav from '../UI/SideNav/SideNav';

const MainLayout = (props) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(119,30,135, 0.5) 100%)',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <Header />
      <SideNav />
      <section className="content-container">
        {props.children}
      </section>
    </div>
  )
}

export default MainLayout;