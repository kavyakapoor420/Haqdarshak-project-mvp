// import Logo from '../../assets/logo.png'
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = ({ isLoggedIn }) => {
//   const [selectedLanguage, setSelectedLanguage] = useState('English');
//   const [isOpen, setIsOpen] = useState(false);

//   const languages = [
//     'English', 'Spanish', 'French', 'German', 'Italian',
//     'Portuguese', 'Russian', 'Chinese', 'Japanese', 'Arabic'
//   ];

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r  from-orange-400 to-orange-600 p-4 shadow-md sticky top-0 z-50 border-b-4 border-red-500">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <Link to="/" className="text-xl font-bold text-white">
//             <img src={Logo} alt="Logo" className="h-10" />
//           </Link>
//         </div>
//         <div className="hidden md:flex flex-grow mx-10">
//           <input
//             type="text"
//             placeholder="Search policy..."
//             className="w-full p-2 ml-3 mr-2 border rounded-lg text-white text-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//         </div>
//         <div className="hidden md:flex items-center space-x-4">
//           <Link to="/menu" className="text-white hover:text-amber-200">Menu</Link>
//           <Link to="/profile" className="text-white hover:text-amber-200">
//             <FaUserCircle className="text-2xl" />
//           </Link>
//           <div className="relative">
//             <select
//               value={selectedLanguage}
//               onChange={(e) => setSelectedLanguage(e.target.value)}
//               className="p-2 border rounded-lg bg-white text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
//             >
//               {languages.map((language, index) => (
//                 <option key={index} value={language}>{language}</option>
//               ))}
//             </select>
//           </div>
//           {!isLoggedIn ? (
//             <Link
//               to="/signup"
//               className="bg-white text-orange-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
//             >
//               Sign Up
//             </Link>
//           ) : (
//             <Link
//               to="/dashboard"
//               className="bg-white text-orange-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
//             >
//               Dashboard
//             </Link>
//           )}
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-gradient-to-r from-orange-400 to-amber-500 p-4">
//           <div className="flex flex-col space-y-4">
//             <input
//               type="text"
//               placeholder="Search policy..."
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <Link to="/menu" className="text-white hover:text-amber-200">Menu</Link>
//             <Link to="/profile" className="text-white hover:text-amber-200">Profile</Link>
//             <div className="relative">
//               <select
//                 value={selectedLanguage}
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//                 className="w-full p-2 border rounded-lg bg-white text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               >
//                 {languages.map((language, index) => (
//                   <option key={index} value={language}>{language}</option>
//                 ))}
//               </select>
//             </div>
//             {!isLoggedIn ? (
//               <Link
//                 to="/signup"
//                 className="bg-white text-orange-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 text-center"
//               >
//                 Sign Up
//               </Link>
//             ) : (
//               <Link
//                 to="/dashboard"
//                 className="bg-white text-orange-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 text-center"
//               >
//                 Dashboard
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// import Logo from '../../assets/logo.png'
// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { FaUserCircle, FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa"
// import { cn } from "@/lib/utils"

// interface NavbarProps {
//   isLoggedIn?: boolean
// }

// const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = false }) => {
//   const [selectedLanguage, setSelectedLanguage] = useState("English")
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false)

