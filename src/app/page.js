import Book from "@/pages/Book";
import Header from "@/pages/Header";
import Portfolio from "@/pages/Portfolio";
import Testimonial from "@/pages/Testimonial";
import Image from "next/image";
import Questions from "@/pages/FAQ";
// import Header, Recent work, testimonial, book a call, FAQ
export default function Home() {
  return (
    <div>
      <Header />
      <Portfolio />
      <Testimonial />
      <Book />
      <Questions />
    </div>
  );
}
