import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TbCategory2 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import "./style.css";
import { addToDofalse } from "../../redux/toDoSlice";
function Header() {
  const { basket } = useSelector((s) => s.bas);
  const { cataloge } = useSelector((s) => s.todo);
  const dispatch = useDispatch()
  const bas = basket.reduce((idx, el) => idx + el.quentity, 0);
  const [catalog, setCatalog] = useState(false);
  // const falseC = !cataloge
  console.log(cataloge);

  
  
  
  return (
    <div>
      <div className="header">
        <nav className="bg-gray-400 border-gray-200">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a
              href="https://flowbite.com"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://avatars.mds.yandex.net/i?id=1ed067f3dbbe68503eaded4fc584f9541471e15d-5245266-images-thumbs&n=13"
                className="h-8 rounded-[20px]"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:black-white">
                Jewelry Store
              </span>
            </a>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <a
                href="tel:5541251234"
                className="text-sm  text-gray-500 dark:text-black hover:underline"
              >
                (777) 933-552
              </a>
              <Link
                to="login"
                className="text-sm  text-blue-800 hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
        <nav className="bg-gray-200">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center relative">
              <a
                className="category_catalog"
                onClick={() => {
                  setCatalog(true);
                  dispatch(addToDofalse(catalog))
                }}
              >
               {
                catalog ?null :  <TbCategory2 />
               } 
              </a>
              <a
                className="category_catalog"
                onClick={() => {
                  setCatalog(false)
                  dispatch(addToDofalse(catalog))
                }}
              >
                {
                  catalog ? <IoMdClose />:null
                }
                
              </a>

              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm ">
                <h1 className="absolute w-[16px] h-[16px] rounded-[50%] bg-red-600 text-[11px] text-center flex items-center left-[336px] bottom-[15px] justify-center  text-white">
                  {bas}
                </h1>

                <li>
                  <NavLink
                    to="/"
                    className=" hover:underline"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="product" className=" dark:black-white">
                    Product
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="category"
                    className="dark:black-white hover:underline"
                  >
                    Category
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="favorite"
                    className="dark:black-white hover:underline"
                  >
                    Favorite
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="basket"
                    className="  dark:black-white hover:underline"
                  >
                    Basket
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="history"
                    className=" dark:black-white hover:underline"
                  >
                    History
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
