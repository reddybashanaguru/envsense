import './global.css';

export const metadata = {
  title: 'Welcome to envsense',
  description: 'The Precise Environmental Monitoring Solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
