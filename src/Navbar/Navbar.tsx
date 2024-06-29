// import React, { useState } from 'react';
// import './navbar.css';
// import logoIcon from "../assets/logo-icon.svg";
// import { Sling as Hamburger } from 'hamburger-react';
// import desktopLogo from "../assets/desktop-logo-icon.svg";

// import bagDarkIcon from "../assets/bag-dark-icon.svg";
// import profileIcon from "../assets/profile-icon.svg";
// import heartIcon from "../assets/heart-icon.svg";
// import searchIcon from "../assets/search-icon.svg";
// import CartSidebar from './CartSidebar';
// import HeartSidebar from './HeartSidebar';

// const Navbar = () => {
//   const [isNavVisible, setIsNavVisible] = useState(false);
//   const [isBagVisible, setIsBagVisible] = useState(false);
//   const [isHeartVisible, setIsHeartVisible] = useState(false);
//   const [isProfileVisible, setIsProfileVisible] = useState(false);
//   const [isSearchVisible, setIsSearchVisible] = useState(false);

//   const toggleNavVisibility = () => {
//     setIsNavVisible(!isNavVisible);
//   };

//   const toggleBagVisibility = () => {
//     setIsBagVisible(!isBagVisible);
//   };
//   const toggleHeartVisibility = () => {
//     setIsHeartVisible(!isHeartVisible);
//   };
//   const toggleProfileVisibility = () => {
//     setIsProfileVisible(!isProfileVisible);
//   };

//   const closeNav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     e.stopPropagation();
//     setIsNavVisible(false);
//     setIsBagVisible(false);
//     setIsHeartVisible(false);
//     setIsProfileVisible(false);
//   };

//   const navLinks = [
//     { id: 1, text: 'Home' },
//     { id: 2, text: 'Plants' },
//     { id: 3, text: 'Care' },
//   ];

//   return (
//     <main className='min-w-96 h-30 bg-primary-gradient px-4 py-2 md:bg-solid-gradient md:px-16 w-full flex justify-center text-white z-20'>
//       <nav className='flex justify-between items-center w-full h-full max-w-[1152px]'>
//         <section className="flex items-center gap-4 h-full">
//           {/* Brand Logo */}
//           <img className='w-[104px] h-full object-cover md:hidden' src={logoIcon} alt="Logo" />
//           <img className='w-[104px] h-full object-cover hidden md:flex' src={desktopLogo} alt="Desktop Logo" />
          // <hr className="hidden md:flex w-[48px] h-[2px] bg-secondary-solid rounded"></hr>
//           {/* Desktop Navigation Links */}
//           <ul className='hidden md:flex gap-4'>
//             {navLinks.map(link => (
//               <li key={link.id} className='w-[48px] text-black text-16sm font-inter hover:underline font-medium underline-offset-4'>
//                 <a href="#">{link.text}</a>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <section className="hidden gap-4 md:flex justify-between items-center rounded">
//           <button onClick={toggleHeartVisibility} className='w-5 h-5'>
//             <img className='w-5 h-5' src={heartIcon} alt="Heart" />
//           </button>
//           <button onClick={toggleBagVisibility} className='w-5 h-5'>
//             <img className='w-5 h-5' src={bagDarkIcon} alt="Bag" />
//           </button>
//           <button onClick={toggleProfileVisibility} className='w-5 h-5'>
//             <img className='w-5 h-5' src={profileIcon} alt="Profile" />
//           </button>
//           <div className='bg-secondary-solid rounded-sm w-[2px] h-[24px]'></div>
//           <button className='w-5 h-5'>
//             <img className='w-5 h-5' src={searchIcon} alt="Search" />
//           </button>
//         </section>

//         {/* Mobile Navigation Toggle Icon */}
//         <div onClick={toggleNavVisibility} className='flex md:hidden -mr-2.5'>
//           <Hamburger toggled={isNavVisible} toggle={setIsNavVisible} rounded size={22} distance="lg" color="#ffffff" easing="ease-in" direction="left" />
//         </div>

//         {isNavVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
//         {isBagVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
//         {isHeartVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
//         {isProfileVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}

