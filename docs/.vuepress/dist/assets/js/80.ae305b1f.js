(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{351:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"memorypool-hpp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memorypool-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" MemoryPool.hpp"),s("seo")],1),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/base/memory/MemoryPool.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/base/memory/MemoryPool.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),s("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Memory Pool allocates memory chunks. Each chunk consists of specified number of fixed-size entries. Entries can be obtained and freed by user. When memory pool runs out of free entries, new chunk is allocated.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("Virtual destructor.")]),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("Obtain pointer to memory entry. When entry is no more needed, user must call "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool-free"}},[t._v("oatpp::base::memory::MemoryPool::free()")]),t._v(" and pass obtained entry pointer as a parameter. "),t._m(10)],1),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),s("p",[t._v("Obtain pointer to memory entry. When entry is no more needed, user must call "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool-free"}},[t._v("oatpp::base::memory::MemoryPool::free()")]),t._v(" and pass obtained entry pointer as a parameter. "),t._m(40)],1),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._m(50),t._v(" "),s("p",[t._v("Non virtual destructor.")]),t._v(" "),t._m(51),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/core/base/memory/MemoryPool.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"memorypool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memorypool","aria-hidden":"true"}},[this._v("#")]),this._v(" MemoryPool")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" base "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" memory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryPool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Return Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Summary")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("[none]")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#memorypool-memorypool"}},[t._v("MemoryPool")])]),t._v(" "),s("td",[t._v("Multiple implementations: "),s("br"),s("ol",[s("li",[t._v("Constructor. ")]),s("li",[t._v("Deleted copy-constructor. ")])])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[none]")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#memorypool-~memorypool"}},[t._v("~MemoryPool")])]),t._v(" "),s("td",[t._v("Virtual destructor.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("void*")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#memorypool-obtain"}},[t._v("obtain")])]),t._v(" "),s("td",[t._v("Obtain pointer to memory entry.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#memorypool-free"}},[t._v("free")])]),t._v(" "),s("td",[t._v("Free obtained earlier memory entry.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("std::string")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#memorypool-getname"}},[t._v("getName")])]),t._v(" "),s("td",[t._v("Get name of the memory pool.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("v_buff_size")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#memorypool-getentrysize"}},[t._v("getEntrySize")])]),t._v(" "),s("td",[t._v("Get size of the memory entry in bytes which can be obtained by call to "),s("a",{attrs:{href:"#memorypool-obtain"}},[t._v("MemoryPool::obtain()")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("v_buff_size")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#memorypool-getsize"}},[t._v("getSize")])]),t._v(" "),s("td",[t._v("Get size of the memory allocated by memory pool.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("v_int64")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#memorypool-getobjectscount"}},[t._v("getObjectsCount")])]),t._v(" "),s("td",[t._v("Get number of entries currently in use.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"memorypool-memorypool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memorypool-memorypool","aria-hidden":"true"}},[this._v("#")]),this._v(" MemoryPool::MemoryPool")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("Constructor. "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" name - name of the pool. ")]),s("li",[s("strong",[t._v("@param")]),t._v(" entrySize - size of the entry in bytes returned in call to "),s("a",{attrs:{href:"#memorypool-obtain"}},[t._v("MemoryPool::obtain()")]),t._v(". ")]),s("li",[s("strong",[t._v("@param")]),t._v(" chunkSize - number of entries in one chunk. ")])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MemoryPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size entrySize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size chunkSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Deleted copy-constructor."),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MemoryPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MemoryPool"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v("\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"memorypool-memorypool-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memorypool-memorypool-2","aria-hidden":"true"}},[this._v("#")]),this._v(" MemoryPool::~MemoryPool")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("virtual")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("~")]),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("MemoryPool")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"memorypool-obtain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memorypool-obtain","aria-hidden":"true"}},[this._v("#")]),this._v(" MemoryPool::obtain")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - pointer to memory entry. ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("obtain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"memorypool-free"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memorypool-free","aria-hidden":"true"}},[this._v("#")]),this._v(" MemoryPool::free")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('Free obtained earlier memory entry. This method is static, because entry "knows" to what pool it belongs. '),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" entry - entry obtained by call to "),e("a",{attrs:{href:"#memorypool-obtain"}},[this._v("MemoryPool::obtain()")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"memorypool-getname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memorypool-getname","aria-hidden":"true"}},[this._v("#")]),this._v(" MemoryPool::getName")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get name of the memory pool. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - memory pool name as "),e("code",[this._v("std::string")]),this._v(". ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("std"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("::")]),this._v("string "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"memorypool-getentrysize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memorypool-getentrysize","aria-hidden":"true"}},[this._v("#")]),this._v(" MemoryPool::getEntrySize")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get size of the memory entry in bytes which can be obtained by call to "),e("a",{attrs:{href:"#memorypool-obtain"}},[this._v("MemoryPool::obtain()")]),this._v(". "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - size of the enrty in bytes. ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("v_buff_size "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getEntrySize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"memorypool-getsize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memorypool-getsize","aria-hidden":"true"}},[this._v("#")]),this._v(" MemoryPool::getSize")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get size of the memory allocated by memory pool. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - size of the memory allocated by memory pool. ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("v_buff_size "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getSize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"memorypool-getobjectscount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memorypool-getobjectscount","aria-hidden":"true"}},[this._v("#")]),this._v(" MemoryPool::getObjectsCount")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get number of entries currently in use. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - number of entries currently in use. ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("v_int64 "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getObjectsCount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"threaddistributedmemorypool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threaddistributedmemorypool","aria-hidden":"true"}},[this._v("#")]),this._v(" ThreadDistributedMemoryPool")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Creates multiple MemoryPools ("),e("a",{attrs:{href:"#memorypool"}},[this._v("MemoryPool")]),this._v(") to reduce concurrency blocking in call to "),e("a",{attrs:{href:"#threaddistributedmemorypool-obtain"}},[this._v("ThreadDistributedMemoryPool::obtain()")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" base "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" memory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadDistributedMemoryPool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Fields")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Summary")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("const v_int64")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#threaddistributedmemorypool-shards-count-default"}},[t._v("SHARDS_COUNT_DEFAULT")])]),t._v(" "),s("td",[t._v("Default number of MemoryPools ("),s("a",{attrs:{href:"#memorypool"}},[t._v("MemoryPool")]),t._v(') "shards" to create.')])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Return Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Summary")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("[none]")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#threaddistributedmemorypool-threaddistributedmemorypool"}},[t._v("ThreadDistributedMemoryPool")])]),t._v(" "),s("td",[t._v("Multiple implementations: "),s("br"),s("ol",[s("li",[t._v("Constructor. ")]),s("li",[t._v("Deleted copy-constructor. ")])])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("void*")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#threaddistributedmemorypool-obtain"}},[t._v("obtain")])]),t._v(" "),s("td",[t._v("Obtain pointer to memory entry.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"threaddistributedmemorypool-shards-count-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threaddistributedmemorypool-shards-count-default","aria-hidden":"true"}},[this._v("#")]),this._v(" ThreadDistributedMemoryPool::SHARDS_COUNT_DEFAULT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default number of MemoryPools ("),e("a",{attrs:{href:"#memorypool"}},[this._v("MemoryPool")]),this._v(') "shards" to create.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("static")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("const")]),this._v(" v_int64 SHARDS_COUNT_DEFAULT\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"threaddistributedmemorypool-threaddistributedmemorypool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threaddistributedmemorypool-threaddistributedmemorypool","aria-hidden":"true"}},[this._v("#")]),this._v(" ThreadDistributedMemoryPool::ThreadDistributedMemoryPool")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("Constructor. "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" name - name of the memory pool. ")]),s("li",[s("strong",[t._v("@param")]),t._v(" entrySize - size of memory pool entry. ")]),s("li",[s("strong",[t._v("@param")]),t._v(" chunkSize - number of entries in chunk. ")]),s("li",[s("strong",[t._v("@param")]),t._v(" shardsCount - number of MemoryPools ("),s("a",{attrs:{href:"#memorypool"}},[t._v("MemoryPool")]),t._v(') "shards" to create. ')])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ThreadDistributedMemoryPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size entrySize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size chunkSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            v_int64 shardsCount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SHARDS_COUNT_DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Deleted copy-constructor."),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ThreadDistributedMemoryPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ThreadDistributedMemoryPool"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v("\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"threaddistributedmemorypool-obtain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threaddistributedmemorypool-obtain","aria-hidden":"true"}},[this._v("#")]),this._v(" ThreadDistributedMemoryPool::obtain")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - pointer to memory entry. ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("obtain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"bench"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bench","aria-hidden":"true"}},[this._v("#")]),this._v(" Bench")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Not thread-safe pool of objects of specified type. "),e("ul",[e("li",[e("strong",[this._v("@tparam")]),this._v(" T - object type. ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" base "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" memory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bench")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Return Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Summary")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("[none]")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#bench-bench"}},[t._v("Bench")])]),t._v(" "),s("td",[t._v("Constructor.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[none]")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#bench-~bench"}},[t._v("~Bench")])]),t._v(" "),s("td",[t._v("Non virtual destructor.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("T*")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#bench-obtain"}},[t._v("obtain")])]),t._v(" "),s("td",[t._v("Construct object and get pointer to constructed object.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#bench-free"}},[t._v("free")])]),t._v(" "),s("td",[t._v('Call object destructor and put it on "bench".')])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bench-bench"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bench-bench","aria-hidden":"true"}},[this._v("#")]),this._v(" Bench::Bench")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Constructor. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" growSize - number of objects to allocate when no free objects left. ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bench")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v_buff_size growSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("m_growSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("growSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("m_size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("m_indexPosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("m_blocks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("m_index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bench-bench-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bench-bench-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Bench::~Bench")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("~")]),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("Bench")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bench-obtain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bench-obtain","aria-hidden":"true"}},[this._v("#")]),this._v(" Bench::obtain")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Construct object and get pointer to constructed object. "),e("ul",[e("li",[e("strong",[this._v("@tparam")]),this._v(" Args - arguments to be passed to object constructor. ")]),e("li",[e("strong",[this._v("@param")]),this._v(" args - actual arguments to pass to object constructor. ")]),e("li",[e("strong",[this._v("@return")]),this._v(" - pointer to constructed object. ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("obtain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bench-free"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bench-free","aria-hidden":"true"}},[this._v("#")]),this._v(" Bench::free")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('Call object destructor and put it on "bench". '),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" entry - object to be freed. ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);