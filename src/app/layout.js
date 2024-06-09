import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({
  subsets: ["latin"],
});
export const metadata = {
  title: "NUM Security Awareness Training",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: "white"}} className={rubik.className}>
        <Navbar />

        <div className="bg-white">{children}</div>
      </body>
      <Footer />
    </html>
  );
}