//         {/* Mobile Navigation Menu */}
//         <aside className={`fixed w-[60%] left-0 top-0 md:w-full md:max-w-[40%] px-4 py-2 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isNavVisible ? 'mobile-visible' : 'mobile-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <div className="flex flex-col gap-4">
//             <img className='w-[104px] h-full object-cover' src={desktopLogo} alt="Logo" />
//             <div className="bg-primary-shade rounded-sm h-0.5 w-full"></div>
//             {/* Mobile Navigation Links */}
//             <ul className="flex flex-col gap-4">
//               {navLinks.map(link => (
//                 <li key={link.id} className='h-[48px] text-black text-16sm font-inter font-medium cursor-pointer hover:bg-primary-white rounded hover:shadow-primary-drop hover:border hover:border-primary-stroke p-2'>
//                   <a href="#">{link.text}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>

//         <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isBagVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <CartSidebar />
//         </aside>

//         <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isHeartVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <HeartSidebar />
//         </aside>

//         <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isProfileVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <CartSidebar />
//         </aside>
//       </nav>
//     </main>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import './navbar.css';
// import logoIcon from "../assets/logo-icon.svg";
// import { Sling as Hamburger } from 'hamburger-react';
// import desktopLogo from "../assets/desktop-logo-icon.svg";

// import bagDarkIcon from "../assets/bag-dark-icon.svg";
// import profileIcon from "../assets/profile-icon.svg";
// import heartIcon from "../assets/heart-icon.svg";
// import searchIcon from "../assets/search-icon.svg";
// import CartSidebar from './CartSidebar';
// import HeartSidebar from './HeartSidebar';

// const Navbar = () => {
//   const [isNavVisible, setIsNavVisible] = useState(false);
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const [isBagVisible, setIsBagVisible] = useState(false);
//   const [isHeartVisible, setIsHeartVisible] = useState(false);
//   const [isProfileVisible, setIsProfileVisible] = useState(false);

//   const toggleNavVisibility = () => {
//     setIsNavVisible(!isNavVisible);
//   };

//   const toggleSearchVisibility = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };

//   const toggleBagVisibility = () => {
//     setIsBagVisible(!isBagVisible);
//   };

//   const toggleHeartVisibility = () => {
//     setIsHeartVisible(!isHeartVisible);
//   };

//   const toggleProfileVisibility = () => {
//     setIsProfileVisible(!isProfileVisible);
//   };

//   const closeNav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     e.stopPropagation();
//     setIsNavVisible(false);
//     setIsSearchVisible(false);
//     setIsBagVisible(false);
//     setIsHeartVisible(false);
//     setIsProfileVisible(false);
//   };

//   const navLinks = [
//     { id: 1, text: 'Home' },
//     { id: 2, text: 'Plants' },
//     { id: 3, text: 'Care' },
//   ];

//   return (
//     <main className='min-w-96 h-30 bg-primary-gradient px-4 py-2 md:bg-solid-gradient md:px-16 w-full flex justify-center text-white z-20'>
//       <nav className='flex justify-between items-center w-full h-full max-w-[1152px]'>
//         <section className="flex items-center gap-4 h-full">
//           {/* Brand Logo */}
//           <img className='w-[104px] h-full object-cover md:hidden' src={logoIcon} alt="Logo" />
//           <img className='w-[104px] h-full object-cover hidden md:flex' src={desktopLogo} alt="Desktop Logo" />
//           <hr className={`vertical-bar ${isSearchVisible ? 'open' : ''} hidden md:flex w-[48px] h-[2px] bg-secondary-solid rounded`}></hr>
//           {/* Desktop Navigation Links */}
//           <ul className='hidden md:flex gap-4'>
//             {navLinks.map(link => (
//               <li key={link.id} className='w-[48px] text-black text-16sm font-inter hover:underline font-medium underline-offset-4'>
//                 <a href="#">{link.text}</a>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <section className="hidden gap-4 md:flex justify-between items-center rounded">
//           <button onClick={toggleHeartVisibility} className='w-5 h-5'>
//             <img className='w-5 h-5' src={heartIcon} alt="Heart" />
//           </button>
//           <button onClick={toggleBagVisibility} className='w-5 h-5'>
//             <img className='w-5 h-5' src={bagDarkIcon} alt="Bag" />
//           </button>
//           <button onClick={toggleProfileVisibility} className='w-5 h-5'>
//             <img className='w-5 h-5' src={profileIcon} alt="Profile" />
//           </button>
//           <div className='bg-secondary-solid rounded-sm w-[2px] h-[24px]'></div>
//           <div className="search-container">
//             <button onClick={toggleSearchVisibility} className='w-5 h-5'>
//               <img className='w-5 h-5' src={searchIcon} alt="Search" />
//             </button>
//             <div className={`search-bar ${isSearchVisible ? 'open' : ''}`}>
//               <input type="text" className="search-input" placeholder="Search..." />
//             </div>
//           </div>
//         </section>

