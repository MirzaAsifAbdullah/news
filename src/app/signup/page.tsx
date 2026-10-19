
"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import React from "react";

const Signup = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {name: string, email:string, image:string, password:string};

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
      toast.success("Account created successfully");
      redirect("/");
    }

    if (error) {
      console.log(error);
      toast.error(error.message || "Sign up failed");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset w-full sm:w-xs bg-base-200 border-base-300 rounded-box border p-4 sm:p-6">
          <legend className="fieldset-legend">
            Sign Up
          </legend>

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <button
            type="submit"
            className="btn btn-neutral mt-4"
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
