import Head from "next/head";
import React from "react";

type Props = {};

export default function ({}: Props) {
  return (
    <>
      <Head>
        <title>Marketplace - Buy a new car at CarShop</title>
      </Head>
      <div className="w-screen h-screen flex items-center justify-center">
        Hello Marketplace
      </div>
    </>
  );
}
