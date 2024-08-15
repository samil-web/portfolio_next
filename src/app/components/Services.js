// "use client";
import React from "react";

export default function Services() {
  const services = [
    {
      icon: "🔍",
      title: "Innovation can help your business",
      description:
        "Stay ahead of the competition and differentiate your business and always be open to learning",
    },
    {
      icon: "✏️",
      title: "Develop a strategic marketing plan",
      description:
        "A strategic marketing plan can help you reach your target audience and achieve your business goals.",
    },
    {
      icon: "🔥",
      title: "Build a talented team",
      description:
        "A talented team can help you achieve your business goals and grow your company.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="grid grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-pink-50 p-6 rounded">
            <div className="text-3xl mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
