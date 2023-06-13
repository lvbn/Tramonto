// styles
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

// pages
import LandingPage from './pages/landing_page/LandingPage'
import About from './pages/about/About'
import WorkWithUs from './pages/work-with-us/WorkWithUs'
import ScrollToTop from './components/ScrollToTop'
import Products from './pages/products/Products'
import Product from './pages/product/Product'

// context
import { ShoppingCartProvider } from './context/ShoppingCartContext'


function App() {

  return (
    <div className="App">

      <ShoppingCartProvider>
        <BrowserRouter>
          <Navbar />

          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/workwithus' component={WorkWithUs} />
            <Route exact path='/products/:category' component={Products} />
            <Route exact path='/product/:id' component={Product} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </ShoppingCartProvider>

    </div>
  );
}

export default App;
