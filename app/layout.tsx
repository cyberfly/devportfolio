import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fathur Rahman Portfolio",
  description: "Fathur Rahman Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <header className="bg-slate-800">
          <div className="max-w-screen-xl mx-auto flex justify-between py-8 px-8 text-lg ">
            <Link href="/">
              <h4 className="text-green-600 text-xl font-bold">
                Fathur Rahman
              </h4>
            </Link>

            <div>
              <ul className="flex space-x-6">
                <li>
                  <a className="hover:underline text-green-600" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline text-green-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:underline text-green-600"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-slate-800">
          <div className="max-w-screen-xl mx-auto px-8 py-8 flex flex-col lg:flex-row justify-between text-sm">
            <p>Copyright Fathur Rahman &copy; {new Date().getFullYear()}</p>

            <p>Powered by NextJS 14, TailwindCSS and Vercel.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
