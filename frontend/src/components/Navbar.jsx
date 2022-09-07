import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <header className='p-8 bg-slate-800 text-white mb-8 sticky top-0 left-0'>
        <div className='max-w-[90%] md:max-w-[70%] lg:max-w-[60%] m-auto flex align-center justify-between'>
          <div className='grid self-center'>
            <h1 className='text-2xl'>
              <Link to='/' onClick={() => setIsOpen(!isOpen)}>
                <span className='text-cyan-500'>FryBlog</span>
              </Link>
            </h1>
          </div>
          <nav className='hidden md:block'>
            <ul className='flex align-center justify-between'>
              <li className='text-1xl ml-8 hover:text-cyan-500 grid self-center '>
                <Link to='/'>Home</Link>
              </li>
              <li className='text-1xl ml-8 hover:text-cyan-500 grid self-center '>
                <Link to='/posts'>Posts</Link>
              </li>
              <li className='text-1xl ml-8 hover:text-cyan-500 grid self-center'>
                <Link to='/about'>About</Link>
              </li>
              <li className='text-1xl ml-8 hover:text-cyan-500 grid self-center'>
                <Link to='/sign-in'>Sign-in</Link>
              </li>
              {/* <li className='text-1xl ml-8 hover:text-cyan-500'> */}

              <button className='text-1xl ml-4 border border-cyan-500 py-2 px-3 rounded-md hover:bg-cyan-500 hover:text-slate-800'>
                <Link to='/sign-up'>Sign-up</Link>
              </button>

              {/* </li> */}
            </ul>
          </nav>

          {/* Hamburger Icon */}
          {isOpen ? (
            <div className='md:hidden grid self-center text-2xl'>
              <button onClick={() => setIsOpen(false)}>
                <HiOutlineMenuAlt1 />
              </button>
            </div>
          ) : (
            <div
              className={
                isOpen
                  ? 'hidden'
                  : 'md:hidden block absolute top-0 right-0 w-[30%] bg-white text-slate-600 text-[1.25rem] shadow-lg shadow-slate-900 py-8 px-8'
              }
            >
              {/* Menu opened */}
              <div className='flex flex-end align-end justify-end mb-6 text-2xl'>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <MdOutlineClose />
                </button>
              </div>
              <ul className='flex flex-col align-center justify-between py-8 text-base'>
                <li className='ml-4 mb-6 hover:text-cyan-500'>
                  <Link to='/' onClick={() => setIsOpen(!isOpen)}>
                    Home
                  </Link>
                </li>
                <li className='ml-4 mb-6 hover:text-cyan-500'>
                  <Link to='/posts' onClick={() => setIsOpen(!isOpen)}>
                    Posts
                  </Link>
                </li>
                <li className='ml-4 mb-6 hover:text-cyan-500'>
                  <Link to='/about' onClick={() => setIsOpen(!isOpen)}>
                    About
                  </Link>
                </li>
                <li className='ml-4 mb-6 hover:text-cyan-500'>
                  <Link to='/sign-in' onClick={() => setIsOpen(!isOpen)}>
                    Sign-in
                  </Link>
                </li>
                <li className='ml-4 mb-6 hover:text-cyan-500'>
                  <Link to='/sign-up' onClick={() => setIsOpen(!isOpen)}>
                    Sign-up
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      {children}
    </>
  );
}
export default Navbar;
