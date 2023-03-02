import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle('translate-x-[100%]');
  };

  return (
    <nav
      className={`lg:px-auto fixed mx-auto flex h-fit w-full justify-center bg-primary text-white transition duration-500 sm:px-20`}
    >
      <div
        className={`fixed z-20 mx-auto flex h-16 w-full max-w-[1200px] justify-between px-4 backdrop-blur transition duration-500 md:static md:px-0`}
      >
        {/* Brand Logo */}
        <div className="my-auto flex">
          <Link to="/" className={``}>
            PVC Pipe
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="my-auto hidden w-full max-w-[500px] items-center justify-between font-poppins text-white md:flex">
          <HashLink
            to="#home"
            smooth
            className={({ isActive }) =>
              isActive
                ? 'px-4 underline decoration-2 underline-offset-4'
                : 'px-4 decoration-2 underline-offset-4 hover:underline'
            }
          >
            Home
          </HashLink>
          <HashLink
            to="#services"
            smooth
            className={({ isActive }) =>
              isActive
                ? 'px-4 underline decoration-2 underline-offset-4'
                : 'px-4 decoration-2 underline-offset-4 hover:underline'
            }
          >
            Services
          </HashLink>
          <HashLink
            to="#about"
            smooth
            className={({ isActive }) =>
              isActive
                ? 'px-4 underline decoration-2 underline-offset-4'
                : 'px-4 decoration-2 underline-offset-4 hover:underline'
            }
          >
            About us
          </HashLink>
          <HashLink
            to="#testimonials"
            smooth
            className={({ isActive }) =>
              isActive
                ? 'px-4 underline decoration-2 underline-offset-4'
                : 'px-4 decoration-2 underline-offset-4 hover:underline'
            }
          >
            Testimonials
          </HashLink>
          <HashLink
            to="#contact"
            smooth
            className={({ isActive }) =>
              isActive
                ? 'px-4 underline decoration-2 underline-offset-4'
                : 'px-4 decoration-2 underline-offset-4 hover:underline'
            }
          >
            Contact us
          </HashLink>
        </div>

        {/* Mobile nav & toggler */}
        <div className="z-20 flex md:hidden">
          <button
            onClick={showMenu}
            className="absolute right-2 flex p-3 pt-[1rem] text-secondary transition active:scale-90 md:hidden"
          >
            Open
          </button>
          <div
            ref={navRef}
            className={`font-body fixed  top-0 right-0 my-auto flex h-screen w-[70%] translate-x-[100%] flex-col items-center bg-primary uppercase transition md:hidden`}
          >
            <div
              className="mb-4 mt-[50%] flex justify-center"
              onClick={showMenu}
            >
              <HashLink
                to="#home"
                smooth
                className={({ isActive }) =>
                  isActive
                    ? 'px-4 underline decoration-2 underline-offset-4'
                    : 'px-4 decoration-2 underline-offset-4 hover:underline'
                }
                end
              >
                Home
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to="#services"
                smooth
                className={({ isActive }) =>
                  isActive
                    ? 'px-4 underline decoration-2 underline-offset-4'
                    : 'px-4 decoration-2 underline-offset-4 hover:underline'
                }
              >
                Services
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to="#about"
                smooth
                className={({ isActive }) =>
                  isActive
                    ? 'px-4 underline decoration-2 underline-offset-4'
                    : 'px-4 decoration-2 underline-offset-4 hover:underline'
                }
              >
                About Us
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to="#testimonials"
                smooth
                className={({ isActive }) =>
                  isActive
                    ? 'px-4 underline decoration-2 underline-offset-4'
                    : 'px-4 decoration-2 underline-offset-4 hover:underline'
                }
              >
                Testimonials
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to="#contact"
                smooth
                className={({ isActive }) =>
                  isActive
                    ? 'px-4 underline decoration-2 underline-offset-4'
                    : 'px-4 decoration-2 underline-offset-4 hover:underline'
                }
              >
                Contact Us
              </HashLink>
            </div>
            <button
              onClick={showMenu}
              className="absolute right-2 flex p-3 text-secondary transition duration-500 ease-in active:scale-90 md:hidden"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