//   const languages = ["English", "हिंदी", "বাংলা", "தমিழ்", "తెలుগు", "ಕನ್ನಡ", "മലയാളം", "ગુજરાતી", "ਪੰਜਾਬੀ", "मराठी"]

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const toggleLanguageDropdown = () => {
//     setIsLanguageOpen(!isLanguageOpen)
//   }

//   return (
//     <nav
//       className={cn(
//         "sticky top-0 z-50 transition-all duration-300 ease-in-out",
//         "bg-gradient-to-r from-slate-800 via-slate-900 to-gray-900",
//         "border-b-2 border-orange-500/30 backdrop-blur-sm",
//         isScrolled ? "shadow-2xl py-2" : "shadow-lg py-3",
//       )}
//     >
//       <div className="container mx-auto px-4 lg:px-6">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section - Left */}
//           <div className="flex items-center flex-shrink-0 bg-white h-12 rounded-2xl p-2 ">
//             <Link to="/" className="group flex items-center hover:scale-105 transition-transform duration-200">
//               <img
//                 src={Logo}
//                 alt="Haqdarshak Logo"
//                 className="h-12 w-auto m-4 max-w-[180px] object-contain group-hover:brightness-110 transition-all duration-200 filter drop-shadow-md group-hover:drop-shadow-lg"
//               />
//             </Link>
//           </div>

//           {/* Search Bar - Center */}
//           <div className="hidden md:flex flex-1 max-w-2xl mx-8">
//             <div className="relative w-full group">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <FaSearch className="h-4 w-4 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-200" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search policies, schemes, and guidelines..."
//                 className={cn(
//                   "w-full pl-12 pr-4 py-3 rounded-xl",
//                   "bg-slate-700/50 border border-slate-600/50 backdrop-blur-sm",
//                   "text-white placeholder-gray-400 text-base",
//                   "focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50",
//                   "hover:bg-slate-700/70 hover:border-slate-500/50 transition-all duration-200",
//                   "shadow-inner hover:shadow-lg",
//                 )}
//               />
//             </div>
//           </div>

//           {/* Right Section - Profile, Language, Signup */}
//           <div className="hidden md:flex items-center space-x-3">
//             {/* Profile Icon */}
//             <Link
//               to="/profile"
//               className={cn(
//                 "p-2.5 rounded-xl text-gray-300",
//                 "hover:bg-slate-700/50 hover:text-orange-400 hover:shadow-md",
//                 "transition-all duration-200 ease-in-out",
//                 "hover:scale-110 border border-transparent hover:border-slate-600/50",
//               )}
//             >
//               <FaUserCircle className="text-2xl" />
//             </Link>

//             {/* Language Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={toggleLanguageDropdown}
//                 className={cn(
//                   "flex items-center space-x-2 px-4 py-2.5 rounded-xl",
//                   "bg-slate-700/50 border border-slate-600/50 backdrop-blur-sm",
//                   "text-gray-300 font-medium hover:bg-slate-700/70 hover:text-orange-400 hover:border-slate-500/50",
//                   "transition-all duration-200 ease-in-out",
//                   "hover:shadow-md hover:scale-105",
//                   isLanguageOpen && "bg-slate-700/70 text-orange-400 border-slate-500/50 shadow-md",
//                 )}
//               >
//                 <span className="text-sm">{selectedLanguage}</span>
//                 <FaChevronDown
//                   className={cn("h-3 w-3 transition-transform duration-200", isLanguageOpen && "rotate-180")}
//                 />
//               </button>

//               {isLanguageOpen && (
//                 <div
//                   className={cn(
//                     "absolute right-0 mt-2 w-48 py-2 rounded-xl",
//                     "bg-slate-800 shadow-2xl border border-slate-600/50 backdrop-blur-sm",
//                     "animate-in slide-in-from-top-2 duration-200",
//                     "max-h-64 overflow-y-auto",
//                   )}
//                 >
//                   {languages.map((language, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         setSelectedLanguage(language)
//                         setIsLanguageOpen(false)
//                       }}
//                       className={cn(
//                         "w-full text-left px-4 py-2.5 text-sm",
//                         "hover:bg-slate-700/50 text-gray-300 hover:text-orange-400",
//                         "transition-colors duration-150",
//                         selectedLanguage === language && "bg-slate-700/70 text-orange-400 font-medium",
//                       )}
//                     >
//                       {language}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Sign Up / Login Button */}
//             {!isLoggedIn ? (
//               <Link
//                 to="/signup"
//                 className={cn(
//                   "px-6 py-2.5 rounded-xl font-semibold",
//                   "bg-gradient-to-r from-orange-500 to-amber-500 text-white",
//                   "hover:from-orange-600 hover:to-amber-600 hover:shadow-lg",
//                   "transition-all duration-200 ease-in-out",
//                   "hover:scale-105 active:scale-95",
//                   "border border-orange-400/20 hover:border-orange-300/50",
//                   "shadow-md hover:shadow-xl",
//                 )}
//               >
//                 Sign Up
//               </Link>
//             ) : (
//               <Link
//                 to="/login"
//                 className={cn(
//                   "px-6 py-2.5 rounded-xl font-semibold",
//                   "bg-slate-700/50 text-gray-300 border border-slate-600/50",
//                   "hover:bg-slate-700/70 hover:text-orange-400 hover:border-slate-500/50 hover:shadow-md",
//                   "transition-all duration-200 ease-in-out",
//                   "hover:scale-105 active:scale-95",
//                 )}
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className={cn(
//                 "p-2.5 rounded-xl text-gray-300",
//                 "hover:bg-slate-700/50 hover:text-orange-400 transition-all duration-200",
//                 "hover:scale-110 active:scale-95 border border-transparent hover:border-slate-600/50",
//               )}
//             >
//               {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={cn(
//             "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
//             isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
//           )}
//         >
//           <div className="py-4 space-y-4 border-t border-slate-700/50 mt-4">
//             {/* Mobile Logo */}
//             <div className="px-4 pb-2">
//               <img
//                 src="/placeholder.svg?height=40&width=150"
//                 alt="Haqdarshak Logo"
//                 className="h-10 w-auto max-w-[150px] object-contain filter drop-shadow-md"
//               />
//             </div>

//             {/* Mobile Search */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <FaSearch className="h-4 w-4 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search policies..."
//                 className={cn(
//                   "w-full pl-12 pr-4 py-3 rounded-xl",
//                   "bg-slate-700/50 border border-slate-600/50 backdrop-blur-sm",
//                   "text-white placeholder-gray-400",
//                   "focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50",
//                 )}
//               />
//             </div>

//             {/* Mobile Profile Link */}
//             <Link
//               to="/profile"
//               className={cn(
//                 "flex items-center px-4 py-3 rounded-xl text-gray-300 font-medium",
//                 "hover:bg-slate-700/50 hover:text-orange-400 transition-all duration-200",
//               )}
//               onClick={() => setIsOpen(false)}
//             >
//               <FaUserCircle className="text-xl mr-3" />
//               Profile
//             </Link>

//             {/* Mobile Language Selector */}
//             <div className="px-4">
//               <select
//                 value={selectedLanguage}
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//                 className={cn(
//                   "w-full p-3 rounded-xl",
//                   "bg-slate-700/50 border border-slate-600/50 backdrop-blur-sm",
//                   "text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50",
//                 )}
//               >
//                 {languages.map((language, index) => (
//                   <option key={index} value={language} className="bg-slate-800 text-white">
//                     {language}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Mobile Sign Up / Login Button */}
//             {!isLoggedIn ? (
//               <Link
//                 to="/signup"
//                 className={cn(
//                   "block mx-4 px-6 py-3 rounded-xl font-semibold text-center",
//                   "bg-gradient-to-r from-orange-500 to-amber-500 text-white",
//                   "hover:from-orange-600 hover:to-amber-600 transition-all duration-200",
//                   "shadow-md hover:shadow-lg",
//                 )}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Sign Up
//               </Link>
//             ) : (
//               <Link
//                 to="/login"
//                 className={cn(
//                   "block mx-4 px-6 py-3 rounded-xl font-semibold text-center",
//                   "bg-slate-700/50 text-gray-300 border border-slate-600/50",
//                   "hover:bg-slate-700/70 hover:text-orange-400 transition-all duration-200",
//                 )}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Click outside to close language dropdown */}
//       {isLanguageOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)} />}
//     </nav>
//   )
// }

// export default Navbar





import Logo from '../../assets/logo.png';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useLanguage } from '../../Pages/LanguageContext' // Import the useLanguage hook

interface NavbarProps {
  isLoggedIn?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = false }) => {
  const { language, changeLanguage } = useLanguage(); // Use the language context
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "mr", name: "मराठी" },
    // Add more languages as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <nav className={cn("sticky top-0 z-50 transition-all duration-300 ease-in-out", "bg-gradient-to-r from-slate-800 via-slate-900 to-gray-900", "border-b-2 border-orange-500/30 backdrop-blur-sm", isScrolled ? "shadow-2xl py-2" : "shadow-lg py-3")}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section - Left */}
          <div className="flex items-center flex-shrink-0 bg-white h-12 rounded-2xl p-2">
            <Link to="/" className="group flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Logo} alt="Haqdarshak Logo" className="h-12 w-auto m-4 max-w-[180px] object-contain group-hover:brightness-110 transition-all duration-200 filter drop-shadow-md group-hover:drop-shadow-lg" />
            </Link>
          </div>

          {/* Search Bar - Center */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="h-4 w-4 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-200" />
              </div>
              <input type="text" placeholder="Search policies, schemes, and guidelines..." className={cn("w-full pl-12 pr-4 py-3 rounded-xl", "bg-slate-700/50 border border-slate-600/50 backdrop-blur-sm", "text-white placeholder-gray-400 text-base", "focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50", "hover:bg-slate-700/70 hover:border-slate-500/50 transition-all duration-200", "shadow-inner hover:shadow-lg")} />
            </div>
          </div>

          {/* Right Section - Profile, Language, Signup */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Profile Icon */}
            <Link to="/profile" className={cn("p-2.5 rounded-xl text-gray-300", "hover:bg-slate-700/50 hover:text-orange-400 hover:shadow-md", "transition-all duration-200 ease-in-out", "hover:scale-110 border border-transparent hover:border-slate-600/50")}>
              <FaUserCircle className="text-2xl" />
            </Link>

            {/* Language Dropdown */}
            <div className="relative">
              <button onClick={toggleLanguageDropdown} className={cn("flex items-center space-x-2 px-4 py-2.5 rounded-xl", "bg-slate-700/50 border border-slate-600/50 backdrop-blur-sm", "text-gray-300 font-medium hover:bg-slate-700/70 hover:text-orange-400 hover:border-slate-500/50", "transition-all duration-200 ease-in-out", "hover:shadow-md hover:scale-105", isLanguageOpen && "bg-slate-700/70 text-orange-400 border-slate-500/50 shadow-md")}>
                <span className="text-sm">{languages.find(lang => lang.code === language)?.name || "English"}</span>
                <FaChevronDown className={cn("h-3 w-3 transition-transform duration-200", isLanguageOpen && "rotate-180")} />
              </button>

              {isLanguageOpen && (
                <div className={cn("absolute right-0 mt-2 w-48 py-2 rounded-xl", "bg-slate-800 shadow-2xl border border-slate-600/50 backdrop-blur-sm", "animate-in slide-in-from-top-2 duration-200", "max-h-64 overflow-y-auto")}>
                  {languages.map((lang, index) => (
                    <button key={index} onClick={() => {
                      changeLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }} className={cn("w-full text-left px-4 py-2.5 text-sm", "hover:bg-slate-700/50 text-gray-300 hover:text-orange-400", "transition-colors duration-150", language === lang.code && "bg-slate-700/70 text-orange-400 font-medium")}>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sign Up / Login Button */}
            {!isLoggedIn ? (
              <Link to="/signup" className={cn("px-6 py-2.5 rounded-xl font-semibold", "bg-gradient-to-r from-orange-500 to-amber-500 text-white", "hover:from-orange-600 hover:to-amber-600 hover:shadow-lg", "transition-all duration-200 ease-in-out", "hover:scale-105 active:scale-95", "border border-orange-400/20 hover:border-orange-300/50", "shadow-md hover:shadow-xl")}>
                Sign Up
              </Link>
            ) : (
              <Link to="/login" className={cn("px-6 py-2.5 rounded-xl font-semibold", "bg-slate-700/50 text-gray-300 border border-slate-600/50", "hover:bg-slate-700/70 hover:text-orange-400 hover:border-slate-500/50 hover:shadow-md", "transition-all duration-200 ease-in-out", "hover:scale-105 active:scale-95")}>
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("p-2.5 rounded-xl text-gray-300", "hover:bg-slate-700/50 hover:text-orange-400 transition-all duration-200", "hover:scale-110 active:scale-95 border border-transparent hover:border-slate-600/50")}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn("md:hidden overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
          <div className="py-4 space-y-4 border-t border-slate-700/50 mt-4">
            {/* Mobile Logo */}
            <div className="px-4 pb-2">
              <img src="/placeholder.svg?height=40&width=150" alt="Haqdarshak Logo" className="h-10 w-auto max-w-[150px] object-contain filter drop-shadow-md" />
            </div>

            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input type="text" placeholder="Search policies..." className={cn("w-full pl-12 pr-4 py-3 rounded-xl", "bg-slate-700/50 border border-slate-600/50 backdrop-blur-sm", "text-white placeholder-gray-400", "focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50")} />
            </div>

            {/* Mobile Profile Link */}
            <Link to="/profile" className={cn("flex items-center px-4 py-3 rounded-xl text-gray-300 font-medium", "hover:bg-slate-700/50 hover:text-orange-400 transition-all duration-200")} onClick={() => setIsOpen(false)}>
              <FaUserCircle className="text-xl mr-3" />
              Profile
            </Link>

            {/* Mobile Language Selector */}
            <div className="px-4">
              <select value={language} onChange={(e) => changeLanguage(e.target.value)} className={cn("w-full p-3 rounded-xl", "bg-slate-700/50 border border-slate-600/50 backdrop-blur-sm", "text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50")}>
                {languages.map((lang, index) => (
                  <option key={index} value={lang.code} className="bg-slate-800 text-white">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Sign Up / Login Button */}
            {!isLoggedIn ? (
              <Link to="/signup" className={cn("block mx-4 px-6 py-3 rounded-xl font-semibold text-center", "bg-gradient-to-r from-orange-500 to-amber-500 text-white", "hover:from-orange-600 hover:to-amber-600 transition-all duration-200", "shadow-md hover:shadow-lg")} onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
            ) : (
              <Link to="/login" className={cn("block mx-4 px-6 py-3 rounded-xl font-semibold text-center", "bg-slate-700/50 text-gray-300 border border-slate-600/50", "hover:bg-slate-700/70 hover:text-orange-400 transition-all duration-200")} onClick={() => setIsOpen(false)}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Click outside to close language dropdown */}
      {isLanguageOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)} />}
    </nav>
  );
};

export default Navbar;
