import { r as s, z as o } from "./index-DZyWQ_ka.js";
import { p as i } from "./paperService-BZQaPgim.js";
const S = (l = {}) => {
  const [d, c] = s.useState([]),
    [g, n] = s.useState(!1),
    [P, f] = s.useState({
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 0,
      hasNext: !1,
      hasPrev: !1,
    }),
    [p, u] = s.useState(l),
    r = s.useCallback(async () => {
      var t, a;
      n(!0);
      try {
        const e = await i.getPapers(p);
        (c(e.data.data.papers), f(e.data.data.pagination));
      } catch (e) {
        o.error(
          ((a = (t = e.response) == null ? void 0 : t.data) == null
            ? void 0
            : a.message) || "Failed to fetch papers",
        );
      } finally {
        n(!1);
      }
    }, [p]);
  return (
    s.useEffect(() => {
      r();
    }, [r]),
    {
      papers: d,
      loading: g,
      pagination: P,
      params: p,
      setParams: u,
      fetchPapers: r,
      deletePaper: async (t) => {
        var a, e;
        try {
          (await i.deletePaper(t), o.success("Paper deleted"), r());
        } catch (m) {
          o.error(
            ((e = (a = m.response) == null ? void 0 : a.data) == null
              ? void 0
              : e.message) || "Failed to delete paper",
          );
        }
      },
      toggleFavorite: async (t) => {
        try {
          (await i.toggleFavorite(t),
            c((a) =>
              a.map((e) =>
                e.id === t ? { ...e, isFavorite: !e.isFavorite } : e,
              ),
            ));
        } catch {
          o.error("Failed to update favorite");
        }
      },
    }
  );
};
export { S as u };
