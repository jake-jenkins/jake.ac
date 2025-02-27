import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import StoryblokProvider from "@/components/StoryblokProvider";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { COMPONENTS } from "@/components";

const siteName = "Jake.ac";

export const metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
};

storyblokInit({
  accessToken: process.env.ACCESS_TOKEN,
  use: [apiPlugin],
  components: COMPONENTS,
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="app" className="flex flex-col bg-slate-50">
          <Header />
          <StoryblokProvider>
            <main className="flex-1 mt-14 lg:mt-16">{children}</main>
          </StoryblokProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
