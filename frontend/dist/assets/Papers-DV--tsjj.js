import { j as e, m as u, r as p, L as h, d as j } from "./index-DZyWQ_ka.js";
import { u as f } from "./usePapers-B01LKt1j.js";
import { S as v } from "./SearchBar-BAo6HqGB.js";
import { B as g } from "./Button-aWfo-XhU.js";
import { E as b } from "./EmptyState-Bdr6fCFb.js";
import { M as k } from "./Modal-BXTU8Nh-.js";
import "./paperService-BZQaPgim.js";
const N = ({
    page: r,
    totalPages: l,
    hasNext: i,
    hasPrev: o,
    onPageChange: s,
  }) => {
    if (l <= 1) return null;
    const n = () => {
      const a = [];
      let d = Math.max(1, r - Math.floor(2.5)),
        m = Math.min(l, d + 5 - 1);
      m - d + 1 < 5 && (d = Math.max(1, m - 5 + 1));
      for (let c = d; c <= m; c++) a.push(c);
      return a;
    };
    return e.jsxs("div", {
      className: "flex items-center justify-center gap-2 mt-8",
      children: [
        e.jsx(g, {
          variant: "ghost",
          size: "sm",
          onClick: () => s(r - 1),
          disabled: !o,
          children: "Previous",
        }),
        n().map((a) =>
          e.jsx(
            u.button,
            {
              whileTap: { scale: 0.95 },
              onClick: () => s(a),
              className: `w-10 h-10 rounded-xl font-medium transition-colors ${a === r ? "bg-primary-600 text-white" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`,
              children: a,
            },
            a,
          ),
        ),
        e.jsx(g, {
          variant: "ghost",
          size: "sm",
          onClick: () => s(r + 1),
          disabled: !i,
          children: "Next",
        }),
      ],
    });
  },
  w = ({ paper: r, onDelete: l, onToggleFavorite: i }) => {
    var n;
    const [o, s] = p.useState(!1);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(u.div, {
          layout: !0,
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, scale: 0.95 },
          className: "card card-hover p-5 group",
          children: [
            e.jsxs("div", {
              className: "flex items-start justify-between mb-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: `w-10 h-10 rounded-lg flex items-center justify-center ${r.uploadType === "PDF" ? "bg-red-100 dark:bg-red-900/30 text-red-600" : "bg-blue-100 dark:bg-blue-900/30 text-blue-600"}`,
                      children:
                        r.uploadType === "PDF"
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
                      children: [
                        e.jsx("h3", {
                          className:
                            "font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors",
                          children: r.title,
                        }),
                        e.jsxs("p", {
                          className: "text-sm text-gray-500 dark:text-gray-400",
                          children: [
                            new Date(r.createdAt).toLocaleDateString(),
                            " · ",
                            r.uploadType,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => i(r.id),
                  className:
                    "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                  children: e.jsx("svg", {
                    className: `w-5 h-5 ${r.isFavorite ? "text-yellow-400 fill-current" : "text-gray-400"}`,
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                    }),
                  }),
                }),
              ],
            }),
            r.summary &&
              e.jsxs("div", {
                className: "mb-4",
                children: [
                  e.jsx("p", {
                    className:
                      "text-sm text-gray-600 dark:text-gray-300 line-clamp-2",
                    children: r.summary.abstractSummary,
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-2 mt-2",
                    children: [
                      (n = r.summary.keywords) == null
                        ? void 0
                        : n
                            .slice(0, 3)
                            .map((a, x) =>
                              e.jsx(
                                "span",
                                {
                                  className:
                                    "px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium",
                                  children: a,
                                },
                                x,
                              ),
                            ),
                      r.summary.year &&
                        e.jsx("span", {
                          className:
                            "px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs",
                          children: r.summary.year,
                        }),
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              className:
                "flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-700",
              children: [
                e.jsx(h, {
                  to: `/dashboard/papers/${r.id}`,
                  className:
                    "flex-1 text-center py-2 rounded-lg text-sm font-medium text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors",
                  children: "View Details",
                }),
                r.summary
                  ? e.jsx(h, {
                      to: `/dashboard/summaries/${r.summary.id}`,
                      className:
                        "flex-1 text-center py-2 rounded-lg text-sm font-medium text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors",
                      children: "View Summary",
                    })
                  : e.jsx(h, {
                      to: `/dashboard/papers/${r.id}`,
                      className:
                        "flex-1 text-center py-2 rounded-lg text-sm font-medium text-secondary-600 hover:bg-secondary-50 dark:hover:bg-secondary-900/20 transition-colors",
                      children: "Generate Summary",
                    }),
                e.jsx("button", {
                  onClick: () => s(!0),
                  className:
                    "p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",
                  children: e.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsxs(k, {
          isOpen: o,
          onClose: () => s(!1),
          title: "Delete Paper",
          children: [
            e.jsxs("p", {
              className: "text-gray-600 dark:text-gray-300 mb-6",
              children: [
                'Are you sure you want to delete "',
                r.title,
                '"? This action cannot be undone and will also delete any associated summary.',
              ],
            }),
            e.jsxs("div", {
              className: "flex gap-3 justify-end",
              children: [
                e.jsx(g, {
                  variant: "ghost",
                  onClick: () => s(!1),
                  children: "Cancel",
                }),
                e.jsx(g, {
                  variant: "danger",
                  onClick: () => {
                    (l(r.id), s(!1));
                  },
                  children: "Delete",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  F = () => {
    const {
        papers: r,
        loading: l,
        pagination: i,
        setParams: o,
        deletePaper: s,
        toggleFavorite: n,
      } = f(),
      [a, x] = p.useState("all"),
      d = (t) => {
        o((y) => ({ ...y, search: t, page: 1 }));
      },
      m = (t) => {
        o((y) => ({ ...y, page: t }));
      },
      c = a === "favorites" ? r.filter((t) => t.isFavorite) : r;
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className:
            "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  className: "text-2xl font-bold text-gray-900 dark:text-white",
                  children: "My Papers",
                }),
                e.jsx("p", {
                  className: "text-gray-500 dark:text-gray-400",
                  children: "Manage and organize your research papers.",
                }),
              ],
            }),
            e.jsxs(h, {
              to: "/dashboard/upload",
              className: "btn-primary self-start",
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
                    d: "M12 4v16m8-8H4",
                  }),
                }),
                "Upload Paper",
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4",
          children: [
            e.jsx(v, {
              onSearch: d,
              placeholder: "Search papers...",
              className: "flex-1",
            }),
            e.jsx("div", {
              className: "flex gap-2",
              children: ["all", "favorites"].map((t) =>
                e.jsx(
                  "button",
                  {
                    onClick: () => x(t),
                    className: `px-4 py-2 rounded-xl font-medium text-sm capitalize transition-all ${a === t ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
                    children: t,
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
        l && r.length === 0
          ? e.jsx("div", {
              className: "flex justify-center py-12",
              children: e.jsx(j, { size: "lg" }),
            })
          : c.length === 0
            ? e.jsx(b, {
                title: a === "favorites" ? "No favorites yet" : "No papers yet",
                description:
                  a === "favorites"
                    ? "Star papers to see them here."
                    : "Upload your first research paper to get started.",
                action: () => (window.location.href = "/dashboard/upload"),
                actionLabel: "Upload Paper",
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsx(u.div, {
                    layout: !0,
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                    children: c.map((t) =>
                      e.jsx(
                        w,
                        { paper: t, onDelete: s, onToggleFavorite: n },
                        t.id,
                      ),
                    ),
                  }),
                  e.jsx(N, {
                    page: i.page,
                    totalPages: i.totalPages,
                    hasNext: i.hasNext,
                    hasPrev: i.hasPrev,
                    onPageChange: m,
                  }),
                ],
              }),
      ],
    });
  };
export { F as default };
