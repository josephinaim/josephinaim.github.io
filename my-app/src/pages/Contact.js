import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const Contact = ({ successMessage, setSuccessMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_fp3j41m",
        "template_ypacbyj",
        data,
        "wyDLYFDz9zc4wzuHr"
      );
      setSuccessMessage("Thank you for reaching out! I will respond as soon as I can.");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" {...register("name")} />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" {...register("email")} />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" {...register("message")} />
          {errors.message && <p className="text-danger">{errors.message.message}</p>}
        </div>

        <button type="submit" className="btn btn-dark-purple" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
