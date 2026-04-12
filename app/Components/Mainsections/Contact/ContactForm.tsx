"use client";
import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .send(
        'service_1m7w5kc',
        'template_k1ddh8i',
        {
          from_name: form.name,
          to_name: "VARA PRASAD",
          from_email: form.email,
          to_email: "varaprasadlog@gmail.com",
          message: form.message,
        },
        'o68Kg1nYsYE13E7Up'
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully. I will get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          setStatusMessage("Unable to send right now. Please try again in a moment.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#0c1422]/85 border border-white/10 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-2">Let us build something impactful</p>
      <h2 className="font-bold text-x1 text-neutral-100 dark:text-neutral-200">
        Contact Me.
      </h2>
      <p className="text-sm text-slate-300 mt-2">
        Share your idea, timeline, and goals. I will reply with a focused plan.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your Message</Label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border bg-[#171f2e] text-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 border-[#34435a] placeholder:text-slate-400"
            rows={4}
            placeholder="Tell me about your project..."
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-[#183157] to-[#0c1b30] block w-full text-white rounded-md h-11 font-semibold tracking-wide shadow-[0_10px_22px_rgba(8,30,62,0.55)]"
          type="submit"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message ->"}
          <BottomGradient />
        </button>

        {statusMessage && (
          <p className="mt-4 text-sm text-cyan-200/90">{statusMessage}</p>
        )}

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
