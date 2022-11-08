import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';


import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { theme } from './components/header/Themes/theme';
import CurrentCategories from './components/storefront/current-categories';
import { When } from 'react-if';
import { connect } from 'react-redux';


function App(props) {
  const { activeCategory } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
        <Header />
        <Categories />
        <When condition={activeCategory}>
          <CurrentCategories />
          <Products />
        </When>
        <Footer />
    </ThemeProvider>
  );
}

const mapStateToProps = ({category}) => {
  return {
    activeCategory: category.activeCategory,
  }
}

export default connect(mapStateToProps)(App);
