import React from "react";
import Logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import CountryDropdown from "../../CountryDropdown/CountryDropdown";
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
            <div className="container">
                <p className="mb-0 mt-0 text-center">Dut to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
            </div>
        </div>

        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-flex align-items-center col-sm-2">
                        <Link to={'/'}><img src={Logo}></img></Link>
                    </div>
                    <div className="col-sm-10 d-flex align-items-center part2">
                        <CountryDropdown/>

                        {/* header search bar start here  */}
                        <div className="headerSearch ml-3 mr-3">
                          <input type="text" placeholder="Search for products"/>
                          <Button><IoIosSearch/></Button>
                        </div>
                        {/* header search bar end here  */}

                        <div className="part3 d-flex align-items-center ml-auto">
                          <Button className="circle mr-3"><FiUser/></Button>
                          <div className="ml-auto cartTab d-flex align-items-center">
                            <span className="price">₹300</span>
                            <div className="position-relative ml-2">
                            <Button className="circle"><IoBagOutline/></Button>
                            <span className="count d-flex align-items-center justify-content-center">1</span>
                            </div>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
      </div>

    </>
  );
};

export default Header;
