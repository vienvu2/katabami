(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [816],
  {
    6797: function (e, n, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/video",
        function () {
          return s(5934);
        },
      ]);
    },
    5934: function (e, n, s) {
      "use strict";
      s.r(n),
        s.d(n, {
          default: function () {
            return h;
          },
        });
      var i = s(5893),
        c = s(5258),
        a = s(5041),
        t = s(348),
        l = s(1518),
        r = s(3351),
        d = s(2216);
      function h() {
        return (0, i.jsxs)("main", {
          className: "page",
          children: [
            (0, i.jsx)(d.Z, { tab: "video" }),
            (0, i.jsx)(t.Z, {
              left: (0, i.jsx)("h4", { children: "Video" }),
              img: (0, i.jsx)("img", {
                alt: "image",
                src: "/images/banner1.jpeg",
              }),
            }),
            (0, i.jsx)(c.Z, {
              links: [
                { name: "Trang chủ", link: "/" },
                { link: "/video", name: " Video" },
              ],
            }),
            (0, i.jsx)("section", {
              className: "pt-4 pb-4",
              children: (0, i.jsxs)("div", {
                className: "container",
                children: [
                  (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-md-4   col-12 mb-4",
                        children: (0, i.jsx)("h3", {
                          className: "title",
                          children: "Video",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-md-8  col-12 mb-4",
                        children: (0, i.jsx)(a.Z, {
                          tabs: [
                            "Tế b\xe0o gốc",
                            "Vật l\xfd trị liệu",
                            "Tất cả",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "row",
                    children: [1, 2, 3, 4, 5, 6].map((e) =>
                      (0, i.jsx)(
                        "div",
                        {
                          className: "col-md-4 col-12 mb-4",
                          children: (0, i.jsxs)("div", {
                            className: "product-item",
                            children: [
                              (0, i.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=IhqKS1PBovQ&ab_channel=BGMGhibliStudio",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                  alt: "image",
                                  src: "/images/banner1.jpeg",
                                }),
                              }),
                              (0, i.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=IhqKS1PBovQ&ab_channel=BGMGhibliStudio",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                  alt: "image",
                                  src: "/img/video.svg",
                                  className: "icon-video",
                                }),
                              }),
                              (0, i.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=IhqKS1PBovQ&ab_channel=BGMGhibliStudio",
                                target: "_blank",
                                children: (0, i.jsx)("h5", {
                                  children:
                                    "T\xecm hiểu sơ lược về  phương ph\xe1p Tế b\xe0o gốc?",
                                }),
                              }),
                            ],
                          }),
                        },
                        e
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, i.jsx)(l.Z, {}),
            (0, i.jsx)(r.Z, {}),
          ],
        });
      }
      s(1664);
    },
    5258: function (e, n, s) {
      "use strict";
      s.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = s(5893),
        c = s(1664),
        a = s.n(c),
        t = s(7294);
      function l(e) {
        let { links: n = [] } = e;
        return (0, i.jsx)("div", {
          className: "container",
          children: (0, i.jsx)("div", {
            className: "breadcrumb",
            children: n.map((e, s) =>
              (0, i.jsxs)(
                t.Fragment,
                {
                  children: [
                    (0, i.jsx)(a(), {
                      href: e.link,
                      className: "breadcrumb-item",
                      children: e.name,
                    }),
                    s < n.length - 1 && "|",
                  ],
                },
                e.name
              )
            ),
          }),
        });
      }
    },
    5041: function (e, n, s) {
      "use strict";
      s.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = s(5893);
      function c(e) {
        let { tabs: n = [] } = e;
        return (0, i.jsx)("div", {
          className: "tabs",
          children: n.map((e, n) =>
            (0, i.jsx)(
              "div",
              {
                className: "tab " + (0 == n ? "active" : ""),
                children: (0, i.jsx)("span", { children: e }),
              },
              e
            )
          ),
        });
      }
      s(7294);
    },
  },
  function (e) {
    e.O(0, [664, 456, 774, 888, 179], function () {
      return e((e.s = 6797));
    }),
      (_N_E = e.O());
  },
]);
