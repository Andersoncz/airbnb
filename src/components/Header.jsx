import logo from "../img/Group 1.svg";
import {Link} from  "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="max-w-7xl mx-auto flex items-center   justify-between px-4 sm:px-8 py-4">
        <Link to="/" className="flex items-center ">
          <img className="h-10" src={logo} alt="logo" />
          <p className="text-2xl font-bold text-primary-400 ">Dev</p>
        </Link>
        
        <Link to="/"className="hidden items-center border border-gray-300 rounded-full px-4 py-2 shadow-md lg:flex">
          <p className="border-r-gray-300  border-r pr-4">Marca do veículo</p>
          <p className="border-r-gray-300 border-r px-4">Modelo do veículo</p>
          <p className="px-4">Reservados</p>
          <div className="primary-400 text-white bg-primary-400 rounded-full w-10 h-10 flex items-center justify-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </Link>

        <Link to ="/login"className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <div className="primary-400 cursor-pointer bg-gray-500 rounded-full w-10 h-10 flex items-center justify-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <p className="sm:max-w-none max-w-32 truncate">Anderson Cruz</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
