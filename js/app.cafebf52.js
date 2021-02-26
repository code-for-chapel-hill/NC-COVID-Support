(function (e) {
  function t(t) {
    for (
      var s, n, o = t[0], l = t[1], c = t[2], d = 0, p = [];
      d < o.length;
      d++
    )
      (n = o[d]),
        Object.prototype.hasOwnProperty.call(i, n) && i[n] && p.push(i[n][0]),
        (i[n] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
    u && u(t);
    while (p.length) p.shift()();
    return r.push.apply(r, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], s = !0, o = 1; o < a.length; o++) {
        var l = a[o];
        0 !== i[l] && (s = !1);
      }
      s && (r.splice(t--, 1), (e = n((n.s = a[0]))));
    }
    return e;
  }
  var s = {},
    i = { app: 0 },
    r = [];
  function n(t) {
    if (s[t]) return s[t].exports;
    var a = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = s),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          n.d(
            a,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var u = l;
  r.push([0, "chunk-vendors"]), a();
})({
  0: function (e, t, a) {
    e.exports = a("56d7");
  },
  "0423": function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"閉じる","contact":"お問い合わせ","contactus":{"email":"Eメール","info":"このページは {1}の {0} を利用しています。ご不明な点がございましたら、 {2}までメールでお問い合わせください。"},"datahead":"データ共有に関する注意","dataprivacy":"NC COVIDサポートに関する情報は、ボランティアによって公開されたWebソースから収集されたか、事業主/リソースプロバイダーによって入力されたものです。データは、COVID-19パンデミックの際に、公共、地方企業、政府パートナー、および非営利団体を支援するために提供されます。 NC COVIDサポートの明示的な許可なしに、データを商業ベンチャーまたはその他の目的に使用しないでください。","devhelp":{"addbusiness":"ビジネスを追加","addinfo":"オンラインフォームを使用して、 {0} または {1}にアクセスしてください。","ambassadorinfo":"ノースカロライナ全体のカバレッジの拡大にご協力ください。アンバサダーは地方自治体や企業団体と協力して、NC COVIDサポートをコミュニティに提供します。開始するためのツールとリソースについては、 {0} までメールでお問い合わせください。","becomeambassador":"コミュニティアンバサダーになる","conduct":"行動規範","devnote":"開発者-GitHubで {0} と {1} を見つけてください。","dupsite":"または、自分の州のサイトを複製することもできます。","info":"これはオープンソースプロジェクトであり、他のコミュニティと共有して拡大するために構築されています。","source":"ソースコード","support":"近所の人や地元の企業をサポートしてください-私たちが成長するのを助けてください！","updatebusiness":"既存のエントリを更新する"},"getinvolved":"参加する","info":"リソースのデータベースには、次の組織が収集した情報が役立ちます。","linktext":"私たちに関しては","orgs":{"bureau":"チャペルヒル/オレンジカウンティビジターズビューロー","cfa":"アメリカのコード","chb":"チャペルヒル旅団","localistnc":"#LocalListNC","partnership":"チャペルヒルダウンタウンパートナーシップ","pittsboro-siler":"ピッツボロサイラーシティコンベンション＆ビジターズビューロー"},"partners":"情報源","title":"このサイトについて"},"call":"コール","category":{"childcare":"育児","family":"家族の食事の準備","farm":"農場および農民市場","food_bev":"専門食料品","grocery":"食料品","meal":"無料の食事","pet":"ペット用品","pharmacy":"薬局","restaurant":"レストラン|レストラン","school":"学校給食"},"dayofweek":{"any":"どれか","friday":"金曜日","monday":"月曜","saturday":"土曜日","sunday":"日曜日","thursday":"木曜日","tuesday":"火曜日","wednesday":"水曜日"},"getdirections":"","getdiections_short":"","label":{"address":"住所","allweek":"1週間中","backtolist":"リストに戻る","close":"閉じる","closed":"閉まっている","closed-on":"休業","closed-today":"本日休業","closedonday":"定休日（当日）","curbside":"カーブサイドピックアップ","delivery":"配達","details-last-updated":"詳細最終更新","discountmedical":"医療従事者割引|医療従事者割引","discounts":"","drivethru":"ドライブスルー","email":"Eメール","email_lowercase":"Eメール","farmersmarket":"ファーマーズマーケット|ファーマーズマーケット","farmpick-up":"農場出迎え","freegroceries":"無料の食料品店|無料の食料品店","freemeals":"無料の食事場所|無料の食事場所","freeproduce":"無料の商品の場所|無料の商品の場所","instructions":"説明書","locationhelplinktext":"もっと詳しく知る","mapkey":"マップキー","mealpublic":"食事は一般に公開されています","mealstudent":"学生のための食事","mustpreorder":"予約が必要","normalhours":"通常の時間","notes":"ノート","offers":"オファー","open":"開いた","openinghours":"営業時間","orderonline":"オンラインで注文して支払う","phone":"電話","selectacategory":"カテゴリーを選ぶ...","selected":"選択済み","seniorhours":"シニアアワー","specialhours":"シニアショッピング時間","useyourlocation":"現在地を使用","website":"ウェブサイト"},"languages":{"ar":"アラビア語","en":"英語","es":"スペイン語","fr":"フランス語","ja":"日本人","ko":"韓国語","ms":"ビルマ語","zh":"簡体字中国語"},"locationhelp":"","sidebar":{"close-panel":"検索パネルを閉じる","info-about-us":"現在、このサイトはノースカロライナ州チャタム郡とオレンジ郡をサポートしています。と","info-end-text":"、範囲を拡大できます。","info-link-text":"あなたの助け","open-panel":"検索パネルを開く","shopsafe":"安全なショップをどうぞ！","sixfeet":"ショッピングをするときは6フィート離してください。","stayhome":"病気のときは家にいてください。","washhands":"手をよく洗ってください。","what-do-you-need":"あなたは何が必要ですか？","when-do-you-need-it":"いつそれが必要ですか？"},"title":"{0} COVIDのサポート","website":"ウェブサイト"}'
    );
  },
  "05b2": function (e, t, a) {
    "use strict";
    a("35da");
  },
  "0d1c": function (e, t, a) {
    "use strict";
    a("783a");
  },
  2011: function (e, t, a) {},
  2060: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"Tutup","contact":"Hubungi Kami","contactus":{"email":"E-mel","info":"Halaman ini dikuasakan oleh {0} dari {1}. Untuk pertanyaan, sila hubungi kami melalui e-mel di {2}."},"datahead":"CATATAN PADA PERKONGSIAN DATA","dataprivacy":"Maklumat mengenai NC COVID Support telah dikumpulkan dari sumber web awam oleh sukarelawan atau dimasukkan oleh pemilik perniagaan / penyedia sumber. Data disediakan untuk membantu orang ramai, perniagaan tempatan, rakan kongsi pemerintah, dan bukan keuntungan semasa pandemik COVID-19. Data tersebut tidak boleh digunakan untuk usaha komersial atau tujuan lain tanpa kebenaran jelas dari NC COVID Support.","devhelp":{"addbusiness":"tambah perniagaan","addinfo":"Gunakan borang dalam talian kami untuk {0} atau {1}.","ambassadorinfo":"Bantu kami mengembangkan liputan di seluruh North Carolina. Duta akan bekerjasama dengan kerajaan tempatan dan persatuan perniagaan untuk membawa NC COVID Support kepada komuniti mereka. Kirimkan kami di {0} untuk alat dan sumber untuk bermula.","becomeambassador":"Menjadi duta komuniti","conduct":"Tatakelakuan","devnote":"Pemaju - cari {0} dan {1} pada GitHub.","dupsite":"Sebagai alternatif, anda boleh menduplikasi tapak untuk keadaan anda.","info":"Ini adalah projek sumber terbuka, dibina untuk berkongsi dan mengembangkan kepada komuniti lain.","source":"kod sumber","support":"Menyokong jiran anda dan perniagaan tempatan - membantu kami berkembang!","updatebusiness":"kemas kini kemasukan yang sedia ada"},"getinvolved":"Melibatkan diri","info":"Pangkalan data kami mendapat manfaat daripada maklumat yang dikumpulkan oleh organisasi-organisasi ini:","linktext":"Tentang kita","orgs":{"bureau":"Chapel Hill / Biro Pelawat Orange County","cfa":"Kod untuk Amerika","chb":"Briged Hill Chapel","localistnc":"#LocalListNC","partnership":"Perkongsian Downtown Chapel Hill","pittsboro-siler":"Biro Konvensyen & Pelawat Pittsboro-Siler City"},"partners":"Sumber Maklumat","title":"Mengenai laman web ini"},"call":"Panggil","category":{"childcare":"Penjagaan kanak-kanak","family":"Makanan keluarga yang disediakan","farm":"Pasaran Ladang & Petani","food_bev":"Makanan & minuman khas","grocery":"Groceries","meal":"Makanan percuma","pet":"Bekalan Haiwan Peliharaan","pharmacy":"Farmasi","restaurant":"Restoran","school":"Makanan sekolah"},"dayofweek":{"any":"Sebarang","friday":"Jumaat","monday":"Isnin","saturday":"Sabtu","sunday":"Ahad","thursday":"Khamis","tuesday":"Selasa","wednesday":"Rabu"},"getdirections":"","getdiections_short":"","label":{"address":"Alamat","allweek":"Sepanjang minggu","backtolist":"Kembali kepada senarai","close":"Tutup","closed":"Tertutup","closed-on":"Tutup pada","closed-today":"Tutup Hari Ini","closedonday":"Ditutup (pada hari yang dipilih semasa)","curbside":"Pengambilan Curbside","delivery":"penghantaran","details-last-updated":"Butiran terakhir dikemas kini","discountmedical":"Diskaun pekerja perubatan | diskaun pekerja perubatan |","discounts":"","drivethru":"Pandu lalu","email":"E-mel","email_lowercase":"E-mel","farmersmarket":"Pasaran Peladang | Pasaran Peladang","farmpick-up":"Pengambilan di ladang","freegroceries":"Lokasi runcit percuma | Lokasi runcit percuma","freemeals":"Lokasi makanan percuma | Lokasi makan percuma","freeproduce":"Lokasi menghasilkan percuma | Lokasi menghasilkan percuma","instructions":"Arahan","locationhelplinktext":"Ketahui lebih lanjut","mapkey":"Kunci Peta","mealpublic":"Makanan dibuka untuk orang ramai","mealstudent":"Makanan untuk pelajar","mustpreorder":"Mesti prapesan","normalhours":"Jam biasa","notes":"Nota","offers":"Tawaran","open":"Buka","openinghours":"Waktu pembukaan","orderonline":"Perintah & bayar dalam talian","phone":"Telefon","selectacategory":"Pilih kategori...","selected":"Dipilih","seniorhours":"Jam kanan","specialhours":"Waktu membeli-belah kanan","useyourlocation":"Gunakan lokasi anda","website":"Laman web"},"languages":{"ar":"Bahasa Arab","en":"Bahasa Inggeris","es":"Sepanyol","fr":"Perancis","ja":"Jepun","ko":"Korea","ms":"Burma","zh":"Bahasa Cina Ringkas"},"locationhelp":"","sidebar":{"close-panel":"Tutup panel carian","info-about-us":"Pada masa ini, laman web ini menyokong Chatham County dan Orange County, NC. Dengan","info-end-text":", kami boleh mengembangkan liputan kami.","info-link-text":"pertolongan anda","open-panel":"Buka panel carian","shopsafe":"Tolong, selamatkan!","sixfeet":"Tinggal 6 kaki apabila membeli-belah.","stayhome":"Sekiranya anda sakit, tinggal di rumah.","washhands":"Cuci tangan anda dengan kerap.","what-do-you-need":"Apa yang anda perlukan?","when-do-you-need-it":"Bilakah anda memerlukannya?"},"title":"{0} COVID Support","website":"Laman web"}'
    );
  },
  "26f3": function (e, t, a) {},
  2975: function (e, t, a) {
    "use strict";
    a("8fde");
  },
  "30d3": function (e, t, a) {
    "use strict";
    a("d39f");
  },
  "30de": function (e, t, a) {},
  3504: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"关","contact":"联系我们","contactus":{"email":"电子邮件","info":"该页面由 {1}的 {0} 驱动。如有疑问，请通过 {2}的电子邮件与我们联系。"},"datahead":"关于数据共享的注意事项","dataprivacy":"关于NC COVID支持的信息已由志愿者从公共Web来源收集，或由企业所有者/资源提供者输入。提供这些数据是为了在COVID-19大流行期间为公众，当地企业，政府合作伙伴和非营利组织提供帮助。未经NC COVID支持的明确许可，不得将数据用于商业活动或其他目的。","devhelp":{"addbusiness":"添加业务","addinfo":"使用我们的在线表格填写 {0} 或 {1}。","ambassadorinfo":"帮助我们扩大在北卡罗来纳州的覆盖范围。大使将与当地政府和商业协会合作，为社区提供NC COVID支持。给我们发电子邮件，地址为 {0} ，以获取入门所需的工具和资源。","becomeambassador":"成为社区大使","conduct":"行为守则","devnote":"开发人员-在GitHub上找到我们的 {0} 和 {1} 。","dupsite":"或者，您可以为您的州复制一个站点。","info":"这是一个开源项目，旨在与其他社区共享和扩展。","source":"源代码","support":"支持您的邻居和当地企业-帮助我们发展！","updatebusiness":"更新现有条目"},"getinvolved":"参与其中","info":"我们的资源数据库受益于这些组织收集的信息：","linktext":"关于我们","orgs":{"bureau":"教堂山/橙县游客管理局","cfa":"美国法典","chb":"教堂山大队","localistnc":"#LocalListNC","partnership":"教堂山市中心合作伙伴","pittsboro-siler":"皮茨伯勒-西勒市会展和旅游局"},"partners":"信息来源","title":"关于本网站"},"call":"称呼","category":{"childcare":"育儿","family":"家庭准备饭","farm":"农场与农贸市场","food_bev":"特色食品和饮料","grocery":"杂货","meal":"免费餐","pet":"宠物用品","pharmacy":"药房","restaurant":"餐厅","school":"学校餐"},"dayofweek":{"any":"任何","friday":"星期️五","monday":"星期一","saturday":"星期️六","sunday":"星期️日","thursday":"星期️四","tuesday":"星期二","wednesday":"星期三"},"getdirections":"","getdiections_short":"","label":{"address":"地址","allweek":"整个星期","backtolist":"返回目录","close":"关","closed":"关闭","closed-on":"封闭于","closed-today":"今天休息","closedonday":"休馆（当前选定日期）","curbside":"路边捡拾","delivery":"交货","details-last-updated":"详细信息最近更新","discountmedical":"医务人员折扣|医务人员折扣","discounts":"","drivethru":"得来速","email":"电子邮件","email_lowercase":"电子邮件","farmersmarket":"农贸市场|农贸市场","farmpick-up":"农场接送","freegroceries":"免费杂货店|免费杂货店","freemeals":"免费用餐地点|免费用餐地点","freeproduce":"免费产品位置|免费产品位置","instructions":"说明","locationhelplinktext":"学到更多","mapkey":"地图键","mealpublic":"餐点向公众开放","mealstudent":"给学生的饭菜","mustpreorder":"必须预订","normalhours":"正常营业时间","notes":"笔记","offers":"优惠","open":"打开","openinghours":"营业时间","orderonline":"在线订购和付款","phone":"电话","selectacategory":"选择一个类别...","selected":"选","seniorhours":"高级时间","specialhours":"高级购物时间","useyourlocation":"使用你的位置","website":"网站"},"languages":{"ar":"阿拉伯","en":"英语","es":"西班牙语","fr":"法国","ja":"日本","ko":"朝鲜的","ms":"缅甸语","zh":"简体中文"},"locationhelp":"","sidebar":{"close-panel":"关闭搜索面板","info-about-us":"当前，此站点支持查塔姆县和北卡罗来纳州奥兰治县。用","info-end-text":"，我们可以扩大覆盖范围。","info-link-text":"你的帮助","open-panel":"打开搜索面板","shopsafe":"请安全！","sixfeet":"购物时，相隔6英尺。","stayhome":"如果您生病了，请待在家里。","washhands":"经常洗手。","what-do-you-need":"你需要什么？","when-do-you-need-it":"您什么时候需要它？"},"title":"{0} COVID支持","website":"网站"}'
    );
  },
  "35da": function (e, t, a) {},
  "49f8": function (e, t, a) {
    var s = {
      "./ar.json": "af08",
      "./en.json": "edd4",
      "./es.json": "a306",
      "./fr.json": "f693",
      "./ja.json": "0423",
      "./ko.json": "dd11",
      "./ms.json": "2060",
      "./rw.json": "4ef3",
      "./zh.json": "3504",
    };
    function i(e) {
      var t = r(e);
      return a(t);
    }
    function r(e) {
      if (!a.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return s[e];
    }
    (i.keys = function () {
      return Object.keys(s);
    }),
      (i.resolve = r),
      (e.exports = i),
      (i.id = "49f8");
  },
  "4ef3": function (e) {
    e.exports = JSON.parse("{}");
  },
  5452: function (e, t, a) {
    "use strict";
    a("af35");
  },
  5636: function (e, t, a) {
    "use strict";
    a("30de");
  },
  "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var s = a("2b0e"),
      i = a("6907"),
      r = a("5f5b"),
      n =
        (a("4160"),
        a("d3b7"),
        a("ac1f"),
        a("466d"),
        a("159b"),
        a("ddb0"),
        a("a925"));
    function o() {
      var e = a("49f8"),
        t = {};
      return (
        e.keys().forEach(function (a) {
          var s = a.match(/([A-Za-z0-9-_]+)\./i);
          if (s && s.length > 1) {
            var i = s[1];
            t[i] = e(a);
          }
        }),
        t
      );
    }
    s["default"].use(n["a"]);
    var l = new n["a"]({ locale: "en", fallbackLocale: "en", messages: o() }),
      c = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          { staticClass: "home" },
          [
            a(
              "app-header",
              {
                attrs: {
                  language: e.language.name,
                  socialMedia: e.socialMediaico,
                },
                on: { "language-selected": e.changeLanguage },
              },
              [a("theme-header")],
              1
            ),
            a("mobile-search-filters", {
              attrs: { need: e.need, warning: e.warningMobile },
              on: { "need-selected": e.needSelected },
            }),
            a("about-us-modal"),
            e.entries
              ? a(
                  "div",
                  {
                    staticClass: "d-flex",
                    class: { toggled: e.isFilterOpen },
                    attrs: { id: "wrapper" },
                  },
                  [
                    a("sidebar", {
                      attrs: {
                        isFilterOpen: e.isFilterOpen,
                        need: e.need,
                        day: e.day,
                        filteredMarkers: e.filteredMarkers,
                        highlightFilteredMarkers: e.highlightFilteredMarkers,
                        location: e.locationData,
                        "show-list": e.showList,
                        warning: e.warning,
                      },
                      on: {
                        "location-selected": e.locationSelected,
                        toggle: function (t) {
                          e.isFilterOpen = !e.isFilterOpen;
                        },
                        "need-selected": e.needSelected,
                        "update-show-list": e.updateShowList,
                        "close-details": e.closeDetails,
                      },
                    }),
                    a(
                      "div",
                      { attrs: { id: "page-content-wrapper" } },
                      [
                        a("highlights", {
                          class: { toggled: e.isFilterOpen },
                          attrs: {
                            need: e.need,
                            filteredMarkers: e.highlightFilteredMarkers,
                            highlightFilters: e.highlightFilters,
                          },
                          on: { "box-selected": e.boxSelected },
                        }),
                        a("resource-map", {
                          class: { noselection: "none" == e.need },
                          attrs: {
                            filteredMarkers: e.filteredMarkers,
                            location: e.locationData,
                            attribution: e.attribution,
                            mapUrl: e.mapUrl,
                            centroid: e.centroid,
                          },
                          on: {
                            "location-selected": e.locationSelected,
                            "location-unselected": e.locationUnselected,
                            bounds: e.boundsUpdated,
                            center: e.centerUpdated,
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : e._e(),
          ],
          1
        );
      },
      u = [],
      d =
        (a("4de4"),
        a("caad"),
        a("d81d"),
        a("b0c0"),
        a("2532"),
        a("96cf"),
        a("1da1")),
      p = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "b-navbar",
          {
            attrs: {
              toggleable: "lg",
              type: "dark",
              variant: "primary",
              id: "topnav",
            },
          },
          [
            a("b-navbar-brand", { attrs: { href: "#" } }, [e._t("default")], 2),
            a("b-navbar-toggle", { attrs: { target: "nav-collapse" } }),
            a(
              "b-collapse",
              { attrs: { id: "nav-collapse", "is-nav": "" } },
              [
                a(
                  "b-navbar-nav",
                  { staticClass: "ml-auto" },
                  [
                    a(
                      "b-nav-item",
                      { attrs: { right: "" } },
                      [
                        a(
                          "b-button",
                          {
                            staticClass: "my-2 my-sm-0",
                            attrs: {
                              size: "sm",
                              variant: "buttons",
                              type: "button",
                              onclick:
                                "window.open('https://forms.gle/fWiCg2z5CRx9ukGu7','_blank')",
                            },
                          },
                          [
                            a("i", {
                              staticClass: "fas fa-plus-square",
                              attrs: { "aria-hidden": "true" },
                            }),
                            e._v(" " + e._s(e.$t("about.devhelp.addbusiness"))),
                          ]
                        ),
                      ],
                      1
                    ),
                    a(
                      "b-nav-item",
                      {
                        attrs: { right: "" },
                        on: {
                          click: function (t) {
                            return e.$bvModal.show("about-us");
                          },
                        },
                      },
                      [e._v(" " + e._s(e.$t("about.linktext")) + " ")]
                    ),
                    e._l(e.socialMedia, function (t, s) {
                      return a(
                        "b-nav-item",
                        { key: s, attrs: { href: t.url } },
                        [
                          a("i", { class: "fab fa-" + t.icon }),
                          e._v(" "),
                          a("span", { staticClass: "sm-name" }, [
                            e._v(e._s(t.name)),
                          ]),
                        ]
                      );
                    }),
                    a(
                      "b-nav-item-dropdown",
                      {
                        staticClass: "lang-dropdown",
                        attrs: { right: "" },
                        scopedSlots: e._u([
                          {
                            key: "button-content",
                            fn: function () {
                              return [
                                a("i", {
                                  staticClass: "fas fa-globe-americas",
                                  attrs: { "aria-hidden": "true" },
                                }),
                                a("span", {
                                  staticClass: "language",
                                  domProps: { innerHTML: e._s(e.language) },
                                }),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      e._l(e.languages, function (t) {
                        return a(
                          "b-dropdown-item",
                          { key: t.iso, attrs: { href: "#" } },
                          [
                            a(
                              "span",
                              { attrs: { title: e.$t("languages." + t.iso) } },
                              [
                                a("div", {
                                  attrs: { lang: t.iso },
                                  domProps: { innerHTML: e._s(t.name) },
                                  on: {
                                    click: function (a) {
                                      return e.$emit("language-selected", t);
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]
                        );
                      }),
                      1
                    ),
                  ],
                  2
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      m = [],
      h = {
        name: "app-header",
        props: { language: String, socialMedia: Array },
        data: function () {
          return {
            languages: [
              { iso: "en", name: "English" },
              { iso: "es", name: "Espa&#241;ol" },
              { iso: "fr", name: "Fran&#231;ais" },
              { iso: "ko", name: "한국어" },
              { iso: "ar", name: "عربى" },
              { iso: "ja", name: "日本人" },
              { iso: "zh", name: "中文" },
              { iso: "ms", name: "ဗမာ" },
            ],
          };
        },
      },
      f = h,
      g = (a("5452"), a("2877")),
      b = Object(g["a"])(f, p, m, !1, null, null, null),
      k = b.exports,
      v = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "aside",
          [
            a(
              "b-collapse",
              {
                staticClass: "sh",
                class: e.showListClass,
                model: {
                  value: e.showListButton,
                  callback: function (t) {
                    e.showListButton = t;
                  },
                  expression: "showListButton",
                },
              },
              [
                a(
                  "div",
                  {
                    on: {
                      click: function (t) {
                        return e.toggleListing();
                      },
                    },
                  },
                  [
                    a("span", [
                      a("i", { staticClass: "fas", class: e.showListIcon }),
                      e._v(e._s(e.showListLabel)),
                    ]),
                  ]
                ),
              ]
            ),
            a(
              "div",
              {
                ref: "sidebar",
                staticClass: "border-right",
                class: e.expandedDetails,
                style: e.transformVal,
                attrs: { id: "sidebar-wrapper" },
              },
              [
                a(
                  "div",
                  {
                    staticClass:
                      "tab bg-dialogs border-right border-top border-bottom",
                    on: { click: e.toggle },
                  },
                  [a("i", { staticClass: "fas fa-caret-down" })]
                ),
                a("div", [
                  a(
                    "div",
                    { staticClass: "sidebar-top" },
                    [
                      a("search-filters", {
                        staticClass: "search-filters",
                        attrs: { need: e.need },
                        on: {
                          "need-selected": function (t) {
                            return e.$emit("need-selected", t);
                          },
                        },
                      }),
                      null == e.location.currentBusiness || e.showLists
                        ? a(
                            "info-panel",
                            {
                              attrs: {
                                infotype: "note",
                                icon: "fa-info-circle",
                              },
                            },
                            [
                              e._v(
                                " " + e._s(e.$t("sidebar.info-about-us")) + " "
                              ),
                              a(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function (t) {
                                      return e.$bvModal.show("about-us");
                                    },
                                  },
                                },
                                [e._v(e._s(e.$t("sidebar.info-link-text")))]
                              ),
                              e._v(e._s(e.$t("sidebar.info-end-text")) + " "),
                              e.warning
                                ? a(
                                    "div",
                                    { staticClass: "warning-wrap" },
                                    [
                                      a(
                                        "b-alert",
                                        {
                                          attrs: {
                                            variant: "warning",
                                            show: "",
                                          },
                                        },
                                        [e._v(e._s(e.warning))]
                                      ),
                                    ],
                                    1
                                  )
                                : e._e(),
                            ]
                          )
                        : e._e(),
                      0 == e.filteredMarkers.length
                        ? a(
                            "info-panel",
                            {
                              attrs: {
                                infotype: "handwash",
                                icon: "fa-hands-wash",
                              },
                            },
                            [
                              a("b", { staticClass: "themeFont" }, [
                                e._v(e._s(e.$t("sidebar.shopsafe"))),
                              ]),
                              a("br"),
                              e._v(" (1) " + e._s(e.$t("sidebar.stayhome"))),
                              a("br"),
                              e._v(" (2) " + e._s(e.$t("sidebar.sixfeet"))),
                              a("br"),
                              e._v(" (3) " + e._s(e.$t("sidebar.washhands"))),
                              a("br"),
                            ]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                  a(
                    "div",
                    [
                      null != e.location.currentBusiness && !0 !== e.showLists
                        ? a("business-details", {
                            ref: "business",
                            attrs: {
                              infotype: "green",
                              icon: "fa-tractor",
                              business: e.location.currentBusiness,
                              snippet: e.businessSnippet,
                            },
                            on: {
                              "close-details": function (t) {
                                return e.$emit("close-details");
                              },
                              "toggle-expanding-details":
                                e.toggleExpandingDetails,
                              "business-resize": e.businessResize,
                            },
                          })
                        : e._e(),
                    ],
                    1
                  ),
                ]),
                e.showLists
                  ? a("results-list", {
                      attrs: {
                        filteredMarkers: e.highlightFilteredMarkers,
                        location: e.location,
                      },
                      on: {
                        "location-selected": function (t) {
                          return e.$emit("location-selected", t);
                        },
                      },
                    })
                  : e._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      y = [],
      x =
        (a("99af"),
        a("a15b"),
        a("a9e3"),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            [
              a(
                "b-list-group",
                { staticClass: "list-group-flush back-to-list" },
                [
                  e.snippet
                    ? e._e()
                    : a(
                        "b-list-group-item",
                        {
                          attrs: { variant: "sideNav", button: "" },
                          on: {
                            click: function (t) {
                              return e.$emit("close-details");
                            },
                          },
                        },
                        [
                          a("i", { staticClass: "fas fa-arrow-left" }),
                          e._v(" " + e._s(e.$t("label.backtolist")) + " "),
                        ]
                      ),
                ],
                1
              ),
              a(
                "b-list-group",
                {
                  staticClass: "list-group-flush business-details",
                  on: { click: e.expandBusinessDetails },
                },
                [
                  a(
                    "b-list-group-item",
                    {
                      class:
                        e.infotype + (e.snippet ? " business-snippet" : ""),
                      attrs: { variant: "sideNav" },
                    },
                    [
                      a(
                        "div",
                        [
                          a(
                            "div",
                            {
                              on: {
                                click: function (t) {
                                  return t.stopPropagation(), e.toggleExpand(t);
                                },
                              },
                            },
                            [
                              a("div", { staticClass: "mobile-expand" }),
                              a("div", { staticClass: "title" }, [
                                a("i", {
                                  class: e.businessIcon(e.business.marker),
                                }),
                                a(
                                  "div",
                                  { staticClass: "busName" },
                                  [
                                    a("h5", [
                                      e._v(
                                        e._s(
                                          e.business.marker.gsx$providername.$t
                                        )
                                      ),
                                    ]),
                                    e.business.marker.gsx$provideraddloc.$t
                                      ? a("span", [
                                          e._v(
                                            e._s(
                                              e.business.marker
                                                .gsx$provideraddloc.$t
                                            )
                                          ),
                                        ])
                                      : e._e(),
                                    e.business.marker.gsx$cuisine.$t
                                      ? [
                                          e._v(
                                            e._s(
                                              e.business.marker.gsx$cuisine.$t
                                            )
                                          ),
                                        ]
                                      : e._e(),
                                  ],
                                  2
                                ),
                              ]),
                            ]
                          ),
                          e.snippet || "" === e.getAddress(e.business.marker)
                            ? e._e()
                            : a("div", [
                                a("b", [
                                  e._v(e._s(e.$t("label.address")) + ":"),
                                ]),
                                a("br"),
                                e._v(
                                  " " + e._s(e.getAddress(e.business.marker))
                                ),
                                a("br"),
                                a(
                                  "span",
                                  {
                                    staticClass: "list-item",
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.stopPropagation(),
                                          e.getDirections(t)
                                        );
                                      },
                                    },
                                  },
                                  [
                                    a("icon-list-item", {
                                      attrs: {
                                        icon: "fa-directions",
                                        title: e.$t("getdirections"),
                                        link: "#",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e.directionsBool
                                  ? a(
                                      "p",
                                      {
                                        staticClass:
                                          "directions-options list-item",
                                        attrs: {
                                          id: "directions-options-expanded",
                                        },
                                      },
                                      [
                                        a("icon-list-item", {
                                          staticClass: "list-item",
                                          attrs: {
                                            icon: "fa fa-google",
                                            title: "Google Maps",
                                            link: e.googleDirectionsLink(
                                              e.business.marker
                                            ),
                                          },
                                        }),
                                        e.iOS
                                          ? a("icon-list-item", {
                                              staticClass: "list-item",
                                              attrs: {
                                                icon: "fa fa-apple",
                                                title: "Apple Maps",
                                                link: e.appleDirectionsLink(
                                                  e.business.marker
                                                ),
                                              },
                                            })
                                          : e._e(),
                                        a("icon-list-item", {
                                          staticClass: "list-item",
                                          attrs: {
                                            icon: "fa-waze",
                                            iconSet: "fab",
                                            title: "Waze",
                                            link: e.wazeDirectionsLink(
                                              e.business.marker
                                            ),
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : e._e(),
                              ]),
                          e.snippet
                            ? e._e()
                            : a(
                                "p",
                                { staticClass: "business-options" },
                                [
                                  void 0 !=
                                    e.business.marker.gsx$discountmedical &&
                                  1 == e.business.marker.gsx$discountmedical.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-user-md",
                                          title: e.$tc(
                                            "label.discountmedical",
                                            1
                                          ),
                                        },
                                      })
                                    : e._e(),
                                  1 == e.business.marker.gsx$familymeal.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-user-friends",
                                          title: e.$tc("category.family", 2),
                                        },
                                      })
                                    : e._e(),
                                  1 == e.business.marker.gsx$mealstudent.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-school",
                                          title: e.$tc("label.mealstudent", 1),
                                        },
                                      })
                                    : e._e(),
                                  1 == e.business.marker.gsx$mealpublic.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-users",
                                          title: e.$tc("label.mealpublic", 1),
                                        },
                                      })
                                    : e._e(),
                                  1 == e.business.marker.gsx$freeproduce.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-apple-alt",
                                          title: e.$tc("label.freeproduce", 1),
                                        },
                                      })
                                    : e._e(),
                                  void 0 !=
                                    e.business.marker.gsx$freegroceries &&
                                  1 == e.business.marker.gsx$freegroceries.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-shopping-basket",
                                          title: e.$tc(
                                            "label.freegroceries",
                                            1
                                          ),
                                        },
                                      })
                                    : e._e(),
                                  1 == e.business.marker.gsx$curbside.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-car",
                                          title: e.$tc("label.curbside", 1),
                                        },
                                      })
                                    : e._e(),
                                  1 == e.business.marker.gsx$drivethru.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-car-side",
                                          title: e.$t("label.drivethru"),
                                        },
                                      })
                                    : e._e(),
                                  1 == e.business.marker.gsx$orderonline.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-mouse",
                                          title: e.$t("label.orderonline"),
                                        },
                                      })
                                    : e._e(),
                                  1 == e.business.marker.gsx$delivery.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-shipping-fast",
                                          title: e.$t("label.delivery"),
                                        },
                                      })
                                    : e._e(),
                                ],
                                1
                              ),
                          e.snippet
                            ? e._e()
                            : a(
                                "p",
                                { staticClass: "business-actions" },
                                [
                                  void 0 !== e.business.marker.gsx$contact &&
                                  e.business.marker.gsx$contact.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-phone-alt",
                                          title:
                                            e.business.marker.gsx$contact.$t,
                                          link:
                                            "tel:" +
                                            e.business.marker.gsx$contact.$t,
                                        },
                                      })
                                    : e._e(),
                                  void 0 !==
                                    e.business.marker.gsx$contactspanish &&
                                  e.business.marker.gsx$contactspanish.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-phone-alt",
                                          title:
                                            e.business.marker.gsx$contactspanish
                                              .$t +
                                            " (" +
                                            e.$t("languages.es").toLowerCase() +
                                            ")",
                                          link:
                                            "tel:" +
                                            e.business.marker.gsx$contactspanish
                                              .$t,
                                        },
                                      })
                                    : e._e(),
                                  void 0 !== e.business.marker.gsx$weblink &&
                                  e.business.marker.gsx$weblink.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-globe",
                                          title: e.getDomain(
                                            e.business.marker.gsx$weblink.$t
                                          ),
                                          link:
                                            e.business.marker.gsx$weblink.$t,
                                        },
                                      })
                                    : e._e(),
                                  void 0 !== e.business.marker.gsx$twitter &&
                                  e.business.marker.gsx$twitter.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa fa-twitter",
                                          title:
                                            "@" +
                                            e.business.marker.gsx$twitter.$t,
                                          link:
                                            "https://www.twitter.com/" +
                                            e.business.marker.gsx$twitter.$t,
                                        },
                                      })
                                    : e._e(),
                                  void 0 !== e.business.marker.gsx$instagram &&
                                  e.business.marker.gsx$instagram.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa fa-instagram",
                                          title:
                                            "@" +
                                            e.business.marker.gsx$instagram.$t,
                                          link:
                                            "https://www.instagram.com/" +
                                            e.business.marker.gsx$instagram.$t,
                                        },
                                      })
                                    : e._e(),
                                  void 0 !== e.business.marker.gsx$facebook &&
                                  e.business.marker.gsx$facebook.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa fa-facebook-square",
                                          title: "Facebook",
                                          link:
                                            e.business.marker.gsx$facebook.$t,
                                        },
                                      })
                                    : e._e(),
                                  void 0 !== e.business.marker.gsx$email &&
                                  e.business.marker.gsx$email.$t
                                    ? a("icon-list-item", {
                                        staticClass: "list-item",
                                        attrs: {
                                          icon: "fa-envelope",
                                          title: e.getDomain(
                                            e.business.marker.gsx$email.$t
                                          ),
                                          link:
                                            "mailto:" +
                                            e.business.marker.gsx$email.$t,
                                        },
                                      })
                                    : e._e(),
                                ],
                                1
                              ),
                          e.snippet
                            ? a("p", { staticClass: "business-actions" }, [
                                a(
                                  "span",
                                  {
                                    staticClass: "list-item",
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.stopPropagation(),
                                          e.getDirections(t)
                                        );
                                      },
                                    },
                                  },
                                  [
                                    a("icon-list-item", {
                                      staticClass: "directions",
                                      class: e.directionsBool
                                        ? "selected"
                                        : "a",
                                      attrs: {
                                        icon: "fa-directions",
                                        title: e.$t("getdirections_short"),
                                        link: "#",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                a(
                                  "span",
                                  {
                                    staticClass: "list-item",
                                    on: {
                                      click: function (e) {
                                        e.stopPropagation();
                                      },
                                    },
                                  },
                                  [
                                    void 0 !== e.business.marker.gsx$contact &&
                                    e.business.marker.gsx$contact.$t
                                      ? a("icon-list-item", {
                                          attrs: {
                                            icon: "fa-phone-alt",
                                            title: e.$t("call"),
                                            link:
                                              "tel:" +
                                              e.business.marker.gsx$contact.$t,
                                          },
                                        })
                                      : e._e(),
                                  ],
                                  1
                                ),
                                a(
                                  "span",
                                  {
                                    staticClass: "list-item",
                                    on: {
                                      click: function (e) {
                                        e.stopPropagation();
                                      },
                                    },
                                  },
                                  [
                                    void 0 !== e.business.marker.gsx$weblink &&
                                    e.business.marker.gsx$weblink.$t
                                      ? a("icon-list-item", {
                                          attrs: {
                                            icon: "fa-globe",
                                            title: e.$t("website"),
                                            link:
                                              e.business.marker.gsx$weblink.$t,
                                          },
                                        })
                                      : e._e(),
                                  ],
                                  1
                                ),
                              ])
                            : e._e(),
                          e.snippet && e.directionsBool
                            ? a(
                                "p",
                                {
                                  staticClass: "directions-options-expanded",
                                  attrs: { id: "directions-options-snippet" },
                                  on: {
                                    click: function (e) {
                                      e.stopPropagation();
                                    },
                                  },
                                },
                                [
                                  a("icon-list-item", {
                                    staticClass: "list-item",
                                    attrs: {
                                      icon: "fa fa-google",
                                      title: "Google Maps",
                                      link: e.googleDirectionsLink(
                                        e.business.marker
                                      ),
                                    },
                                  }),
                                  e.iOS
                                    ? a("icon-list-item", {
                                        attrs: {
                                          icon: "fa fa-apple",
                                          title: "Apple Maps",
                                          link: e.appleDirectionsLink(
                                            e.business.marker
                                          ),
                                        },
                                      })
                                    : e._e(),
                                  a("icon-list-item", {
                                    attrs: {
                                      icon: "fa-waze",
                                      iconSet: "fab",
                                      title: "Waze",
                                      link: e.wazeDirectionsLink(
                                        e.business.marker
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : e._e(),
                          e.snippet
                            ? e._e()
                            : a("opening-hours", {
                                attrs: {
                                  business: e.business.marker,
                                  title: e.$t("label.openinghours"),
                                },
                              }),
                          e.snippet
                            ? e._e()
                            : a("opening-hours", {
                                attrs: {
                                  business: e.business.marker,
                                  title: e.$t("label.seniorhours"),
                                  senior: !0,
                                },
                              }),
                          e.snippet
                            ? e._e()
                            : a(
                                "div",
                                [
                                  void 0 !==
                                    e.business.marker.gsx$instructions &&
                                  e.business.marker.gsx$instructions.$t
                                    ? [
                                        a("p", [
                                          a("b", [
                                            e._v(
                                              e._s(e.$t("label.instructions")) +
                                                ":"
                                            ),
                                          ]),
                                          a("br"),
                                          e._v(
                                            e._s(
                                              e.business.marker.gsx$instructions
                                                .$t
                                            ) + " "
                                          ),
                                        ]),
                                      ]
                                    : e._e(),
                                  void 0 !== e.business.marker.gsx$offers &&
                                  e.business.marker.gsx$offers.$t
                                    ? [
                                        a("p", [
                                          a("b", [
                                            e._v(
                                              e._s(e.$t("label.offers")) + ":"
                                            ),
                                          ]),
                                          a("br"),
                                          e._v(
                                            e._s(
                                              e.business.marker.gsx$offers.$t
                                            ) + " "
                                          ),
                                        ]),
                                      ]
                                    : e._e(),
                                  void 0 !== e.business.marker.gsx$notes &&
                                  e.business.marker.gsx$notes.$t
                                    ? [
                                        a("p", [
                                          a("b", [
                                            e._v(
                                              e._s(e.$t("label.notes")) + ":"
                                            ),
                                          ]),
                                          a("br"),
                                          e._v(
                                            e._s(
                                              e.business.marker.gsx$notes.$t
                                            ) + " "
                                          ),
                                        ]),
                                      ]
                                    : e._e(),
                                  "Invalid Date" != e.getLastUpdatedDate
                                    ? a("p", { staticClass: "updated" }, [
                                        e._v(
                                          " " +
                                            e._s(
                                              e.$t("label.details-last-updated")
                                            ) +
                                            ": " +
                                            e._s(e.getLastUpdatedDate) +
                                            " "
                                        ),
                                      ])
                                    : e._e(),
                                ],
                                2
                              ),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          );
        }),
      w = [],
      $ =
        (a("5319"),
        a("1276"),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return e.days.length > 0
            ? a("div", { staticClass: "openhours" }, [
                a("div", { staticClass: "oh-title" }, [
                  a("b", [e._v(e._s(e.title))]),
                ]),
                a(
                  "table",
                  e._l(e.days, function (t, s) {
                    return a("tr", { key: s }, [
                      a("td", { staticClass: "oh-name" }, [e._v(e._s(t.name))]),
                      a("td", { class: t.class }, [
                        a("span", { domProps: { innerHTML: e._s(t.val) } }),
                      ]),
                    ]);
                  }),
                  0
                ),
              ])
            : e._e();
        }),
      C = [],
      _ = 7,
      M = [
        { day: "sunday" },
        { day: "monday" },
        { day: "tuesday" },
        { day: "wednesday" },
        { day: "thursday" },
        { day: "friday" },
        { day: "saturday" },
      ],
      S = [
        { day: "monday" },
        { day: "tuesday" },
        { day: "wednesday" },
        { day: "thursday" },
        { day: "friday" },
        { day: "saturday" },
        { day: "sunday" },
      ],
      O = ["mon", "tues", "wed", "thr", "fri", "sat", "sun"].map(function (e) {
        return "gsx$".concat(e);
      }),
      L = ["mon", "tues", "wed", "thr", "fri", "sat", "sun"].map(function (e) {
        return "gsx$sp".concat(e);
      }),
      D = [
        "in-storepickup",
        "curbside",
        "specialhours",
        "mealstudent",
        "mealpublic",
        "familymeal",
        "orderonline",
        "payonline",
        "mustpreorder",
        "discountmedical",
        "delivery",
        "freeproduce",
        "freegroceries",
        "farmpick-up",
        "farmersmarket",
      ],
      B = {
        categories: [
          {
            code: "food",
            id: 1001,
            name: "Food Resources",
            subcategories: [
              { code: "meal", id: 1004, name: "Free meals" },
              { code: "family", id: 1006, name: "Prepared family meals" },
              { code: "grocery", id: 1005, name: "Groceries" },
            ],
          },
          { code: "pharmacy", id: 1008, name: "Pharmacy" },
          { code: "pet", id: 1009, name: "Pet supplies" },
        ],
        regions: ["Orange"],
      },
      V = {
        name: "OpeningHours",
        data: function () {
          return {};
        },
        props: {
          title: { type: String },
          infotype: { type: String },
          icon: { type: String },
          senior: { type: Boolean },
          business: { type: Object },
          day: { type: String },
        },
        computed: {
          days: function () {
            var e = this,
              t = [],
              a = 0;
            return (
              this.senior
                ? L.forEach(function (s, i) {
                    var r = e.$t("dayofweek.".concat(S[i].day));
                    switch (e.business[s].$t.length) {
                      case 0:
                        break;
                      case 1:
                        break;
                      default:
                        t.push({
                          name: r,
                          val: e.business[s].$t.replace(",", "<br/>"),
                        }),
                          a++;
                        break;
                    }
                  })
                : O.forEach(function (s, i) {
                    var r = e.$t("dayofweek.".concat(S[i].day));
                    switch (e.business[s].$t.length) {
                      case 0:
                        break;
                      case 1:
                        0 == e.business[s].$t &&
                          t.push({
                            name: r,
                            val: e.$t("label.closed"),
                            class: "closed",
                          }),
                          a++;
                        break;
                      default:
                        t.push({
                          name: r,
                          val: e.business[s].$t.replace(",", "<br/>"),
                        }),
                          a++;
                        break;
                    }
                  }),
              0 == a
                ? t.push({
                    name: this.$t("label.allweek"),
                    val: this.$t("label.closed"),
                  })
                : t
            );
          },
        },
      },
      I = V,
      P = (a("0d1c"), Object(g["a"])(I, $, C, !1, null, null, null)),
      E = P.exports,
      j = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          [
            "" != e.link
              ? [
                  a("div", { staticClass: "iconListItem" }, [
                    a("div", { staticClass: "ilIcon" }, [
                      e.leafletIcon
                        ? a("div", {
                            staticClass: "leafletIcon",
                            domProps: { innerHTML: e._s(e.generateIcon) },
                          })
                        : e._e(),
                      "" != e.icon ? a("i", { class: e.iconStr }) : e._e(),
                      null == e.icon || "" == e.icon
                        ? a("img", { attrs: { src: e.image } })
                        : e._e(),
                    ]),
                    a(
                      "div",
                      { staticClass: "ilTitle" },
                      [
                        null != e.link && "" != e.link
                          ? a(
                              "a",
                              { attrs: { href: e.link } },
                              [
                                e._t("default", [
                                  a("span", { staticClass: "title" }, [
                                    e._v(e._s(e.title)),
                                  ]),
                                ]),
                              ],
                              2
                            )
                          : e._e(),
                        e._t("default", [
                          null == e.link || "" == e.link
                            ? a("span", { staticClass: "title" }, [
                                e._v(e._s(e.title)),
                              ])
                            : e._e(),
                        ]),
                      ],
                      2
                    ),
                  ]),
                ]
              : [
                  a("div", { staticClass: "iconListItem" }, [
                    a("div", { staticClass: "ilIcon" }, [
                      e.leafletIcon
                        ? a("div", {
                            staticClass: "leafletIcon",
                            domProps: { innerHTML: e._s(e.generateIcon) },
                          })
                        : e._e(),
                      "" != e.icon ? a("i", { class: e.iconStr }) : e._e(),
                      "" != e.image
                        ? a("img", { attrs: { src: e.image } })
                        : e._e(),
                    ]),
                    a(
                      "div",
                      { staticClass: "ilTitle" },
                      [
                        e._t("default", [
                          a("span", { staticClass: "title" }, [
                            e._v(e._s(e.title)),
                          ]),
                        ]),
                      ],
                      2
                    ),
                  ]),
                ],
          ],
          2
        );
      },
      A = [],
      N = {
        name: "IconListItem",
        data: function () {
          return { selected: !1 };
        },
        props: {
          leafletIcon: { type: Object },
          title: { type: String },
          link: { type: String },
          icon: { type: String },
          image: { type: String },
          iconSet: { type: String },
        },
        computed: {
          generateIcon: function () {
            return this.leafletIcon.createIcon().outerHTML;
          },
          iconStr: function () {
            return null != this.iconSet && void 0 != this.iconSet
              ? this.iconSet + " " + this.icon
              : "fas " + this.icon;
          },
        },
      },
      z = N,
      F = (a("7c81"), Object(g["a"])(z, j, A, !1, null, null, null)),
      T = F.exports,
      H = (a("c975"), a("498a"), a("3835"));
    function R(e) {
      switch (e.gsx$resource.$t) {
        case "grocery":
          return "fas fa-shopping-basket";
        case "pharmacy":
          return "fas fa-prescription";
        case "pet":
          return "fas fa-paw";
        case "farm":
          return 1 == e.gsx$farmersmarket.$t
            ? "fas fa-store"
            : "fas fa-tractor";
        default:
      }
      var t = e.gsx$cuisine.$t,
        a =
          t.indexOf(",") > 0
            ? t.toLowerCase().substr(0, t.indexOf(",")).trim()
            : t.toLowerCase().trim();
      switch (a) {
        case "burgers":
          return "fas fa-hamburger";
        case "cheese":
          return "fas fa-cheese";
        case "beer":
        case "craft beer":
          return "fas fa-beer";
        case "pizza":
          return "fas fa-pizza-slice";
        case "mexican":
          return "fas fa-pepper-hot";
        case "wine":
          return "fas fa-wine-glass-alt";
        case "fish":
        case "seafood":
          return "fas fa-fish";
        case "ice cream":
          return "fas fa-ice-cream";
        case "texan":
          return "fas fa-hat-cowboy";
        case "chicken":
          return "fas fa-drumstick-bite";
        case "sandwiches":
          return "fas fa-bread-slice";
        case "american":
          return "fas fa-flag-usa";
        case "vegan":
        case "vegetarian":
          return "fas fa-carrot";
        case "market":
          return "fas fa-store";
        default:
          return "fas fa-utensils";
      }
    }
    function U(e) {
      var t =
        void 0 !== e.gsx$address && "" !== e.gsx$address.$t
          ? e.gsx$address.$t + ", "
          : "";
      return (
        (t +=
          void 0 !== e.gsx$city && "" !== e.gsx$city.$t
            ? e.gsx$city.$t + ", "
            : ""),
        (t +=
          void 0 !== e.gsx$state && "" !== e.gsx$state.$t
            ? e.gsx$state.$t + " "
            : ""),
        t + (void 0 !== e.gsx$zip && "" !== e.gsx$zip.$t ? e.gsx$zip.$t : "")
      );
    }
    function G(e, t) {
      var a = Object(H["a"])(e, 2),
        s = a[0],
        i = a[1],
        r = Object(H["a"])(t, 2),
        n = r[0],
        o = r[1],
        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = function (e) {
          return (Math.PI / 180) * e;
        },
        u = function (e, t) {
          return (Math.PI / 180) * (e - t);
        },
        d = 6371,
        p = u(n, s),
        m = u(o, i);
      (s = c(s)), (n = c(n));
      var h =
          Math.pow(Math.sin(p / 2), 2) +
          Math.pow(Math.sin(m / 2), 2) * Math.cos(s) * Math.cos(n),
        f = 2 * Math.asin(Math.sqrt(h)),
        g = d * f;
      return l && (g /= 1.60934), g;
    }
    function W(e, t) {
      return e.distance < t.distance ? -1 : e.distance > t.distance ? 1 : 0;
    }
    var q = {
        name: "BusinessDetails",
        components: { OpeningHours: E, IconListItem: T },
        data: function () {
          return { directionsBool: !1 };
        },
        props: {
          infotype: { type: String },
          icon: { type: String },
          business: Object,
          snippet: Boolean,
        },
        methods: {
          getDomain: function (e) {
            var t = e
              .replace("http://", "")
              .replace("https://", "")
              .replace("www.", "")
              .split(/[/?#]/);
            return t[0];
          },
          addressUrl: function (e) {
            var t = e.gsx$address.$t;
            t = t.replace(/\s/g, "%20");
            var a = e.gsx$city.$t.replace(/\s/g, "%20"),
              s = e.gsx$state.$t.replace(/\s/g, "%20");
            return (
              (t = t + "%2C%20" + a + "%2C%20" + s + "%20" + e.gsx$zip.$t), t
            );
          },
          appleDirectionsLink: function (e) {
            return (
              "http://maps.apple.com/?q=" +
              e.gsx$address.$t +
              "&ll=" +
              e.gsx$lat.$t +
              "%2C" +
              e.gsx$lon.$t
            );
          },
          googleDirectionsLink: function (e) {
            return (
              "https://www.google.com/maps/dir/?api=1&destination=" +
              this.addressUrl(e)
            );
          },
          wazeDirectionsLink: function (e) {
            return (
              "https://www.waze.com/ul?ll=" +
              e.gsx$lat.$t +
              "%2C" +
              e.gsx$lon.$t +
              "&navigate=yes"
            );
          },
          getDirections: function () {
            (this.directionsBool = !this.directionsBool),
              this.$emit("business-resize");
          },
          expandBusinessDetails: function () {
            this.snippet && this.$emit("toggle-expanding-details");
          },
          toggleExpand: function () {
            this.$emit("toggle-expanding-details");
          },
          businessIcon: R,
          getAddress: U,
        },
        computed: {
          getLastUpdatedDate: function () {
            return new Date(
              Date.parse(this.business.marker.gsx$lastupdate.$t)
            ).toLocaleDateString();
          },
          iOS: function () {
            return /iPad|iPhone|iPod|Mac OS/.test(navigator.userAgent);
          },
          agent: function () {
            return navigator.userAgent;
          },
        },
      },
      K = q,
      J = (a("cb8d"), Object(g["a"])(K, x, w, !1, null, "2c6464f3", null)),
      Q = J.exports,
      Z = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "b-list-group",
          { staticClass: "list-group list-group-flush" },
          [
            a(
              "b-list-group-item",
              { class: e.infotype, attrs: { variant: "sideNav" } },
              [
                a("i", { staticClass: "fas", class: e.icon }),
                a("div", [e._t("default")], 2),
              ]
            ),
          ],
          1
        );
      },
      Y = [],
      X = {
        name: "InfoPanel",
        data: function () {
          return {};
        },
        props: { infotype: { type: String }, icon: { type: String } },
      },
      ee = X,
      te = (a("69ce"), Object(g["a"])(ee, Z, Y, !1, null, null, null)),
      ae = te.exports,
      se = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          { staticClass: "resultWrapper" },
          [
            a(
              "b-list-group",
              { ref: "results", staticClass: "resultList list-group-flush" },
              e._l(e.filteredMarkers, function (t, s) {
                return a(
                  "b-list-group-item",
                  {
                    key: s,
                    ref: "result" + s,
                    refInFor: !0,
                    staticClass: "resultItem",
                    class: {
                      selected: s == e.location.locValue,
                      closedOne: 0 == t.oc,
                    },
                    attrs: { action: "", variant: "sideNav" },
                    on: {
                      click: function (t) {
                        return e.$emit("location-selected", {
                          locValue: s,
                          isSetByMap: !1,
                        });
                      },
                    },
                  },
                  [
                    a("h5", { staticClass: "resultTitle" }, [
                      e._v(e._s(t.marker.gsx$providername.$t)),
                    ]),
                    t.marker.gsx$provideraddloc.$t
                      ? [
                          a("div", { staticClass: "addloc" }, [
                            e._v(e._s(t.marker.gsx$provideraddloc.$t)),
                          ]),
                        ]
                      : e._e(),
                    t.oc
                      ? e._e()
                      : a("div", { staticClass: "closed" }, [
                          e._v(e._s(e.getClosedMessage())),
                        ]),
                    a("span", { staticClass: "resultAddress" }, [
                      t.marker.gsx$cuisine.$t
                        ? a("span", [
                            e._v(e._s(t.marker.gsx$cuisine.$t)),
                            a("br"),
                          ])
                        : e._e(),
                      e._v(
                        " " +
                          e._s(t.marker.gsx$address.$t) +
                          e._s("" !== t.marker.gsx$address.$t ? "," : "") +
                          " " +
                          e._s(t.marker.gsx$city.$t) +
                          " "
                      ),
                    ]),
                    1 == t.marker.gsx$discountmedical.$t
                      ? [
                          a(
                            "span",
                            {
                              attrs: {
                                title: e.$tc("label.discountmedical", 1),
                              },
                            },
                            [a("i", { staticClass: "fas fa-user-md" })]
                          ),
                        ]
                      : e._e(),
                    1 == t.marker.gsx$familymeal.$t
                      ? [
                          a(
                            "span",
                            { attrs: { title: e.$tc("category.family", 2) } },
                            [a("i", { staticClass: "fas fa-user-friends" })]
                          ),
                        ]
                      : e._e(),
                    1 == t.marker.gsx$mealstudent.$t
                      ? [
                          a(
                            "span",
                            { attrs: { title: e.$tc("label.mealstudent", 1) } },
                            [a("i", { staticClass: "fas fa-school" })]
                          ),
                        ]
                      : e._e(),
                    1 == t.marker.gsx$mealstudent.$t
                      ? [
                          a(
                            "span",
                            { attrs: { title: e.$tc("label.mealpublic", 1) } },
                            [a("i", { staticClass: "fas fa-users" })]
                          ),
                        ]
                      : e._e(),
                    1 == t.marker.gsx$drivethru.$t
                      ? [
                          a(
                            "span",
                            { attrs: { title: e.$t("label.drivethru") } },
                            [a("i", { staticClass: "fas fa-car-side" })]
                          ),
                        ]
                      : e._e(),
                    1 == t.marker.gsx$curbside.$t
                      ? [
                          a(
                            "span",
                            { attrs: { title: e.$tc("label.curbside", 1) } },
                            [a("i", { staticClass: "fas fa-car" })]
                          ),
                        ]
                      : e._e(),
                    1 == t.marker.gsx$orderonline.$t
                      ? [
                          a(
                            "span",
                            { attrs: { title: e.$t("label.orderonline") } },
                            [a("i", { staticClass: "fas fa-mouse" })]
                          ),
                        ]
                      : e._e(),
                    1 == t.marker.gsx$delivery.$t
                      ? [
                          a(
                            "span",
                            { attrs: { title: e.$t("label.delivery") } },
                            [a("i", { staticClass: "fas fa-shipping-fast" })]
                          ),
                        ]
                      : e._e(),
                  ],
                  2
                );
              }),
              1
            ),
          ],
          1
        );
      },
      ie = [],
      re = {
        name: "ResultsList",
        data: function () {
          return { selected: !1, today: new Date().getDay() };
        },
        components: {},
        props: {
          filteredMarkers: Array,
          location: { locValue: Number, isSetByMap: Boolean },
          selectedDay: Number,
        },
        watch: {
          location: function (e) {
            if (e.isSetByMap) {
              var t = this.$refs["result" + e.locValue][0].offsetTop - 330;
              this.$refs["results"].scrollTo(0, t);
            }
          },
        },
        methods: {
          getClosedMessage: function () {
            return this.selectedDay > 6
              ? this.$t("label.closed-today")
              : ""
                  .concat(this.$t("label.closed-on"), " ")
                  .concat(
                    this.$t("dayofweek.".concat(M[this.selectedDay].day))
                  );
          },
        },
      },
      ne = re,
      oe = (a("c565"), Object(g["a"])(ne, se, ie, !1, null, null, null)),
      le = oe.exports,
      ce = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "b-list-group",
          { staticClass: "need-day-group" },
          [
            a(
              "b-list-group-item",
              { staticClass: "need-type", attrs: { variant: "sideNav" } },
              [
                a("h6", [e._v(e._s(e.$t("sidebar.what-do-you-need")))]),
                a("b-form-select", {
                  staticClass: "custom-select",
                  attrs: { value: e.need, options: e.needOptionGroups },
                  on: {
                    change: function (t) {
                      return e.$emit("need-selected", t);
                    },
                  },
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      ue = [],
      de = {
        data: function () {
          return { locationData: location, showListing: this.showList };
        },
        props: { need: String },
        computed: {
          needOptionGroups: function () {
            var e = this,
              t = B.categories,
              a = [
                { value: "none", text: this.$tc("label.selectacategory", 1) },
              ];
            return (
              t.forEach(function (t) {
                if (void 0 != t.subcategories) {
                  var s = t.name,
                    i = [];
                  t.subcategories.forEach(function (t) {
                    var a = "category." + t.code;
                    i.push({ text: e.$t(a), value: t.code });
                  }),
                    a.push({ label: s, options: i });
                } else {
                  var r = "category." + t.code;
                  a.push({ text: e.$t(r), value: t.code });
                }
              }),
              a
            );
          },
          needOptions: function () {
            return [
              {
                value: "selectacategory",
                text: this.$tc("label.selectacategory", 1),
              },
              { value: "meal", text: this.$tc("category.meal", 2) },
              { value: "family", text: this.$tc("category.family", 2) },
              { value: "grocery", text: this.$tc("category.grocery", 2) },
              { value: "pharmacy", text: this.$tc("category.pharmacy", 1) },
              { value: "food_bev", text: this.$tc("category.food_bev", 2) },
              { value: "pet", text: this.$t("category.pet") },
            ];
          },
        },
      },
      pe = de,
      me = (a("958b"), Object(g["a"])(pe, ce, ue, !1, null, "a189b936", null)),
      he = me.exports,
      fe = {
        name: "sidebar",
        components: {
          BusinessDetails: Q,
          InfoPanel: ae,
          ResultsList: le,
          SearchFilters: he,
        },
        props: {
          isFilterOpen: Boolean,
          need: String,
          filteredMarkers: Array,
          highlightFilteredMarkers: Array,
          location: {
            locValue: Number,
            locId: String,
            isSetByMap: Boolean,
            currentBusiness: Object,
          },
          showList: Boolean,
          listType: String,
          warning: String,
        },
        data: function () {
          return {
            showListsVal: this.showList,
            showExpandedDetails: !1,
            listing: "map",
            transformVal: 0,
          };
        },
        computed: {
          expandedDetails: function () {
            var e = [];
            return (
              this.showExpandedDetails && e.push("showExpandedDetails"),
              this.location.currentBusiness && e.push("business"),
              e.join(" ")
            );
          },
          showLists: function () {
            return this.showListsVal;
          },
          showListButton: {
            set: function () {},
            get: function () {
              return (
                this.filteredMarkers.length > 0 || this.location.currentBusiness
              );
            },
          },
          showListIcon: function () {
            return this.highlightFilteredMarkers.length
              ? this.showExpandedDetails
                ? "fa-map-marked-alt"
                : "fa-list-ul"
              : "fa-expand-alt";
          },
          showListLabel: function () {
            return this.highlightFilteredMarkers.length
              ? this.showExpandedDetails
                ? "Show Map"
                : "Show List"
              : "Zoom out to view results";
          },
          showListClass: function () {
            return this.highlightFilteredMarkers.length ? "" : "disabled";
          },
          businessSnippet: function () {
            var e =
              ("xs" === this.$screen.breakpoint ||
                "sm" === this.$screen.breakpoint) &&
              !this.showExpandedDetails &&
              null != this.location.currentBusiness;
            return e;
          },
          transformStyle: function () {
            return this.transformVal;
          },
          watchSnippetList: function () {
            return ""
              .concat(this.showListsVal, "|")
              .concat(this.businessSnippet);
          },
        },
        methods: {
          toggleExpandingDetails: function () {
            this.showExpandedDetails = !this.showExpandedDetails;
          },
          toggleListing: function () {
            !this.location.currentBusiness &&
              this.highlightFilteredMarkers.length &&
              ((this.showListsVal = !0),
              (this.showExpandedDetails = !this.showExpandedDetails));
          },
          transform: function () {
            var e = this;
            return Object(d["a"])(
              regeneratorRuntime.mark(function t() {
                var a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (a = e),
                          e.promiseSidebar().then(function () {
                            if (e.businessSnippet) {
                              var t = e.$refs["business"];
                              if (t) {
                                var s = t.$vnode.elm.clientHeight,
                                  i = window.innerHeight;
                                a.transformVal =
                                  "transform: translateY(" +
                                  (i - (s + 132)) +
                                  "px)";
                              } else a.transformVal = "";
                            } else a.transformVal = "";
                          });
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          promiseSidebar: function () {
            var e = this;
            return Object(d["a"])(
              regeneratorRuntime.mark(function t() {
                var a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a = e),
                          t.abrupt(
                            "return",
                            new Promise(function (e) {
                              a.$nextTick(), e();
                            })
                          )
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          businessResize: function () {
            this.transform();
          },
          toggle: function () {
            this.$emit("toggle"), this.transform();
          },
        },
        watch: {
          showList: function (e) {
            this.showListsVal = e;
          },
          watchSnippetList: function () {
            this.transform();
          },
        },
      },
      ge = fe,
      be = (a("05b2"), Object(g["a"])(ge, v, y, !1, null, "771d9832", null)),
      ke = be.exports,
      ve = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return null != e.valueBoxes[0]
          ? a("div", { staticClass: "row highlights" }, [
              a(
                "div",
                { staticClass: "col-6 col-md-3 order-md-1" },
                [
                  a("value-box", {
                    staticClass: "bg-tertiary",
                    attrs: { content: e.valueBoxes[0] },
                    on: { "box-selected": e.boxSelected },
                  }),
                ],
                1
              ),
              a(
                "div",
                { staticClass: "col-6 col-md-3 order-md-2" },
                [
                  a("value-box", {
                    staticClass: "bg-quaternary",
                    attrs: { content: e.valueBoxes[1] },
                    on: { "box-selected": e.boxSelected },
                  }),
                ],
                1
              ),
              a(
                "div",
                { staticClass: "col-6 col-md-3 order-md-4" },
                [
                  a("value-box", {
                    staticClass: "bg-quaternary",
                    attrs: { content: e.valueBoxes[2] },
                    on: { "box-selected": e.boxSelected },
                  }),
                ],
                1
              ),
              a(
                "div",
                { staticClass: "col-6 col-md-3 order-md-3" },
                [
                  a("value-box", {
                    staticClass: "bg-tertiary",
                    attrs: { content: e.valueBoxes[3] },
                    on: { "box-selected": e.boxSelected },
                  }),
                ],
                1
              ),
            ])
          : e._e();
      },
      ye = [],
      xe =
        (a("13d5"),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            {
              staticClass: "valuebox themeFont",
              class: { selected: e.content.selected },
              on: {
                click: function (t) {
                  return e.$emit("box-selected", { need: e.content.need });
                },
              },
            },
            [
              a("div", { staticClass: "number" }, [
                e._v(e._s(e.content.value)),
              ]),
              a(
                "div",
                {
                  staticClass: "title",
                  class: {
                    ten: e.content.value > 9,
                    hundred: e.content.value > 99,
                    thousand: e.content.value > 999,
                  },
                },
                [e._v(" " + e._s(e.content.title) + " ")]
              ),
              "" != e.content.icon
                ? a("i", { staticClass: "fas", class: e.content.icon })
                : e._e(),
            ]
          );
        }),
      we = [],
      $e = {
        name: "ValueBox",
        props: {
          content: {
            title: String,
            value: Number,
            icon: String,
            need: String,
            selected: Boolean,
          },
        },
      },
      Ce = $e,
      _e = (a("5636"), Object(g["a"])(Ce, xe, we, !1, null, "89325710", null)),
      Me = _e.exports,
      Se = function (e, t) {
        return (e || []).reduce(function (e, a) {
          return "1" == a.marker["gsx$" + t].$t && a.oc ? e + 1 : e;
        }, 0);
      },
      Oe = {
        name: "Highlights",
        components: { ValueBox: Me },
        props: {
          need: String,
          filteredMarkers: Array,
          highlightFilters: Array,
        },
        methods: {
          boxSelected: function (e) {
            this.$emit("box-selected", e);
          },
          buildBoxValue: function (e, t, a) {
            var s =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              i = "label.".concat(e),
              r =
                void 0 !== this.highlightFilters
                  ? this.highlightFilters.includes(e)
                  : "";
            return {
              icon: t,
              value: a,
              title: s ? this.$tc(i, a) : this.$t(i),
              need: e,
              selected: r,
            };
          },
        },
        computed: {
          countPickup: function () {
            return Se(this.filteredMarkers, "in-storepickup");
          },
          countCurbside: function () {
            return Se(this.filteredMarkers, "curbside");
          },
          countSenior: function () {
            return Se(this.filteredMarkers, "specialhours");
          },
          countFreeStudentMeal: function () {
            return Se(this.filteredMarkers, "mealstudent");
          },
          countPublicMeal: function () {
            return Se(this.filteredMarkers, "mealpublic");
          },
          countFamilyMeal: function () {
            return Se(this.filteredMarkers, "familymeal");
          },
          countOrderOnline: function () {
            return Se(this.filteredMarkers, "orderonline");
          },
          countPayOnline: function () {
            return Se(this.filteredMarkers, "payonline");
          },
          countMustPreOrder: function () {
            return Se(this.filteredMarkers, "mustpreorder");
          },
          countDiscountMedical: function () {
            return Se(this.filteredMarkers, "discountmedical");
          },
          countDelivery: function () {
            return Se(this.filteredMarkers, "delivery");
          },
          countProduce: function () {
            return Se(this.filteredMarkers, "freeproduce");
          },
          countGroceries: function () {
            return Se(this.filteredMarkers, "freegroceries");
          },
          countFarmPickUp: function () {
            return Se(this.filteredMarkers, "farmpick-up");
          },
          countFarmersMarket: function () {
            return Se(this.filteredMarkers, "farmersmarket");
          },
          orderOnlineValueBox: function () {
            return this.buildBoxValue(
              "orderonline",
              "fa-mouse",
              this.countOrderOnline
            );
          },
          curbsidePickupValueBox: function () {
            return this.buildBoxValue(
              "curbside",
              "fa-car",
              this.countCurbside,
              !0
            );
          },
          deliveryValueBox: function () {
            return this.buildBoxValue(
              "delivery",
              "fa-shipping-fast",
              this.countDelivery
            );
          },
          onFarmPickupValueBox: function () {
            return this.buildBoxValue(
              "farmpick-up",
              "fa-tractor",
              this.countFarmPickUp,
              !0
            );
          },
          farmersMarketValueBox: function () {
            return this.buildBoxValue(
              "farmersmarket",
              "fa-store",
              this.countFarmersMarket,
              !0
            );
          },
          seniorShoppingValueBox: function () {
            return this.buildBoxValue(
              "specialhours",
              "fa-history",
              this.countSenior
            );
          },
          medicalDiscountsValueBox: function () {
            return this.buildBoxValue(
              "discountmedical",
              "fa-user-md",
              this.countDiscountMedical,
              !0
            );
          },
          openToPublicValueBox: function () {
            return this.buildBoxValue(
              "mealpublic",
              "fa-users",
              this.countPublicMeal,
              !0
            );
          },
          freeStudentMealsValueBox: function () {
            return this.buildBoxValue(
              "mealstudent",
              "fa-school",
              this.countFreeStudentMeal,
              !0
            );
          },
          freeProduceValueBox: function () {
            return this.buildBoxValue(
              "freeproduce",
              "fa-apple-alt",
              this.countProduce,
              !0
            );
          },
          freeGroceryValueBox: function () {
            return this.buildBoxValue(
              "freegroceries",
              "fa-shopping-basket",
              this.countGroceries,
              !0
            );
          },
          mustPreOrderValueBox: function () {
            return this.buildBoxValue(
              "mustpreorder",
              "fa-phone",
              this.countMustPreOrder,
              !0
            );
          },
          valueBoxes: function () {
            switch (this.need) {
              case "grocery":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.deliveryValueBox,
                  this.seniorShoppingValueBox,
                ];
              case "food_bev":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.deliveryValueBox,
                  this.seniorShoppingValueBox,
                ];
              case "restaurant":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.medicalDiscountsValueBox,
                  this.deliveryValueBox,
                ];
              case "family":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.deliveryValueBox,
                  this.mustPreOrderValueBox,
                ];
              case "farm":
                return [
                  this.curbsidePickupValueBox,
                  this.onFarmPickupValueBox,
                  this.farmersMarketValueBox,
                  this.orderOnlineValueBox,
                ];
              case "meal":
                return [
                  this.openToPublicValueBox,
                  this.freeStudentMealsValueBox,
                  this.freeProduceValueBox,
                  this.freeGroceryValueBox,
                ];
              case "pharmacy":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.seniorShoppingValueBox,
                  this.deliveryValueBox,
                ];
              case "pet":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.medicalDiscountsValueBox,
                  this.deliveryValueBox,
                ];
              default:
                return [null, null, null, null, null];
            }
          },
        },
      },
      Le = Oe,
      De = (a("9476"), Object(g["a"])(Le, ve, ye, !1, null, null, null)),
      Be = De.exports,
      Ve = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "b-container",
          { staticClass: "bv-example-row px-0", attrs: { fluid: "" } },
          [
            a(
              "div",
              { staticClass: "map" },
              [
                e.showMap
                  ? a(
                      "l-map",
                      {
                        ref: "covidMap",
                        staticStyle: { height: "100%", width: "100%" },
                        attrs: {
                          zoom: e.zoom,
                          center: e.center,
                          options: e.mapOptions,
                        },
                        on: {
                          "update:center": e.centerUpdated,
                          "update:zoom": function (t) {
                            return (e.zoom = t);
                          },
                          "update:bounds": e.boundsUpdated,
                          click: e.unselectBusiness,
                        },
                      },
                      [
                        a("l-control", { attrs: { position: "topright" } }, [
                          a(
                            "div",
                            {
                              staticClass: "mapkey",
                              class: { "show-key": e.showKey },
                            },
                            [
                              a("div", { staticClass: "title-block" }, [
                                a("h6", { staticClass: "title" }, [
                                  e._v(e._s(e.$t("label.mapkey"))),
                                ]),
                                a("i", {
                                  staticClass: "fas fa-info-circle",
                                  on: {
                                    click: function (t) {
                                      e.showKey = !e.showKey;
                                    },
                                  },
                                }),
                              ]),
                              e._l(e.mapKey, function (t) {
                                return a(
                                  "div",
                                  {
                                    key: t.title,
                                    staticClass: "keys",
                                    class: { "show-key": e.showKey },
                                  },
                                  [
                                    a("icon-list-item", {
                                      attrs: {
                                        "leaflet-icon": t.icon,
                                        title: t.title,
                                        link: "",
                                      },
                                    }),
                                  ],
                                  1
                                );
                              }),
                            ],
                            2
                          ),
                        ]),
                        a("l-tile-layer", {
                          attrs: { url: e.mapUrl, attribution: e.attribution },
                        }),
                        e.userLocationData
                          ? a("l-circle", {
                              attrs: {
                                name: "Accuracy",
                                "lat-lng": e.userLocationData,
                                radius: e.accuracyRadius(),
                                weight: 1,
                                "class-name": "locAccuracy",
                              },
                            })
                          : e._e(),
                        e.userLocationData
                          ? a("l-circle-marker", {
                              attrs: {
                                name: "Your Location",
                                "lat-lng": e.userLocationData,
                                radius: e.circleRadius(),
                                weight: 1,
                                "class-name": "locMarker",
                              },
                            })
                          : e._e(),
                        a(
                          "v-marker-cluster",
                          {
                            ref: "marks",
                            attrs: { options: e.clusterOptions },
                          },
                          e._l(e.filteredMarkers, function (t, s) {
                            return a("l-marker", {
                              key: s,
                              attrs: {
                                "lat-lng": e.latLng(
                                  t.marker.gsx$lat.$t,
                                  t.marker.gsx$lon.$t
                                ),
                                icon: e.selectedIcon(
                                  null !== e.location.currentBusiness &&
                                    t.marker.id.$t ===
                                      e.location.currentBusiness.marker.id.$t,
                                  t
                                ),
                              },
                              on: {
                                click: function (a) {
                                  return e.$emit("location-selected", {
                                    locValue: s,
                                    locId: t.marker.id.$t,
                                    isSetByMap: !0,
                                  });
                                },
                              },
                            });
                          }),
                          1
                        ),
                        a(
                          "l-control",
                          {
                            staticClass: "user-location-button",
                            attrs: { position: "bottomright" },
                          },
                          [
                            a(
                              "a",
                              {
                                ref: "useLocation",
                                staticClass: "user-location-link",
                                attrs: {
                                  href: "#",
                                  title: e.$t("label.useyourlocation"),
                                  "aria-label": e.$t("label.useyourlocation"),
                                },
                                on: { click: e.getUserLocation },
                              },
                              [a("i", { staticClass: "fas fa-location-arrow" })]
                            ),
                          ]
                        ),
                        a(
                          "b-alert",
                          {
                            staticClass: "location-alert",
                            attrs: {
                              variant: "warning",
                              show: e.showError,
                              dismissible: "",
                              fade: "",
                            },
                            on: { dismissed: e.resetError },
                          },
                          [e._v(" " + e._s(e.errorMessage) + " ")]
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            ),
          ]
        );
      },
      Ie = [],
      Pe = a("5fda"),
      Ee = a("2699"),
      je = a("a40a"),
      Ae = a("4e2b"),
      Ne = a("2253"),
      ze = a("0dbd"),
      Fe = a("ea97"),
      Te = a("e11e"),
      He = a("ca9f"),
      Re = a.n(He);
    delete Te["Icon"].Default.prototype._getIconUrl,
      Te["Icon"].Default.mergeOptions({
        iconRetinaUrl: a("584d"),
        iconUrl: a("6397"),
        shadowUrl: a("e2b9"),
      });
    var Ue = {
        name: "ResourceMap",
        components: {
          BAlert: Pe["a"],
          LMap: Ee["a"],
          LTileLayer: je["a"],
          LMarker: Ae["a"],
          LControl: Ne["a"],
          LCircle: ze["a"],
          LCircleMarker: Fe["a"],
          "v-marker-cluster": Re.a,
          IconListItem: T,
        },
        props: {
          filteredMarkers: Array,
          location: {
            locValue: Number,
            currentBusiness: Object,
            isSetByMap: Boolean,
          },
          mapUrl: String,
          attribution: String,
          centroid: { lat: Number, lng: Number },
        },
        data: function () {
          return {
            center: Object(Te["latLng"])(this.centroid.lat, this.centroid.lng),
            zoom: this.centroid.zoom,
            showParagraph: !0,
            showError: !1,
            errorMessage: "",
            userLocationData: !1,
            mapOptions: { zoomSnap: 0.5, setView: !0, zoomControl: !0 },
            showMap: !0,
            locationData: location,
            accuracy: 0,
            circle: { border: "white", fill: "#f00" },
            clusterOptions: {
              spiderfyOnMaxZoom: !0,
              maxClusterRadius: 40,
              disableClusteringAtZoom: 16,
            },
            showKey: !1,
          };
        },
        mounted: function () {
          var e = this;
          this.editZoomControl(),
            this.$nextTick(function () {
              e.$emit("bounds", e.$refs.covidMap.mapObject.getBounds());
            });
        },
        computed: {
          mapKey: function () {
            return [
              {
                title: this.$t("label.open"),
                icon: Te["ExtraMarkers"].icon({
                  className: "markeropen",
                  icon: "na",
                  prefix: "fa",
                  svg: !0,
                }),
              },
              {
                title: this.$t("label.closedonday"),
                icon: Te["ExtraMarkers"].icon({
                  className: "markerclosed",
                  icon: "na",
                  prefix: "fa",
                  svg: !0,
                }),
              },
              {
                title: this.$t("label.selected"),
                icon: Te["ExtraMarkers"].icon({
                  className: "markerselected",
                  icon: "na",
                  prefix: "fa",
                  svg: !0,
                }),
              },
            ];
          },
        },
        methods: {
          centerUpdated: function (e) {
            (this.center = e), this.$emit("center", e);
          },
          boundsUpdated: function (e) {
            this.$emit("bounds", e);
          },
          resetError: function () {
            (this.showError = !1), (this.errorMessage = "");
          },
          userIcon: function () {
            var e = Te["ExtraMarkers"].icon({
              markerColor: "usermarker",
              icon: "fas fa-home",
              prefix: "fa",
              svg: !0,
            });
            return e;
          },
          getUserLocation: function () {
            var e = this,
              t = this.$refs.covidMap.mapObject;
            t.locate({
              setView: !0,
              enableHighAccuracy: !0,
              watch: !0,
              maximumAge: 6e4,
            }),
              t.on("locationfound", function (t) {
                t.latitude &&
                  t.longitude &&
                  ((e.userLocationData = Object(Te["latLng"])(
                    t.latitude,
                    t.longitude
                  )),
                  (e.accuracy = t.accuracy),
                  e.$refs.useLocation.classList.add("active"));
              }),
              t.on("locationerror", function (t) {
                t.message &&
                  t.code != t.TIMEOUT &&
                  ((e.showError = !0),
                  (e.errorMessage = t.message),
                  (e.errorMessage +=
                    " Please check your browser settings and ensure you have given our site permission to view your location."),
                  e.$refs.useLocation.classList.add("disabled"));
              });
          },
          editZoomControl: function () {
            var e = this.$el.querySelector(".leaflet-top.leaflet-left");
            e.className = "leaflet-bottom leaflet-right";
          },
          circleRadius: function () {
            var e = 8;
            return e <= 5 && (e = 5), e;
          },
          accuracyRadius: function () {
            var e = this.accuracy;
            return e;
          },
          latLng: Te["latLng"],
          selectedIcon: function (e, t) {
            var a = t.oc,
              s = a ? "markeropen" : "markerclosed",
              i = R(t.marker);
            e && (s = "markerselected");
            var r = Te["ExtraMarkers"].icon({
              className: s,
              icon: i,
              prefix: "fa",
              svg: !0,
            });
            return r;
          },
          unselectBusiness: function () {
            !this.location.currentBusiness ||
              ("xs" !== this.$screen.breakpoint &&
                "sm" !== this.$screen.breakpoint) ||
              this.$emit("location-unselected", !0);
          },
        },
      },
      Ge = Ue,
      We = (a("e80a"), Object(g["a"])(Ge, Ve, Ie, !1, null, null, null)),
      qe = We.exports,
      Ke = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "b-modal",
          {
            attrs: {
              id: "about-us",
              size: "xl",
              "dialog-class": "m-0 m-md-auto",
              centered: "",
              scrollable: "",
              "hide-header-close": "",
            },
            scopedSlots: e._u([
              {
                key: "modal-title",
                fn: function () {
                  return [e._v(" " + e._s(e.$t("about.title")) + " ")];
                },
                proxy: !0,
              },
              {
                key: "modal-footer",
                fn: function () {
                  return [
                    a(
                      "b-button",
                      {
                        attrs: { right: "" },
                        on: {
                          click: function (t) {
                            return e.$bvModal.hide("about-us");
                          },
                        },
                      },
                      [e._v(e._s(e.$t("label.close")))]
                    ),
                  ];
                },
                proxy: !0,
              },
            ]),
          },
          [
            a(
              "b-card",
              { staticClass: "h-100", attrs: { "no-body": "" } },
              [
                a(
                  "b-tabs",
                  { attrs: { card: "" } },
                  [
                    a(
                      "b-tab",
                      {
                        staticClass: "mt-3 mx-auto",
                        attrs: { title: e.$t("about.getinvolved") },
                      },
                      [
                        a("p", [e._v(e._s(e.$t("about.devhelp.info")))]),
                        a("b", [e._v(e._s(e.$t("about.devhelp.support")))]),
                        a(
                          "i18n",
                          {
                            attrs: { path: "about.devhelp.addinfo", tag: "p" },
                          },
                          [
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "https://forms.gle/fWiCg2z5CRx9ukGu7",
                                },
                              },
                              [e._v(e._s(e.$t("about.devhelp.addbusiness")))]
                            ),
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "https://forms.gle/G2wrUd4TE3yqrW1FA",
                                },
                              },
                              [e._v(e._s(e.$t("about.devhelp.updatebusiness")))]
                            ),
                          ]
                        ),
                        a("b", [
                          e._v(e._s(e.$t("about.devhelp.becomeambassador"))),
                        ]),
                        a(
                          "i18n",
                          {
                            attrs: {
                              path: "about.devhelp.ambassadorinfo",
                              tag: "p",
                            },
                          },
                          [
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "emailto:contact@nccovidsupport.org",
                                },
                              },
                              [e._v("contact@nccovidsupport.org")]
                            ),
                          ]
                        ),
                        a("b", [e._v(e._s(e.$t("about.devhelp.dupsite")))]),
                        a(
                          "i18n",
                          {
                            attrs: { path: "about.devhelp.devnote", tag: "p" },
                          },
                          [
                            a(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://github.com/code-for-chapel-hill/COVID-Support-For-CH",
                                },
                              },
                              [e._v(e._s(e.$t("about.devhelp.source")))]
                            ),
                            a(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://github.com/codeforamerica/codeofconduct",
                                },
                              },
                              [e._v(e._s(e.$t("about.devhelp.conduct")))]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    a(
                      "b-tab",
                      {
                        staticClass: "mt-3 mx-auto",
                        attrs: { title: e.$t("about.partners") },
                      },
                      [
                        a("p", [e._v(e._s(e.$t("about.info")))]),
                        a("ul", [
                          a("li", [
                            a(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://www.orangecountync.gov/1710/Visitors-Bureau",
                                },
                              },
                              [e._v(e._s(e.$t("about.orgs.bureau")))]
                            ),
                          ]),
                          a("li", [
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "http://www.downtownchapelhill.com/",
                                },
                              },
                              [e._v(e._s(e.$t("about.orgs.partnership")))]
                            ),
                          ]),
                          a("li", [
                            a(
                              "a",
                              { attrs: { href: "https://locallistnc.com/" } },
                              [e._v(e._s(e.$t("about.orgs.localistnc")))]
                            ),
                          ]),
                          a("li", [
                            a(
                              "a",
                              {
                                attrs: { href: "https://visitpittsboro.com/" },
                              },
                              [e._v(e._s(e.$t("about.orgs.pittsboro-siler")))]
                            ),
                          ]),
                        ]),
                        a("b", [e._v(e._s(e.$t("about.datahead")))]),
                        a("p", [e._v(e._s(e.$t("about.dataprivacy")))]),
                      ]
                    ),
                    a(
                      "b-tab",
                      {
                        staticClass: "mt-3 mx-auto",
                        attrs: { title: e.$t("about.contact") },
                      },
                      [
                        a(
                          "i18n",
                          { attrs: { path: "about.contactus.info", tag: "p" } },
                          [
                            a(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://www.meetup.com/Triangle-Code-for-America/",
                                },
                              },
                              [e._v(e._s(e.$t("about.orgs.chb")))]
                            ),
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "https://www.codeforamerica.org/",
                                },
                              },
                              [e._v(e._s(e.$t("about.orgs.cfa")))]
                            ),
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "mailto:contact@nccovidsupport.org",
                                },
                              },
                              [e._v("contact@nccovidsupport.org")]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Je = [],
      Qe = { name: "about-us-modal" },
      Ze = Qe,
      Ye = (a("2975"), Object(g["a"])(Ze, Ke, Je, !1, null, null, null)),
      Xe = Ye.exports,
      et = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          { staticClass: "mobile-search-filters" },
          [
            a("search-filters", {
              attrs: { need: e.need },
              on: {
                "need-selected": function (t) {
                  return e.$emit("need-selected", t);
                },
              },
            }),
            e.warning
              ? a(
                  "b-alert",
                  {
                    attrs: { variant: "warning", dismissible: "" },
                    model: {
                      value: e.showWarning,
                      callback: function (t) {
                        e.showWarning = t;
                      },
                      expression: "showWarning",
                    },
                  },
                  [e._v(e._s(e.warning))]
                )
              : e._e(),
          ],
          1
        );
      },
      tt = [],
      at = {
        props: { need: String, warning: String },
        components: { SearchFilters: he },
        data: function () {
          return { showWarning: !0 };
        },
      },
      st = at,
      it = (a("30d3"), Object(g["a"])(st, et, tt, !1, null, "43aef531", null)),
      rt = it.exports,
      nt = {
        settings: {
          initialMapCenter: { lat: 35.91371, lng: -79.057919 },
          initialMapZoom: 10,
        },
        socialMedia: [
          {
            name: "Facebook",
            icon: "facebook-square",
            url: "https://www.facebook.com/nccovidsupport",
          },
          {
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/nccovidsupport",
          },
          {
            name: "Instagram",
            icon: "instagram",
            url: "https://instagram.com/nccovidsupport",
          },
          {
            name: "GitHub",
            icon: "github",
            url: "https://github.com/readingdancer/NC-COVID-Support",
          },
        ],
        data: {
          spreadsheetUrl:
            "https://spreadsheets.google.com/feeds/list/1NNo23idWdFofp5LbBS_3S6EQfzgbe1sVgr2GRAjucA0/1/public/values?alt=json",
        },
        maps: {
          normal: {
            url:
              "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png",
            attribution:
              '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          },
          dark: {
            url:
              "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png",
            attribution:
              '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          },
        },
        warning: "This site is no longer being updated",
      },
      ot = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "i18n",
          { staticClass: "pagetitle", attrs: { path: "title", tag: "span" } },
          [a("span", { staticClass: "ncblue" }, [e._v("NC")])]
        );
      },
      lt = [],
      ct = { name: "theme-header" },
      ut = ct,
      dt = Object(g["a"])(ut, ot, lt, !1, null, null, null),
      pt = dt.exports;
    function mt(e, t) {
      for (var a in t) e.push(t[a]);
      return e;
    }
    function ht(e, t) {
      var a = e.includes(t);
      if (a)
        return e.filter(function (e) {
          return e !== t;
        });
      var s = e;
      return s.push(t), s;
    }
    var ft = {
        name: "app",
        props: { msg: String },
        watch: { currentPage: "fetchData" },
        created: function () {
          this.fetchData();
        },
        components: {
          MobileSearchFilters: rt,
          AboutUsModal: Xe,
          AppHeader: k,
          Highlights: Be,
          ResourceMap: qe,
          Sidebar: ke,
          ThemeHeader: pt,
        },
        data: function () {
          var e = window.matchMedia("(prefers-color-scheme: dark)"),
            t = window.matchMedia("(min-width: 768px)");
          return {
            entries: null,
            need: "none",
            day: _,
            isFilterOpen: !0,
            language: { name: "English", iso: "en" },
            locationData: {
              locValue: null,
              locId: null,
              currentBusiness: null,
              isSetByMap: !1,
            },
            showList: !1,
            highlightFilters: [],
            bounds: null,
            centroid: {
              lat: nt.settings.initialMapCenter.lat,
              lng: nt.settings.initialMapCenter.lng,
              zoom: nt.settings.initialMapZoom,
            },
            mobileMediaQuery: t,
            darkModeMediaQuery: e,
            darkMode: e.matches,
            mapUrl: "",
            attribution: null,
            socialMediaico: nt.socialMedia,
            warning: nt.warning,
            warningMobile: nt.warning,
          };
        },
        mounted: function () {
          var e = this;
          this.setDarkMode(this.darkMode),
            this.darkModeMediaQuery.addListener(function (t) {
              (e.darkMode = t.matches), e.setDarkMode(e.darkMode);
            }),
            this.mobileMediaQuery.addListener(function () {
              return e.closeListOnMobile();
            }),
            this.closeListOnMobile();
        },
        methods: {
          setDarkMode: function (e) {
            (this.mapUrl = e ? nt.maps.dark.url : nt.maps.normal.url),
              (this.attribution = e
                ? nt.maps.dark.attribution
                : nt.maps.normal.attribution);
          },
          closeListOnMobile: function () {
            this.mobileMediaQuery.matches ||
              ("none" === this.need &&
                this.day === _ &&
                (this.isFilterOpen = !1));
          },
          centerUpdated: function (e) {
            this.centroid = { lat: e.lat, lng: e.lng };
          },
          boundsUpdated: function (e) {
            this.bounds = e;
          },
          getDay: function (e) {
            return 0 == e ? 6 : e - 1;
          },
          boxSelected: function (e) {
            this.highlightFilters = ht(this.highlightFilters, e.need);
          },
          isAnyDaySelected: function (e) {
            return e >= _;
          },
          needSelected: function (e) {
            (this.need = e),
              (this.showList = "none" !== this.need),
              (this.highlightFilters = []),
              (this.warningMobile = null),
              window.gtag("event", "What do you need?", {
                event_category: "Search - (" + this.language.name + ")",
                event_label: e,
              });
          },
          changeLanguage: function (e) {
            (this.language = e), this.$root.updateLang(e.iso);
          },
          fetchData: function () {
            var e = this;
            return Object(d["a"])(
              regeneratorRuntime.mark(function t() {
                var a, s;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), fetch(nt.data.spreadsheetUrl);
                      case 2:
                        return (a = t.sent), (t.next = 5), a.json();
                      case 5:
                        (s = t.sent), (e.entries = s.feed.entry);
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          updateShowList: function (e) {
            this.showList = e;
          },
          closeDetails: function () {
            (this.showList = !0),
              (this.locationData = { currentBusiness: null });
          },
          locationSelected: function (e) {
            (e.currentBusiness = this.filteredMarkers[e.locValue]),
              (this.locationData = e),
              (this.isFilterOpen = !0),
              (this.showList = !1);
            var t = this.filteredMarkers[e.locValue].marker.gsx$provideraddloc
              .$t
              ? ", " +
                this.filteredMarkers[e.locValue].marker.gsx$provideraddloc.$t
              : "";
            window.gtag(
              "event",
              e.isSetByMap ? "Marker clicked" : "List item clicked",
              {
                event_category: "View details - (" + this.language.name + ")",
                event_label:
                  this.filteredMarkers[e.locValue].marker.gsx$providername.$t +
                  t,
              }
            );
          },
          locationUnselected: function (e) {
            (this.locationData = {
              locValue: null,
              locId: null,
              currentBusiness: null,
              isSetByMap: e,
            }),
              (this.isFilterOpen = !1),
              (this.showList = !0);
          },
        },
        computed: {
          filteredMarkers: function () {
            var e,
              t = this;
            if (null == this.entries) return null;
            (e =
              "family" == this.need
                ? this.entries.filter(function (e) {
                    return 1 == e.gsx$familymeal.$t && "1" == e.gsx$status.$t;
                  })
                : this.entries.filter(function (e) {
                    return (
                      e.gsx$resource.$t === t.need && "1" == e.gsx$status.$t
                    );
                  })),
              this.highlightFilters.forEach(function (t) {
                D.includes(t) &&
                  (e = e.filter(function (e) {
                    return "1" == e["gsx$" + t].$t;
                  }));
              });
            var a = new Date().getDay(),
              s = a;
            this.isAnyDaySelected(this.day) || (s = this.day);
            var i = O[this.getDay(s)],
              r = e.filter(function (e) {
                return "0" !== e[i].$t;
              }),
              n = e.filter(function (e) {
                return "0" == e[i].$t;
              }),
              o = mt(
                r.map(function (e) {
                  return {
                    marker: e,
                    oc: !0,
                    distance: G(
                      [t.centroid.lat, t.centroid.lng],
                      [e.gsx$lat.$t, e.gsx$lon.$t],
                      !0
                    ),
                  };
                }),
                n.map(function (e) {
                  return {
                    marker: e,
                    oc: !1,
                    distance: G(
                      [t.centroid.lat, t.centroid.lng],
                      [e.gsx$lat.$t, e.gsx$lon.$t],
                      !0
                    ),
                  };
                })
              ).sort(W);
            return o;
          },
          highlightFilteredMarkers: function () {
            var e = this,
              t = [];
            return (
              this.filteredMarkers.forEach(function (a) {
                e.bounds.contains(
                  Object(Te["latLng"])(a.marker.gsx$lat.$t, a.marker.gsx$lon.$t)
                ) && t.push(a);
              }),
              this.isAnyDaySelected(this.day)
                ? t.map(function (e) {
                    var t = Object.assign({}, e);
                    return (t.oc = !0), t;
                  })
                : t
            );
          },
        },
      },
      gt = ft,
      bt = Object(g["a"])(gt, c, u, !1, null, null, null),
      kt = bt.exports;
    a("26f3"), a("f238"), a("6cc5"), a("8243"), a("3ac1"), a("70ef"), a("b107");
    s["default"].use(i["a"], "bootstrap"),
      s["default"].use(r["a"]),
      (s["default"].config.productionTip = !0),
      new s["default"]({
        i18n: l,
        render: function (e) {
          return e(kt);
        },
        methods: {
          updateLang: function (e) {
            l.locale = e;
          },
        },
      }).$mount("#app");
  },
  "5feb": function (e, t, a) {},
  6278: function (e, t, a) {},
  "69ce": function (e, t, a) {
    "use strict";
    a("ee97");
  },
  "70ef": function (e, t, a) {},
  "783a": function (e, t, a) {},
  "784d": function (e, t, a) {},
  "7c81": function (e, t, a) {
    "use strict";
    a("2011");
  },
  "7e8f": function (e, t, a) {},
  "8fde": function (e, t, a) {},
  9476: function (e, t, a) {
    "use strict";
    a("5feb");
  },
  "958b": function (e, t, a) {
    "use strict";
    a("7e8f");
  },
  a306: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"Cerrar","contact":"Contáctenos","contactus":{"email":"Email","info":"Esta página funciona con {0} de {1}. Para preguntas, contáctenos por correo electrónico al {2}."},"datahead":"NOTA SOBRE COMPARTIR DATOS","dataprivacy":"La información sobre NC COVID Support ha sido recopilada de fuentes web públicas por voluntarios o ingresada por propietarios de negocios / proveedores de recursos. Los datos se proporcionan para ayudar al público, las empresas locales, los socios gubernamentales y las organizaciones sin fines de lucro durante la pandemia de COVID-19. Los datos no deben usarse para empresas comerciales u otros fines sin el permiso expreso del Soporte de NC COVID.","devhelp":{"addbusiness":"agregar un negocio","addinfo":"Utilice nuestros formularios en línea para {0} o {1}.","ambassadorinfo":"Ayúdenos a ampliar la cobertura en Carolina del Norte. Los embajadores trabajarán con el gobierno local y las asociaciones empresariales para brindar el apoyo de NC COVID a su comunidad. Envíenos un correo electrónico a {0} para obtener herramientas y recursos para comenzar.","becomeambassador":"Conviértase en embajador de la comunidad","conduct":"Código de Conducta","devnote":"Desarrolladores: encuentre nuestros {0} y {1} en GitHub.","dupsite":"Alternativamente, puede duplicar un sitio para su estado.","info":"Este es un proyecto de código abierto, creado para compartir y expandirse a otras comunidades.","source":"codigo fuente","support":"Apoye a sus vecinos y negocios locales: ¡ayúdenos a crecer!","updatebusiness":"actualizar una entrada existente"},"getinvolved":"Involucrarse","info":"Nuestra base de datos de recursos se beneficia de la información recopilada por estas organizaciones:","linktext":"Sobre nosotros","orgs":{"bureau":"Oficina de Visitantes de Chapel Hill / Condado de Orange","cfa":"Código para América","chb":"Brigada de Chapel Hill","localistnc":"#LocalListNC","partnership":"Asociación del centro de Chapel Hill","pittsboro-siler":"Oficina de Convenciones y Visitantes de la Ciudad de Pittsboro-Siler"},"partners":"Fuentes de información","title":"Sobre este sitio"},"call":"Llamar","category":{"childcare":"Cuidado de los niños","family":"Comida familiar preparada","farm":"Granjas y Mercados de Agricultores","food_bev":"Especialidad en comidas y bebidas","grocery":"Comestibles","meal":"Comidas gratis","pet":"Suministros de mascotas","pharmacy":"Farmacia","restaurant":"Restaurantes","school":"Comidas escolares"},"dayofweek":{"any":"Alguna","friday":"Viernes","monday":"Lunes","saturday":"Sábado","sunday":"Domingo","thursday":"Jueves","tuesday":"Martes","wednesday":"Miércoles"},"getdirections":"Dirección","getdiections_short":"Dirección","label":{"address":"Dirección","allweek":"Toda la semana","backtolist":"Volver a la lista","close":"Cerrar","closed":"Cerrado","closed-on":"Cerrado el","closed-today":"Cerrado hoy","closedonday":"Cerrado (en el día seleccionado actual)","curbside":"Negocio con recogida en la acera|Negocios con recogida en la acera","delivery":"Entrega","details-last-updated":"Detalles actualizados por última vez","discountmedical":"Descuento para trabajadores médicos|Descuentos para trabajadores médicos","discounts":"","drivethru":"Auto-servicio","email":"Email","email_lowercase":"email","farmersmarket":"Mercado de agricultores | Mercados de agricultores","farmpick-up":"Recogida en la granja","freegroceries":"Tienda de comestibles gratis|Tiendas de comestibles gratis","freemeals":"Lugar de comidas gratis|Lugares de comidas gratis","freeproduce":"Lugar de productos agrícolas gratuitso|Lugares de productos agrícolas gratuitos","instructions":"Instrucciones","locationhelplinktext":"aprende más","mapkey":"Guia de mapa","mealpublic":"Comidas abiertas al público","mealstudent":"Comidas para estudiantes","mustpreorder":"Debe pre-ordenar","normalhours":"Horas normales","notes":"Notas","offers":"Ofertas","open":"Abierto","openinghours":"Horario de apertura","orderonline":"Ordene y pague en línea","phone":"Teléfono","selectacategory":"Seleccione una categoría...","selected":"Seleccionado","seniorhours":"Horas para gente mayor de edad","specialhours":"Horario comercial para gente mayor de edad","useyourlocation":"Usa tu ubicación","website":"Sitio web"},"languages":{"ar":"árabe","en":"inglés","es":"español","fr":"francés","ja":"japonés","ko":"coreano","ms":"birmano","zh":"Chino simplificado"},"locationhelp":"","sidebar":{"close-panel":"Cerrar panel de búsqueda","info-about-us":"Actualmente, este sitio admite el condado de Chatham y el condado de Orange, Carolina del Norte. Con","info-end-text":", podemos ampliar nuestra cobertura.","info-link-text":"su ayuda","open-panel":"Abrir panel de búsqueda","shopsafe":"Por favor, ¡COMPRE DE FORMA SEGURA!","sixfeet":"Manténgase a 6 pies de distancia cuando vaya de compras.","stayhome":"Si está enfermo/a, quédese en casa.","washhands":"Lávese las manos con frecuencia.","what-do-you-need":"¿Que necesita?","when-do-you-need-it":"Cuando lo necesita?"},"title":"Soporte de {0} COVID","website":""}'
    );
  },
  af08: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"قريب","contact":"اتصل بنا","contactus":{"email":"البريد الإلكتروني","info":"هذه الصفحة مدعومة من {0} من {1}. للأسئلة ، يرجى الاتصال بنا عبر البريد الإلكتروني على {2}."},"datahead":"ملاحظة حول مشاركة البيانات","dataprivacy":"تم جمع المعلومات حول NC COVID Support من مصادر الويب العامة من قبل متطوعين أو تم إدخالها من قبل أصحاب الأعمال / مقدمي الموارد. يتم توفير البيانات لمساعدة الجمهور والشركات المحلية والشركاء الحكوميين والمنظمات غير الربحية خلال جائحة COVID-19. لا يجب استخدام البيانات للمشاريع التجارية أو لأغراض أخرى دون إذن صريح من NC COVID Support.","devhelp":{"addbusiness":"إضافة عمل","addinfo":"استخدم نماذجنا عبر الإنترنت لـ {0} أو {1}.","ambassadorinfo":"ساعدنا في توسيع التغطية عبر ولاية كارولينا الشمالية. سيعمل السفراء مع الحكومة المحلية وجمعيات الأعمال لجلب NC COVID Support إلى مجتمعهم. راسلنا عبر البريد الإلكتروني {0} للحصول على الأدوات والموارد للبدء.","becomeambassador":"كن سفير مجتمع","conduct":"مدونة قواعد السلوك","devnote":"مطورو البرامج - ابحث عن {0} و {1} على GitHub.","dupsite":"بدلاً من ذلك ، يمكنك تكرار موقع لولتك.","info":"هذا مشروع مفتوح المصدر ، تم بناؤه للمشاركة والتوسع في المجتمعات الأخرى.","source":"مصدر الرمز","support":"ادعم جيرانك والشركات المحلية - ساعدنا على النمو!","updatebusiness":"تحديث إدخال موجود"},"getinvolved":"شارك","info":"تستفيد قاعدة بياناتنا من الموارد من المعلومات التي تجمعها هذه المنظمات:","linktext":"معلومات عنا","orgs":{"bureau":"مكتب زوار تشابل هيل / مقاطعة أورانج","cfa":"كود لأمريكا","chb":"لواء تشابل هيل","localistnc":"#LocalListNC","partnership":"شراكة وسط تشابل هيل","pittsboro-siler":"بيتسبورو-سيلر سيتي للمؤتمرات ومكتب الزوار"},"partners":"مصادر المعلومات","title":"عن هذا الموقع"},"call":"مكالمة","category":{"childcare":"رعاية الطفل","family":"وجبات عائلية معدة","farm":"أسواق المزارع والمزارعين","food_bev":"المأكولات والمشروبات المتخصصة","grocery":"البقالة","meal":"وجبات مجانية","pet":"مستلزمات الحيوانات الأليفة","pharmacy":"مقابل","restaurant":"مطاعم","school":"الوجبات المدرسية"},"dayofweek":{"any":"أي","friday":"يوم الجمعة","monday":"الإثنين","saturday":"يوم السبت","sunday":"الأحد","thursday":"الخميس","tuesday":"الثلاثاء","wednesday":"الأربعاء"},"getdirections":"","getdirections_short":"","label":{"address":"عنوان","allweek":"كل الاسبوع","backtolist":"الرجوع للقائمة","close":"قريب","closed":"مغلق","closed-on":"أغلقت يوم","closed-today":"مغلق اليوم","closedonday":"مغلق (في اليوم المحدد الحالي)","curbside":"البيك اب","delivery":"توصيل","details-last-updated":"تم تحديث التفاصيل","discountmedical":"خصم عامل طبي | تخفيضات عامل طبي","discounts":"خصم عامل طبي | تخفيضات عامل طبي","drivethru":"الطلب من المركبة","email":"البريد الإلكتروني","email_lowercase":"البريد الإلكتروني","farmersmarket":"سوق المزارعين |","farmpick-up":"الاستلام من المزرعة","freegroceries":"موقع بقالة مجاني | مواقع بقالة مجانية","freemeals":"موقع وجبة مجانية | مواقع وجبات مجانية","freeproduce":"موقع إنتاج مجاني | مواقع إنتاج مجاني","instructions":"تعليمات","locationhelplinktext":"أعرف أكثر","mapkey":"مفتاح الخريطة","mealpublic":"وجبات مفتوحة للجمهور","mealstudent":"وجبات الطلاب","mustpreorder":"يجب الطلب المسبق","normalhours":"ساعات العمل العادية","notes":"ملاحظات","offers":"عروض","open":"افتح","openinghours":"ساعات العمل","orderonline":"اطلب وادفع عبر الإنترنت","phone":"هاتف","selectacategory":"اختر تصنيف...","selected":"المحدد","seniorhours":"ساعات كبار","specialhours":"ساعات تسوق كبار","useyourlocation":"استخدم موقعك","website":"موقع الكتروني"},"languages":{"ar":"عربى","en":"الإنجليزية","es":"الأسبانية","fr":"الفرنسية","ja":"اليابانية","ko":"الكورية","ms":"البورمية","zh":"الصينية المبسطة"},"locationhelp":"","sidebar":{"close-panel":"أغلق لوحة البحث","info-about-us":"حاليًا ، يدعم هذا الموقع مقاطعة Chatham ومقاطعة Orange ، NC. مع","info-end-text":"، يمكننا توسيع تغطيتنا.","info-link-text":"مساعدتك","open-panel":"افتح لوحة البحث","shopsafe":"من فضلك ، تسوق آمن!","sixfeet":"ابق على مسافة 6 أقدام عند التسوق.","stayhome":"إذا كنت مريضًا ، ابق في المنزل.","washhands":"اغسل يديك كثيرًا.","what-do-you-need":"ماذا تحتاج؟","when-do-you-need-it":"متى تحتاجها؟"},"title":"{0} دعم COVID","website":"موقع الكتروني"}'
    );
  },
  af35: function (e, t, a) {},
  b107: function (e, t, a) {},
  c565: function (e, t, a) {
    "use strict";
    a("6278");
  },
  cb8d: function (e, t, a) {
    "use strict";
    a("e3a1");
  },
  d39f: function (e, t, a) {},
  dd11: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"닫기","contact":"문의하기","contactus":{"email":"이메일","info":"이 페이지는 {1}의 {0} 에 의해 제공됩니다. 궁금한 점은 {2}으로 이메일을 통해 문의하시기 바랍니다."},"datahead":"데이터 공유에 대한 참고 사항","dataprivacy":"NC COVID 지원에 대한 정보는 자원 봉사자가 공개 웹 소스에서 수집하거나 사업자 / 자원 제공자가 입력했습니다. 이 데이터는 COVID-19 전염병 동안 공공, 지역 기업, 정부 파트너 및 비영리 단체를 지원하기 위해 제공됩니다. NC COVID 지원의 명시적인 허가 없이는 상업 벤처 또는 기타 목적으로 데이터를 사용해서는 안됩니다.","devhelp":{"addbusiness":"사업을 추가하다","addinfo":"온라인 양식 {0} 또는 {1}에 사용하시면 됩니다.","ambassadorinfo":"노스 캐롤라이나 전역에 리소스 범위를 넓히도록 도와주세요. 대사관은 지역 정부 및 기업 협회와 협력하여 지역 사회에 NC COVID 지원을 제공 할 것입니다. 도구 및 리소스를 원하시면 {0} 으로 이메일을 보내주십시오.","becomeambassador":"지역 사회의 대사가 되십시오","conduct":"행동 강령","devnote":"개발자-GitHub에서 {0} 와 {1} 을 찾을 수 있습니다.","dupsite":"다른 주에 계신다면, 당신의 주를 위해 이 사이트를 복사 하셔도 됩니다.","info":"이 프로젝트는 다른 커뮤니티와 공유하고 확장하기 위해 제작 된 오픈 소스 프로젝트입니다.","source":"소스 코드","support":"이웃과 지역 비즈니스를 지원하십시오-우리가 성장하도록 도와주세요!","updatebusiness":"기존 항목을 업데이트"},"getinvolved":"참여하기","info":"우리의 리소스 데이터베이스는 다음 조직에서 수집한 정보를 활용 합니다.","linktext":"회사 소개","orgs":{"bureau":"채플 힐 / 오렌지 카운티 관광청","cfa":"미국을위한 코드","chb":"채플 힐 여단","localistnc":"#LocalListNC","partnership":"채플 힐 다운타운 파트너십","pittsboro-siler":"피츠 보로-실러 시티 컨벤션 뷰로"},"partners":"정보 출처","title":"이 사이트에 대하여"},"call":"요구","category":{"childcare":"육아","family":"가족 음식 세트","farm":"농장 & 시장","food_bev":"전문 음식 및 음료","grocery":"식료품 점","meal":"무료 식사","pet":"애완 용품","pharmacy":"약국","restaurant":"레스토랑","school":"학교 급식"},"dayofweek":{"any":"어떤","friday":"금요일","monday":"월요일","saturday":"토요일","sunday":"일요일","thursday":"목요일","tuesday":"화요일","wednesday":"수요일"},"getdirections":"","getdiections_short":"","label":{"address":"주소","allweek":"일주일","backtolist":"다시 목록으로","close":"닫기","closed":"닫은","closed-on":"휴무","closed-today":"오늘 휴무","closedonday":"휴관일 (현재 선택한 요일)","curbside":"보도 픽업 레스토랑","delivery":"배달","details-last-updated":"마지막 업데이트","discountmedical":"의료인 할인 장소","discounts":"","drivethru":"드라이브스루","email":"이메일","email_lowercase":"이메일","farmersmarket":"농민 시장 | 농민 시장","farmpick-up":"농장 픽업","freegroceries":"무료 식료품류 장소","freemeals":"무료 식사 장소","freeproduce":"무료 농산물 장소","instructions":"방법","locationhelplinktext":"더 알아보기","mapkey":"지도 키","mealpublic":"공개 식사","mealstudent":"학생 식사","mustpreorder":"선주문 필요","normalhours":"정상 시간","notes":"노트","offers":"서비스","open":"열다","openinghours":"개관 시간","orderonline":"온라인 주문","phone":"전화","selectacategory":"카테고리를 선택하십시오 ...","selected":"선택된","seniorhours":"노약자 쇼핑 시간","specialhours":"노약자 쇼핑","useyourlocation":"내 위치 사용","website":"웹 사이트"},"languages":{"ar":"아라비아어","en":"영어","es":"스페인어","fr":"프랑스어","ja":"일본어","ko":"한국어","ms":"버마어","zh":"중국어"},"locationhelp":"","sidebar":{"close-panel":"검색 창 닫기","info-about-us":"현재이 사이트는 채텀 카운티와 노스 캐롤라이나 주 오렌지 카운티를 지원합니다. 와","info-end-text":"웹사이트를 확장시킬 수 있습니다.","info-link-text":"당신의 도움으로","open-panel":"검색 창 열기","shopsafe":"안전한 쇼핑을 기원합니다!","sixfeet":"밖에선 사람들과 6피트 (2미터) 정도 떨어져 있으세요.","stayhome":"아프면 집에 계세요.","washhands":"손을 자주 씻으세요.","what-do-you-need":"무엇이 필요합니까?","when-do-you-need-it":"언제 필요합니까?"},"title":"{0} COVID 지원","website":"웹 사이트"}'
    );
  },
  e3a1: function (e, t, a) {},
  e80a: function (e, t, a) {
    "use strict";
    a("784d");
  },
  edd4: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"Close","contact":"Contact Us","contactus":{"email":"email","info":"This page is powered by the {0} of {1}. For questions, please contact us via email at {2}."},"datahead":"NOTE ON DATA SHARING","dataprivacy":"The information on NC COVID Support has been gathered from public web sources by volunteers or entered by business owners/resource providers. The data are provided to assist the public, local businesses, government partners, and non-profits during the COVID-19 pandemic. The data should not be used for commercial ventures or other purposes without the express permission of NC COVID Support.","devhelp":{"addbusiness":"add a business","addinfo":"Use our online forms to {0} or {1}.","ambassadorinfo":"Help us expand coverage across North Carolina. Ambassadors will work with local government and business associations to bring NC COVID Support to their community. Email us at {0} for tools and resources to get started.","becomeambassador":"Become a community ambassador","conduct":"Code of Conduct","devnote":"Developers - find our {0} and {1} on GitHub.","dupsite":"Use our code to build a site for your state or region:","info":"This is an open-source project, built to share and expand to other communities.","source":"source code","support":"Support your neighbors and local businesses - help us grow!","updatebusiness":"update an existing entry"},"getinvolved":"Get Involved","info":"Our database of resources benefits from information collected by these organizations:","linktext":"About us","orgs":{"bureau":"Chapel Hill/Orange County Visitors Bureau","cfa":"Code for America","chb":"Chapel Hill Brigade","localistnc":"#LocalListNC","partnership":"Chapel Hill Downtown Partnership","pittsboro-siler":"Pittsboro-Siler City Convention & Visitors Bureau"},"partners":"Info Sources","title":"About this site"},"call":"Call","category":{"childcare":"Child care","family":"Prepared family meals","farm":"Farms & farmers\' markets","food_bev":"Specialty food & beverage","grocery":"Groceries","meal":"Free meals","pet":"Pet supplies","pharmacy":"Pharmacy","restaurant":"Restaurants","school":"School meals"},"dayofweek":{"any":"Any","friday":"Friday","monday":"Monday","saturday":"Saturday","sunday":"Sunday","thursday":"Thursday","tuesday":"Tuesday","wednesday":"Wednesday"},"getdirections":"Get directions","getdirections_short":"Directions","label":{"address":"Address","allweek":"All week","backtolist":"Back to list","close":"Close","closed":"Closed","closed-on":"Closed on","closed-today":"Closed Today","closedonday":"Closed (on the current selected day)","curbside":"Curbside pick-up","delivery":"Delivery","details-last-updated":"Details last updated","discountmedical":"Medical worker discount|Medical worker discounts","discounts":"","drivethru":"Drive thru","email":"Email","email_lowercase":"email","farmersmarket":"Farmers\' market|Farmers\' markets","farmpick-up":"On-farm pick-up","freegroceries":"Free grocery location|Free grocery locations","freemeals":"Free meal location|Free meal locations","freeproduce":"Free produce location|Free produce locations","instructions":"Instructions","locationhelplinktext":"Learn more","mapkey":"Map Key","mealpublic":"Meals open to public","mealstudent":"Meals for students","mustpreorder":"Must pre-order","normalhours":"Normal hours","notes":"Notes","offers":"Offers","open":"Open","openinghours":"Hours","orderonline":"Order & pay online","phone":"Phone","selectacategory":"Select a category...","selected":"Selected","seniorhours":"Senior hours","specialhours":"Senior shopping hours","useyourlocation":"Use your location","website":"Website"},"languages":{"ar":"Arabic","en":"English","es":"Spanish","fr":"French","ja":"Japanese","ko":"Korean","ms":"Burmese","zh":"Simplified Chinese"},"locationhelp":"Please make sure your device location is enabled","sidebar":{"close-panel":"Close search panel","info-about-us":"Currently, this site supports Chatham County and Orange County, NC. With","info-end-text":", we can expand our coverage.","info-link-text":"your help","open-panel":"Open search panel","shopsafe":"Please, SHOP SAFE!","sixfeet":"Stay 6 ft. apart when shopping.","stayhome":"If you are sick, stay home.","washhands":"Wash your hands often.","what-do-you-need":"What do you need?","when-do-you-need-it":"When do you need it?"},"title":"{0} COVID Support","website":"Website"}'
    );
  },
  ee97: function (e, t, a) {},
  f238: function (e, t, a) {
    var s, i, r;
    a("b0c0");
    var n = a("7037");
    /*!
     * leaflet-extra-markers
     * Custom Markers for Leaflet JS based on Awesome Markers
     * Leaflet ExtraMarkers
     * https://github.com/coryasilva/Leaflet.ExtraMarkers/
     * @author coryasilva <https://github.com/coryasilva>
     * @version 1.2.1
     */ !(function (a, o) {
      "object" == n(t) && "undefined" != typeof e
        ? o(t)
        : ((i = [t]),
          (s = o),
          (r = "function" === typeof s ? s.apply(t, i) : s),
          void 0 === r || (e.exports = r));
    })(0, function (e) {
      "use strict";
      var t = (L.ExtraMarkers = {});
      (t.version = L.ExtraMarkers.version = "1.2.1"),
        (t.Icon = L.ExtraMarkers.Icon = L.Icon.extend({
          options: {
            iconSize: [35, 45],
            iconAnchor: [17, 42],
            popupAnchor: [1, -32],
            shadowAnchor: [10, 12],
            shadowSize: [36, 16],
            className: "",
            prefix: "",
            extraClasses: "",
            shape: "circle",
            icon: "",
            innerHTML: "",
            markerColor: "red",
            svgBorderColor: "#fff",
            svgOpacity: 1,
            iconColor: "#fff",
            iconRotate: 0,
            number: "",
            svg: !1,
            name: "",
          },
          initialize: function (e) {
            e = L.Util.setOptions(this, e);
          },
          createIcon: function () {
            var e = document.createElement("div"),
              t = this.options;
            return (
              t.icon && (e.innerHTML = this._createInner()),
              t.innerHTML && (e.innerHTML = t.innerHTML),
              t.bgPos &&
                (e.style.backgroundPosition =
                  -t.bgPos.x + "px " + -t.bgPos.y + "px"),
              t.svg
                ? this._setIconStyles(e, "svg")
                : this._setIconStyles(e, t.shape + "-" + t.markerColor),
              e
            );
          },
          _getColorHex: function (e) {
            return (
              {
                red: "#a23337",
                "orange-dark": "#d73e29",
                orange: "#ef9227",
                yellow: "#f5bb39",
                "blue-dark": "#276273",
                cyan: "#32a9dd",
                purple: "#440444",
                violet: "#90278d",
                pink: "#c057a0",
                green: "#006838",
                white: "#e8e8e8",
                black: "#211c1d",
              }[e] || e
            );
          },
          _createSvg: function (e, t) {
            return {
              circle:
                '<svg width="32" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 2.746c-8.284 0-15 6.853-15 15.307 0 .963.098 1.902.265 2.816a15.413 15.413 0 002.262 5.684l.134.193 12.295 17.785 12.439-17.863.056-.08a15.422 15.422 0 002.343-6.112c.123-.791.206-1.597.206-2.423 0-8.454-6.716-15.307-15-15.307" fill="' +
                t +
                '" /><path d="M17.488 2.748c-8.284 0-15 6.853-15 15.307 0 .963.098 1.902.265 2.816a15.413 15.413 0 002.262 5.684l.134.193 12.295 17.785 12.44-17.863.055-.08a15.422 15.422 0 002.343-6.112c.124-.791.206-1.597.206-2.423 0-8.454-6.716-15.307-15-15.307m0 1.071c7.68 0 13.929 6.386 13.929 14.236 0 .685-.064 1.423-.193 2.258-.325 2.075-1.059 3.99-2.164 5.667l-.055.078-11.557 16.595L6.032 26.14l-.12-.174a14.256 14.256 0 01-2.105-5.29 14.698 14.698 0 01-.247-2.62c0-7.851 6.249-14.237 13.928-14.237" fill="#231f20" opacity=".15" /></svg>',
              square:
                '<svg width="33" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M28.205 3.217H6.777c-2.367 0-4.286 1.87-4.286 4.179v19.847c0 2.308 1.919 4.179 4.286 4.179h5.357l5.337 13.58 5.377-13.58h5.357c2.366 0 4.285-1.87 4.285-4.179V7.396c0-2.308-1.919-4.179-4.285-4.179" fill="' +
                t +
                '" /><g opacity=".15" transform="matrix(1.0714 0 0 -1.0714 -233.22 146.783)"><path d="M244 134h-20c-2.209 0-4-1.746-4-3.9v-18.525c0-2.154 1.791-3.9 4-3.9h5L233.982 95 239 107.675h5c2.209 0 4 1.746 4 3.9V130.1c0 2.154-1.791 3.9-4 3.9m0-1c1.654 0 3-1.301 3-2.9v-18.525c0-1.599-1.346-2.9-3-2.9h-5.68l-.25-.632-4.084-10.318-4.055 10.316-.249.634H224c-1.654 0-3 1.301-3 2.9V130.1c0 1.599 1.346 2.9 3 2.9h20" fill="#231f20" /></g></svg>',
              star:
                '<svg width="34" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M32.92 16.93l-3.525-3.525V8.419a1.983 1.983 0 00-1.983-1.982h-4.985L18.9 2.91a1.984 1.984 0 00-2.803 0l-3.524 3.526H7.588a1.983 1.983 0 00-1.982 1.982v4.986L2.081 16.93a1.982 1.982 0 000 2.803l3.525 3.526v4.984c0 1.096.888 1.983 1.982 1.983h4.986L17.457 45l4.97-14.773h4.985a1.983 1.983 0 001.983-1.983V23.26l3.525-3.526a1.982 1.982 0 000-2.803" fill="' +
                t +
                '" /><g opacity=".15" transform="matrix(1.0667 0 0 -1.0667 -347.3 97.26)"><path d="M342 89c-.476 0-.951-.181-1.314-.544l-3.305-3.305h-4.673a1.858 1.858 0 01-1.859-1.858v-4.674l-3.305-3.305a1.857 1.857 0 010-2.627l3.305-3.305v-4.674a1.86 1.86 0 011.859-1.859h4.673L341.959 49l4.659 13.849h4.674a1.86 1.86 0 011.859 1.859v4.674l3.305 3.305a1.858 1.858 0 010 2.627l-3.305 3.305v4.674a1.859 1.859 0 01-1.859 1.858h-4.674l-3.304 3.305A1.851 1.851 0 01342 89m0-1a.853.853 0 00.607-.251l3.304-3.305.293-.293h5.088a.86.86 0 00.859-.858v-5.088l3.598-3.598A.852.852 0 00356 74a.85.85 0 00-.251-.606l-3.598-3.598v-5.088a.86.86 0 00-.859-.859h-5.393l-.229-.681-3.702-11.006-3.637 11.001-.227.686h-5.396a.86.86 0 00-.859.859v5.088l-3.598 3.598c-.162.162-.251.377-.251.606s.089.445.251.607l3.598 3.598v5.088a.86.86 0 00.859.858h5.087l3.598 3.598A.853.853 0 00342 88" fill="#231f20" /></g></svg>',
              penta:
                '<svg width="33" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M1.872 17.35L9.679 2.993h15.615L33.1 17.35 17.486 44.992z" fill="' +
                t +
                '" /><g opacity=".15" transform="matrix(1.0769 0 0 -1.0769 -272.731 48.23)"><path d="M276.75 42h-14.5L255 28.668 269.5 3 284 28.668zm-.595-1l6.701-12.323L269.5 5.033l-13.356 23.644L262.845 41z" fill="#231f20" /></g></svg>',
            }[e];
          },
          _createInner: function () {
            var e = "",
              t = "",
              a = "",
              s = "",
              i = this.options;
            return (
              i.iconColor && (e = "color: " + i.iconColor + ";"),
              0 !== i.iconRotate &&
                ((e += "-webkit-transform: rotate(" + i.iconRotate + "deg);"),
                (e += "-moz-transform: rotate(" + i.iconRotate + "deg);"),
                (e += "-o-transform: rotate(" + i.iconRotate + "deg);"),
                (e += "-ms-transform: rotate(" + i.iconRotate + "deg);"),
                (e += "transform: rotate(" + i.iconRotate + "deg);")),
              i.number && (t = 'number="' + i.number + '" '),
              i.extraClasses.length && (a += i.extraClasses + " "),
              i.prefix.length && (a += i.prefix + " "),
              i.icon.length && (a += i.icon + " "),
              i.svg &&
                (s += this._createSvg(
                  i.shape,
                  this._getColorHex(i.markerColor)
                )),
              (s += "<i " + t + 'style="' + e + '" class="' + a + '"></i>'),
              i.name.length &&
                (s +=
                  '<div class="' +
                  (void 0 !== i.nameClasses ? i.nameClasses : "") +
                  '">' +
                  i.name +
                  "</div>"),
              s
            );
          },
          _setIconStyles: function (e, t) {
            var a,
              s,
              i = this.options,
              r = L.point(i["shadow" === t ? "shadowSize" : "iconSize"]);
            (s =
              "shadow" === t
                ? ((a = L.point(i.shadowAnchor || i.iconAnchor)), "shadow")
                : ((a = L.point(i.iconAnchor)), "icon")),
              !a && r && (a = r.divideBy(2, !0)),
              (e.className =
                "leaflet-marker-" +
                s +
                " extra-marker extra-marker-" +
                t +
                " " +
                i.className),
              a &&
                ((e.style.marginLeft = -a.x + "px"),
                (e.style.marginTop = -a.y + "px")),
              r &&
                ((e.style.width = r.x + "px"), (e.style.height = r.y + "px"));
          },
          createShadow: function () {
            var e = document.createElement("div");
            return this._setIconStyles(e, "shadow"), e;
          },
        })),
        (t.icon = L.ExtraMarkers.icon = function (e) {
          return new L.ExtraMarkers.Icon(e);
        }),
        (e.ExtraMarkers = t),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  },
  f693: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"Fermer","contact":"Contactez nous","contactus":{"email":"email","info":"Cette page est alimentée par le {0} de {1}. Pour toute question, veuillez nous contacter par e-mail au {2}."},"datahead":"NOTE SUR LE PARTAGE DES DONNÉES","dataprivacy":"Les informations sur NC COVID Support ont été collectées à partir de sources Web publiques par des bénévoles ou saisies par des propriétaires d\'entreprises / fournisseurs de ressources. Les données sont fournies pour aider le public, les entreprises locales, les partenaires gouvernementaux et les organisations à but non lucratif pendant la pandémie de COVID-19. Les données ne doivent pas être utilisées à des fins commerciales ou à d\'autres fins sans l\'autorisation expresse du support NC COVID.","devhelp":{"addbusiness":"Ajouter une entreprise","addinfo":"Utilisez nos formulaires en ligne pour {0} ou {1}.","ambassadorinfo":"Aidez-nous à étendre la couverture à travers la Caroline du Nord. Les ambassadeurs travailleront avec le gouvernement local et les associations commerciales pour apporter le soutien NC COVID à leur communauté. Envoyez-nous un e-mail à {0} pour obtenir des outils et des ressources pour commencer.","becomeambassador":"Devenez ambassadeur communautaire","conduct":"Code de conduite","devnote":"Développeurs - trouvez nos {0} et {1} sur GitHub.","dupsite":"Alternativement, vous pouvez dupliquer un site pour votre état.","info":"Il s\'agit d\'un projet open source, conçu pour partager et s\'étendre à d\'autres communautés.","source":"Code source","support":"Soutenez vos voisins et les entreprises locales - aidez-nous à grandir!","updatebusiness":"mettre à jour une entrée existante"},"getinvolved":"Être impliqué","info":"Notre base de données de ressources bénéficie des informations collectées par ces organisations:","linktext":"À propos de nous","orgs":{"bureau":"Bureau des visiteurs de Chapel Hill / Orange County","cfa":"Code pour l\'Amérique","chb":"Brigade de Chapel Hill","localistnc":"#LocalListNC","partnership":"Partenariat du centre-ville de Chapel Hill","pittsboro-siler":"Bureau des congrès et des visiteurs de Pittsboro-Siler City"},"partners":"Sources d\'informations","title":"A propos de ce site"},"call":"Appeler","category":{"childcare":"Garde d\'enfants","family":"Plats préparés en famille","farm":"Fermes et marchés fermiers","food_bev":"Spécialités alimentaires et boissons","grocery":"Épicerie","meal":"Repas gratuits","pet":"Fournitures pour animaux","pharmacy":"Pharmacie","restaurant":"Restaurants","school":"Repas scolaires"},"dayofweek":{"any":"Tout","friday":"Vendredi","monday":"Lundi","saturday":"Samedi","sunday":"Dimanche","thursday":"Jeudi","tuesday":"Mardi","wednesday":"Mercredi"},"getdirections":"","getdiections_short":"","label":{"address":"Adresse","allweek":"Toute la semaine","backtolist":"Retour à la liste","close":"Fermer","closed":"Fermé","closed-on":"Ferme le","closed-today":"Fermé aujourd\'hui","closedonday":"Fermé (le jour sélectionné)","curbside":"Enterprise avec ramassage en bordure de rue|Enterprises avec ramassage en bordure de rue","delivery":"Livraison","details-last-updated":"Dernière mise à jour des détails","discountmedical":"Réduction pour les travailleurs médicaux|Réductions pour les travailleurs médicaux","discounts":"","drivethru":"Drive-thru","email":"Email","email_lowercase":"email","farmersmarket":"Marché fermier | Marchés fermiers","farmpick-up":"Ramassage à la ferme","freegroceries":"Emplacement d\'épicerie gratuits|Emplacements d\'épicerie gratuits","freemeals":"Lieu de repas gratuits|Lieux de repas gratuits","freeproduce":"Lieu de production gratuit|Lieux de production gratuit","instructions":"Instructions","locationhelplinktext":"apprendre encore plus","mapkey":"Carte clé","mealpublic":"Repas ouverts au public","mealstudent":"Repas pour les étudiants","mustpreorder":"Doit précommander","normalhours":"Heures normales","notes":"Remarques","offers":"Des offres","open":"Ouvrir","openinghours":"Heures d\'ouverture","orderonline":"Commandez et payez en ligne","phone":"Téléphone","selectacategory":"Choisissez une catégorie...","selected":"Choisi","seniorhours":"Heures seniors","specialhours":"Heures de magasinage pour les seniors","useyourlocation":"Utilisez votre emplacement","website":"Site Internet"},"languages":{"ar":"Arabe","en":"Anglais","es":"Espanol","fr":"français","ja":"japonais","ko":"coréen","ms":"birman","zh":"Chinois simplifié"},"locationhelp":"","sidebar":{"close-panel":"Fermer le panneau de recherche","info-about-us":"Actuellement, ce site prend en charge le comté de Chatham et le comté d\'Orange, NC. Avec","info-end-text":", nous pouvons étendre notre couverture.","info-link-text":"ton aide","open-panel":"Ouvrir le panneau de recherche","shopsafe":"S\'il vous plaît, achetez en toute sécurité!","sixfeet":"Restez à 6 pieds de distance lorsque vous magasinez.","stayhome":"Si vous êtes malade, restez à la maison.","washhands":"Lavez-vous souvent les mains.","what-do-you-need":"De quoi avez-vous besoin?","when-do-you-need-it":"Quand en avez-vous besoin?"},"title":"Prise en charge de {0} COVID","website":"Site Internet"}'
    );
  },
});
//# sourceMappingURL=app.cafebf52.js.map
