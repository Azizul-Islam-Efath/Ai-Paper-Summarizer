import {
  u as p,
  a as h,
  r as g,
  j as e,
  m as y,
  L as n,
} from "./index-DZyWQ_ka.js";
import { u as j } from "./index.esm-CtHTzye8.js";
import { I as l } from "./Input-CApCRiSe.js";
import { B as f } from "./Button-aWfo-XhU.js";
const S = () => {
  var t, i;
  const { login: m } = p(),
    c = h(),
    [d, s] = g.useState(!1),
    {
      register: r,
      handleSubmit: x,
      formState: { errors: a },
    } = j(),
    u = async (o) => {
      s(!0);
      try {
        (await m(o.email, o.password), c("/dashboard"));
      } catch {
      } finally {
        s(!1);
      }
    };
  return e.jsx("div", {
    className: "min-h-screen flex items-center justify-center gradient-bg px-4",
    children: e.jsx(y.div, {
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
                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                  }),
                }),
              }),
              e.jsx("h1", {
                className: "text-2xl font-bold text-gray-900 dark:text-white",
                children: "Welcome back",
              }),
              e.jsx("p", {
                className: "text-gray-500 dark:text-gray-400 mt-1",
                children: "Sign in to your account",
              }),
            ],
          }),
          e.jsxs("form", {
            onSubmit: x(u),
            className: "space-y-5",
            children: [
              e.jsx(l, {
                label: "Email",
                type: "email",
                placeholder: "you@example.com",
                error: (t = a.email) == null ? void 0 : t.message,
                ...r("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                }),
              }),
              e.jsx(l, {
                label: "Password",
                type: "password",
                placeholder: "••••••••",
                error: (i = a.password) == null ? void 0 : i.message,
                ...r("password", { required: "Password is required" }),
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("label", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("input", {
                        type: "checkbox",
                        className:
                          "rounded border-gray-300 text-primary-600 focus:ring-primary-500",
                      }),
                      e.jsx("span", {
                        className: "text-sm text-gray-600 dark:text-gray-400",
                        children: "Remember me",
                      }),
                    ],
                  }),
                  e.jsx(n, {
                    to: "/forgot-password",
                    className:
                      "text-sm text-primary-600 hover:text-primary-700 font-medium",
                    children: "Forgot password?",
                  }),
                ],
              }),
              e.jsx(f, {
                type: "submit",
                isLoading: d,
                className: "w-full",
                children: "Sign In",
              }),
            ],
          }),
          e.jsxs("p", {
            className: "text-center mt-6 text-gray-500 dark:text-gray-400",
            children: [
              "Don't have an account?",
              " ",
              e.jsx(n, {
                to: "/register",
                className:
                  "text-primary-600 hover:text-primary-700 font-medium",
                children: "Sign up",
              }),
            ],
          }),
        ],
      }),
    }),
  });
};
export { S as default };
