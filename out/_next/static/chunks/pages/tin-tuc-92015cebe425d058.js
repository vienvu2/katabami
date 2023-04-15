(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [81],
  {
    7461: function (n, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/tin-tuc",
        function () {
          return i(6297);
        },
      ]);
    },
    6297: function (n, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return x;
          },
        });
      var c = i(5893),
        s = i(5258),
        a = i(5041),
        t = i(348),
        r = i(1518),
        l = i(3351),
        h = i(2216),
        d = i(1664),
        m = i.n(d);
      function x() {
        return (0, c.jsxs)("main", {
          className: "page",
          children: [
            (0, c.jsx)(h.Z, { tab: "tin-tuc" }),
            (0, c.jsx)(t.Z, {
              left: (0, c.jsx)("h4", { children: "Tin tức" }),
              img: (0, c.jsx)("img", {
                alt: "image",
                src: "/images/banner3.jpeg",
              }),
            }),
            (0, c.jsx)(s.Z, {
              links: [
                { name: "Trang chủ", link: "/" },
                { link: "/tin-tuc", name: "Tin tức" },
              ],
            }),
            (0, c.jsx)("section", {
              className: "pt-4 pb-4",
              children: (0, c.jsxs)("div", {
                className: "container",
                children: [
                  (0, c.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, c.jsx)("div", {
                        className: "col-md-4  col-12 mb-4",
                        children: (0, c.jsx)("h3", {
                          className: "title",
                          children: "Tin tức",
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className: "col-md-8  col-12 mb-4",
                        children: (0, c.jsx)(a.Z, {
                          tabs: [
                            "Tin tức nổi bật",
                            "Khuyến m\xe3i & Sự kiện",
                            "C\xe2u chuyện kh\xe1ch h\xe0ng",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className: "row",
                    children: [1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 11, 12].map((n) =>
                      (0, c.jsx)(
                        "div",
                        {
                          className: "col-md-3 col-12 mb-4",
                          children: (0, c.jsxs)("div", {
                            className: "product-item",
                            children: [
                              (0, c.jsx)(m(), {
                                href: "/tin-tuc/te-bao-goc-la-gi",
                                children: (0, c.jsx)("img", {
                                  alt: "image",
                                  src: "/images/banner1.jpeg",
                                }),
                              }),
                              (0, c.jsx)(m(), {
                                href: "/tin-tuc/te-bao-goc-la-gi",
                                children: (0, c.jsx)("h5", {
                                  children:
                                    "Bệnh vi\xeam khớp ng\xe0y c\xe0ng trẻ h\xf3a, giải ph\xe1p n\xe0o điều trị sớm?",
                                }),
                              }),
                              (0, c.jsx)("p", {
                                children:
                                  "Thực tế, cứ 5 người trưởng th\xe0nh th\xec c\xf3 1 người bị vi\xeam khớp (...)",
                              }),
                              (0, c.jsx)("p", {
                                className: "date",
                                children: "03 | 10 | 2021",
                              }),
                            ],
                          }),
                        },
                        n
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, c.jsx)(r.Z, {}),
            (0, c.jsx)(l.Z, {}),
          ],
        });
      }
    },
    5258: function (n, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var c = i(5893),
        s = i(1664),
        a = i.n(s),
        t = i(7294);
      function r(n) {
        let { links: e = [] } = n;
        return (0, c.jsx)("div", {
          className: "container",
          children: (0, c.jsx)("div", {
            className: "breadcrumb",
            children: e.map((n, i) =>
              (0, c.jsxs)(
                t.Fragment,
                {
                  children: [
                    (0, c.jsx)(a(), {
                      href: n.link,
                      className: "breadcrumb-item",
                      children: n.name,
                    }),
                    i < e.length - 1 && "|",
                  ],
                },
                n.name
              )
            ),
          }),
        });
      }
    },
    5041: function (n, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      var c = i(5893);
      function s(n) {
        let { tabs: e = [] } = n;
        return (0, c.jsx)("div", {
          className: "tabs",
          children: e.map((n, e) =>
            (0, c.jsx)(
              "div",
              {
                className: "tab " + (0 == e ? "active" : ""),
                children: (0, c.jsx)("span", { children: n }),
              },
              n
            )
          ),
        });
      }
      i(7294);
    },
  },
  function (n) {
    n.O(0, [664, 456, 774, 888, 179], function () {
      return n((n.s = 7461));
    }),
      (_N_E = n.O());
  },
]);
