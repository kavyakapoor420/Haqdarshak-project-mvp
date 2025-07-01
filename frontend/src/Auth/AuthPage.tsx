// import React, { useState, useEffect } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { Button } from "../Components/ui/button";
// import { Input } from '../Components/ui/input'
// import { Label } from '../Components/ui/label'
// import { Checkbox } from '../Components/ui/checkbox'

// import { Link, useNavigate } from "react-router-dom";

// import AgentImage from '../assets/Agent.png'



// // Minimal typewriter
// interface TypewriterProps {
//   text: string;
//   speed?: number;
// }
// function Typewriter({ text, speed = 120 }: TypewriterProps) {
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   useEffect(() => {
//     if (currentIndex < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + text[currentIndex]);
//         setCurrentIndex((prev) => prev + 1);
//       }, speed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, text, speed]);
//   return (
//     <span>
//       {displayText}
//       <span className="animate-blink ml-0.5">|</span>
//     </span>
//   );
// }

// // Good reference Unsplash image (feel free to swap!)
// // Or use your own preferred uploaded asset, like /lovable-uploads/a1361a44-591e-4394-9c52-9f8d4542403c.png
// const AUTH_IMAGE = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80";

// const AuthPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     agreeToTerms: false,
//     userType: 'user'
//   });

//   const handleUserTypeChange = (type: 'user' | 'admin') => {
//     setFormData(prev => ({ ...prev, userType: type }));
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };
//   const handleGoogleAuth = () => {
//     console.log("Google auth clicked");
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#f4f1ee] via-[#f9e6da] to-[#f8d1be]">
//       <div className="w-full  max-w-6xl  h-[80vh] shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">
//         {/* Left: Form */}
//         <div className="flex flex-col justify-center px-8 py-10 md:px-14">
//           <div className="w-full max-w-md mx-auto">
//             {/* Header */}
//             <h1 className="text-3xl md:text-4xl font-bold text-[#ef5d32] mb-2 text-left leading-snug">
//               {isLogin ? (
//                 <Typewriter text="Welcome Back" speed={110} />
//               ) : (
//                 <Typewriter text="Create Your Account" speed={90} />
//               )}
//             </h1>
//             <p className="text-base md:text-lg text-gray-700 mb-8 text-left font-normal">
//               {isLogin ? "Sign in to access your account" : "Join us to start your journey"}
//             </p>
//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {!isLogin && (
//                 <div>
//                   <Label htmlFor="fullName" className="text-[15px] font-medium text-gray-800 mb-1">Full Name</Label>
//                   <Input
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     placeholder="Full name"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     className="mt-2 bg-[#faf5ef] border border-[#e7e2dc] text-gray-900 placeholder-gray-400 text-lg py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ef5d32] focus:border-transparent"
//                     required={!isLogin}
//                   />
//                 </div>
//               )}
//               <div>
//                 <Label htmlFor="email" className="text-[15px] font-medium text-gray-800 mb-1">Email</Label>
//                 <div className="relative">
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="mt-2 bg-[#faf5ef] border border-[#e7e2dc] text-gray-900 placeholder-gray-400 text-lg py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ef5d32] focus:border-transparent"
//                     required
//                   />
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="flex items-center justify-between mb-2">
//                   <Label htmlFor="password" className="text-[15px] font-medium text-gray-800">Password</Label>
//                   {isLogin && (
//                     <Link
//                       to="/forgot-password"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         navigate('/forgot-password');
//                       }}
//                       className="text-sm text-[#ef5d32] hover:underline transition-colors duration-200"
//                     >
//                       Forgot?
//                     </Link>
//                   )}
//                 </div>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder={isLogin ? "Enter your password" : "Create a strong password"}
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="mt-2 bg-[#faf5ef] border border-[#e7e2dc] text-gray-900 placeholder-gray-400 text-lg py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ef5d32] focus:border-transparent"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((v) => !v)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ef5d32] focus:outline-none transition-colors duration-200"
//                     tabIndex={-1}
//                   >
//                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                   </button>
//                 </div>
//               </div>
//               {/* Terms (signup) */}
//               {!isLogin && (
//                 <div className="flex items-center gap-2 text-sm">
//                   <Checkbox
//                     id="terms"
//                     name="agreeToTerms"
//                     checked={formData.agreeToTerms}
//                     onCheckedChange={(checked: boolean) =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         agreeToTerms: checked as boolean,
//                       }))
//                     }
//                     className="border-[#e7e2dc] data-[state=checked]:bg-[#ef5d32] data-[state=checked]:text-white"
//                   />
//                   <Label htmlFor="terms" className="text-gray-600">
//                     I agree to the{" "}
//                     <Link to="/terms" className="text-[#ef5d32] underline hover:no-underline">Terms & Conditions</Link>
//                   </Label>
//                 </div>
//               )}
//               {/* User Type Selection */}
//               <div className="mb-4">
//                 <div className="flex flex-col space-y-2">
//                   <span className="text-sm text-gray-600">Login as:</span>
//                   <div className="flex gap-4">
//                     <button
//                       onClick={() => handleUserTypeChange('user')}
//                       className={`w-1/2 py-2 px-4 rounded-lg transition-all duration-200 ${
//                         formData.userType === 'user' 
//                           ? 'bg-[#ef5d32] text-white' 
//                           : 'bg-[#faf5ef] text-gray-700 border border-[#e7e2dc] hover:bg-[#f8d1be]'
//                       }`}
//                     >
//                       User
//                     </button>
//                     <button
//                       onClick={() => handleUserTypeChange('admin')}
//                       className={`w-1/2 py-2 px-4 rounded-lg transition-all duration-200 ${
//                         formData.userType === 'admin' 
//                           ? 'bg-[#ef5d32] text-white' 
//                           : 'bg-[#faf5ef] text-gray-700 border border-[#e7e2dc] hover:bg-[#f8d1be]'
//                       }`}
//                     >
//                       Admin
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Submit */}
//               <Button
//                 type="submit"
//                 className="w-full rounded-xl bg-[#ef5d32] text-white text-[17px] font-semibold py-3.5 mt-2 hover:bg-[#d84820] transition-all duration-200 shadow-md hover:shadow-lg"
//               >
//                 {isLogin ? "Sign In" : "Create Account"}
//               </Button>
//               {/* Or / Divider */}
//               <div className="flex items-center gap-3 my-3">
//                 <div className="flex-1 h-px bg-[#e8dacb]" />
//                 <span className="text-xs text-gray-400">or</span>
//                 <div className="flex-1 h-px bg-[#e8dacb]" />
//               </div>
//               {/* Google Auth */}
//               <button
//                 type="button"
//                 onClick={handleGoogleAuth}
//                 className="w-full flex items-center justify-center gap-3 bg-white border border-[#e7e2dc] text-gray-900 rounded-xl py-2.5 font-medium text-sm shadow-sm hover:bg-[#faf5ef] transition"
//               >
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
//                   <g>
//                     <path fill="#4285F4" d="M21.805 10.023h-9.436v3.956h5.435c-.235 1.336-1.426 3.931-5.435 3.931-3.272 0-5.946-2.705-5.946-6.042 0-3.338 2.674-6.043 5.946-6.043 1.861 0 3.11.72 3.826 1.344l2.617-2.533C17.49 3.196 15.239 2.17 12.37 2.17 6.642 2.17 2 6.807 2 12.045c0 5.239 4.642 9.876 10.37 9.876 5.794 0 9.631-4.07 9.631-9.846 0-.666-.073-1.17-.197-1.702z" />
//                     <path fill="#34A853" d="M3.768 7.648l3.358 2.462c.912-2.402 3.18-4.112 5.783-4.112.845 0 1.685.164 2.46.489l2.617-2.534C16.06 2.784 14.316 2.17 12.37 2.17c-3.637 0-6.915 2.003-8.602 4.978z" />
//                     <path fill="#FBBC05" d="M12.37 20.922c2.657 0 4.881-.882 6.445-2.401l-3.002-2.342c-.947.646-2.228 1.039-3.443 1.039-2.651 0-4.885-2.156-5.685-4.158l-3.306 2.553c1.65 3.284 5.212 5.309 9.002 5.309z" />
//                     <path fill="#EA4335" d="M21.805 10.023h-9.436v3.956h5.435c-.336 1.906-2.138 3.931-5.435 3.931-3.272 0-5.946-2.705-5.946-6.042 0-3.338 2.674-6.043 5.946-6.043 1.861 0 3.11.72 3.826 1.344l2.617-2.533C17.49 3.196 15.239 2.17 12.37 2.17c-5.728 0-10.37 4.637-10.37 9.876 0 5.239 4.642 9.876 10.37 9.876 5.794 0 9.631-4.07 9.631-9.846 0-.666-.073-1.17-.197-1.702z" />
//                   </g>
//                 </svg>
//                 <span>Sign {isLogin ? "in" : "up"} with Google</span>
//               </button>
//             </form>
//             {/* Switch login/signup */}
//             <div className="text-center mt-7">
//               <p className="text-sm text-gray-500">
//                 {isLogin ? "Don't have an account?" : "Already have an account?"}
//                 <button
//                   type="button"
//                   onClick={() => setIsLogin(!isLogin)}
//                   className="ml-1 font-semibold text-[#ef5d32] hover:text-[#d84820] transition-colors duration-200"
//                 >
//                   {isLogin ? "Sign up" : "Sign in"}
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* Right: Full-height Image, NO overlay */}
//         <div className="hidden lg:block w-full h-full">
//           <img
//             src={AgentImage}
//             alt="Authentication"
//             className="object-cover w-full h-full"
//             draggable={false}
//             loading="eager"
//             style={{minHeight: "100%", minWidth: "100%"}}
//           />
//         </div>
//       </div>
//       <style>
//         {`
//         .animate-blink {
//           animation: blink 1.1s steps(1) infinite;
//         }
//         @keyframes blink {
//           0%, 100% { opacity: 1 }
//           50% { opacity: 0 }
//         }
//         `}
//       </style>
//     </div>
//   );
// };

