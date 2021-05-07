import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

interface GetCurrenciesProps {
  financeKey: string;
  setIndices: Dispatch<SetStateAction<{}>>;
}

export async function getCurrencies({
  financeKey,
  setIndices,
}: GetCurrenciesProps) {
  let currencies = {};
  let taxes = {};

  await axios
    .get(
      `https://api.hgbrasil.com/finance?format=json-cors&fields=only_results,currencies,USD,EUR,BTC&key=${financeKey}`
    )
    .then(({ data }) => {
      currencies = {
        USD: data.currencies.USD.buy,
        EUR: data.currencies.EUR.buy,
        BTC: (data.currencies.BTC.buy / 1000),
      };
    });

  await axios
    .get(
      `https://api.hgbrasil.com/finance/taxes?format=json-cors&fields=only_results&key=${financeKey}`
    )
    .then(({ data }) => {
      taxes = {
        selic: data[0].selic,
      };
    });

  setIndices({...taxes, ...currencies });
}
