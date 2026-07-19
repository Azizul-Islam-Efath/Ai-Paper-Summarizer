import {
  c as v,
  a as N,
  r as c,
  j as e,
  m as k,
  L as P,
  b as L,
  z as l,
} from "./index-DZyWQ_ka.js";
import { u as S } from "./index.esm-CtHTzye8.js";
import { I as m } from "./Input-CApCRiSe.js";
import { B as z } from "./Button-aWfo-XhU.js";
const q = () => {
  var o, n;
  const { token: u } = v(),
    x = N(),
    [p, a] = c.useState(!1),
    [h, w] = c.useState(!1),
    {
      register: r,
      handleSubmit: g,
      watch: f,
      formState: { errors: t },
    } = S(),
    j = f("password"),
    y = async (s) => {
      var i, d;
      a(!0);
      try {
        (await L.resetPassword(u, s.password),
          w(!0),
          l.success("Password reset successfully!"),
          setTimeout(() => x("/login"), 2e3));
      } catch (b) {
        l.error(
          ((d = (i = b.response) == null ? void 0 : i.data) == null
            ? void 0
            : d.message) || "Failed to reset password",
        );
      } finally {
        a(!1);
      }
    };
  return e.jsx("div", {
    className: "min-h-screen flex items-center justify-center gradient-bg px-4",
    children: e.jsx(k.div, {
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
                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  }),
                }),
              }),
              e.jsx("h1", {
                className: "text-2xl font-bold text-gray-900 dark:text-white",
                children: "New password",
              }),
              e.jsx("p", {
                className: "text-gray-500 dark:text-gray-400 mt-1",
                children: "Create a new password for your account",
              }),
            ],
          }),
          h
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
                    children: "Password updated!",
                  }),
                  e.jsx("p", {
                    className: "text-gray-500 dark:text-gray-400 mb-4",
                    children: "Redirecting to login...",
                  }),
                  e.jsx(P, {
                    to: "/login",
                    className:
                      "text-primary-600 hover:text-primary-700 font-medium",
                    children: "Go to sign in",
                  }),
                ],
              })
            : e.jsxs("form", {
                onSubmit: g(y),
                className: "space-y-5",
                children: [
                  e.jsx(m, {
                    label: "New Password",
                    type: "password",
                    placeholder: "Min 8 chars, uppercase, lowercase, number",
                    error: (o = t.password) == null ? void 0 : o.message,
                    ...r("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "At least 8 characters" },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                        message: "Needs uppercase, lowercase, and number",
                      },
                    }),
                  }),
                  e.jsx(m, {
                    label: "Confirm Password",
                    type: "password",
                    placeholder: "Repeat password",
                    error: (n = t.confirmPassword) == null ? void 0 : n.message,
                    ...r("confirmPassword", {
                      required: "Please confirm password",
                      validate: (s) => s === j || "Passwords do not match",
                    }),
                  }),
                  e.jsx(z, {
                    type: "submit",
                    isLoading: p,
                    className: "w-full",
                    children: "Reset Password",
                  }),
                ],
              }),
        ],
      }),
    }),
  });
};
export { q as default };
