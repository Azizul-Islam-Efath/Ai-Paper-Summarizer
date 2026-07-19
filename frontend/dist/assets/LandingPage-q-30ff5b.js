import { u as c, j as e, m as t, L as i } from "./index-DZyWQ_ka.js";
const d = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { duration: 0.6 },
  },
  n = { animate: { transition: { staggerChildren: 0.1 } } },
  s = ({ icon: r, title: a, description: o }) =>
    e.jsxs(t.div, {
      variants: d,
      className: "card card-hover p-6",
      children: [
        e.jsx("div", {
          className:
            "w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4",
          children: r,
        }),
        e.jsx("h3", {
          className: "text-lg font-semibold text-gray-900 dark:text-white mb-2",
          children: a,
        }),
        e.jsx("p", {
          className: "text-gray-500 dark:text-gray-400 text-sm leading-relaxed",
          children: o,
        }),
      ],
    }),
  l = ({ number: r, title: a, description: o }) =>
    e.jsxs(t.div, {
      variants: d,
      className: "relative flex flex-col items-center text-center",
      children: [
        e.jsx("div", {
          className:
            "w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-glow",
          children: r,
        }),
        e.jsx("h3", {
          className: "text-lg font-semibold text-gray-900 dark:text-white mb-2",
          children: a,
        }),
        e.jsx("p", {
          className: "text-gray-500 dark:text-gray-400 text-sm max-w-xs",
          children: o,
        }),
      ],
    }),
  m = () => {
    const { isAuthenticated: r } = c();
    return e.jsxs("div", {
      className: "overflow-hidden",
      children: [
        e.jsxs("section", {
          className:
            "relative min-h-screen flex items-center justify-center gradient-bg pt-16",
          children: [
            e.jsxs("div", {
              className: "absolute inset-0 overflow-hidden",
              children: [
                e.jsx("div", {
                  className:
                    "absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl",
                }),
                e.jsx("div", {
                  className:
                    "absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",
              children: [
                e.jsxs(t.div, {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  children: [
                    e.jsxs("div", {
                      className:
                        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8",
                      children: [
                        e.jsx("span", {
                          className:
                            "w-2 h-2 rounded-full bg-green-400 animate-pulse",
                        }),
                        "Powered by Claude AI",
                      ],
                    }),
                    e.jsxs("h1", {
                      className:
                        "text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight",
                      children: [
                        "Research Papers,",
                        e.jsx("br", {}),
                        e.jsx("span", {
                          className: "text-primary-200",
                          children: "Simplified.",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed",
                      children:
                        "Upload any research paper and get structured, AI-generated summaries in seconds. Extract key insights, methodologies, and citations automatically.",
                    }),
                    e.jsx("div", {
                      className:
                        "flex flex-col sm:flex-row items-center justify-center gap-4",
                      children: r
                        ? e.jsx(i, {
                            to: "/dashboard",
                            className:
                              "px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg",
                            children: "Go to Dashboard",
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(i, {
                                to: "/register",
                                className:
                                  "px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg",
                                children: "Get Started Free",
                              }),
                              e.jsx(i, {
                                to: "/login",
                                className:
                                  "px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20",
                                children: "Sign In",
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                e.jsx(t.div, {
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.8 },
                  className: "mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto",
                  children: [
                    { value: "10K+", label: "Papers Summarized" },
                    { value: "98%", label: "Accuracy Rate" },
                    { value: "<30s", label: "Avg. Processing" },
                  ].map((a) =>
                    e.jsxs(
                      "div",
                      {
                        className: "text-center",
                        children: [
                          e.jsx("div", {
                            className: "text-3xl font-bold text-white",
                            children: a.value,
                          }),
                          e.jsx("div", {
                            className: "text-sm text-white/60 mt-1",
                            children: a.label,
                          }),
                        ],
                      },
                      a.label,
                    ),
                  ),
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent",
            }),
          ],
        }),
        e.jsx("section", {
          className: "py-24 bg-gray-50 dark:bg-gray-900",
          children: e.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              e.jsxs(t.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                className: "text-center mb-16",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4",
                    children: "Everything you need for research",
                  }),
                  e.jsx("p", {
                    className:
                      "text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto",
                    children:
                      "Powerful features designed to help researchers, students, and academics work smarter.",
                  }),
                ],
              }),
              e.jsxs(t.div, {
                variants: n,
                initial: "initial",
                whileInView: "animate",
                viewport: { once: !0 },
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: [
                  e.jsx(s, {
                    icon: e.jsx("svg", {
                      className: "w-6 h-6 text-primary-600",
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
                    title: "PDF & Text Upload",
                    description:
                      "Upload PDFs or paste text directly. Our system extracts and processes content automatically.",
                  }),
                  e.jsx(s, {
                    icon: e.jsx("svg", {
                      className: "w-6 h-6 text-primary-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M13 10V3L4 14h7v7l9-11h-7z",
                      }),
                    }),
                    title: "AI-Powered Summaries",
                    description:
                      "Claude AI generates structured summaries with methodology, contributions, and key findings.",
                  }),
                  e.jsx(s, {
                    icon: e.jsx("svg", {
                      className: "w-6 h-6 text-primary-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0L8 8m4-4v12",
                      }),
                    }),
                    title: "Export & Share",
                    description:
                      "Export summaries as PDF or DOCX. Generate shareable links for collaboration.",
                  }),
                  e.jsx(s, {
                    icon: e.jsx("svg", {
                      className: "w-6 h-6 text-primary-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                      }),
                    }),
                    title: "Smart Search",
                    description:
                      "Search through all your papers and summaries with full-text search capabilities.",
                  }),
                  e.jsx(s, {
                    icon: e.jsx("svg", {
                      className: "w-6 h-6 text-primary-600",
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
                    title: "Favorites & Organization",
                    description:
                      "Star important papers, organize your library, and keep track of your research.",
                  }),
                  e.jsx(s, {
                    icon: e.jsx("svg", {
                      className: "w-6 h-6 text-primary-600",
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
                    title: "Secure & Private",
                    description:
                      "Your papers are encrypted and private. JWT authentication with refresh token rotation.",
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("section", {
          className: "py-24 bg-white dark:bg-gray-800",
          children: e.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              e.jsxs(t.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                className: "text-center mb-16",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4",
                    children: "How it works",
                  }),
                  e.jsx("p", {
                    className:
                      "text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto",
                    children:
                      "Three simple steps to transform your research workflow.",
                  }),
                ],
              }),
              e.jsxs(t.div, {
                variants: n,
                initial: "initial",
                whileInView: "animate",
                viewport: { once: !0 },
                className: "grid grid-cols-1 md:grid-cols-3 gap-12",
                children: [
                  e.jsx(l, {
                    number: "1",
                    title: "Upload Your Paper",
                    description:
                      "Drag and drop a PDF or paste text directly into the upload area.",
                  }),
                  e.jsx(l, {
                    number: "2",
                    title: "AI Processing",
                    description:
                      "Our AI analyzes the paper and extracts structured insights in seconds.",
                  }),
                  e.jsx(l, {
                    number: "3",
                    title: "Review & Export",
                    description:
                      "Browse the summary, export to PDF/DOCX, or share with collaborators.",
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("section", {
          className: "py-24 gradient-bg",
          children: e.jsx("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: e.jsxs(t.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              children: [
                e.jsx("h2", {
                  className: "text-3xl sm:text-4xl font-bold text-white mb-6",
                  children: "Ready to simplify your research?",
                }),
                e.jsx("p", {
                  className: "text-xl text-white/80 mb-10 max-w-2xl mx-auto",
                  children:
                    "Join thousands of researchers who save hours every week with AI-powered paper summaries.",
                }),
                e.jsx(i, {
                  to: r ? "/dashboard" : "/register",
                  className:
                    "inline-flex px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg",
                  children: r ? "Go to Dashboard" : "Start for Free",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  };
export { m as default };
