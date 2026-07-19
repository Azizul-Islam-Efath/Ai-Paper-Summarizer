import {
  u as w,
  a as y,
  r as f,
  j as e,
  m as j,
  L as v,
} from "./index-DZyWQ_ka.js";
import { u as b } from "./index.esm-CtHTzye8.js";
import { I as t } from "./Input-CApCRiSe.js";
import { B as N } from "./Button-aWfo-XhU.js";
const A = () => {
  var i, n, l, m;
  const { register: d } = w(),
    c = y(),
    [u, o] = f.useState(!1),
    {
      register: a,
      handleSubmit: p,
      watch: x,
      formState: { errors: r },
    } = b(),
    h = async (s) => {
      o(!0);
      try {
        (await d(s.name, s.email, s.password), c("/dashboard"));
      } catch {
      } finally {
        o(!1);
      }
    },
    g = x("password");
  return e.jsx("div", {
    className:
      "min-h-screen flex items-center justify-center gradient-bg px-4 py-12",
    children: e.jsx(j.div, {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "w-full max-w-md",
      children: e.jsxs("div", {
        className:
          "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8",
        children: [
          e.jsxs("div", {
            className: "text-center mb-8",
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4",
                children: e.jsx("svg", {
                  className: "w-7 h-7 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
                  }),
                }),
              }),
              e.jsx("h1", {
                className: "text-2xl font-bold text-gray-900 dark:text-white",
                children: "Create account",
              }),
              e.jsx("p", {
                className: "text-gray-500 dark:text-gray-400 mt-1",
                children: "Start summarizing papers today",
              }),
            ],
          }),
          e.jsxs("form", {
            onSubmit: p(h),
            className: "space-y-5",
            children: [
              e.jsx(t, {
                label: "Full Name",
                placeholder: "John Doe",
                error: (i = r.name) == null ? void 0 : i.message,
                ...a("name", {
                  required: "Name is required",
                  minLength: { value: 2, message: "Name too short" },
                }),
              }),
              e.jsx(t, {
                label: "Email",
                type: "email",
                placeholder: "you@example.com",
                error: (n = r.email) == null ? void 0 : n.message,
                ...a("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                }),
              }),
              e.jsx(t, {
                label: "Password",
                type: "password",
                placeholder: "Min 8 chars, uppercase, lowercase, number",
                error: (l = r.password) == null ? void 0 : l.message,
                ...a("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "At least 8 characters" },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message: "Needs uppercase, lowercase, and number",
                  },
                }),
              }),
              e.jsx(t, {
                label: "Confirm Password",
                type: "password",
                placeholder: "Repeat password",
                error: (m = r.confirmPassword) == null ? void 0 : m.message,
                ...a("confirmPassword", {
                  required: "Please confirm password",
                  validate: (s) => s === g || "Passwords do not match",
                }),
              }),
              e.jsx(N, {
                type: "submit",
                isLoading: u,
                className: "w-full",
                children: "Create Account",
              }),
            ],
          }),
          e.jsxs("p", {
            className: "text-center mt-6 text-gray-500 dark:text-gray-400",
            children: [
              "Already have an account?",
              " ",
              e.jsx(v, {
                to: "/login",
                className:
                  "text-primary-600 hover:text-primary-700 font-medium",
                children: "Sign in",
              }),
            ],
          }),
        ],
      }),
    }),
  });
};
export { A as default };
