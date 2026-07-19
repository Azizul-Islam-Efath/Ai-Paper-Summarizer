import { r as c, j as e } from "./index-DZyWQ_ka.js";
const i = c.forwardRef(
  (
    { label: s, error: t, helperText: a, className: r = "", rows: x = 4, ...m },
    d,
  ) =>
    e.jsxs("div", {
      className: `w-full ${r}`,
      children: [
        s &&
          e.jsx("label", {
            className:
              "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5",
            children: s,
          }),
        e.jsx("textarea", {
          ref: d,
          rows: x,
          className: `input-field resize-none ${t ? "border-red-500 focus:ring-red-500" : ""}`,
          ...m,
        }),
        t &&
          e.jsx("p", { className: "mt-1 text-sm text-red-500", children: t }),
        a &&
          !t &&
          e.jsx("p", {
            className: "mt-1 text-sm text-gray-500 dark:text-gray-400",
            children: a,
          }),
      ],
    }),
);
i.displayName = "TextArea";
export { i as T };