//         {/* Mobile Navigation Toggle Icon */}
//         <div onClick={toggleNavVisibility} className='flex md:hidden -mr-2.5'>
//           <Hamburger toggled={isNavVisible} toggle={setIsNavVisible} rounded size={22} distance="lg" color="#ffffff" easing="ease-in" direction="left" />
//         </div>

//         {isNavVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
//         {isBagVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
//         {isHeartVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
//         {isProfileVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}

//         {/* Mobile Navigation Menu */}
//         <aside className={`fixed w-[60%] left-0 top-0 md:w-full md:max-w-[40%] px-4 py-2 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isNavVisible ? 'mobile-visible' : 'mobile-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <div className="flex flex-col gap-4">
//             <img className='w-[104px] h-full object-cover' src={desktopLogo} alt="Logo" />
//             <div className="bg-primary-shade rounded-sm h-0.5 w-full"></div>
//             {/* Mobile Navigation Links */}
//             <ul className="flex flex-col gap-4">
//               {navLinks.map(link => (
//                 <li key={link.id} className='h-[48px] text-black text-16sm font-inter font-medium cursor-pointer hover:bg-primary-white rounded hover:shadow-primary-drop hover:border hover:border-primary-stroke p-2'>
//                   <a href="#">{link.text}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>

//         <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isBagVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <CartSidebar />
//         </aside>

//         <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isHeartVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <HeartSidebar />
//         </aside>

//         <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isProfileVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <CartSidebar />
//         </aside>
//       </nav>
//     </main>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import './navbar.css';
// import logoIcon from "../assets/logo-icon.svg";
// import { Sling as Hamburger } from 'hamburger-react';
// import desktopLogo from "../assets/desktop-logo-icon.svg";

// import bagDarkIcon from "../assets/bag-dark-icon.svg";
// import profileIcon from "../assets/profile-icon.svg";
// import heartIcon from "../assets/heart-icon.svg";
// import searchIcon from "../assets/search-icon.svg";
// import CartSidebar from './CartSidebar';
// import HeartSidebar from './HeartSidebar';

// const Navbar = () => {
//   const [isNavVisible, setIsNavVisible] = useState(false);
//   const [isBagVisible, setIsBagVisible] = useState(false);
//   const [isHeartVisible, setIsHeartVisible] = useState(false);
//   const [isProfileVisible, setIsProfileVisible] = useState(false);
//   const [isSearchVisible, setIsSearchVisible] = useState(false);

//   const toggleNavVisibility = () => {
//     setIsNavVisible(!isNavVisible);
//   };

//   const toggleSearchVisibility = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };

//   const toggleBagVisibility = () => {
//     setIsBagVisible(!isBagVisible);
//   };

//   const toggleHeartVisibility = () => {
//     setIsHeartVisible(!isHeartVisible);
//   };

//   const toggleProfileVisibility = () => {
//     setIsProfileVisible(!isProfileVisible);
//   };

//   const closeNav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     e.stopPropagation();
//     setIsNavVisible(false);
//     setIsSearchVisible(false);
//     setIsBagVisible(false);
//     setIsHeartVisible(false);
//     setIsProfileVisible(false);
//   };

//   const navLinks = [
//     { id: 1, text: 'Home' },
//     { id: 2, text: 'Plants' },
//     { id: 3, text: 'Care' },
//   ];

