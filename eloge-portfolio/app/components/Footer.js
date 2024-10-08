"use client";
import { footerDetails } from "@/public/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Footer = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    feedback: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputVariants = {
    valid: { scale: 1, borderColor: "#4CAF50" },
    invalid: { scale: 1.05, borderColor: "#FF5252" },
  };

  const errorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          } else {
            entry.target.classList.remove("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = sectionRef.current.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.feedback.trim()) tempErrors.feedback = "Feedback is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormData({ name: "", email: "", description: "", feedback: "" });
      setIsSubmitting(false);
      // Show success message or toast
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      className="w-full min-h-screen font-khand text-5xl text-white bg-home-gray "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants} className="mx-8 md:mx-16">
        Contact me
      </motion.h1>
      <hr className="w-[180px] lg:w-[200px] border-t-4 border-home-yellow lg:mx-14 mx-11 animate" />
      <div className="flex flex-col md:flex-row px-8 md:px-16 py-16">
        <motion.div
          className="flex flex-wrap flex-col gap-8 w-full md:w-1/2 p-8"
          variants={containerVariants}
        >
          {footerDetails.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 items-center w-fit lg:text-2xl text-xl"
              variants={itemVariants}
            >
              <div className="size-14 relative rounded-full bg-home-yellow flex items-center justify-center">
                <div className="size-6 relative">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    className="object-contain"
                    fill
                  />
                </div>
              </div>
              {item.displayAsColumn ? (
                <div className="flex flex-col">
                  {item.title.map((email, index) => (
                    <Link key={index} href={`mailto:${email}`}>
                      {email}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link href={item.link || ""}>{item.title}</Link>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="p-8 w-full md:w-1/2"
          variants={containerVariants}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-8 no-underline"
          >
            <motion.div
              className="w-full flex flex-col sm:flex-row gap-8"
              variants={itemVariants}
            >
              <div className="w-full flex flex-col">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="outline w-full p-2 bg-transparent h-fit text-2xl placeholder:font-light placeholder:text-md outline-home-yellow rounded-md"
                  placeholder="Your name..."
                  variants={inputVariants}
                  animate={errors.name ? "invalid" : "valid"}
                />
                <motion.p
                  variants={errorVariants}
                  initial="hidden"
                  animate={errors.name ? "visible" : "hidden"}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name}
                </motion.p>
              </div>
              <div className="w-full">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline w-full p-2 bg-transparent h-fit text-2xl placeholder:font-light placeholder:text-md outline-home-yellow rounded-md"
                  placeholder="Your email..."
                  variants={inputVariants}
                  animate={errors.email ? "invalid" : "valid"}
                />
                <motion.p
                  variants={errorVariants}
                  initial="hidden"
                  animate={errors.email ? "visible" : "hidden"}
                  className="text-red-500 text-sm mt-1 "
                >
                  {errors.email}
                </motion.p>
              </div>
            </motion.div>
            <motion.input
              variants={itemVariants}
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="outline w-full p-2 bg-transparent h-fit placeholder:font-light placeholder:text-md text-2xl outline-home-yellow rounded-md"
              placeholder="Description..."
            />
            <motion.div variants={itemVariants}>
              <motion.textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                className="outline w-full p-2 placeholder:font-light placeholder:text-md bg-transparent min-h-56 text-2xl outline-home-yellow rounded-md"
                placeholder="Your feedback..."
                variants={inputVariants}
                animate={errors.feedback ? "invalid" : "valid"}
              />
              <motion.p
                variants={errorVariants}
                initial="hidden"
                animate={errors.feedback ? "visible" : "hidden"}
                className="text-red-500 text-sm mt-1"
              >
                {errors.feedback}
              </motion.p>
            </motion.div>
            <motion.button
              variants={itemVariants}
              type="submit"
              className="py-1 bg-home-yellow rounded-md text-lg w-full lg:w-[200px] hover:bg-home-gray hover:border hover:border-solid hover:border-home-yellow h-[50px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit now"}
            </motion.button>
          </form>
        </motion.div>
      </div>
      <motion.div
        variants={itemVariants}
        className="w-full py-8 bg-home-yellow text-center text-xl"
      >
        <p behavior="scroll" direction="right">
          Copyright 2024. All rights reserved
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
