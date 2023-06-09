(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [849],
  {
    4795: function (n, i, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gioi-thieu/doi-ngu-bac-sy",
        function () {
          return e(1310);
        },
      ]);
    },
    1310: function (n, i, e) {
      "use strict";
      e.r(i),
        e.d(i, {
          default: function () {
            return m;
          },
        });
      var c = e(5893),
        s = e(348),
        a = e(1518),
        t = e(3351),
        h = e(2216),
        l = e(5258),
        r = e(1664),
        x = e.n(r);
      function m() {
        return (0, c.jsxs)("main", {
          className: "page",
          children: [
            (0, c.jsx)(h.Z, { tab: "gioi-thieu" }),
            (0, c.jsx)(s.Z, {
              left: (0, c.jsx)("h4", { children: "Giới thiệu" }),
              img: (0, c.jsx)("img", {
                alt: "image",
                src: "/images/banner2.jpeg",
              }),
            }),
            (0, c.jsx)(l.Z, {
              links: [
                { name: "Trang chủ", link: "/" },
                { link: "/gioi-thieu", name: " Giới thiệu" },
                {
                  link: "/gioi-thieu/doi-ngu-bac-sy",
                  name: "Đội ngũ b\xe1c sĩ",
                },
              ],
            }),
            (0, c.jsx)("section", {
              className: "intro pt-4 pb-4",
              children: (0, c.jsxs)("div", {
                className: "container",
                children: [
                  (0, c.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, c.jsx)("div", {
                        className: "col-md-4 col-12 mb-4",
                        children: (0, c.jsx)("h3", {
                          className: "title",
                          children: "Đội ngũ b\xe1c sĩ",
                        }),
                      }),
                      (0, c.jsxs)("div", {
                        className: "col-md-8 col-12  mb-4",
                        children: [
                          (0, c.jsx)("p", {
                            className: "color-second bold mb-3",
                            children: "B\xe1c sĩ đầu ng\xe0nh",
                          }),
                          (0, c.jsx)("p", {
                            children:
                              "Trung t\xe2m Katabami Clinic quy tụ đội ngũ chuy\xean gia, b\xe1c sĩ, dược sĩ v\xe0 điều dưỡng c\xf3 tr\xecnh độ chuy\xean m\xf4n cao, tận t\xe2m với mỗi bệnh nh\xe2n. V\xec ch\xfang t\xf4i hiểu rằng, niềm hạnh ph\xfac v\xe0 sự h\xe0i l\xf2ng của người bệnh v\xe0 gia đ\xecnh người bệnh l\xe0 sứ mệnh v\xe0 muc ti\xeau hoạt động của ch\xfang t\xf4i.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className: "row",
                    children: [1, 2, 3, 4, 5, 6].map((n) =>
                      (0, c.jsx)(
                        "div",
                        {
                          className: "col-md-4 col-12 mb-4",
                          children: (0, c.jsxs)("div", {
                            className: "product-item",
                            children: [
                              (0, c.jsx)(x(), {
                                href: "/gioi-thieu/doi-ngu-bac-sy/bac-sy-tran-tuan",
                                children: (0, c.jsx)("img", {
                                  alt: "image",
                                  src: "/images/doctor-2.jpeg",
                                }),
                              }),
                              (0, c.jsx)(x(), {
                                href: "/gioi-thieu/doi-ngu-bac-sy/bac-sy-tran-tuan",
                                children: (0, c.jsx)("h5", {
                                  children: "BS TRAN TUAN",
                                }),
                              }),
                              (0, c.jsx)("p", {
                                className: "mb-1 bold text-small",
                                children:
                                  " Gi\xe1m đốc trung t\xe2m / Chuy\xean gia Chiropractic",
                              }),
                              (0, c.jsx)("div", { className: "line" }),
                              (0, c.jsx)("p", {
                                className: "text-light",
                                children:
                                  "PGS.TS.BS Phạm Nhật Thanh l\xe0 một trong những chuy\xean gia đầu ng\xe0nh trong lĩnh vực (...)",
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
            (0, c.jsx)(a.Z, {}),
            (0, c.jsx)(t.Z, {}),
          ],
        });
      }
    },
    5258: function (n, i, e) {
      "use strict";
      e.d(i, {
        Z: function () {
          return h;
        },
      });
      var c = e(5893),
        s = e(1664),
        a = e.n(s),
        t = e(7294);
      function h(n) {
        let { links: i = [] } = n;
        return (0, c.jsx)("div", {
          className: "container",
          children: (0, c.jsx)("div", {
            className: "breadcrumb",
            children: i.map((n, e) =>
              (0, c.jsxs)(
                t.Fragment,
                {
                  children: [
                    (0, c.jsx)(a(), {
                      href: n.link,
                      className: "breadcrumb-item",
                      children: n.name,
                    }),
                    e < i.length - 1 && "|",
                  ],
                },
                n.name
              )
            ),
          }),
        });
      }
    },
  },
  function (n) {
    n.O(0, [664, 456, 774, 888, 179], function () {
      return n((n.s = 4795));
    }),
      (_N_E = n.O());
  },
]);
