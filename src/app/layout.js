import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Kayode Portfolio",
    default: "Kayode Portfolio",
  },
  description:
    "Showcasing projects and expertise in frontend and full-stack development.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <meta
          name="google-site-verification"
          content="mrpHBzHaSOrtessmeLWY_D_a4_v168RxWM2EqcQwB7E"
        />
      </head>
      <body
        className={`${montserrat.className} antialiased bg-white dark:bg-[#171719] text-black dark:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
