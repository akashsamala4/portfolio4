import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import { inject } from '@vercel/analytics';
 
inject();

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://chaxfolio.vercel.app/"),

	title: 'Chandrika Eluru | Portfolio',
	authors: {
		name: "Chandrika Eluru",
	},

	description:
		"Evolving Code, Self-Taught Spirit: Web Development Journey from India.",
	openGraph: {
		title: "Chandrika Eluru",
		description:
			"Evolving Code, Self-Taught Spirit: Web Development Journey from India.",
		url: "https://vercel.com/chandrikas-projects-252f764c",
		siteName: "Chandrika Eluru",
		images: "/newPortfolio.png",
		type: "website",
	},
	keywords: ["personal portfolio website", "portfolio website templete", "web developer", "web Development roadmap", "react portfolio website", "3d portfolio website", "three.js portfolio website", "portfolio website github","portfolio website template","free portfolio website", "chandrika ELuru", "chandrika ELuru github", "chandrika ELuru linkedin", "chandrika ELuru from sangli"],
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
