function getAllPrice() {
  const datas = [
    {
      name: "baju biru",
      price: 10000,
    },
    {
      name: "baju batik",
      price: 5000,
    },
  ];
  const totalPrice = datas.reduce((acc, data) => acc + data.price, 0);
  return totalPrice
}

console.log(getAllPrice());
