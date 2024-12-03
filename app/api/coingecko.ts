"use server";

export default async function getCoins() {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
    method: "GET",
    headers: { accept: "application/json" },
  });
  const data = await response.json();

  console.log(data);

  return data;
}
