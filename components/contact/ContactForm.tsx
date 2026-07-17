"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactSchema, type ContactSchema } from "@/lib/schemas";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactSchema) {
    // TODO: wire to API route
    console.log("Form data:", data);
    await new Promise((r) => setTimeout(r, 800)); // simulate network
    setSubmitted(true);
    reset();
  }

  const inputBase =
    "w-full px-[24px] py-[20px] rounded-[16px] bg-[#F0F0F3] border-none text-sm text-[#1B1F3B] placeholder-[#8E8E93] focus:outline-none transition shadow-[inset_-1px_-1px_2px_0px_#FFFFFF,inset_-4px_-4px_10px_0px_#FFFFFF,inset_1px_1px_2px_0px_rgba(0,0,0,0.25),inset_5px_5px_8.5px_0px_rgba(0,0,0,0.25)]";

  const errorText = "text-xs text-red-500 mt-1";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="text-4xl mb-4">✉️</div>
        <h3
          className="text-2xl font-800 uppercase text-[#1B1F3B] mb-2"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Message Sent!
        </h3>
        <p className="text-[#8E8E93] text-sm">
          We'll get back to you within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-[#E87722] underline hover:no-underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px] mb-4">
        {/* First Name */}
        <div>
          <input
            {...register("firstName")}
            placeholder="First Name"
            className={inputBase}
            aria-label="First name"
          />
          {errors.firstName && (
            <p className={errorText}>{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            {...register("lastName")}
            placeholder="Last Name"
            className={inputBase}
            aria-label="Last name"
          />
          {errors.lastName && (
            <p className={errorText}>{errors.lastName.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone number"
            className={inputBase}
            aria-label="Phone number"
          />
          {errors.phone && (
            <p className={errorText}>{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email ID"
            className={inputBase}
            aria-label="Email address"
          />
          {errors.email && (
            <p className={errorText}>{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <textarea
          {...register("message")}
          placeholder="Message"
          rows={5}
          className={`${inputBase} resize-none`}
          aria-label="Message"
        />
        {errors.message && (
          <p className={errorText}>{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 nm-flat-sm hover:[box-shadow:var(--nm-inner)] hover:scale-[0.98] font-montserrat text-[#202020] text-[16px] font-medium hover:text-[#C07708] active:text-[#C07708] transition-all duration-300 ease-in-out inline-flex items-center justify-center select-none"
        >
          {isSubmitting ? "Sending…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
