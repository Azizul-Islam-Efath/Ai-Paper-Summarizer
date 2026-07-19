import { r as d, j as e, d as g, L as r, m as x } from "./index-DZyWQ_ka.js";
import { u as v } from "./usePapers-B01LKt1j.js";
import { E as k } from "./EmptyState-Bdr6fCFb.js";
import "./paperService-BZQaPgim.js";
const c = ({ title: t, value: o, icon: a, color: i }) =>
    e.jsx(x.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "card p-6",
      children: e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className: "text-sm text-gray-500 dark:text-gray-400",
                children: t,
              }),
              e.jsx("p", {
                className:
                  "text-2xl font-bold text-gray-900 dark:text-white mt-1",
                children: o,
              }),
            ],
          }),
          e.jsx("div", {
            className: `w-12 h-12 rounded-xl ${i} flex items-center justify-center`,
            children: a,
          }),
        ],
      }),
    }),
  f = ({ paper: t }) =>
    e.jsx(r, {
      to: `/dashboard/papers/${t.id}`,
      children: e.jsxs(x.div, {
        whileHover: { y: -2 },
        className: "card card-hover p-4 flex items-center gap-4",
        children: [
          e.jsx("div", {
            className: `w-10 h-10 rounded-lg flex items-center justify-center ${t.uploadType === "PDF" ? "bg-red-100 dark:bg-red-900/30 text-red-600" : "bg-blue-100 dark:bg-blue-900/30 text-blue-600"}`,
            children:
              t.uploadType === "PDF"
                ? e.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                    }),
                  })
                : e.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                    }),
                  }),
          }),
          e.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [
              e.jsx("h3", {
                className: "font-medium text-gray-900 dark:text-white truncate",
                children: t.title,
              }),
              e.jsxs("p", {
                className: "text-sm text-gray-500 dark:text-gray-400",
                children: [
                  new Date(t.createdAt).toLocaleDateString(),
                  " · ",
                  t.uploadType,
                ],
              }),
            ],
          }),
          t.summary &&
            e.jsx("span", {
              className:
                "px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium",
              children: "Summarized",
            }),
        ],
      }),
    }),
  L = () => {
    const {
        papers: t,
        loading: o,
        pagination: a,
        fetchPapers: i,
      } = v({ limit: 5 }),
      [n, u] = d.useState({ total: 0, summarized: 0, thisMonth: 0 });
    return (
      d.useEffect(() => {
        i();
      }, []),
      d.useEffect(() => {
        const s = a.total,
          p = t.filter((l) => l.summary).length,
          j = t.filter((l) => {
            const h = new Date(l.createdAt),
              m = new Date();
            return (
              h.getMonth() === m.getMonth() &&
              h.getFullYear() === m.getFullYear()
            );
          }).length;
        u({ total: s, summarized: p, thisMonth: j });
      }, [t, a]),
      o && t.length === 0
        ? e.jsx(g, { fullScreen: !0 })
        : e.jsxs("div", {
            className: "space-y-8",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className:
                      "text-2xl font-bold text-gray-900 dark:text-white",
                    children: "Dashboard",
                  }),
                  e.jsx("p", {
                    className: "text-gray-500 dark:text-gray-400",
                    children: "Welcome back! Here's your research overview.",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
                children: [
                  e.jsx(c, {
                    title: "Total Papers",
                    value: n.total,
                    icon: e.jsx("svg", {
                      className: "w-6 h-6 text-primary-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                      }),
                    }),
                    color: "bg-primary-100 dark:bg-primary-900/30",
                  }),
                  e.jsx(c, {
                    title: "Summarized",
                    value: n.summarized,
                    icon: e.jsx("svg", {
                      className: "w-6 h-6 text-green-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                      }),
                    }),
                    color: "bg-green-100 dark:bg-green-900/30",
                  }),
                  e.jsx(c, {
                    title: "This Month",
                    value: n.thisMonth,
                    icon: e.jsx("svg", {
                      className: "w-6 h-6 text-secondary-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                      }),
                    }),
                    color: "bg-secondary-100 dark:bg-secondary-900/30",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      e.jsx("h2", {
                        className:
                          "text-lg font-semibold text-gray-900 dark:text-white",
                        children: "Recent Papers",
                      }),
                      e.jsx(r, {
                        to: "/dashboard/papers",
                        className:
                          "text-sm text-primary-600 hover:text-primary-700 font-medium",
                        children: "View all",
                      }),
                    ],
                  }),
                  t.length === 0
                    ? e.jsx(k, {
                        title: "No papers yet",
                        description:
                          "Upload your first research paper to get started with AI summarization.",
                        action: () =>
                          (window.location.href = "/dashboard/upload"),
                        actionLabel: "Upload Paper",
                      })
                    : e.jsx("div", {
                        className: "space-y-3",
                        children: t.map((s) => e.jsx(f, { paper: s }, s.id)),
                      }),
                ],
              }),
              e.jsxs("div", {
                className: "card p-6",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-lg font-semibold text-gray-900 dark:text-white mb-4",
                    children: "Quick Actions",
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-3",
                    children: [
                      e.jsxs(r, {
                        to: "/dashboard/upload",
                        className: "btn-primary",
                        children: [
                          e.jsx("svg", {
                            className: "w-5 h-5 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: e.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
                            }),
                          }),
                          "Upload Paper",
                        ],
                      }),
                      e.jsxs(r, {
                        to: "/dashboard/papers",
                        className: "btn-secondary",
                        children: [
                          e.jsx("svg", {
                            className: "w-5 h-5 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: e.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                            }),
                          }),
                          "Browse Papers",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
    );
  };
export { L as default };
