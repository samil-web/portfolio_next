import Book from "@/app/components/Book";
import Header from "@/app/components/Header";
import Portfolio from "@/app/components/Portfolio";
import Testimonial from "@/app/pages/Testimonial";
import Image from "next/image";
import Questions from "@/app/components/FAQ";
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
