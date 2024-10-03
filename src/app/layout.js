// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Animoon | Free Anime Streaming | Watch Anime Online",
  description:
    "Watch free anime online in HD at Animoon.me. Stream the latest anime episodes with Kaido or Kaido.to and explore anime like Hianime.",
  keywords:
    "free anime, anime, watch anime, anime streaming, animoon, kaido, kaido.to, hianime, watch anime online",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "x0aiWAODNGU-1UA2FXyORfyme9uWJir7mIMu8AMmLm4",
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
