import { Navbar, Sidebar } from '@/components';

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-container container">
      <nav className="navbar">
        <Navbar />
      </nav>
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <section className="main-section">
        {children} {/* This will include the content from route1, route2, etc. */}
      </section>
      <div className="right-sidebar">
        <h2>Right Sidebar</h2>
      </div>
    </div>
  );
}
