import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <Head>
        <title>Corner Cafe - Drink the delight</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
        <div className="max-w-md mx-auto">
          {/* LOGO */}
          <div className="flex flex-col sm:flex-row font-merry items-center font-bold text-4xl">
            <img src="/logo.png" className="h-28" alt="Tailwind Play" />
            <div className="text-3xl  md:text-4xl">
              Corner Cafe Co.
              <p className="text-xs sm:text-sm text-center sm:text-right text-yellow-900 font-medium">
                Drink the delight
              </p>
            </div>
          </div>

          <div className="mt-3 font-merry text-md sm:text-xl">
            <p>Are you tired of getting coffee late?</p>
            <p>Not anymore!</p>
          </div>

          <div className="my-2 font-merry font-bold text-md sm:text-lg text-yellow-900">
            <p>Corner cafe offering you - A cup of coffee in seconds!</p>
          </div>

          <div className="text-3xl">
            <img src="/slogan.png" />
          </div>
          <div className="divide-y divide-gray-300/50"></div>
          <div className="pt-8 text-base font-merry leading-7 font-semibold">
            <div>
              <p className="text-xl border-b my-2">Our team</p>
            </div>
            <ul className="flex justify-center">
              <li className="flex items-center rounded-lg p-2">
                <img
                  className="w-24 h-24 rounded-full border-2 shadow-lg"
                  src="https://avatars.githubusercontent.com/u/102219762?v=4"
                />
                <div className="mx-2">
                  <h6 className="text-sm sm:text-lg leading-3 font-semibold">
                    Akhil E
                  </h6>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">
                    Founder
                  </p>
                </div>
              </li>
              <li className="flex items-center rounded-lg p-2">
                <img
                  className="w-24 h-24 rounded-full border-2 shadow-lg"
                  src="https://avatars.githubusercontent.com/u/101086460?v=4"
                />
                <div className="mx-2">
                  <h6 className="text-sm sm:text-lg leading-3 font-semibold">
                    SD Paval
                  </h6>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">
                    Founder
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center border-t-2 pt-4 border-amber-700 border-opacity-60 text-xs my-3 space-x-3">
            <Link href="/tc">
              <a className="mx-2  hover:text-blue-800 hover:underline">Terms and Conditions</a>
            </Link>
            <Link href="/rc">
              <a className="mx-2  hover:text-blue-800 hover:underline">Return and Cancellation Policy</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
