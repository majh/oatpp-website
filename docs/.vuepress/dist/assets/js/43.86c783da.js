(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{301:function(t,e,r){"use strict";r.r(e);var n=r(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"codegen-define-apicontroller-hpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#codegen-define-apicontroller-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" codegen_define_ApiController_.hpp"),r("seo")],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/codegen/codegen_define_ApiController_.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/codegen/codegen_define_ApiController_.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),r("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),r("p",[r("em",[t._v("For details see:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://oatpp.io/docs/components/api-controller/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ApiController component"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("router-link",{attrs:{to:"/api/latest/oatpp/web/server/api/ApiController/#apicontroller"}},[t._v("oatpp::web::server::api::ApiController")])],1)])]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("Codegen macoro to be used in "),r("code",[t._v("oatpp::web::server::api::ApiController")]),t._v(" to generate Endpoint. "),r("ul",[t._m(4),t._m(5),t._m(6),r("li",[r("strong",[t._v("@return")]),t._v(" - std::shared_ptr to "),r("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[t._v("oatpp::web::protocol::http::outgoing::Response")]),t._v(". ")],1)])]),t._v(" "),t._m(7),t._m(8),t._v(" "),r("p",[t._v("Codegen macoro to be used in "),r("code",[t._v("oatpp::web::server::api::ApiController")]),t._v(" to generate Asynchronous Endpoint. "),r("ul",[t._m(9),t._m(10),t._m(11),r("li",[r("strong",[t._v("@return")]),t._v(" - "),r("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/codegen/codegen_define_ApiController_.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('This file contains "defines" for ApiController code generating macro. '),e("br"),this._v("\nUsage:"),e("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-cpp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-cpp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),r("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" OATPP_CODEGEN_BEGIN(ApiController)")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generated Endpoints.")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),r("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" OATPP_CODEGEN_END(ApiController)")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"endpoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoint","aria-hidden":"true"}},[this._v("#")]),this._v(" ENDPOINT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(' METHOD - Http method ("GET", "POST", "PUT", etc.). ')])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" PATH - Path to endpoint (without host). ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" NAME - Name of the generated method. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[this._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[this._v("define")]),this._v(" ENDPOINT(METHOD, PATH, NAME, ...)")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"endpoint-async"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-async","aria-hidden":"true"}},[this._v("#")]),this._v(" ENDPOINT_ASYNC")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(' METHOD - Http method ("GET", "POST", "PUT", etc.). ')])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" PATH - Path to endpoint (without host). ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" NAME - Name of the generated method. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[this._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[this._v("define")]),this._v(" ENDPOINT_ASYNC(METHOD, PATH, NAME)")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"endpoint-async-init"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-async-init","aria-hidden":"true"}},[this._v("#")]),this._v(" ENDPOINT_ASYNC_INIT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Auxiliary codegen macro for "),e("code",[this._v("ENDPOINT_ASYNC")]),this._v(" to generate correct constructor for Asynchronous Endpoint Coroutine. NAME - Name of the endpoint. Exact the same name as was passed to "),e("code",[this._v("ENDPOINT_ASYNC")]),this._v(" macro.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[this._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[this._v("define")]),this._v(" ENDPOINT_ASYNC_INIT(NAME)")]),this._v("\n")])])])}],!1,null,null,null);e.default=s.exports}}]);