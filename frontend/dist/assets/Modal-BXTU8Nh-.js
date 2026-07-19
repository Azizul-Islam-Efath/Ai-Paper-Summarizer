import { r as n, j as e, A as c, m as t } from "./index-DZyWQ_ka.js";
const x = ({
  isOpen: a,
  onClose: i,
  title: s,
  children: o,
  size: r = "md",
}) => {
  n.useEffect(
    () => (
      a
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset"),
      () => {
        document.body.style.overflow = "unset";
      }
    ),
    [a],
  );
  const l = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };
  return e.jsx(c, {
    children:
      a &&
      e.jsxs(t.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        onClick: i,
        children: [
          e.jsx("div", {
            className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          }),
          e.jsxs(t.div, {
            initial: { opacity: 0, scale: 0.95, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 20 },
            transition: { type: "spring", duration: 0.5 },
            className: `relative w-full ${l[r]} bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden`,
            onClick: (d) => d.stopPropagation(),
            children: [
              s &&
                e.jsx("div", {
                  className:
                    "px-6 py-4 border-b border-gray-100 dark:border-gray-700",
                  children: e.jsx("h3", {
                    className:
                      "text-lg font-semibold text-gray-900 dark:text-white",
                    children: s,
                  }),
                }),
              e.jsx("div", { className: "p-6", children: o }),
            ],
          }),
        ],
      }),
  });
};
export { x as M };
