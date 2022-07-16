import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChildRoutes from './ChildRoutes';
import './index.scss';

const Renderable = () => (
  <React.StrictMode>
    <ChildRoutes />
    <Footer />
  </React.StrictMode>
)


ReactDOM.render(<Renderable />, document.getElementById('root'));
