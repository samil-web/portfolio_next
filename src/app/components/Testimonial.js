"use client";
import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Trusted clients</h2>
      <div className="flex">
        <div className="w-1/2">{/* Add your illustration here */}</div>
        <div className="w-1/2">
          <blockquote className="text-xl mb-4">
            `They are the best people. And this is the suitable platform to
            learn from distance. I have enjoyed a lot to learning with them.
            They are very helpful and kind people.`
          </blockquote>
          - Fabian elli student
          <div className="flex justify-between mt-10">
            <div>
              <div className="text-2xl font-bold">5M+</div>
              <div>Student Learning</div>
            </div>
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div>Popular Courses</div>
            </div>
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div>Active Teacher</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100+</div>
              <div>Free Courses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
