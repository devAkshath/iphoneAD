"use client";

import { Scene } from "../comp";

export default function Home() {
  return (
    <main className="relative">


      {/* Hero Section */}
      <section
        id="hero"
        className="h-[87vh] flex items-end justify-center relative bg-[#F5F5F5] w-full"
      >
        <div id="text-1" className="text-center mb-48 z-10 px-44 py-6">
          <h1 className="text-7xl font-medium mb-3">
            Custom packaging designed to fit your business
          </h1>
          <p className="text-3xl font-light text-[#E53935]">
            Power re-imagined.
          </p>

        </div>
      </section>

      {/* Section 1 */}
      <section
        id="section1"
        className="h-[70vh] screen flex items-center justify-start relative"
      >
        <div className="container mx-auto px-6">
          <div id="text-2" className="max-w-lg">
            <h2 className="text-7xl font-medium mb-4 text-[#E53935]">
              Packaging Possibilities Unboxed
            </h2>
            <p className="text-3xl font-light text-gray-500">
              Bring your packaging ideas to life with endless options of custom
              packaging and accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="section2"
        className="h-[75vh] screen flex items-center justify-end relative bg-[#fddddd]"
      >
        <div id="text-3" className="container mx-auto px-6">
          <div className="max-w-lg ml-auto text-right">
            <h2 className="text-6xl font-medium mb-4 text-gray-800">
              Products. High-quality, nature-derived packaging for sustainable
              brands
            </h2>
            <p className="text-3xl font-light text-gray-500">
              Select up to 8 samples for 2 and test different types of
              packaging, materials, sizes, and prints.
            </p>
          </div>
        </div>
      </section>
      <Scene />
    </main>
  );
}
