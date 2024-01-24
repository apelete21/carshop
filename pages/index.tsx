import { PageWrapper } from "@/components";
import Head from "next/head";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

type Props = {};

export default function ({}: Props) {
  return (
    <>
      <Head>
        <title>Let's find your dream car - Carshop</title>
      </Head>
      <PageWrapper>
        <div className="relaive hero-bg">
          <div className="w-full h-full absolute top-0 -z-[0] hero-dark-layer" />
          <div
            className={`h-screen w-screen flex flex-col items-center justify-center gap-[11%] text-white relative`}
          >
            <p className="font-light text-xs">
              Welcome, hope you’ll get satisfied about all your needs, if not,
              write us a message
            </p>
            <h1 className="text-6xl font-extrabold text-center">
              The cars that capture the
              <br />
              eyes of every car lover
            </h1>
            <Link
              href={"/marketplace"}
              className="px-3 py-2 flex flex-row uppercase font-medium mt-[8%] bg-transparent rounded-none border border-white hover:bg-white hover:text-black duration-200"
            >
              <span>Find your dream car</span>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
