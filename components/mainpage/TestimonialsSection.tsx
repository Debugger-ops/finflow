import { Card } from "../../components/ui/card";
import { Star } from "lucide-react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "Finlow completely transformed how I manage my business finances. The insights are invaluable and saved me thousands.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content:
      "Best financial app I've ever used. The interface is beautiful and the AI recommendations are spot-on.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content:
      "I finally feel in control of my money. Finlow makes budgeting effortless and actually enjoyable!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="header">
          <h2>
            Loved by
            <br />
            <span>Thousands of Users</span>
          </h2>
          <p>
            See what our community has to say about their Finlow experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>

              <p>"{testimonial.content}"</p>

              <div className="testimonial-user">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <div className="name">{testimonial.name}</div>
                  <div className="role">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
