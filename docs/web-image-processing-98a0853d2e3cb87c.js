let S=`undefined`,a0=4,V=0,R=1,Z=`boolean`,X=`function`,Y=`number`,_=`string`,T=`utf-8`,Q=null,O=128,$=`Object`,N=Array,U=Error,a1=Object,W=Uint8Array,P=undefined;var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=V;try{return e(c,f.b,...b)}finally{if(--f.cnt===V){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var A=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc0969efeeffd5689(c,d,z(e))}finally{b[y++]=P}});var u=(a=>{const b=typeof a;if(b==Y||b==Z||a==Q){return `${a}`};if(b==_){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==Q){return `Symbol`}else{return `Symbol(${b})`}};if(b==X){const b=a.name;if(typeof b==_&&b.length>V){return `Function(${b})`}else{return `Function`}};if(N.isArray(a)){const b=a.length;let c=`[`;if(b>V){c+=u(a[V])};for(let d=R;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>R){d=c[R]}else{return toString.call(a)};if(d==$){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return $}};if(a instanceof U){return `${a.name}: ${a.message}\n${a.stack}`};return d});var K=((b,c)=>{a=b.exports;M.__wbindgen_wasm_module=c;s=Q;q=Q;E=Q;i=Q;a.__wbindgen_start();return a});var k=((a,b)=>{a=a>>>V;return h.decode(j().subarray(a,a+ b))});var p=(a=>a===P||a===Q);var L=(b=>{if(a!==P)return a;const c=I();J(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return K(d,b)});var f=(a=>{const b=c(a);e(a);return b});var F=(()=>{if(E===Q||E.byteLength===V){E=new Uint32Array(a.memory.buffer)};return E});var M=(async(b)=>{if(a!==P)return a;if(typeof b===S){b=new URL(`web-image-processing-98a0853d2e3cb87c_bg.wasm`,import.meta.url)};const c=I();if(typeof b===_||typeof Request===X&&b instanceof Request||typeof URL===X&&b instanceof URL){b=fetch(b)};J(c);const {instance:d,module:e}=await H(await b,c);return K(d,e)});var x=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===V){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=V}}};g.original=f;return g});var J=((a,b)=>{});var I=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==R){b.a=V;return !0};const c=!1;return c});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>V});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/a0+ R]=p(d)?V:d;r()[a/a0+ V]=!p(d)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/a0+ R]=p(d)?V:d;r()[a/a0+ V]=!p(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>V});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/a0+ R]=p(d)?V:d;r()[a/a0+ V]=!p(d)});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>V});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new U();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,R)}});b.wbg.__wbg_queueMicrotask_118eeb525d584d9a=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_26a89c14c53809c0=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===X;return b});b.wbg.__wbindgen_error_new=((a,b)=>{const c=new U(k(a,b));return g(c)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===_?e:P;var g=p(f)?V:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a0+ R]=h;r()[b/a0+ V]=g});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===_;return b});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==Q;return d});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===P;return b});b.wbg.__wbindgen_in=((a,b)=>{const d=c(a) in c(b);return d});b.wbg.__wbg_crypto_d05b68a3572bb8ca=(a=>{const b=c(a).crypto;return g(b)});b.wbg.__wbg_process_b02b3570280d0366=(a=>{const b=c(a).process;return g(b)});b.wbg.__wbg_versions_c1cb42213cedf0f5=(a=>{const b=c(a).versions;return g(b)});b.wbg.__wbg_node_43b1089f407e4ec2=(a=>{const b=c(a).node;return g(b)});b.wbg.__wbg_msCrypto_10fc94afee92bd76=(a=>{const b=c(a).msCrypto;return g(b)});b.wbg.__wbg_require_9a7e0f667ead4995=function(){return D((()=>{const a=module.require;return g(a)}),arguments)};b.wbg.__wbg_randomFillSync_b70ccbdf4926a99d=function(){return D(((a,b)=>{c(a).randomFillSync(f(b))}),arguments)};b.wbg.__wbg_getRandomValues_7e42b4fb8779dc6d=function(){return D(((a,b)=>{c(a).getRandomValues(c(b))}),arguments)};b.wbg.__wbindgen_jsval_loose_eq=((a,b)=>{const d=c(a)==c(b);return d});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===Z?(b?R:V):2;return d});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===Y?d:P;t()[a/8+ R]=p(e)?V:e;r()[a/a0+ V]=!p(e)});b.wbg.__wbindgen_as_number=(a=>{const b=+c(a);return b});b.wbg.__wbindgen_number_new=(a=>{const b=a;return g(b)});b.wbg.__wbg_getwithrefkey_4a92a5eca60879b9=((a,b)=>{const d=c(a)[c(b)];return g(d)});b.wbg.__wbg_set_9182712abebf82ef=((a,b,d)=>{c(a)[f(b)]=f(d)});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=G(b,c).slice();a.__wbindgen_free(b,c*a0,a0);console.error(...d)});b.wbg.__wbg_log_7c3433e130418e14=((b,c)=>{var d=G(b,c).slice();a.__wbindgen_free(b,c*a0,a0);console.log(...d)});b.wbg.__wbg_instanceof_Window_99dc9805eaa2614b=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5257b70811e953c0=(a=>{const b=c(a).document;return p(b)?V:g(b)});b.wbg.__wbg_location_0f233324e8e8c699=(a=>{const b=c(a).location;return g(b)});b.wbg.__wbg_history_370f36be0803466b=function(){return D((a=>{const b=c(a).history;return g(b)}),arguments)};b.wbg.__wbg_navigator_910cca0226b70083=(a=>{const b=c(a).navigator;return g(b)});b.wbg.__wbg_body_3eb73da919b867a1=(a=>{const b=c(a).body;return p(b)?V:g(b)});b.wbg.__wbg_createElement_1a136faad4101f43=function(){return D(((a,b,d)=>{const e=c(a).createElement(k(b,d));return g(e)}),arguments)};b.wbg.__wbg_createElementNS_d47e0c50fa2904e0=function(){return D(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===V?P:k(b,d),k(e,f));return g(h)}),arguments)};b.wbg.__wbg_createTextNode_dbdd908f92bae1b1=((a,b,d)=>{const e=c(a).createTextNode(k(b,d));return g(e)});b.wbg.__wbg_getElementById_00904c7c4a32c23b=((a,b,d)=>{const e=c(a).getElementById(k(b,d));return p(e)?V:g(e)});b.wbg.__wbg_querySelector_d86f889797c65e88=function(){return D(((a,b,d)=>{const e=c(a).querySelector(k(b,d));return p(e)?V:g(e)}),arguments)};b.wbg.__wbg_instanceof_Element_f614cf57d4316979=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_0819c2800784a176=((b,d)=>{const e=c(d).namespaceURI;var f=p(e)?V:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_setinnerHTML_99deeacfff0ae4cc=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_outerHTML_69934f9195df65af=((b,d)=>{const e=c(d).outerHTML;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_removeAttribute_5c264e727b67dbdb=function(){return D(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_setAttribute_0918ea45d5a1c663=function(){return D(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_addEventListener_1b158e9e95e0ab00=function(){return D(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_removeEventListener_177ff96081e6f22d=function(){return D(((a,b,d,e,f)=>{c(a).removeEventListener(k(b,d),c(e),f!==V)}),arguments)};b.wbg.__wbg_state_cabf8868613a7bdb=function(){return D((a=>{const b=c(a).state;return g(b)}),arguments)};b.wbg.__wbg_pushState_90b0a1cf59505502=function(){return D(((a,b,d,e,f,g)=>{c(a).pushState(c(b),k(d,e),f===V?P:k(f,g))}),arguments)};b.wbg.__wbg_href_aa2244ca34a67d87=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_pathname_d0d5b2fd2c7d8243=((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_search_b5c7b044aaf64616=((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_hash_286eced2921b7b34=((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_sethash_cc573c60c5aedda2=((a,b,d)=>{c(a).hash=k(b,d)});b.wbg.__wbg_new_7d30e9d9d2deaf9d=function(){return D(((a,b)=>{const c=new URL(k(a,b));return g(c)}),arguments)};b.wbg.__wbg_newwithbase_1151109a3f062f92=function(){return D(((a,b,c,d)=>{const e=new URL(k(a,b),k(c,d));return g(e)}),arguments)};b.wbg.__wbg_value_ab23a75318ea828f=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_setvalue_918a8ae77531a942=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_getUserMedia_5b79bb56ca3ba4ea=function(){return D(((a,b)=>{const d=c(a).getUserMedia(c(b));return g(d)}),arguments)};b.wbg.__wbg_href_1ab7f03b8a745310=function(){return D(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f}),arguments)};b.wbg.__wbg_pathname_2cd8b46817926b06=function(){return D(((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f}),arguments)};b.wbg.__wbg_search_eb68df82d26f8761=function(){return D(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f}),arguments)};b.wbg.__wbg_hash_9bd16c0f666cdf27=function(){return D(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f}),arguments)};b.wbg.__wbg_setchecked_3b12f3d602a63e47=((a,b)=>{c(a).checked=b!==V});b.wbg.__wbg_value_c93cb4b4d352228e=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_setvalue_9bd3f93b3864ddbf=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_mediaDevices_a2d4e41fb027cd4a=function(){return D((a=>{const b=c(a).mediaDevices;return g(b)}),arguments)};b.wbg.__wbg_bubbles_f0783dc095f8e220=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_191799b8e0ab3254=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_d94a39b8c8f6eed1=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_setsrcObject_bc20f32f86b54230=((a,b)=>{c(a).srcObject=c(b)});b.wbg.__wbg_href_dc647488029294b4=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_parentNode_f3957fdd408a62f7=(a=>{const b=c(a).parentNode;return p(b)?V:g(b)});b.wbg.__wbg_parentElement_86a7612dde875ba9=(a=>{const b=c(a).parentElement;return p(b)?V:g(b)});b.wbg.__wbg_childNodes_75d3da5f3a7bb985=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_lastChild_8f7b6f3825115eff=(a=>{const b=c(a).lastChild;return p(b)?V:g(b)});b.wbg.__wbg_nextSibling_13e9454ef5323f1a=(a=>{const b=c(a).nextSibling;return p(b)?V:g(b)});b.wbg.__wbg_setnodeValue_8656e865e9b11bbb=((a,b,d)=>{c(a).nodeValue=b===V?P:k(b,d)});b.wbg.__wbg_textContent_efe8338af53ddf62=((b,d)=>{const e=c(d).textContent;var f=p(e)?V:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbg_cloneNode_80501c66ab115588=function(){return D((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_insertBefore_882082ef4c5d7766=function(){return D(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_removeChild_14b08321b677677a=function(){return D(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_cb6366cb0956ce29=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_99e27ed8897850f2=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_get_c43534c00f382c8a=((a,b)=>{const d=c(a)[b>>>V];return g(d)});b.wbg.__wbg_length_d99b680fd68bf71b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_5859b6d41c6fe9f7=((a,b)=>{const c=new Function(k(a,b));return g(c)});b.wbg.__wbg_call_a79f1973a4f07d5e=function(){return D(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_87d841e70661f6e9=(()=>{const a=new a1();return g(a)});b.wbg.__wbg_self_086b5302bcafb962=function(){return D((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_132fa5d7546f1de5=function(){return D((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_e5f801a37ad7d07b=function(){return D((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f9a61fce4af6b7c1=function(){return D((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbg_from_a663e01d8dab8e44=(a=>{const b=N.from(c(a));return g(b)});b.wbg.__wbg_instanceof_ArrayBuffer_f4521cec1b99ee35=(a=>{let b;try{b=c(a) instanceof ArrayBuffer}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_call_f6a2bc58c19c53c6=function(){return D(((a,b,d)=>{const e=c(a).call(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_isSafeInteger_d8c89788832a17bf=(a=>{const b=Number.isSafeInteger(c(a));return b});b.wbg.__wbg_entries_7a47f5716366056b=(a=>{const b=a1.entries(c(a));return g(b)});b.wbg.__wbg_is_a5728dbfb61c82cd=((a,b)=>{const d=a1.is(c(a),c(b));return d});b.wbg.__wbg_resolve_97ecd55ee839391b=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_7aeb7c5f1536640f=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_then_5842e4e97f7beace=((a,b,d)=>{const e=c(a).then(c(b),c(d));return g(e)});b.wbg.__wbg_buffer_5d1b598a01b41a42=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_newwithbyteoffsetandlength_d695c7957788f922=((a,b,d)=>{const e=new W(c(a),b>>>V,d>>>V);return g(e)});b.wbg.__wbg_new_ace717933ad7117f=(a=>{const b=new W(c(a));return g(b)});b.wbg.__wbg_set_74906aa30864df5a=((a,b,d)=>{c(a).set(c(b),d>>>V)});b.wbg.__wbg_length_f0764416ba5bb237=(a=>{const b=c(a).length;return b});b.wbg.__wbg_instanceof_Uint8Array_4f5cffed7df34b2f=(a=>{let b;try{b=c(a) instanceof W}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_newwithlength_728575f3bba9959b=(a=>{const b=new W(a>>>V);return g(b)});b.wbg.__wbg_subarray_7f7a652672800851=((a,b,d)=>{const e=c(a).subarray(b>>>V,d>>>V);return g(e)});b.wbg.__wbg_set_37a50e901587b477=function(){return D(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ R]=g;r()[b/a0+ V]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new U(k(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return g(b)});b.wbg.__wbindgen_closure_wrapper318=((a,b,c)=>{const d=v(a,b,143,w);return g(d)});b.wbg.__wbindgen_closure_wrapper714=((a,b,c)=>{const d=x(a,b,346,A);return g(d)});b.wbg.__wbindgen_closure_wrapper1101=((a,b,c)=>{const d=v(a,b,506,B);return g(d)});b.wbg.__wbindgen_closure_wrapper1126=((a,b,c)=>{const d=v(a,b,522,C);return g(d)});return b});var H=(async(a,b)=>{if(typeof Response===X&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===X){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var C=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_mut_ref__hf2b36717c5501f57(c,d,z(e))}finally{b[y++]=P}});var g=(a=>{if(d===b.length)b.push(b.length+ R);const c=d;d=b[c];b[c]=a;return c});var B=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h79a6d9f6b7b8d326(b,c,g(d))});var o=((a,b,c)=>{if(c===P){const c=m.encode(a);const d=b(c.length,R)>>>V;j().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,R)>>>V;const f=j();let g=V;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==V){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,R)>>>V;const b=j().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var t=(()=>{if(s===Q||s.byteLength===V){s=new Float64Array(a.memory.buffer)};return s});var e=(a=>{if(a<132)return;b[a]=d;d=a});var j=(()=>{if(i===Q||i.byteLength===V){i=new W(a.memory.buffer)};return i});var c=(a=>b[a]);var w=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h13c2cdc0f704de33(b,c,g(d))});var z=(a=>{if(y==R)throw new U(`out of js stack`);b[--y]=a;return y});var r=(()=>{if(q===Q||q.byteLength===V){q=new Int32Array(a.memory.buffer)};return q});var G=((a,b)=>{a=a>>>V;const c=F();const d=c.subarray(a/a0,a/a0+ b);const e=[];for(let a=V;a<d.length;a++){e.push(f(d[a]))};return e});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}let a;const b=new N(O).fill(P);b.push(P,Q,!0,!1);let d=b.length;const h=typeof TextDecoder!==S?new TextDecoder(T,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw U(`TextDecoder not available`)}};if(typeof TextDecoder!==S){h.decode()};let i=Q;let l=V;const m=typeof TextEncoder!==S?new TextEncoder(T):{encode:()=>{throw U(`TextEncoder not available`)}};const n=typeof m.encodeInto===X?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=Q;let s=Q;let y=O;let E=Q;export default M;export{L as initSync}