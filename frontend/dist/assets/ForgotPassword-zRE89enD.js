import {
  r as i,
  j as e,
  m as y,
  L as n,
  b as j,
  z as o,
} from "./index-DZyWQ_ka.js";
import { u as f } from "./index.esm-CtHTzye8.js";
import { I as k } from "./Input-CApCRiSe.js";
import { B as b } from "./Button-aWfo-XhU.js";
const S = () => {
  var s;
  const [l, t] = i.useState(!1),
    [m, d] = i.useState(!1),
    {
      register: c,
      handleSubmit: x,
      formState: { errors: u },
    } = f(),
    h = async (g) => {
      var r, a;
      t(!0);
      try {
        (await j.forgotPassword(g.email), d(!0), o.success("Reset link sent!"));
      } catch (p) {
        o.error(
          ((a = (r = p.response) == null ? void 0 : r.data) == null
            ? void 0
            : a.message) || "Failed to send reset link",
        );
      } finally {
        t(!1);
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
                    d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
                  }),
                }),
              }),
              e.jsx("h1", {
                className: "text-2xl font-bold text-gray-900 dark:text-white",
                children: "Reset password",
              }),
              e.jsx("p", {
                className: "text-gray-500 dark:text-gray-400 mt-1",
                children: "Enter your email to receive a reset link",
              }),
            ],
          }),
          m
            ? e.jsxs("div", {
                className: "text-center py-8",
                children: [
                  e.jsx("div", {
                    className:
                      "w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4",
                    children: e.jsx("svg", {
                      className: "w-8 h-8 text-green-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7",
                      }),
                    }),
                  }),
                  e.jsx("h3", {
                    className:
                      "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                    children: "Check your email",
                  }),
                  e.jsx("p", {
                    className: "text-gray-500 dark:text-gray-400 mb-6",
                    children: "We've sent a password reset link to your email.",
                  }),
                  e.jsx(n, {
                    to: "/login",
                    className:
                      "text-primary-600 hover:text-primary-700 font-medium",
                    children: "Back to sign in",
                  }),
                ],
              })
            : e.jsxs("form", {
                onSubmit: x(h),
                className: "space-y-5",
                children: [
                  e.jsx(k, {
                    label: "Email",
                    type: "email",
                    placeholder: "you@example.com",
                    error: (s = u.email) == null ? void 0 : s.message,
                    ...c("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email",
                      },
                    }),
                  }),
                  e.jsx(b, {
                    type: "submit",
                    isLoading: l,
                    className: "w-full",
                    children: "Send Reset Link",
                  }),
                ],
              }),
          e.jsxs("p", {
            className: "text-center mt-6 text-gray-500 dark:text-gray-400",
            children: [
              "Remember your password?",
              " ",
              e.jsx(n, {
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
export { S as default };
