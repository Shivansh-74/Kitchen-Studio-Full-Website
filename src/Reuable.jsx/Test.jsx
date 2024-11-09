import React, { useState, useEffect } from 'react';

export default function Test() {
  // Sample testimonials data
  const testimonials = [
    {
      name: "John Doe",
      review: "Amazing service! Highly recommend for anyone looking for professional and quality work.",
    },
    {
      name: "Jane Smith",
      review: "Their attention to detail and customer satisfaction is top-notch. I’m very pleased with the results!",
    },
    {
      name: "Michael Brown",
      review: "They exceeded my expectations in every way. I'll definitely work with them again!",
    },
  ];

  // State to track the current testimonial index
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Update testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonials grid grid-cols-1 md:grid-cols-4 w-full bg-gray-50 p-6 md:p-10 rounded-lg shadow-lg">
      <div className="col-span-2 p-4 md:p-6 flex flex-col justify-center">
        <p className="text-sm text-blue-500 font-semibold mb-2">TESTIMONIALS</p>
        <h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">
          Here's what our satisfied clients are saying
        </h1>
        <p className="text-lg italic text-gray-700 py-10">"{testimonials[currentTestimonial].review}"</p>
        <p className="text-right font-medium text-gray-900 mt-4">- {testimonials[currentTestimonial].name}</p>
      </div>
      <div className="col-span-2">
        <img
          src="https://usercontent.one/wp/kitchenstudioqatar.com/wp-content/uploads/2022/06/9-2048x1536.jpg?media=1689694185"
          alt="Client feedback"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
