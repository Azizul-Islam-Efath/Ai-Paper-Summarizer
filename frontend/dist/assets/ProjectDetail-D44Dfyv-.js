import {
  c as y,
  r as i,
  j as e,
  d as j,
  L as t,
  z as d,
} from "./index-DZyWQ_ka.js";
import { p as l } from "./projectService-DGqb61Ez.js";
import { E as u } from "./EmptyState-Bdr6fCFb.js";
import { B as c } from "./Button-aWfo-XhU.js";
const v = () => {
  const { id: n } = y(),
    [s, x] = i.useState(null),
    [a, m] = i.useState(null),
    [p, h] = i.useState(!0),
    g = async () => {
      try {
        const [r, o] = await Promise.all([l.getProject(n), l.getStats(n)]);
        (x(r.data.data), m(o.data.data));
      } catch {
        d.error("Failed to load project details");
      } finally {
        h(!1);
      }
    };
  return (
    i.useEffect(() => {
      g();
    }, [n]),
    p
      ? e.jsx(j, { fullScreen: !0 })
      : s
        ? e.jsxs("div", {
            className: "space-y-8",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("h1", {
                            className:
                              "text-3xl font-bold text-gray-900 dark:text-white",
                            children: s.name,
                          }),
                          e.jsx("span", {
                            className:
                              "px-2.5 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-semibold uppercase",
                            children: s.status.toLowerCase(),
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-gray-500 dark:text-gray-400 mt-2 max-w-3xl",
                        children: s.description || "No description provided.",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: e.jsxs(t, {
                      to: `/dashboard/upload?projectId=${s.id}`,
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
                        "Upload Papers",
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                  e.jsxs("div", {
                    className: "card p-6 flex flex-col justify-between",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase",
                        children: "Uploaded Papers",
                      }),
                      e.jsx("span", {
                        className:
                          "text-3xl font-bold text-gray-900 dark:text-white mt-2",
                        children: (a == null ? void 0 : a.paperCount) || 0,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "card p-6 flex flex-col justify-between",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase",
                        children: "Summarized Papers",
                      }),
                      e.jsx("span", {
                        className:
                          "text-3xl font-bold text-green-600 dark:text-green-400 mt-2",
                        children: (a == null ? void 0 : a.summarizedCount) || 0,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "card p-6 flex flex-col justify-between",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase",
                        children: "AI Synthesis Drafts",
                      }),
                      e.jsx("span", {
                        className:
                          "text-3xl font-bold text-primary-600 dark:text-primary-400 mt-2",
                        children: (a == null ? void 0 : a.generatedCount) || 0,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "card p-6 flex flex-col justify-between",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase",
                        children: "Status",
                      }),
                      e.jsx("span", {
                        className: `text-sm font-bold mt-2 ${a != null && a.readyForComparison ? "text-green-500" : "text-yellow-500"}`,
                        children:
                          a != null && a.readyForComparison
                            ? "Synthesis Ready"
                            : "Upload min. 2 papers",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                  e.jsxs("div", {
                    className: "lg:col-span-2 space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex justify-between items-center",
                        children: [
                          e.jsx("h2", {
                            className:
                              "text-xl font-bold text-gray-900 dark:text-white",
                            children: "Workspace Papers",
                          }),
                          e.jsx("span", {
                            className: "text-xs text-gray-400 font-medium",
                            children: "Max 20 PDFs",
                          }),
                        ],
                      }),
                      s.papers.length === 0
                        ? e.jsxs("div", {
                            className:
                              "card p-8 text-center bg-white dark:bg-gray-800",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-gray-500 dark:text-gray-400 mb-4",
                                children:
                                  "No papers uploaded to this project yet.",
                              }),
                              e.jsx(t, {
                                to: `/dashboard/upload?projectId=${s.id}`,
                                className: "btn-secondary text-sm",
                                children: "Upload first paper",
                              }),
                            ],
                          })
                        : e.jsx("div", {
                            className: "space-y-3",
                            children: s.papers.map((r) => {
                              var o;
                              return e.jsxs(
                                "div",
                                {
                                  className:
                                    "card p-4 flex items-center justify-between",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-4 min-w-0",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/20 text-red-600 flex items-center justify-center flex-shrink-0",
                                          children: e.jsx("svg", {
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
                                          }),
                                        }),
                                        e.jsxs("div", {
                                          className: "min-w-0",
                                          children: [
                                            e.jsx("h3", {
                                              className:
                                                "font-semibold text-gray-900 dark:text-white truncate",
                                              children: r.title,
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-xs text-gray-400 mt-0.5",
                                              children: [
                                                (o = r.metadata) != null &&
                                                o.year
                                                  ? `${r.metadata.year} · `
                                                  : "",
                                                "Status: ",
                                                e.jsx("span", {
                                                  className:
                                                    "font-medium text-primary-600",
                                                  children: r.status,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        e.jsx(t, {
                                          to: `/dashboard/papers/${r.id}`,
                                          className:
                                            "px-3 py-1.5 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-xs font-semibold",
                                          children: "Details",
                                        }),
                                        r.summary &&
                                          e.jsx(t, {
                                            to: `/dashboard/summaries/${r.summary.id}`,
                                            className:
                                              "px-3 py-1.5 bg-green-50 dark:bg-green-950/30 hover:bg-green-100 text-green-700 dark:text-green-400 rounded-lg text-xs font-semibold",
                                            children: "Summary",
                                          }),
                                      ],
                                    }),
                                  ],
                                },
                                r.id,
                              );
                            }),
                          }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      e.jsx("h2", {
                        className:
                          "text-xl font-bold text-gray-900 dark:text-white",
                        children: "Workspace Synthesis",
                      }),
                      e.jsxs("div", {
                        className:
                          "card p-6 bg-white dark:bg-gray-800 space-y-4",
                        children: [
                          e.jsxs("h3", {
                            className:
                              "font-bold text-gray-900 dark:text-white flex items-center gap-2",
                            children: [
                              e.jsx("svg", {
                                className: "w-5 h-5 text-primary-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: e.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                }),
                              }),
                              "AI Comparison Engine",
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-gray-500 dark:text-gray-400 text-sm",
                            children:
                              "Run comparative literature analysis to discover methodology matches, contradictions, datasets, and common findings.",
                          }),
                          s.comparisons && s.comparisons.length > 0
                            ? e.jsx(t, {
                                to: `/dashboard/comparison/${s.comparisons[0].id}`,
                                className:
                                  "w-full text-center block py-2 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-semibold rounded-xl text-sm transition-colors",
                                children: "View Latest Comparison",
                              })
                            : e.jsx(c, {
                                variant: "outline",
                                className: "w-full",
                                disabled: !(a != null && a.readyForComparison),
                                onClick: async () => {
                                  try {
                                    (d.loading(
                                      "Starting comparison engine...",
                                      { id: "compare" },
                                    ),
                                      d.success(
                                        "Comparison started successfully!",
                                        { id: "compare" },
                                      ));
                                  } catch {
                                    d.error("Failed to trigger comparison", {
                                      id: "compare",
                                    });
                                  }
                                },
                                children: "Trigger AI Comparison",
                              }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "card p-6 bg-white dark:bg-gray-800 space-y-4",
                        children: [
                          e.jsxs("h3", {
                            className:
                              "font-bold text-gray-900 dark:text-white flex items-center gap-2",
                            children: [
                              e.jsx("svg", {
                                className: "w-5 h-5 text-secondary-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: e.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                                }),
                              }),
                              "AI Gap Detector",
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-gray-500 dark:text-gray-400 text-sm",
                            children:
                              "Deep dive into the source papers to detect unsolved research challenges, dataset weaknesses, and potential novelty directions.",
                          }),
                          s.researchGaps && s.researchGaps.length > 0
                            ? e.jsx(t, {
                                to: `/dashboard/gap-analysis/${s.researchGaps[0].id}`,
                                className:
                                  "w-full text-center block py-2 bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 font-semibold rounded-xl text-sm transition-colors",
                                children: "View Research Gaps",
                              })
                            : e.jsx(c, {
                                variant: "outline",
                                className: "w-full",
                                disabled: !(a != null && a.readyToGenerate),
                                onClick: async () => {
                                  d.success("Gap analysis started!");
                                },
                                children: "Detect Gaps & Gaps",
                              }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "card p-6 bg-white dark:bg-gray-800 space-y-4 border border-primary-200 dark:border-primary-900",
                        children: [
                          e.jsxs("h3", {
                            className:
                              "font-bold text-gray-900 dark:text-white flex items-center gap-2",
                            children: [
                              e.jsx("svg", {
                                className: "w-5 h-5 text-purple-600",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: e.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                }),
                              }),
                              "AI Paper Generator",
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-gray-500 dark:text-gray-400 text-sm",
                            children:
                              "Synthesize all uploaded evidence to write a completely new academic paper addressing gaps and featuring IEEE, Elsevier, or Springer formatting.",
                          }),
                          e.jsx(t, {
                            to: `/dashboard/generator?projectId=${s.id}`,
                            className:
                              "btn-primary w-full text-center justify-center",
                            children: "Generate Synthesis Draft",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : e.jsx(u, {
            title: "Project Not Found",
            description:
              "The project you are looking for does not exist or you do not have permission to view it.",
            action: () => (window.location.href = "/dashboard/projects"),
            actionLabel: "Back to Projects",
          })
  );
};
export { v as default };
