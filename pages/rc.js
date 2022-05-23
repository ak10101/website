import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Return and Cancellation Policy - Corner Cafe</title>
      </Head>
      <section className="mx-auto container w-full my-4">
        <article className="prose">
          <h2>Refund and Cancellation Policy</h2>
          <p>
            Our focus is complete customer satisfaction. In the event, if you
            are displeased with the services provided, we will refund back the
            money, provided the reasons are genuine and proved after
            investigation. Please keep the transaction id, it provides all the
            details about the services or the product you purchase.
          </p>
          <h3>Cancellation Policy</h3>
          <p>
            For Cancellations please contact us via email (
            <a href="mailto:cornercafe.shop@gmail.com">
              cornercafe.shop@gmail.com
            </a>
            ) Requests received later than 3 to 4 business days prior to the end
            of the current service period will be treated as cancellation of
            services for the next service period.
          </p>
          <h3>Refund Policy</h3>

          <p>
            In case any client is not get the beverage we can provide a refund.
            Refunds will be issued to the upi account provided at the time of
            purchase and in case of payment gateway fails, payments refund will be
            made to the same account.
          </p>
        </article>
      </section>
    </div>
  );
}
