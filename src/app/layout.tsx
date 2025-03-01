import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "camelAI: AI-powered Data Analysis | SQL-Free Business Intelligence",
  description:
    "Transform your data analysis with camelAI. Ask questions in plain English and get instant insights, charts, and dashboards from your database. Connect to PostgreSQL, Snowflake, BigQuery & more. No SQL needed.",
  keywords:
    "camelAI, AI data analyst, natural language BI tool, SQL alternative, business intelligence software, data visualization tool, database chat interface, AI analytics platform, real-time data insights, automated data analysis",
  icons: {
    icon: {
      url: "/qaml-favicon.webp",
      type: "image/webp",
      sizes: "64x64",
    },
  },
  openGraph: {
    title:
      "camelAI: The AI Data Analyst. Ask questions, get instant charts and insights from your data.",
    description:
      "Transform your data analysis with camelAI. Ask questions in plain English and get instant insights from your database. No SQL needed.",
    url: "https://camelai.com/",
    images: [
      {
        url: "https://camelai.com/assets/images/camel-og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <div id="home"></div>
        {children}
      </body>
    </html>
  );
}
