
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-screen bg-background">
      {/* Left Section - Completely Fixed */}
      <div className="hidden lg:block fixed left-0 top-0 w-1/2 h-screen bg-auth-illustration bg-cover bg-center">
        <div className="absolute right-0 top-0 h-full w-px bg-border"></div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 lg:ml-auto min-h-screen p-6 lg:p-12 pt-20 lg:pt-0 overflow-y-auto flex items-center justify-center">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </main>
  );
}
