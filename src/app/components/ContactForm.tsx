"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        body: data,
        headers: { accept: "aplication/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-md mx-auto p-6 bg-neutral-500 rounded-lg shadow-lg"
    >
      <h2 className="text-normal font-medium text-white">Let&apos;s talk!</h2>
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        className="p-3 rounded-md border border-neutral-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        required
        placeholder="Your message"
        className="p-3 rounded-md border border-neutral-700 bg-neutral-800 text-white h-18 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm text-center">
          Message sent succesfully.
        </p>
      )}
      {status === "success" && (
        <p className="text-red-400 text-sm text-center">
          Oops! something went wrong.
        </p>
      )}
    </form>
  );
}
