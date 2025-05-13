import { Footer } from "./ui/footer-section";

export default function Wrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow relative">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        {/* Content with responsive padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
