import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Design with AI",
      desc: "Chat with our intelligent design assistant to select materials, colors, and gemstones for your classic Linghua piece.",
      img: "https://picsum.photos/seed/how1/400/600"
    },
    {
      title: "Crafted by Linghua",
      desc: "Our master jewelers bring your custom specifications to life using traditional techniques and ethically sourced materials.",
      img: "https://picsum.photos/seed/how2/400/600"
    },
    {
      title: "Delivered to you",
      desc: "Your unique piece arrives in our signature packaging, complete with a certificate of authenticity.",
      img: "https://picsum.photos/seed/how3/400/600"
    }
  ];

  return (
    <section className="py-24 bg-beige-100 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">The Linghua Process</h2>
      
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col text-center group cursor-pointer">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-lg">
                <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <h3 className="text-xl font-bold mb-3 font-sans">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed max-w-sm mx-auto font-serif">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
