import Nav from "@components/Nav";
import "./global.css";
export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}) {
	return (
		<html lang='en'>
			<body>
        <Nav></Nav>
        {children}
        </body>
		</html>
	);
}
