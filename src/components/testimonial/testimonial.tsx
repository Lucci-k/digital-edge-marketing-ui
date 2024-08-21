import { useState, FC } from "react";

interface Testimonial {
  name: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Thompson",
    quote: "Digital Edge really turned our marketing around. Their SEO and social media skills gave us a huge boost online, and we've seen way more engagement from our customers. Couldn't be happier!",
  },
  {
    name: "Mark Anderson",
    quote: "Teaming up with Digital Edge was the best decision for our business. Their creative content and smart strategies helped us hit our marketing goals and grow like never before. Love their work!",
  },
  {
    name: "Emily Martinez",
    quote: "The folks at Digital Edge are amazing! They gave us great insights and crafted marketing campaigns that really clicked with our audience. Our brand feels stronger than ever thanks to them.",
  },
];

const Testimonial: FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section id="testimonial" className="py-14 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-white font-semibold pb-6">What people are saying</h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial === idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-gray-400 text-xl font-semibold sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <div className="mt-3">
                        <span className="block text-gray-500 font-semibold">{item.name}</span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : null
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                    currentTestimonial === idx ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
