import Nav from "@components/Nav";
import Footer from "@/components/Footer";
import "./global.css";
export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}) {
	return (
		<html lang='en'>
			<head>
				<link rel="icon" type="image/x-icon" href="/assets/main-logo.svg"></link>
				<title>Vincent&apos;s Sphere</title>
			</head>
			<body>
        <Nav></Nav>
        {children}
				<Footer/>
        </body>
		</html>
	);
}
