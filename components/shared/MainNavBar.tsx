// components/MainNavbar.tsx

import Link from "next/link";

// import css from './MainNavbar.module.css';

import "./MainNavbar.css";

// import tailwind css also

const MainNavbar: React.FC = () => {
  return (
    <nav className="p-4 main-nav">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">GetCertGo</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/search-courses">
              <span>Search Courses</span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2">
          <Link href="/profile">
            <div className="flex items-center">
              <span>My Profile</span>
              <span className="ml-2 text-yellow-500">120 pts</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
