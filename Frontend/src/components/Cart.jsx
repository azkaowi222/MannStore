export const Cart = ({ localCart, removeItem }) => {
  const price = [];

  const closeCart = (e) => {
    const cart = document.getElementById("cart");
    cart.classList.add("hidden");
  };

  async function createTransaction() {
    const orderid = Math.floor(Math.random() * 900);
    const rate = 15000;
    const itemDetails = localCart.map((item) => {
      return {
        id: item.id,
        price: 10000,
        quantity: item.quantity,
        name: item.name,
      };
    });
    console.log(itemDetails);
    const subTotal = price.reduce((a, b) => a + b, 0) * rate;
    const consumentData = {
      order_id: orderid,
      gross_ammount: 20000,
      firstName: "Arman Maulana",
      email: "Maximeklly65@gmail.com",
      phone: "089838873888",
      address: "Jl. salira indah",
      city: "Cilegon",
      postal_code: "42455",
      country_code: "IDN",
      // price: price,
      item_details: itemDetails,
    };
    try {
      const response = await fetch("http://localhost:3000/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consumentData),
      });
      const data = await response.json();
      const token = data.transactionToken;
      window.snap.pay(token);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="z-10 hidden" id="cart">
      <div>
        <div className="pointer-events-none absolute inset-y-12 right-0 flex max-w-full pl-10 h-full">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span
                        className="absolute -inset-0.5"
                        onClick={closeCart}
                      ></span>
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {localCart.length <= 0 ? (
                        <div className="mt-5">Cart is Empty</div>
                      ) : (
                        localCart.map((item) => {
                          price.push(item.price * item.quantity);
                          return (
                            <li className="flex py-6" key={item.id}>
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-white">
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  className="h-full w-full object-contain object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">{item.title}</a>
                                    </h3>
                                    <p className="ml-4">
                                      {(
                                        +item.price * +item.quantity
                                      ).toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                      })}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">
                                    Qty: {item.quantity}
                                  </p>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={() => removeItem(item.id)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>
                    {price
                      .reduce((acc, curr) => acc + curr, 0)
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                  </p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <button
                    className={`flex items-center justify-center rounded-md border border-transparent ${
                      localCart.length <= 0
                        ? "bg-gray-500"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    } px-6 py-3 text-base font-medium text-white shadow-sm w-full`}
                    disabled={localCart.length <= 0 ? true : false}
                    onClick={() => createTransaction()}
                  >
                    Checkout
                  </button>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <button
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={closeCart}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
              )
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
