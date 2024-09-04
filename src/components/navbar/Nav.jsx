import React from 'react';
import {FaLeaf} from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import MobileNavBar from './mobileNavBar';

const Nav = () => {
  const navBarMenu = [
    {
      id:1,
      title:"Home",
      link:"/",
    },
    {
      id:2,
      title:"Products",
      link:"#",
    },
    {
      id:3,
      title:"About",
      link:"#",
    },
    {
      id:4,
      title:"Shop",
      link:"#",
    },
    {
      id:5,
      title:"Contacts",
      link:"#",
    },
  ]
  const [open,setOpen] = React.useState(false)
  return (
    <>
      <nav>
          <div className="container flex justify-between items-center py-6 md:pt-4">
            {/* logo section */}
            <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <p className='text-primary'>Fruit </p>
                <p className='text-secondary'>Store</p>
                <FaLeaf className='text-green-500'/>
            </div>
            {/* menu section */}
            <div className='hidden  md:block'>
                <ul className='flex items-center gap-6 text-gray-600'>{navBarMenu.map((menu)=>(
                    <li key={menu.id}>
                      <a  href={menu.link}
                          className=' hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] py-1 px-3 font-semibold '>{menu.title}</a>
                    </li>
                ))}</ul>
            </div>
            <button className='text-xl hover:bg-primary hover:text-white p-2 hover:rounded-full duration-200 hidden md:block'>
              <MdOutlineShoppingCart />
            </button>
            {/* mobile menu section */}
            <div className='md:hidden' onClick={()=>{
              setOpen(!open)
            }}>
              <IoMenu className='text-4xl'/>
            </div>
          </div>
      </nav>
      <MobileNavBar open={open}/>
      </>
  )
}

export default Nav