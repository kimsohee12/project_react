import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './Page/ProductAll';
import Login from './Page/Login';
import ProductDetail from './Page/ProductDetail';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

//전체 상품 페이지, 로그인 , 상품페이지
//전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//로그인 버튼을 누르면 로그인 페이지가 나온다.
//상품 디테일을 눌렀으나 로그인이 안되어있을 경우에는 로그인 페이지가 나온다
//로그인 되어 있으면 상품 디테일 페이지를 볼 수 있다.
//로그아웃 버튼을 클릭하면 로그아웃이 된다
//로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. /다시 로그인 하면 페이지가 보인다
//로그인 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
//상품을 검색 할 수 있다.



  return (
    <div>
      <NavBar/>
      <br/><br/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
