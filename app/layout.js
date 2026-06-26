import "./globals.css";

export const metadata = {
  title: "NexusX — International Market Expansion & Global Growth",
  description: "NexusX provides structured international market presence for manufacturers. Build credible, consistent global representation and export channels without complexity.",
  keywords: "International Market Expansion, Export Consulting India, Global Representation for Manufacturers, Cross-border Trade, Market Entry Strategy",
  openGraph: {
    title: "NexusX — International Market Expansion & Global Representation",
    description: "Structured international market presence for manufacturers. Build credible, consistent global representation without complexity.",
    url: "https://www.nexusxglobal.com/",
    type: "website",
    images: [
      {
        url: "https://www.nexusxglobal.com/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "NexusX Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusX — International Market Expansion & Global Representation",
    description: "Structured international market presence for manufacturers. Build credible, consistent global representation without complexity.",
    images: ["https://www.nexusxglobal.com/assets/images/logo.png"],
  },
  verification: {
    google: "-7JocjEB4TPrLRSSrx5X1N2ZYyElcaZEiU4rRh_26Qc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="-7JocjEB4TPrLRSSrx5X1N2ZYyElcaZEiU4rRh_26Qc" />
      </head>
      <body>{children}</body>
    </html>
  );
}
