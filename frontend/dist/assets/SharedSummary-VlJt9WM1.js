import {
  e as r,
  c as y,
  r as i,
  j as t,
  d as u,
  m as g,
  L as h,
} from "./index-DZyWQ_ka.js";
import { E as b } from "./EmptyState-Bdr6fCFb.js";
const f = {
    generate: (a) => r.post("/summaries/generate", { paperId: a }),
    regenerate: (a) => r.post("/summaries/regenerate", { paperId: a }),
    getSummaries: (a) => r.get("/summaries", { params: a }),
    getSummary: (a) => r.get(`/summaries/${a}`),
    deleteSummary: (a) => r.delete(`/summaries/${a}`),
    share: (a) => r.post(`/summaries/${a}/share`),
    getShared: (a) => r.get(`/summaries/share/${a}`),
    exportPdf: (a) =>
      r.get(`/summaries/${a}/export/pdf`, { responseType: "blob" }),
    exportDocx: (a) =>
      r.get(`/summaries/${a}/export/docx`, { responseType: "blob" }),
  },
  S = () => {
    const { token: a } = y(),
      [e, l] = i.useState(null),
      [c, d] = i.useState(!0),
      [o, x] = i.useState(null);
    i.useEffect(() => {
      p();
    }, [a]);
    const p = async () => {
      var s, n;
      try {
        const m = await f.getShared(a);
        l(m.data.data);
      } catch (m) {
        x(
          ((n = (s = m.response) == null ? void 0 : s.data) == null
            ? void 0
            : n.message) || "Link expired or invalid",
        );
      } finally {
        d(!1);
      }
    };
    return c
      ? t.jsx(u, { fullScreen: !0 })
      : o
        ? t.jsx("div", {
            className: "min-h-screen flex items-center justify-center px-4",
            children: t.jsx(b, {
              title: "Link Expired",
              description: o,
              action: () => (window.location.href = "/"),
              actionLabel: "Go Home",
            }),
          })
        : e
          ? t.jsx("div", {
              className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4",
              children: t.jsx("div", {
                className: "max-w-4xl mx-auto",
                children: t.jsxs(g.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  className: "card p-8 mb-6",
                  children: [
                    t.jsxs("div", {
                      className: "flex items-center justify-between mb-6",
                      children: [
                        t.jsxs("div", {
                          children: [
                            t.jsx("h1", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: e.paper.title,
                            }),
                            t.jsxs("p", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-400",
                              children: [
                                "Shared summary · ",
                                new Date(
                                  e.paper.createdAt,
                                ).toLocaleDateString(),
                              ],
                            }),
                          ],
                        }),
                        t.jsx(h, {
                          to: "/",
                          className: "btn-primary text-sm",
                          children: "Try PaperSummarizer",
                        }),
                      ],
                    }),
                    e.year &&
                      t.jsxs("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: [
                          t.jsxs("span", {
                            className:
                              "px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium",
                            children: ["Year: ", e.year],
                          }),
                          e.accuracy &&
                            t.jsxs("span", {
                              className:
                                "px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium",
                              children: ["Accuracy: ", e.accuracy],
                            }),
                        ],
                      }),
                    t.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        [
                          {
                            title: "Abstract Summary",
                            content: e.abstractSummary,
                          },
                          {
                            title: "Research Problem",
                            content: e.researchProblem,
                          },
                          { title: "Methodology", content: e.methodology },
                          {
                            title: "Key Contributions",
                            content: e.keyContributions,
                          },
                          { title: "Novelty", content: e.novelty },
                          { title: "Applications", content: e.applications },
                          { title: "Advantages", content: e.advantages },
                          { title: "Disadvantages", content: e.disadvantages },
                          { title: "Limitations", content: e.limitations },
                          { title: "Future Work", content: e.futureWork },
                          { title: "Conclusion", content: e.conclusion },
                        ].map((s) =>
                          t.jsxs(
                            "div",
                            {
                              className:
                                "border-b border-gray-100 dark:border-gray-700 pb-6 last:border-0",
                              children: [
                                t.jsx("h3", {
                                  className:
                                    "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                  children: s.title,
                                }),
                                t.jsx("p", {
                                  className:
                                    "text-gray-600 dark:text-gray-300 leading-relaxed",
                                  children: s.content || "Not specified",
                                }),
                              ],
                            },
                            s.title,
                          ),
                        ),
                        e.keywords &&
                          e.keywords.length > 0 &&
                          t.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: e.keywords.map((s, n) =>
                              t.jsx(
                                "span",
                                {
                                  className:
                                    "px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium",
                                  children: s,
                                },
                                n,
                              ),
                            ),
                          }),
                        e.citation &&
                          t.jsx("div", {
                            className:
                              "bg-gray-50 dark:bg-gray-900 rounded-xl p-4 font-mono text-sm text-gray-700 dark:text-gray-300",
                            children: e.citation,
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          : null;
  };
export { S as default };
