import Navbar from "./component/navbar";
import Homepage from "./homepage/homepage";


export default function Home() {
  return (


    <div className="grid grid-rows-[20px_1fr_20px] bg-red-200 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Navbar />
        < Homepage />




      </main>
 
    </div>
  );
}