//   return (
//     <main className='min-w-96 h-30 bg-primary-gradient px-4 py-2 md:bg-solid-gradient md:px-16 w-full flex justify-center text-white z-20'>
//       <nav className='flex justify-between items-center w-full h-full max-w-[1152px]'>
//         <section className="flex items-center gap-4 h-full">
//           {/* Brand Logo */}
//           <img className='w-[104px] h-full object-cover md:hidden' src={logoIcon} alt="Logo" />
//           <img className='w-[104px] h-full object-cover hidden md:flex' src={desktopLogo} alt="Desktop Logo" />
//           <div className={`vertical-bar ${isSearchVisible ? 'open' : ''} hidden md:flex`}></div>
//           {/* Desktop Navigation Links */}
//           <ul className='hidden md:flex gap-4'>
//             {navLinks.map(link => (
//               <li key={link.id} className='w-[48px] text-black text-16sm font-inter hover:underline font-medium underline-offset-4'>
//                 <a href="#">{link.text}</a>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <section className="hidden gap-4 md:flex justify-between items-center rounded">
//           <button onClick={toggleHeartVisibility} className='w-5 h-5'>
//             <img className='w-5 h-5' src={heartIcon} alt="Heart" />
//           </button>
//           <button onClick={toggleBagVisibility} className='w-5 h-5'>
//             <img className='w-5 h-5' src={bagDarkIcon} alt="Bag" />
//           </button>
//           <button onClick={toggleProfileVisibility} className='w-5 h-5'>
//             <img className='w-5 h-5' src={profileIcon} alt="Profile" />
//           </button>
//           <div className='bg-secondary-solid rounded-sm w-[2px] h-[24px]'></div>
//           <div className={`search-container relative flex items-center justify-center overflow-hidden ${isSearchVisible ? 'open' : ''}`}>
//             <input type="text" className={`search-input w-0 border-none p-0 box-border opacity-0 invisible text-16sm text-black  ${isSearchVisible ? 'open' : ''}`} placeholder="Search..." />
//             <button onClick={toggleSearchVisibility} className='w-5 h-5'>
//               <img className='w-5 h-5' src={searchIcon} alt="Search" />
//             </button>
//           </div>
//         </section>

//         {/* Mobile Navigation Toggle Icon */}
//         <div onClick={toggleNavVisibility} className='flex md:hidden -mr-2.5'>
//           <Hamburger toggled={isNavVisible} toggle={setIsNavVisible} rounded size={22} distance="lg" color="#ffffff" easing="ease-in" direction="left" />
//         </div>

//         {isNavVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
//         {isBagVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
//         {isHeartVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
//         {isProfileVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}

//         {/* Mobile Navigation Menu */}
//         <aside className={`fixed w-[60%] left-0 top-0 md:w-full md:max-w-[40%] px-4 py-2 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isNavVisible ? 'mobile-visible' : 'mobile-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <div className="flex flex-col gap-4">
//             <img className='w-[104px] h-full object-cover' src={desktopLogo} alt="Logo" />
//             <div className="bg-primary-shade rounded-sm h-0.5 w-full"></div>
//             {/* Mobile Navigation Links */}
//             <ul className="flex flex-col gap-4">
//               {navLinks.map(link => (
//                 <li key={link.id} className='h-[48px] text-black text-16sm font-inter font-medium cursor-pointer hover:bg-primary-white rounded hover:shadow-primary-drop hover:border hover:border-primary-stroke p-2'>
//                   <a href="#">{link.text}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>

//         <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isBagVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <CartSidebar />
//         </aside>

//         <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isHeartVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <HeartSidebar />
//         </aside>

//         <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isProfileVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
//           <CartSidebar />
//         </aside>
//       </nav>
//     </main>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import logoIcon from "../assets/logo-icon.svg";
import { Sling as Hamburger } from 'hamburger-react';
import desktopLogo from "../assets/desktop-logo-icon.svg";

