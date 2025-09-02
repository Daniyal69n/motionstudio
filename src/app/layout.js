import "./globals.css";
import Navbar from "../components/navbar.js";
import { Manrope, Anton } from "next/font/google";
import Footer from "../components/footer.js";
import SmoothScroll from "../components/SmoothScroll.js";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "600", "700"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400", // ← explicitly request the available weight
});

export const metadata = {
  title: "Motion Studio - Modern Animated Web Design & Development",
  description: "We create visually stunning, modern websites with smooth animations and clean design. Motion Studio specializes in animated web experiences that help brands stand out with elegant, high-performing digital solutions.",
  keywords: ["web design", "web development", "animations", "modern design", "clean websites", "motion design", "digital agency"],
  authors: [{ name: "Motion Studio" }],
  creator: "Motion Studio",
  publisher: "Motion Studio",
  openGraph: {
    title: "Motion Studio - Modern Animated Web Design & Development",
    description: "We create visually stunning, modern websites with smooth animations and clean design. Specializing in animated web experiences that help brands stand out.",
    url: "https://motionstudio.com",
    siteName: "Motion Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion Studio - Modern Animated Web Design & Development",
    description: "We create visually stunning, modern websites with smooth animations and clean design.",
    creator: "@motionstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/fav-icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/fav-icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/fav-icons/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/fav-icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/fav-icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/fav-icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/fav-icons/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#F3F4F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${manrope.variable} ${anton.variable} antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}