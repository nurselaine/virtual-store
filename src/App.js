import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import SimpleCart from './components/cart/simplecart';


import { ThemeProvider, Box } from '@mui/material';
import { theme } from './Themes/theme';
import CurrentCategories from './components/storefront/current-categories';
import { When } from 'react-if';
import { connect } from 'react-redux';


function App(props) {
  const { activeCategory, cart } = props;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <main style={{flexGrow: '1'}}>
          <Header />
          <When condition={cart.length > 0}>
            <SimpleCart />
          </When>
          <Categories />
          <When condition={activeCategory}>
            <CurrentCategories />
          </When>
          <Products />
        </main>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

const mapStateToProps = ({category, cart}) => {
  return {
    activeCategory: category.activeCategory,
    cart: cart.cart,
  }
}

export default connect(mapStateToProps)(App);
