import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate} from 'react-router-dom';
import { BsBag } from "react-icons/bs";

const NavBar = ({authenticate, setAuthenticate ,cart, setCart}) => {
  const nav = useNavigate()
  const menuList = [
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const search=(event)=>{
    if(event.key=='Enter'){
      //검색어 읽어오기
      let keyword = event.target.value 
      //url 바꿔주기
      nav(`/?q=${keyword}`)
    }
  }

 
  return (
    <div>
        <div className='login-button'>
        {authenticate ? (
          <div className='navbarAtc'>
            <div onClick={() => nav("/cart")}>
            <BsBag className='bsBag'/>
              <span className ='basket'style={{ cursor: "pointer" }}>장바구니</span>
            </div>
            
              {cart.length >=1?(
                <div>
                  <p className='cartNum'>{cart.length}</p>
                </div>
              )
              : ""}
            <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} className='faUser'/>
              <span className ='logoutT' style={{ cursor: "pointer" }}>로그아웃</span>
            </div>
          </div>
        ) : (
          <div onClick={() => nav("/login")}>
            <FontAwesomeIcon icon={faUser} className='faUser'/>
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
        </div>

        <div className="nav-logo">
          <Link to="/" >
            <img
              width={100}
              src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
            />
          </Link>
        </div>

        <div className="menu">
        <Link to="/"className='menuWoman' >여성</Link>
          {menuList.map((menu, index) => (
            
              <Link to="/preparing" key={index} className='menus'>
                {menu}
              </Link>
          ))}
        </div>
        
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          {/* onKeyPress => input에 값을 입력후 엔터를 쳤을 때 이벤트 발생 */}
          <input type="text" placeholder="제품검색" onKeyPress={(event)=>{search(event)}}/>
        </div>
    </div>
  )
}

export default NavBar