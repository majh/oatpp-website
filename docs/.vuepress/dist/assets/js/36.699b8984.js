(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{287:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"frame-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frame-hpp","aria-hidden":"true"}},[e._v("#")]),e._v(" Frame.hpp"),a("seo")],1),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp-websocket/blob/master/src/oatpp-websocket/Frame.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("This File On Github"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp-websocket/issues/new?title=API%20question&body=In%20file:%20oatpp-websocket/Frame.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ask A Question"),a("OutboundLink")],1)]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("WebSocket frame.")]),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("Continuation frame.")]),e._v(" "),e._m(8),e._m(9),e._v(" "),a("p",[e._v("Text frame.")]),e._v(" "),e._m(10),e._m(11),e._v(" "),a("p",[e._v("Binary frame.")]),e._v(" "),e._m(12),e._m(13),e._v(" "),a("p",[e._v("Close frame.")]),e._v(" "),e._m(14),e._m(15),e._v(" "),a("p",[e._v("Ping frame.")]),e._v(" "),e._m(16),e._m(17),e._v(" "),a("p",[e._v("Pong frame.")]),e._v(" "),e._m(18),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),a("p",[e._v("Frame header.")]),e._v(" "),e._m(26),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),a("p",[e._v("FIN bit.")]),e._v(" "),e._m(30),e._m(31),e._v(" "),a("p",[e._v("RSV1 bit. Should be false.")]),e._v(" "),e._m(32),e._m(33),e._v(" "),a("p",[e._v("RSV2 bit. Should be false.")]),e._v(" "),e._m(34),e._m(35),e._v(" "),a("p",[e._v("RSV3 bit. Should be false.")]),e._v(" "),e._m(36),e._m(37),e._v(" "),a("p",[e._v("Operation code.")]),e._v(" "),e._m(38),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._m(42),e._v(" "),a("p",[e._v("Decoded payload length.")]),e._v(" "),e._m(43),e._m(44),e._v(" "),a("p",[e._v("Payload mask.")]),e._v(" "),e._m(45)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("API: latest")]),t("br"),this._v(" "),t("code",[this._v("module: oatpp-websocket")]),t("br"),this._v(" "),t("code",[this._v('#include "oatpp-websocket/Frame.hpp"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"frame"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" websocket "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Frame")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Fields")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Summary")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("v_word8")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-opcode-continuation"}},[e._v("OPCODE_CONTINUATION")])]),e._v(" "),a("td",[e._v("Continuation frame.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_word8")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-opcode-text"}},[e._v("OPCODE_TEXT")])]),e._v(" "),a("td",[e._v("Text frame.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_word8")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-opcode-binary"}},[e._v("OPCODE_BINARY")])]),e._v(" "),a("td",[e._v("Binary frame.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_word8")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-opcode-close"}},[e._v("OPCODE_CLOSE")])]),e._v(" "),a("td",[e._v("Close frame.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_word8")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-opcode-ping"}},[e._v("OPCODE_PING")])]),e._v(" "),a("td",[e._v("Ping frame.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_word8")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-opcode-pong"}},[e._v("OPCODE_PONG")])]),e._v(" "),a("td",[e._v("Pong frame.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Return Type")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Summary")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("void")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-packheaderbits"}},[e._v("packHeaderBits")])]),e._v(" "),a("td",[e._v("Serialize "),a("a",{attrs:{href:"#frame-header"}},[e._v("Frame::Header")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("void")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-unpackheaderbits"}},[e._v("unpackHeaderBits")])]),e._v(" "),a("td",[e._v("Deserialize "),a("a",{attrs:{href:"#frame-header"}},[e._v("Frame::Header")]),e._v(".")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-opcode-continuation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-opcode-continuation","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::OPCODE_CONTINUATION")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_word8 OPCODE_CONTINUATION "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x0")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-opcode-text"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-opcode-text","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::OPCODE_TEXT")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_word8 OPCODE_TEXT "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x1")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-opcode-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-opcode-binary","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::OPCODE_BINARY")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_word8 OPCODE_BINARY "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x2")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-opcode-close"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-opcode-close","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::OPCODE_CLOSE")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_word8 OPCODE_CLOSE "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x8")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-opcode-ping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-opcode-ping","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::OPCODE_PING")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_word8 OPCODE_PING "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x9")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-opcode-pong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-opcode-pong","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::OPCODE_PONG")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_word8 OPCODE_PONG "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0xA")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-packheaderbits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-packheaderbits","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::packHeaderBits")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Serialize "),a("a",{attrs:{href:"#frame-header"}},[e._v("Frame::Header")]),e._v(". "),a("ul",[a("li",[a("strong",[e._v("@param")]),e._v(" bits - out parameter. Two bytes header. ")]),a("li",[a("strong",[e._v("@param")]),e._v(" frameHeader - "),a("a",{attrs:{href:"#frame-header"}},[e._v("Frame::Header")]),e._v(". ")]),a("li",[a("strong",[e._v("@param")]),e._v(" messageLengthScenario - out parameter. Depending on message length scenario. Message length can be encoded in 1, 2, or 8 bytes. ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("packHeaderBits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("v_word16"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" bits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" frameHeader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" v_word8"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" messageLengthScenario"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-unpackheaderbits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-unpackheaderbits","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::unpackHeaderBits")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Deserialize "),a("a",{attrs:{href:"#frame-header"}},[e._v("Frame::Header")]),e._v(". "),a("ul",[a("li",[a("strong",[e._v("@param")]),e._v(" bits - two bytes header. ")]),a("li",[a("strong",[e._v("@param")]),e._v(" frameHeader - out parameter. "),a("a",{attrs:{href:"#frame-header"}},[e._v("Frame::Header")]),e._v(". ")]),a("li",[a("strong",[e._v("@param")]),e._v(" messageLen1 - first byte of encoded message length. ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("unpackHeaderBits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("v_word16 bits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" frameHeader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" v_word8"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" messageLen1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"frame-header"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-header","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::Header")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" websocket "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Frame")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" Header "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fields-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fields-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Fields")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Summary")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("bool")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-header-fin"}},[e._v("fin")])]),e._v(" "),a("td",[e._v("FIN bit.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("bool")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-header-rsv1"}},[e._v("rsv1")])]),e._v(" "),a("td",[e._v("RSV1 bit. Should be false.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("bool")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-header-rsv2"}},[e._v("rsv2")])]),e._v(" "),a("td",[e._v("RSV2 bit. Should be false.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("bool")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-header-rsv3"}},[e._v("rsv3")])]),e._v(" "),a("td",[e._v("RSV3 bit. Should be false.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_word8")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-header-opcode"}},[e._v("opcode")])]),e._v(" "),a("td",[e._v("Operation code.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("bool")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-header-hasmask"}},[e._v("hasMask")])]),e._v(" "),a("td",[e._v("Mask bit. For client-to-server messages should be "),a("code",[e._v("true")]),e._v(". For server-to-client messages should be "),a("code",[e._v("false")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_int64")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-header-payloadlength"}},[e._v("payloadLength")])]),e._v(" "),a("td",[e._v("Decoded payload length.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_word8")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#frame-header-mask"}},[e._v("mask")])]),e._v(" "),a("td",[e._v("Payload mask.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-header-fin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-header-fin","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::Header::fin")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("bool")]),this._v(" fin\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-header-rsv1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-header-rsv1","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::Header::rsv1")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("bool")]),this._v(" rsv1\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-header-rsv2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-header-rsv2","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::Header::rsv2")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("bool")]),this._v(" rsv2\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-header-rsv3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-header-rsv3","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::Header::rsv3")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("bool")]),this._v(" rsv3\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-header-opcode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-header-opcode","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::Header::opcode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[this._v("v_word8 opcode\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-header-hasmask"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-header-hasmask","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::Header::hasMask")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Mask bit. For client-to-server messages should be "),t("code",[this._v("true")]),this._v(". For server-to-client messages should be "),t("code",[this._v("false")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("bool")]),this._v(" hasMask\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-header-payloadlength"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-header-payloadlength","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::Header::payloadLength")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[this._v("v_int64 payloadLength\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frame-header-mask"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frame-header-mask","aria-hidden":"true"}},[this._v("#")]),this._v(" Frame::Header::mask")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[this._v("v_word8 mask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[this._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("\n")])])])}],!1,null,null,null);t.default=s.exports}}]);