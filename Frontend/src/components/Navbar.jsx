import Logo from "./Logo";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar({ localCart = [] }) {
  const user = localStorage.getItem("user");
  const Logout = () => {
    localStorage.clear();
  };
  const showCart = (e) => {
    const cart = document.getElementById("cart");
    cart.classList.remove("hidden");
  };
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between mt-2">
          <Logo />
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-4 text-sm">
                <li>
                  {user ? (
                    <>
                      <div className="flex items-center">
                        <h5 className="not-sr-only font-bold tracking-wider">
                          {user[0].toUpperCase() + user.slice(1)}
                        </h5>
                        <div
                          className="cursor-pointer w-10 text-white transition bg-indigo-600 p-2 rounded ml-3 relative"
                          onClick={showCart}
                        >
                          <FaCartShopping />
                          <p className="absolute bg-red-600 rounded-full top-0 right-1 text-xs">
                            {localCart.length}
                          </p>
                        </div>
                        <a
                          className="text-white transition hover:text-gray-500/75 bg-indigo-600 p-2 rounded ml-3"
                          href="/"
                          onClick={Logout}
                        >
                          {" "}
                          Logout{" "}
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        className="text-white transition hover:text-gray-500/75 bg-indigo-600 p-2 rounded"
                        to="/login"
                      >
                        {" "}
                        Login{" "}
                      </Link>

                      <Link
                        className="text-white transition hover:text-gray-500/75 bg-indigo-600 p-2 rounded ml-3"
                        to="/register"
                      >
                        {" "}
                        Signup{" "}
                      </Link>
                    </>
                  )}
                  {/* <h3 className="text-base">Welcome, <span className='font-bold'>{!name ? "arman" : name}</span></h3> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
