import { j as r, m as c } from "./index-DZyWQ_ka.js";
const x = ({
  children: a,
  variant: t = "primary",
  size: o = "md",
  isLoading: e = !1,
  disabled: s = !1,
  className: i = "",
  onClick: n,
  type: d = "button",
  ...g
}) => {
  const l =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed",
    m = {
      primary:
        "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 focus:ring-primary-300 shadow-lg shadow-primary-500/25",
      secondary:
        "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-200",
      outline:
        "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-300",
      ghost:
        "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-200",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    },
    y = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
  return r.jsx(c.button, {
    whileTap: { scale: 0.98 },
    type: d,
    onClick: n,
    disabled: s || e,
    className: `${l} ${m[t]} ${y[o]} ${i}`,
    ...g,
    children: e
      ? r.jsxs(r.Fragment, {
          children: [
            r.jsxs("svg", {
              className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                r.jsx("circle", {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4",
                }),
                r.jsx("path", {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                }),
              ],
            }),
            "Loading...",
          ],
        })
      : a,
  });
};
export { x as B };
