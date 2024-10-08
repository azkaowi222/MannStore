import { useEffect, useState, useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";

export const Cta = ({ handleAddToCart, products }) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Mewah & Berkualitas
                </h2>

                <p className="mt-4 text-gray-500">
                  Produk dengan kesan megah membuat gaya hidup anda menjadi
                  Fantastic!
                </p>
              </header>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="flex flex-wrap justify-center gap-5">
              {products.map((product) => {
                return (
                  <li
                    key={product.id}
                    className="w-96 flex justify-center items-end py-2 px-5 border border-purple-700"
                  >
                    <div className="group block ">
                      <div id="wrapper" className="mt-3 text-center ">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="aspect-square w-48 object-contain object-center rounded m-auto"
                        />
                        <h3 id="title" className="font-medium text-gray-900">
                          {product.title}
                        </h3>

                        <p
                          className="mt-1 text-sm text-gray-700"
                          price={product.price}
                        >
                          {product.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                        <button
                          id="checkout"
                          href="#"
                          onClick={(e) => {
                            handleAddToCart(
                              e,
                              product.id,
                              product.price,
                              product.title,
                              product.image
                            );
                          }}
                          className="mt-1 rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-600 focus:outline-none focus:ring"
                        >
                          Add To Cart{" "}
                          <FaCartShopping className="inline-block ml-2" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
