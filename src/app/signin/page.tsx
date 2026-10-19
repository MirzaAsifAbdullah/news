"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import React from "react";

const Signin = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Signed in successfully");
      redirect("/");
    }

    if (error) {
      toast.error(error.message || "Invalid email or password");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset w-full sm:w-xs bg-base-200 border-base-300 rounded-box border p-4 sm:p-6">
          <legend className="fieldset-legend">
            Sign In
          </legend>

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
            Sign In
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Signin;
