import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import './styles.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
)
