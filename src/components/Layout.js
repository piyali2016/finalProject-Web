import React from 'react'
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './common/Footer';

export default function Layout() {
  return (
    <Container>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer/>
    </Container>
  )
}
