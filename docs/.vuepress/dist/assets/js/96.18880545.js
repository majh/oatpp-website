(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{244:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"pipe-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipe-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" Pipe.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/network/virtual_/Pipe.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/network/virtual_/Pipe.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Virtual pipe implementation. Can be used for unidirectional data transfer between different threads of the same process. "),a("br"),t._v(" Under the hood it uses "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/buffer/FIFOBuffer/#synchronizedfifobuffer"}},[t._v("oatpp::data::buffer::SynchronizedFIFOBuffer")]),t._v(" over the "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/buffer/IOBuffer/#iobuffer"}},[t._v("oatpp::data::buffer::IOBuffer")]),t._v(".")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Constructor.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("Mark pipe as closed.")]),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("Pipe Reader. Extends "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". Provides read interface for the pipe. Can work in both blocking and nonblocking regime.")],1),t._v(" "),t._m(19),t._m(20),t._v(" "),a("table",[t._m(21),t._v(" "),a("tbody",[t._m(22),t._v(" "),t._m(23),t._v(" "),a("tr",[t._m(24),t._v(" "),t._m(25),t._v(" "),a("td",[t._v("Implements "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream-read"}},[t._v("oatpp::data::stream::InputStream::read()")]),t._v(" method.")],1)])])]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),a("p",[t._v("Implements "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream-read"}},[t._v("oatpp::data::stream::InputStream::read()")]),t._v(" method. Read data from pipe. "),a("ul",[t._m(33),t._m(34),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/IODefinitions/#v-io-size"}},[t._v("oatpp::data::v_io_size")]),t._v(". ")],1)])],1),t._v(" "),t._m(35),t._m(36),t._v(" "),a("p",[t._v("Pipe writer. Extends "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream"}},[t._v("oatpp::data::stream::OutputStream")]),t._v(". Provides write interface for the pipe. Can work in both blocking and nonblocking regime.")],1),t._v(" "),t._m(37),t._m(38),t._v(" "),a("table",[t._m(39),t._v(" "),a("tbody",[t._m(40),t._v(" "),t._m(41),t._v(" "),a("tr",[t._m(42),t._v(" "),t._m(43),t._v(" "),a("td",[t._v("Implements "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream-write"}},[t._v("oatpp::data::stream::OutputStream::write()")]),t._v(" method.")],1)])])]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._m(50),t._v(" "),a("p",[t._v("Implements "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream-write"}},[t._v("oatpp::data::stream::OutputStream::write()")]),t._v(" method. Write data to pipe. "),a("ul",[t._m(51),t._m(52),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/IODefinitions/#v-io-size"}},[t._v("oatpp::data::v_io_size")]),t._v(". ")],1)])],1),t._v(" "),t._m(53)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/network/virtual_/Pipe.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pipe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" virtual_ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pipe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#pipe-pipe"}},[t._v("Pipe")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<Pipe>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#pipe-createshared"}},[t._v("createShared")])]),t._v(" "),a("td",[t._v("Create shared pipe.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Writer*")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#pipe-getwriter"}},[t._v("getWriter")])]),t._v(" "),a("td",[t._v("Get pointer to "),a("a",{attrs:{href:"#pipe-writer"}},[t._v("Pipe::Writer")]),t._v(" for this pipe.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Reader*")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#pipe-getreader"}},[t._v("getReader")])]),t._v(" "),a("td",[t._v("Get pointer to "),a("a",{attrs:{href:"#pipe-reader"}},[t._v("Pipe::Reader")]),t._v(" for this pipe.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#pipe-close"}},[t._v("close")])]),t._v(" "),a("td",[t._v("Mark pipe as closed.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-pipe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-pipe","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::Pipe")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("Pipe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-createshared"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-createshared","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::createShared")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create shared pipe. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("std::shared_ptr")]),this._v(" to Pipe. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Pipe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-getwriter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-getwriter","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::getWriter")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Get pointer to "),a("a",{attrs:{href:"#pipe-writer"}},[t._v("Pipe::Writer")]),t._v(" for this pipe. There can be only one "),a("a",{attrs:{href:"#pipe-writer"}},[t._v("Pipe::Writer")]),t._v(" per pipe. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("a",{attrs:{href:"#pipe-writer"}},[t._v("Pipe::Writer")]),t._v(". ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("Writer"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getWriter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-getreader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-getreader","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::getReader")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Get pointer to "),a("a",{attrs:{href:"#pipe-reader"}},[t._v("Pipe::Reader")]),t._v(" for this pipe. There can be only one "),a("a",{attrs:{href:"#pipe-reader"}},[t._v("Pipe::Reader")]),t._v(" per pipe. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("a",{attrs:{href:"#pipe-reader"}},[t._v("Pipe::Reader")]),t._v(". ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("Reader"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getReader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-close"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-close","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::close")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pipe-reader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-reader","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::Reader")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" virtual_ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pipe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Reader")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Return Type")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Summary")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#pipe-reader-setnonblocking"}},[t._v("setNonBlocking")])]),t._v(" "),a("td",[t._v("Set "),a("code",[t._v("true")]),t._v(" to make non-blocking reads using "),a("a",{attrs:{href:"#pipe-reader-read"}},[t._v("Pipe::Reader::read()")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#pipe-reader-setmaxavailabletoread"}},[this._v("setMaxAvailableToRead")])]),this._v(" "),e("td",[this._v("Limit the available amount of bytes to read from pipe."),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("data::v_io_size")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#pipe-reader-read"}},[this._v("read")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-reader-setnonblocking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-reader-setnonblocking","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::Reader::setNonBlocking")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Set "),a("code",[t._v("true")]),t._v(" to make non-blocking reads using "),a("a",{attrs:{href:"#pipe-reader-read"}},[t._v("Pipe::Reader::read()")]),t._v(". "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" nonBlocking - "),a("code",[t._v("true")]),t._v(" for nonblocking read. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNonBlocking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" nonBlocking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-reader-setmaxavailabletoread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-reader-setmaxavailabletoread","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::Reader::setMaxAvailableToRead")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Limit the available amount of bytes to read from pipe."),e("br"),this._v(" This method is used for testing purposes only."),e("br"),this._v(" set to -1 in order to ignore this value."),e("br"),this._v(" "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" maxAvailableToRead - maximum available amount of bytes to read. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxAvailableToRead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size maxAvailableToRead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-reader-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-reader-read","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::Reader::read")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" data - buffer to read data to. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" count - max count of bytes to read. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pipe-writer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-writer","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::Writer")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" virtual_ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pipe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Writer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("OutputStream "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Return Type")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Summary")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#pipe-writer-setnonblocking"}},[t._v("setNonBlocking")])]),t._v(" "),a("td",[t._v("Set "),a("code",[t._v("true")]),t._v(" to make non-blocking writes using "),a("a",{attrs:{href:"#pipe-writer-write"}},[t._v("Pipe::Writer::write()")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[e("a",{attrs:{href:"#pipe-writer-setmaxavailabletowrite"}},[this._v("setMaxAvailableToWrite")])]),this._v(" "),e("td",[this._v("Limit the available space for data writes in pipe."),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("data::v_io_size")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#pipe-writer-write"}},[this._v("write")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-writer-setnonblocking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-writer-setnonblocking","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::Writer::setNonBlocking")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Set "),a("code",[t._v("true")]),t._v(" to make non-blocking writes using "),a("a",{attrs:{href:"#pipe-writer-write"}},[t._v("Pipe::Writer::write()")]),t._v(". "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" nonBlocking - "),a("code",[t._v("true")]),t._v(" for nonblocking write. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNonBlocking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" nonBlocking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-writer-setmaxavailabletowrite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-writer-setmaxavailabletowrite","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::Writer::setMaxAvailableToWrite")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Limit the available space for data writes in pipe."),e("br"),this._v(" This method is used for testing purposes only."),e("br"),this._v(" set to -1 in order to ignore this value."),e("br"),this._v(" "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" maxAvailableToWrite - maximum available amount of bytes to write. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxAvailableToWrite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size maxAvailableToWrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipe-writer-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-writer-write","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipe::Writer::write")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" data - data to write to pipe. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" count - data size. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("v_io_size count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])}],!1,null,null,null);e.default=s.exports}}]);