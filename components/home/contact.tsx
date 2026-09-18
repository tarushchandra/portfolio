"use client";
import { useState, type SubmitEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { toast } from "sonner";

async function sendMessage({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) throw new Error("Failed to send message");
  return response.json();
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    toast.promise(sendMessage({ name, email, message }), {
      loading: "Sending your message...",
      success: () => {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        return "Message sent! I'll get back to you soon.";
      },
      error: "Something went wrong. Please try again.",
      finally: () => setIsSubmitting(false),
    });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t hairline bg-[#162a35] text-[#f4efe5]"
      data-testid="section-contact"
    >
      <div className="mx-auto grid max-w-[1240px] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:py-32">
        <div>
          <SectionLabel index="03">Contact</SectionLabel>
          <h2 className="display-font mt-6 max-w-xl text-6xl leading-[.88] tracking-[-.05em] sm:text-8xl">
            Have an idea to
            <span className="text-[#ef7655]"> build?</span>
          </h2>
          <p className="mt-8 max-w-md leading-7 text-[#a9c5c4]">
            I like working with people who care about the details and are honest
            about the constraints. Email is the quickest route in.
          </p>
          <a
            href="mailto:tarushchandra6@gmail.com"
            className="focus-ring mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#f4efe5] underline decoration-[#ef7655] underline-offset-8"
            data-testid="link-contact-email"
          >
            tarushchandra6@gmail.com <ArrowUpRight size={15} />
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-[#a9c5c4]/30 p-5 sm:p-8"
          data-testid="form-contact"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="eyebrow text-[#a9c5c4]">Or leave a note</span>
          </div>
          <label className="block">
            <span className="mono-font text-[10px] uppercase tracking-[.12em] text-[#a9c5c4]">
              Your name
            </span>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-3 w-full border-b border-[#a9c5c4]/40 bg-transparent px-0 py-3 text-sm text-[#f4efe5] outline-none placeholder:text-[#a9c5c4]/70 focus:border-[#ef7655]"
              placeholder="Ada Lovelace"
              data-testid="input-contact-name"
            />
          </label>
          <label className="mt-6 block">
            <span className="mono-font text-[10px] uppercase tracking-[.12em] text-[#a9c5c4]">
              Email address
            </span>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3 w-full border-b border-[#a9c5c4]/40 bg-transparent px-0 py-3 text-sm text-[#f4efe5] outline-none placeholder:text-[#a9c5c4]/70 focus:border-[#ef7655]"
              placeholder="you@company.com"
              data-testid="input-contact-email"
            />
          </label>
          <label className="mt-6 block">
            <span className="mono-font text-[10px] uppercase tracking-[.12em] text-[#a9c5c4]">
              What are you building?
            </span>
            <textarea
              required
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              value={message}
              rows={3}
              className="mt-3 w-full resize-none border-b border-[#a9c5c4]/40 bg-transparent px-0 py-3 text-sm text-[#f4efe5] outline-none placeholder:text-[#a9c5c4]/70 focus:border-[#ef7655]"
              placeholder="A short version is perfect."
              data-testid="input-contact-message"
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring mt-8 inline-flex cursor-pointer items-center gap-3 bg-[#ef7655] px-5 py-3 text-sm font-bold text-[#162a35] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            data-testid="button-submit-contact"
          >
            {submitted ? (
              <>
                <Check size={16} /> Message noted
              </>
            ) : (
              <>
                Send message <ArrowUpRight size={15} />{" "}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
