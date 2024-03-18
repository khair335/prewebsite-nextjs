import { Container } from "@/components/container";
import { Header } from "@/components/header";
import "./globals.css"; 
import { Footer } from "@/components/footer";

export default function Layout({ children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta 
        name="viewport" 
        content="width=device-width, height=device-height, initial-scale=1" 
        />
      </head>
      <body>
      <div>
      <Header />
      <main className="pt-[var(--navigation-height)]">
        {children}
        </main>
      <Footer />
      </div>
      </body>
    </html>
  );
}