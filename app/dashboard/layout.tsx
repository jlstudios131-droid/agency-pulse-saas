import type { ReactNode } from "react";

export const metadata = {
  title: "Dashboard — AgencyPulse",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="flex min-h-screen">

          {/* Sidebar placeholder (premium real virá depois) */}
          <aside className="hidden md:flex w-64 border-r bg-white p-6">
            <p className="text-gray-600">Sidebar</p>
          </aside>

          {/* Main content area */}
          <div className="flex flex-1 flex-col">

            {/* Header placeholder (premium real virá depois) */}
            <header className="w-full border-b bg-white p-4">
              <p className="text-gray-700">Header</p>
            </header>

            {/* Dashboard pages */}
            <main className="p-6 flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
      }
