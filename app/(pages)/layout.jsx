import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "./SideBar";
import { LoginModal, MobileHeader } from "../components";
import Footer from "./Footer";
import AuthProvider from "../context/AuthProvider";
import { MainLayout } from "../layouts";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata = {
    title: "Uppbeat - Free Music For Creators",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <AuthProvider>
            <html lang="en">
                <head>
                    <link rel="shortcut icon" type="image/x-icon" href="/Logo.ico" />
                </head>
                <body className={poppins.className}>
                    <MainLayout>
                        <LoginModal />
                        <SideBar />
                        <main className="flex-1">
                            <MobileHeader />
                            {children}
                            <div className="py-20"></div>
                            <Footer />
                        </main>
                    </MainLayout>
                </body>
            </html>
        </AuthProvider>
    );
}