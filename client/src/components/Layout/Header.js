import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {message} from "antd";
import '../../index.css';

const Header=()=>{
  const [loginUser,setLoginUser]=useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"));
    if(user){
      setLoginUser(user);
    }
  },[]);

  // logout
  const logoutHandler=()=>{
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };

  return(
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to='/'>Expensify</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/user'>{loginUser&&loginUser.name}</Link>
              </li>

              {/* logout */}
              <li className="nav-item">
                <button className="logoutFunctionality nav-link active btn btn-primary" aria-current="page" onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;