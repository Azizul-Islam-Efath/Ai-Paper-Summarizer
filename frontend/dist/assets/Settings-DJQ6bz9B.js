import {
  h as m,
  u as h,
  r as n,
  j as e,
  m as t,
  z as u,
} from "./index-DZyWQ_ka.js";
import { B as i } from "./Button-aWfo-XhU.js";
import { M as y } from "./Modal-BXTU8Nh-.js";
const j = () => {
  const { isDark: r, toggleTheme: l } = m(),
    { logout: d } = h(),
    [c, a] = n.useState(!1),
    [s, o] = n.useState(!0),
    x = async () => {
      (a(!1), u.success("Account deleted"), d());
    };
  return e.jsxs("div", {
    className: "max-w-2xl mx-auto space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "text-2xl font-bold text-gray-900 dark:text-white",
            children: "Settings",
          }),
          e.jsx("p", {
            className: "text-gray-500 dark:text-gray-400",
            children: "Customize your experience and manage preferences.",
          }),
        ],
      }),
      e.jsxs(t.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "card p-6",
        children: [
          e.jsx("h3", {
            className:
              "text-lg font-semibold text-gray-900 dark:text-white mb-4",
            children: "Appearance",
          }),
          e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "font-medium text-gray-900 dark:text-white",
                    children: "Dark Mode",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400",
                    children: "Toggle between light and dark themes",
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: l,
                className: `relative w-14 h-8 rounded-full transition-colors ${r ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-600"}`,
                children: e.jsx(t.div, {
                  className:
                    "absolute top-1 w-6 h-6 rounded-full bg-white shadow-md",
                  animate: { left: r ? "28px" : "4px" },
                  transition: { type: "spring", stiffness: 500, damping: 30 },
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs(t.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "card p-6",
        children: [
          e.jsx("h3", {
            className:
              "text-lg font-semibold text-gray-900 dark:text-white mb-4",
            children: "Notifications",
          }),
          e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "font-medium text-gray-900 dark:text-white",
                    children: "Email Notifications",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400",
                    children: "Receive updates about your summaries",
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: () => o(!s),
                className: `relative w-14 h-8 rounded-full transition-colors ${s ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-600"}`,
                children: e.jsx(t.div, {
                  className:
                    "absolute top-1 w-6 h-6 rounded-full bg-white shadow-md",
                  animate: { left: s ? "28px" : "4px" },
                  transition: { type: "spring", stiffness: 500, damping: 30 },
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs(t.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        className: "card p-6 border-red-200 dark:border-red-900/50",
        children: [
          e.jsx("h3", {
            className:
              "text-lg font-semibold text-red-600 dark:text-red-400 mb-4",
            children: "Danger Zone",
          }),
          e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "font-medium text-gray-900 dark:text-white",
                    children: "Delete Account",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400",
                    children: "Permanently delete your account and all data",
                  }),
                ],
              }),
              e.jsx(i, {
                variant: "danger",
                size: "sm",
                onClick: () => a(!0),
                children: "Delete Account",
              }),
            ],
          }),
        ],
      }),
      e.jsxs(y, {
        isOpen: c,
        onClose: () => a(!1),
        title: "Delete Account",
        children: [
          e.jsx("p", {
            className: "text-gray-600 dark:text-gray-300 mb-4",
            children:
              "This action cannot be undone. All your papers, summaries, and account data will be permanently deleted.",
          }),
          e.jsxs("div", {
            className: "flex gap-3 justify-end",
            children: [
              e.jsx(i, {
                variant: "ghost",
                onClick: () => a(!1),
                children: "Cancel",
              }),
              e.jsx(i, {
                variant: "danger",
                onClick: x,
                children: "Delete Forever",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export { j as default };
