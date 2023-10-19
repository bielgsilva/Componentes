import './styles.css'
import ProductPage from './components/product-page';

const Main = () => {
  return (
    <div className="main overlay">
      <div className='main-content overlay1 flex-center'>
        <ProductPage />
      </div>
    </div>
  );
};

export default Main;
