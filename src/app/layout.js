import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import AppLayout from "./layouts/AppLayout";
import { ToastContainer } from "react-toastify";
import StoreProvider from "@/store/StoreProvider";
import ReduxProvider from "@/store/redux-provider";
import Script from "next/script";
// import Footer from "@/components/partials/footer/Footer";
// import TopNavbar from "@/components/partials/topNavbar/TopNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Itax Easy",
    default: "Itax Easy",
  },
  description:
    "Welcome to iTaxesy, your all-in-one solution for simplified financial management. iTaxesy empowers individuals and businesses alike to effortlessly navigate the complexities of taxation and financial planning.With iTaxesy, you can streamline your tax preparation process, ensuring accuracy and compliance with the latest regulations. Our intuitive platform provides comprehensive tools for filing taxes, maximizing deductions, and optimizing your financial strategy. Whether you're a seasoned investor or just starting your journey to financial success, iTaxesy offers insightful analytics and personalized recommendations to help you make informed decisions and achieve your goals. Experience peace of mind knowing that iTaxesy prioritizes security and privacy, safeguarding your sensitive financial information with state-of-the-art encryption technology.take control of your finances with iTaxesy and unlock a brighter financial future today.",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <StoreProvider>
        <html lang="en">
          <Script src="https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/v2.0.0/easebuzz-checkout-v2.min.js" />
          <body id="root" className={`${inter.className} text-slate-800`}>
            <ToastContainer />
            <AppLayout>{children}</AppLayout>
          </body>
        </html>
      </StoreProvider>
    </ReduxProvider>
  );
}
