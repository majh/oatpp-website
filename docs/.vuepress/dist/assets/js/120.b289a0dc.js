(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{194:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"request-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" Request.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/web/protocol/http/outgoing/Request.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/web/protocol/http/outgoing/Request.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Class http::outgoing::Request AKA OutgoingRequest represents client's outgoing request to server.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("table",[t._m(4),t._v(" "),a("tbody",[a("tr",[t._m(5),t._v(" "),t._m(6),t._v(" "),a("td",[t._v("Convenience typedef for "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(".")],1)])])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Convenience typedef for "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(".")],1),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("Constructor. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" method - http method. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" path - path to resource. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1),t._m(12),a("li",[a("strong",[t._v("@param")]),t._v(" body - "),a("code",[t._v("std::shared_ptr")]),t._v(" to "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Body/#body"}},[t._v("oatpp::web::protocol::http::outgoing::Body")]),t._v(". ")],1)])]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("Create shared Request. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" method - http method. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" path - path to resource. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1),t._m(15),a("li",[a("strong",[t._v("@param")]),t._v(" body - "),a("code",[t._v("std::shared_ptr")]),t._v(" to "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Body/#body"}},[t._v("oatpp::web::protocol::http::outgoing::Body")]),t._v(". ")],1),t._m(16)])]),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("Get http method. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - http method. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1)])]),t._v(" "),t._m(19),t._m(20),t._v(" "),a("p",[t._v("Get path to resource. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - path to resource. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1)])]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),a("p",[t._v("Put http header to headers map. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" key - header name "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabelci-fast"}},[t._v("oatpp::data::share::StringKeyLabelCI_FAST")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" value - header value "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1)])]),t._v(" "),t._m(26),t._m(27),t._v(" "),a("p",[t._v('Put http header to headers map if no header with such name exists. Leave old "name: value" in case such header exists. '),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" key - header name "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabelci-fast"}},[t._v("oatpp::data::share::StringKeyLabelCI_FAST")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" value - header value "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1),t._m(28)])]),t._v(" "),t._m(29),t._m(30),t._v(" "),a("p",[t._v("Get http body. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Body/#body"}},[t._v("oatpp::web::protocol::http::outgoing::Body")]),t._v(". ")],1)])]),t._v(" "),t._m(31),t._m(32),t._v(" "),a("p",[t._v("Write request to stream. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" stream - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream"}},[t._v("oatpp::data::stream::OutputStream")]),t._v(". ")],1)])]),t._v(" "),t._m(33),t._m(34),t._v(" "),a("p",[t._v("Write request to stream in asynchronous manner. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" parentCoroutine - caller coroutine. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#abstractcoroutine"}},[t._v("oatpp::async::AbstractCoroutine")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" actionOnFinish - action to perform once sent. "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1),a("li",[a("strong",[t._v("@param")]),t._v(" stream - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream"}},[t._v("oatpp::data::stream::OutputStream")]),t._v(". ")],1),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),t._m(35)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/web/protocol/http/outgoing/Request.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[this._v("#")]),this._v(" Request")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" protocol "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" outgoing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Request")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("enable_shared_from_this"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"typedefs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typedefs","aria-hidden":"true"}},[this._v("#")]),this._v(" Typedefs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Type")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Summary")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("protocol::http::Headers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#request-headers"}},[this._v("Headers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-request"}},[t._v("Request")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<Request>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-createshared"}},[t._v("createShared")])]),t._v(" "),a("td",[t._v("Create shared Request.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("const oatpp::data::share::StringKeyLabel&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-getmethod"}},[t._v("getMethod")])]),t._v(" "),a("td",[t._v("Get http method.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("const oatpp::data::share::StringKeyLabel&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-getpath"}},[t._v("getPath")])]),t._v(" "),a("td",[t._v("Get path to resource.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Headers&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-getheaders"}},[t._v("getHeaders")])]),t._v(" "),a("td",[t._v("Get headers map.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-putheader"}},[t._v("putHeader")])]),t._v(" "),a("td",[t._v("Put http header to headers map.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-putheaderifnotexists"}},[t._v("putHeaderIfNotExists")])]),t._v(" "),a("td",[t._v("Put http header to headers map if no header with such name exists.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<Body>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-getbody"}},[t._v("getBody")])]),t._v(" "),a("td",[t._v("Get http body.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-send"}},[t._v("send")])]),t._v(" "),a("td",[t._v("Write request to stream.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::async::Action")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#request-sendasync"}},[t._v("sendAsync")])]),t._v(" "),a("td",[t._v("Write request to stream in asynchronous manner.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-headers","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::Headers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("typedef")]),this._v(" protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("::")]),this._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("::")]),this._v("Headers Headers\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-request","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::Request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" headers - "),e("a",{attrs:{href:"#request-headers"}},[this._v("Request::Headers")]),this._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-createshared"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-createshared","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::createShared")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" headers - "),e("a",{attrs:{href:"#request-headers"}},[this._v("Request::Headers")]),this._v(". ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("std::shared_ptr")]),this._v(" to Request. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-getmethod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-getmethod","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::getMethod")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-getpath"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-getpath","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::getPath")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-getheaders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-getheaders","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::getHeaders")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get headers map. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("a",{attrs:{href:"#request-headers"}},[this._v("Request::Headers")]),this._v(". ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("Headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("&")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getHeaders")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-putheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-putheader","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::putHeader")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabelCI_FAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-putheaderifnotexists"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-putheaderifnotexists","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::putHeaderIfNotExists")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("true")]),this._v(" if header was added to the map. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putHeaderIfNotExists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabelCI_FAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-getbody"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-getbody","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::getBody")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-send"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-send","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::send")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("OutputStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-sendasync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-sendasync","aria-hidden":"true"}},[this._v("#")]),this._v(" Request::sendAsync")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AbstractCoroutine"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" parentCoroutine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" actionOnFinish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("OutputStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);