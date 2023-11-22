import React, { useState } from 'react';
import { Logo, logoSm } from '../../assets/img';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import SearchBar from './searchBar';
import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [openNav, setOpenNav] = React.useState(false);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');


//     const  handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false),
//     );
//   }, []);
//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">

//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center text-white">
//           Pages
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center text-white">
//           Account
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center text-white">
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center text-white">
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );


//   return (
//     <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-md px-4 py-2 lg:px-8 lg:py-4 bg-card">
//     <div className="flex items-center justify-between relative text-white">

//       <Typography
//         onClick={()=> navigate("/home")}
//         as="a"
//         href="#"
//         className="mr-4 cursor-pointer py-1.5 text-3xl flex flex-row items-center gap-4"
//       >
//         <div><img src={logoSm} className='flex flex-row w-14 h-12'></img></div>
//         ITI-Books
//       </Typography>



//       <div className="flex items-center gap-4">
//         <div className="mr-4 hidden lg:block">{navList}</div>
//         <div className="flex items-center gap-x-1">
//           <Button
//             variant="text"
//             size="sm"
//             className="hidden lg:inline-block"
//           >
//             <span className='text-white'>Log In</span>
//           </Button>
//           <Button
//             variant="gradient"
//             size="sm"
//             className="hidden lg:inline-block"
//           >
//             <span className='text-white'>Sign in</span>
//           </Button>
//         </div>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               className="h-6 w-6"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </IconButton>
//       </div>
//     </div>
//     <MobileNav open={openNav}>
//       {navList}
//       <div className="flex items-center gap-x-1">
//         <Button fullWidth variant="text" size="sm" className=" bg-white">
//           <span>Log In</span>
//         </Button>
//         <Button fullWidth variant="gradient" size="sm" className="">
//           <span>Sign in</span>
//         </Button>
//       </div>
//     </MobileNav>
//   </Navbar>
//   );
// }

const Header = ({searchTerm}) => {
  const navigate = useNavigate();


  return (
    <Navbar fluid rounded className='bg-card sticky top-0 z-10'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logoSm} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-1 pr-16 ">
        <div className='pr-28'>
        <SearchBar searchTerm={searchTerm} />

        </div>
        <Dropdown
          arrowIcon={false}
          
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={()=>{ navigate('/profile')}} Link to="/profile">Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Header;