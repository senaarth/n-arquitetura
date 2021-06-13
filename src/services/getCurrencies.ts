import axios from "axios";
import { Console } from "node:console";

export async function getDollar() {
  try {
    const usdRes = await axios.get(
      `${process.env.FINANCE_URL}?format=json-cors&fields=only_results,currencies,USD&key=${process.env.FINANCE_KEY}`
    );
    const USD = usdRes.data.currencies.buy;

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(USD);
  } catch (err) {
    console.log(err);
    return "";
  }
}

export async function getEuro() {
  try {
    const eurRes = await axios.get(
      `${process.env.FINANCE_URL}?format=json-cors&fields=only_results,currencies,EUR&key=${process.env.FINANCE_KEY}`
    );
    const EUR = eurRes.data.currencies.buy;

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(EUR);
  } catch (err) {
    console.log(err);
    return "";
  }
}

export async function getBtc() {
  try {
    const btcRes = await axios.get(
      `${process.env.ALPHA_CURRENCY_URL}BTC&to_currency=BRL&apikey=${process.env.ALPHA_KEY}`
    );
    const btcResData = btcRes.data["Realtime Currency Exchange Rate"];
    const BTC = btcResData["5. Exchange Rate"];

    return new Intl.NumberFormat("pt-BR", {
      maximumSignificantDigits: 3,
      style: "currency",
      currency: "BRL",
    }).format(BTC / 1000);
  } catch (err) {
    console.log(err);
    return "";
  }
}

export async function getEth() {
  try {
    const ethRes = await axios.get(
      `${process.env.ALPHA_CURRENCY_URL}ETH&to_currency=BRL&apikey=${process.env.ALPHA_KEY}`
    );
    const ethResData = ethRes.data["Realtime Currency Exchange Rate"];
    const ETH = ethResData["5. Exchange Rate"];

    return new Intl.NumberFormat("pt-BR", {
      maximumSignificantDigits: 3,
      style: "currency",
      currency: "BRL",
    }).format(ETH / 1000);
  } catch (err) {
    console.log(err);
    return "";
  }
}

export async function getSelic() {
  try {
    const { data } = await axios.get(
      `${process.env.FINANCE_URL}/taxes?format=json-cors&fields=only_results&key=${process.env.FINANCE_KEY}`
    );
    const SELIC = data[0].selic;

    return `${SELIC}%`;
  } catch (err) {
    console.log(err);
    return "";
  }
}
