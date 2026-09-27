"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    furnitureType: "",
    approximateSize: "",
    materialPreference: "",
    budget: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", { ...formData, referenceImage: fileName });
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border border-border px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="enquiry" className="py-20 md:py-28 lg:py-32 bg-surface-alt">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — Info */}
          <AnimatedSection>
            <SectionLabel>Get in Touch</SectionLabel>
            <SectionHeading
              title="Tell us about your project"
              subtitle="Share your requirements and we will get back to you with a quote."
            />
            <div className="mt-10 space-y-4 text-sm text-secondary">
              <p>
                Whether it is a single bed or an entire office, we would like to
                understand your needs before suggesting materials and pricing.
              </p>
              <p>
                You can also reach us directly on WhatsApp for a quicker
                response.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.15}>
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl text-primary mb-2">
                    Thank you
                  </h3>
                  <p className="text-secondary text-sm">
                    We have received your enquiry and will get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <select
                    name="furnitureType"
                    value={formData.furnitureType}
                    onChange={handleChange}
                    className={`${inputClass} ${!formData.furnitureType ? "text-secondary/50" : ""}`}
                  >
                    <option value="">Furniture Type</option>
                    <option value="sofa">Sofa</option>
                    <option value="bed">Bed</option>
                    <option value="chair">Chair</option>
                    <option value="table">Table</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="temple">Temple / Pooja Unit</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="custom">Custom</option>
                    <option value="other">Other</option>
                  </select>

                  <select
                    name="materialPreference"
                    value={formData.materialPreference}
                    onChange={handleChange}
                    className={`${inputClass} ${!formData.materialPreference ? "text-secondary/50" : ""}`}
                  >
                    <option value="">Material Preference</option>
                    <option value="teak">Teak Wood</option>
                    <option value="rubberwood">Rubberwood</option>
                    <option value="sheesham">Sheesham</option>
                    <option value="plywood">Plywood</option>
                    <option value="metal">Metal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="approximateSize"
                    placeholder="Approximate Size (optional)"
                    value={formData.approximateSize}
                    onChange={handleChange}
                    className={inputClass}
                  />

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClass} ${!formData.budget ? "text-secondary/50" : ""}`}
                  >
                    <option value="">Budget Range</option>
                    <option value="under-20k">Under ₹20,000</option>
                    <option value="20k-50k">₹20,000 – ₹50,000</option>
                    <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                    <option value="above-1l">Above ₹1,00,000</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />

                {/* Reference Image Upload */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-secondary mb-2">
                    Reference Image (optional)
                  </label>
                  <label className="flex items-center gap-3 px-4 py-3 border border-border cursor-pointer hover:border-accent transition-colors">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-secondary">
                      {fileName || "Choose an image"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        setFileName(e.target.files?.[0]?.name || "")
                      }
                    />
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Enquiry
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
