import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const navLinks = <>
    <NavLink className='text-2xl mr-3' to='/'>home</NavLink>
    <NavLink className='text-2xl mr-3' to='/addproduct'>Add product</NavLink>
    <NavLink className='text-2xl mr-3' to='/checkout'>My cart</NavLink>
    <NavLink className='text-2xl mr-3' to='/login'>Login</NavLink>
    <NavLink className='text-2xl mr-3' to='/register'>Register</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  {
    user?.email ?  <div className="navbar-end">
        <p>{user.email}</p>
    <a onClick={logOut} className="btn">Logout</a>
  </div> :
    <Link to='/login'><a className="btn">Login</a></Link>
  }
 
</div>
    );
};

export default Navbar;