import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function ({}: Props) {
  const router = useRouter();
  const { article } = router.query;
  return (
    <>
      <Head>
        <title>{article + " " + "-" + " "} marketplace</title>
      </Head>
      <div className="w-screen h-screen flex items-center justify-center">
        Hello article {article}
      </div>
    </>
  );
}
