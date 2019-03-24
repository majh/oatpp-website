(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{322:function(t,e,o){"use strict";o.r(e);var r=o(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"objectpool-hpp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#objectpool-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" ObjectPool.hpp"),o("seo")],1),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/base/memory/ObjectPool.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),o("OutboundLink")],1),o("br"),t._v(" "),o("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/base/memory/ObjectPool.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),o("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("p",[t._v("Macro to declare object pool class which uses "),o("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/Allocator/#poolsharedobjectallocator"}},[t._v("oatpp::base::memory::PoolSharedObjectAllocator")]),t._v(" to allocate objects. "),o("ul",[t._m(2),t._m(3),o("li",[o("strong",[t._v("@param")]),t._v(" CHUNK_SIZE - chunk size for "),o("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[t._v("oatpp::base::memory::MemoryPool")]),t._v(". ")],1)])],1),t._v(" "),t._m(4),t._m(5),t._v(" "),o("p",[t._v("Macro to declare object pool class which uses "),o("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/Allocator/#threadlocalpoolsharedobjectallocator"}},[t._v("oatpp::base::memory::ThreadLocalPoolSharedObjectAllocator")]),t._v(" to allocate objects. "),o("ul",[t._m(6),t._m(7),o("li",[o("strong",[t._v("@param")]),t._v(" CHUNK_SIZE - chunk size for "),o("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[t._v("oatpp::base::memory::MemoryPool")]),t._v(". ")],1)])],1),t._v(" "),t._m(8),t._m(9),t._v(" "),o("p",[t._v("Macro to declare: "),o("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[t._v("oatpp::base::memory::MemoryPool")]),t._v(" for object, plus class-specific operators "),o("code",[t._v("static void* operator new(std::size_t sz)")]),t._v(", "),o("code",[t._v("static void operator delete(void* ptr, std::size_t sz)")]),t._v(", "),o("code",[t._v("static void* operator new(std::size_t sz, void* entry)")]),t._v(", "),o("code",[t._v("static void operator delete(void* ptr, void* entry)")]),t._v(". "),o("ul",[t._m(10),t._m(11),o("li",[o("strong",[t._v("@param")]),t._v(" CHUNK_SIZE - chunk size for "),o("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[t._v("oatpp::base::memory::MemoryPool")]),t._v(". ")],1)])],1),t._v(" "),t._m(12),t._m(13),t._v(" "),o("p",[t._v("Macro to declare: "),o("code",[t._v("thread_local")]),t._v(" "),o("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[t._v("oatpp::base::memory::MemoryPool")]),t._v(" for object, plus class-specific operators "),o("code",[t._v("static void* operator new(std::size_t sz)")]),t._v(", "),o("code",[t._v("static void operator delete(void* ptr, std::size_t sz)")]),t._v(", "),o("code",[t._v("static void* operator new(std::size_t sz, void* entry)")]),t._v(", "),o("code",[t._v("static void operator delete(void* ptr, void* entry)")]),t._v(". "),o("ul",[t._m(14),t._m(15),o("li",[o("strong",[t._v("@param")]),t._v(" CHUNK_SIZE - chunk size for "),o("router-link",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[t._v("oatpp::base::memory::MemoryPool")]),t._v(". ")],1)])],1),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/core/base/memory/ObjectPool.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"shared-object-pool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shared-object-pool","aria-hidden":"true"}},[this._v("#")]),this._v(" SHARED_OBJECT_POOL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" NAME - name of the memory pool. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" TYPE - type of the object. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[this._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[this._v("define")]),this._v(" SHARED_OBJECT_POOL(NAME, TYPE, CHUNK_SIZE)")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"shared-object-pool-thread-local"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shared-object-pool-thread-local","aria-hidden":"true"}},[this._v("#")]),this._v(" SHARED_OBJECT_POOL_THREAD_LOCAL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" NAME - name of the memory pool. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" TYPE - type of the object. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[this._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[this._v("define")]),this._v(" SHARED_OBJECT_POOL_THREAD_LOCAL(NAME, TYPE, CHUNK_SIZE)")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"object-pool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-pool","aria-hidden":"true"}},[this._v("#")]),this._v(" OBJECT_POOL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" NAME - name of the memory pool. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" TYPE - type of the object. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[this._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[this._v("define")]),this._v(" OBJECT_POOL(POOL_NAME, TYPE, CHUNK_SIZE)")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"object-pool-thread-local"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-pool-thread-local","aria-hidden":"true"}},[this._v("#")]),this._v(" OBJECT_POOL_THREAD_LOCAL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" NAME - name of the memory pool. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" TYPE - type of the object. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[this._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[this._v("define")]),this._v(" OBJECT_POOL_THREAD_LOCAL(POOL_NAME, TYPE, CHUNK_SIZE)")]),this._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);