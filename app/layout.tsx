import './globals.css';
import Header from './components/Header';
import RouteLoader from './components/RouteLoader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <>
          <RouteLoader />
        </>
        {children}
      </body>
    </html>
  );
}