// export default AuthPage;



import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../Components/ui/button";
import { Input } from '../Components/ui/input';
import { Label } from '../Components/ui/label';
import { Checkbox } from '../Components/ui/checkbox';
import { Link, useNavigate } from "react-router-dom";
import AgentImage from '../assets/Agent.png';

// Minimal typewriter
interface TypewriterProps {
  text: string;
  speed?: number;
}

function Typewriter({ text, speed = 120 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      <span className="animate-blink ml-0.5">|</span>
    </span>
  );
}

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
    userType: 'user'
  });

  const handleUserTypeChange = (type: 'user' | 'admin') => {
    setFormData(prev => ({ ...prev, userType: type }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleGoogleAuth = () => {
    console.log("Google auth clicked");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f4f1ee] via-[#f9e6da] to-[#f8d1be] flex justify-center items-center p-4">
      <div className="w-full max-w-6xl h-full max-h-[80vh] shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">
        {/* Left: Form */}
        <div className="flex flex-col justify-center px-8 py-10 md:px-14">
          <div className="w-full max-w-md mx-auto">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#ef5d32] mb-2 text-left leading-snug">
              {isLogin ? (
                <Typewriter text="Welcome Back" speed={110} />
              ) : (
                <Typewriter text="Create Your Account" speed={90} />
              )}
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8 text-left font-normal">
              {isLogin ? "Sign in to access your account" : "Join us to start your journey"}
            </p>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div>
                  <Label htmlFor="fullName" className="text-[15px] font-medium text-gray-800 mb-1">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-2 bg-[#faf5ef] border border-[#e7e2dc] text-gray-900 placeholder-gray-400 text-lg py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ef5d32] focus:border-transparent"
                    required={!isLogin}
                  />
                </div>
              )}
              <div>
                <Label htmlFor="email" className="text-[15px] font-medium text-gray-800 mb-1">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-[#faf5ef] border border-[#e7e2dc] text-gray-900 placeholder-gray-400 text-lg py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ef5d32] focus:border-transparent"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="password" className="text-[15px] font-medium text-gray-800">Password</Label>
                  {isLogin && (
                    <Link
                      to="/forgot-password"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/forgot-password');
                      }}
                      className="text-sm text-[#ef5d32] hover:underline transition-colors duration-200"
                    >
                      Forgot?
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={isLogin ? "Enter your password" : "Create a strong password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-2 bg-[#faf5ef] border border-[#e7e2dc] text-gray-900 placeholder-gray-400 text-lg py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ef5d32] focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ef5d32] focus:outline-none transition-colors duration-200"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              {/* Terms (signup) */}
              {!isLogin && (
                <div className="flex items-center gap-2 text-sm">
                  <Checkbox
                    id="terms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked: boolean) =>
                      setFormData((prev) => ({
                        ...prev,
                        agreeToTerms: checked as boolean,
                      }))
                    }
                    className="border-[#e7e2dc] data-[state=checked]:bg-[#ef5d32] data-[state=checked]:text-white"
                  />
                  <Label htmlFor="terms" className="text-gray-600">
                    I agree to the{" "}
                    <Link to="/terms" className="text-[#ef5d32] underline hover:no-underline">Terms & Conditions</Link>
                  </Label>
                </div>
              )}
              {/* User Type Selection */}
              <div className="mb-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-gray-600">Login as:</span>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleUserTypeChange('user')}
                      className={`w-1/2 py-2 px-4 rounded-lg transition-all duration-200 ${
                        formData.userType === 'user'
                          ? 'bg-[#ef5d32] text-white'
                          : 'bg-[#faf5ef] text-gray-700 border border-[#e7e2dc] hover:bg-[#f8d1be]'
                      }`}
                    >
                      User
                    </button>
                    <button
                      onClick={() => handleUserTypeChange('admin')}
                      className={`w-1/2 py-2 px-4 rounded-lg transition-all duration-200 ${
                        formData.userType === 'admin'
                          ? 'bg-[#ef5d32] text-white'
                          : 'bg-[#faf5ef] text-gray-700 border border-[#e7e2dc] hover:bg-[#f8d1be]'
                      }`}
                    >
                      Admin
                    </button>
                  </div>
                </div>
              </div>
              {/* Submit */}
              <Button
                type="submit"
                className="w-full rounded-xl bg-[#ef5d32] text-white text-[17px] font-semibold py-3.5 mt-2 hover:bg-[#d84820] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
              {/* Or / Divider */}
              <div className="flex items-center gap-3 my-3">
                <div className="flex-1 h-px bg-[#e8dacb]" />
                <span className="text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-[#e8dacb]" />
              </div>
              {/* Google Auth */}
              <button
                type="button"
                onClick={handleGoogleAuth}
                className="w-full flex items-center justify-center gap-3 bg-white border border-[#e7e2dc] text-gray-900 rounded-xl py-2.5 font-medium text-sm shadow-sm hover:bg-[#faf5ef] transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path fill="#4285F4" d="M21.805 10.023h-9.436v3.956h5.435c-.235 1.336-1.426 3.931-5.435 3.931-3.272 0-5.946-2.705-5.946-6.042 0-3.338 2.674-6.043 5.946-6.043 1.861 0 3.11.72 3.826 1.344l2.617-2.533C17.49 3.196 15.239 2.17 12.37 2.17 6.642 2.17 2 6.807 2 12.045c0 5.239 4.642 9.876 10.37 9.876 5.794 0 9.631-4.07 9.631-9.846 0-.666-.073-1.17-.197-1.702z" />
                    <path fill="#34A853" d="M3.768 7.648l3.358 2.462c.912-2.402 3.18-4.112 5.783-4.112.845 0 1.685.164 2.46.489l2.617-2.534C16.06 2.784 14.316 2.17 12.37 2.17c-3.637 0-6.915 2.003-8.602 4.978z" />
                    <path fill="#FBBC05" d="M12.37 20.922c2.657 0 4.881-.882 6.445-2.401l-3.002-2.342c-.947.646-2.228 1.039-3.443 1.039-2.651 0-4.885-2.156-5.685-4.158l-3.306 2.553c1.65 3.284 5.212 5.309 9.002 5.309z" />
                    <path fill="#EA4335" d="M21.805 10.023h-9.436v3.956h5.435c-.336 1.906-2.138 3.931-5.435 3.931-3.272 0-5.946-2.705-5.946-6.042 0-3.338 2.674-6.043 5.946-6.043 1.861 0 3.11.72 3.826 1.344l2.617-2.533C17.49 3.196 15.239 2.17 12.37 2.17c-5.728 0-10.37 4.637-10.37 9.876 0 5.239 4.642 9.876 10.37 9.876 5.794 0 9.631-4.07 9.631-9.846 0-.666-.073-1.17-.197-1.702z" />
                  </g>
                </svg>
                <span>Sign {isLogin ? "in" : "up"} with Google</span>
              </button>
            </form>
            {/* Switch login/signup */}
            <div className="text-center mt-4 ">
              <p className="text-sm text-gray-500">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 font-semibold text-[#ef5d32] hover:text-[#d84820] transition-colors duration-200"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>
        {/* Right: Full-height Image, NO overlay */}
        <div className="hidden lg:block w-full h-full">
          <img
            src={AgentImage}
            alt="Authentication"
            className="object-cover w-full h-full"
            draggable={false}
            loading="eager"
            style={{minHeight: "100%", minWidth: "100%"}}
          />
        </div>
      </div>
      <style>
        {`
          .animate-blink {
            animation: blink 1.1s steps(1) infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1 }
            50% { opacity: 0 }
          }
        `}
      </style>
    </div>
  );
};

export default AuthPage;
