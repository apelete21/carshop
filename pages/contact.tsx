import Head from 'next/head';
import React from 'react'

type Props = {}

export default function ({}: Props) {
  return (
    <>
      <Head>
        <title>Contact Us - CarShop</title>
      </Head>
      <div className="h-screen w-screen flex items-center justify-center">
        <h1>Contact Us</h1>
      </div>
    </>
  );
}