import bagDarkIcon from "../assets/bag-dark-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import heartIcon from "../assets/heart-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import CartSidebar from './CartSidebar';
import HeartSidebar from './HeartSidebar';
import MobileSidebar from './MobileSidebar';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isBagVisible, setIsBagVisible] = useState(false);
  const [isHeartVisible, setIsHeartVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleBagVisibility = () => {
    setIsBagVisible(!isBagVisible);
  };

  const toggleHeartVisibility = () => {
    setIsHeartVisible(!isHeartVisible);
  };

  const toggleProfileVisibility = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  const closeNav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsNavVisible(false);
    setIsSearchVisible(false);
    setIsBagVisible(false);
    setIsHeartVisible(false);
    setIsProfileVisible(false);
  };

    // Clear search input when search is closed
    useEffect(() => {
      if (!isSearchVisible && searchInputRef.current) {
        searchInputRef.current.value = '';
      }
    }, [isSearchVisible]);

  const navLinks = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Plants' },
    { id: 3, text: 'Care' },
  ];

  return (
    <main className='min-w-96 h-30 bg-primary-gradient px-4 py-2 md:bg-solid-gradient md:px-16 w-full flex justify-center text-white z-20'>
      <nav className='flex justify-between items-center w-full h-full max-w-[1152px]'>
        <section className="flex items-center gap-4 h-full">
          {/* Brand Logo */}
          <img className='w-[104px] h-full object-cover md:hidden' src={logoIcon} alt="Logo" />
          <img className='w-[104px] h-full object-cover hidden md:flex' src={desktopLogo} alt="Desktop Logo" />
          
          <hr className="hidden  md:flex w-[24px] h-[2px] bg-secondary-solid rounded"></hr>
          {/* <div className={`search-container relative flex items-center`}>
            <input type="text" className={`search-input text-16sm text-black placeholder:text-light-gray ${isSearchVisible ? 'open' : ''}`} placeholder="Search..." />
            <button onClick={toggleSearchVisibility} className='w-5 h-5'>
              <img className='w-5 h-5' src={searchIcon} alt="Search" />
            </button>
            
            
          </div>
          <hr className="hidden  md:flex w-[24px] h-[2px] bg-secondary-solid rounded"></hr> */}
          {/* Desktop Navigation Links */}
          <ul className='hidden md:flex gap-4'>
            {navLinks.map(link => (
              <li key={link.id} className='w-[48px] text-black text-16sm font-inter hover:underline font-medium underline-offset-4'>
                <a href="#">{link.text}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="hidden gap-4 md:flex justify-between items-center rounded">
          <button onClick={toggleHeartVisibility} className='w-5 h-5'>
            <img className='w-5 h-5' src={heartIcon} alt="Heart" />
          </button>
          <button onClick={toggleBagVisibility} className='w-5 h-5'>
            <img className='w-5 h-5' src={bagDarkIcon} alt="Bag" />
          </button>
          <button onClick={toggleProfileVisibility} className='w-5 h-5'>
            <img className='w-5 h-5' src={profileIcon} alt="Profile" />
          </button>
          <hr className='bg-secondary-solid rounded-sm w-[2px] h-[24px]'></hr>
          <div className={`search-container relative flex items-center`}>
            <input type="text" ref={searchInputRef} className={`search-input text-16sm text-black placeholder:text-light-gray ${isSearchVisible ? 'open' : ''}`} placeholder="Search..." />
            <button onClick={toggleSearchVisibility} className='w-5 h-5'>
              <img className='w-5 h-5' src={searchIcon} alt="Search" />
            </button>
          </div>
        </section>

        {/* Mobile Navigation Toggle Icon */}
        <div onClick={toggleNavVisibility} className='flex md:hidden -mr-2.5'>
          <Hamburger toggled={isNavVisible} toggle={setIsNavVisible} rounded size={22} distance="lg" color="#ffffff" easing="ease-in" direction="left" />
        </div>

        {isNavVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
        {isBagVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
        {isHeartVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}
        {isProfileVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeNav}></div>}

        {/* Mobile Navigation Menu */}
        <aside className={`fixed w-[60%] left-0 top-0 md:w-full md:max-w-[40%] px-4 py-2  h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isNavVisible ? 'mobile-visible' : 'mobile-hidden'}`} onClick={(e) => e.stopPropagation()}>
          <MobileSidebar/>
        </aside>

        <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isBagVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
          <CartSidebar />
        </aside>

        <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isHeartVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
          <HeartSidebar />
        </aside>

        <aside className={`fixed w-[424px] right-0 top-0 md:w-full md:max-w-[424px] px-4 py-4 pb-8 h-full border-r-2 shadow-primary-drop border-primary-stroke bg-solid-gradient z-20 ${isProfileVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} onClick={(e) => e.stopPropagation()}>
          <CartSidebar />
        </aside>
      </nav>
    </main>
  );
};

export default Navbar;
