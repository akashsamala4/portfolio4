import { ThemeProvider } from "@/components/theme-provider";
import { inject } from '@vercel/analytics';
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
 
inject();

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://chaxfolio.vercel.app/"),

	title: 'Samala Akash | Portfolio',
	authors: {
		name: "Samala Akash",
	},

	description:
		"Evolving Code, Self-Taught Spirit: Web Development Journey from India.",
	openGraph: {
		title: "Samala Akash",
		description:
			"Evolving Code, Self-Taught Spirit: Web Development Journey from India.",
		url: "https://vercel.com/chandrikas-projects-252f764c",
		siteName: "Samala Akash",
		images: "/newPortfolio.png",
		type: "website",
	},
	keywords: ["personal portfolio website", "portfolio website templete", "web developer", "web Development roadmap", "react portfolio website", "3d portfolio website", "three.js portfolio website", "portfolio website github","portfolio website template","free portfolio website", "samala akash", "samala akash github", "samala akash linkedin", "samala akash from sangli"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
		<link rel="shortcut icon" href="./favicon.ico" />
      <body className={space_Grotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
			<Analytics />
          </ThemeProvider>
        </body>
    </html>
  );
}
