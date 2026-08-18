"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_q695jp1",
        "template_1f2s5mf",
        form.current,
        {
          publicKey: "9xP8c-X--BmlpXqsT",
        }
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="card p-6 space-y-4"
    >
      <label className="block">
        <span className="text-sm text-muted">Your Name</span>

        <input
          type="text"
          name="name"
          required
          className="input mt-1"
          placeholder="Indronil Dey"
        />
      </label>

      <label className="block">
        <span className="text-sm text-muted">Your Email</span>

        <input
          type="email"
          name="email"
          required
          className="input mt-1"
          placeholder="indronil@example.com"
        />
      </label>

      <label className="block">
        <span className="text-sm text-muted">Subject</span>

        <input
          type="text"
          name="subject"
          required
          className="input mt-1"
          placeholder="Calculator suggestion"
        />
      </label>

      <label className="block">
        <span className="text-sm text-muted">Message</span>

        <textarea
          name="message"
          required
          rows={5}
          className="input mt-1"
          placeholder="What's up?"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-500 text-sm">
          Message sent successfully! Thank you for contacting us.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}