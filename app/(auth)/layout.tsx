export const metadata = {
  title: 'Auth',
  description: 'Authenticating users with Clerk.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <nav>
        {children}
      </nav>
    </main>
  )
}
