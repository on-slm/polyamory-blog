(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{119:function(t,e,n){"use strict";var a=n(87);n.n(a).a},123:function(t,e,n){"use strict";n.r(e);var a=n(6),o=n(2);const s={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:function(){return{rawPopupConfig:{"/":{message:"Právě byl na této stránce vydán nový obsah.",buttonText:"Načíst aktuální verzi"},"/en/":{message:"New content is available.",buttonText:"Refresh"}},updateEvent:null}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={"/":{message:"Právě byl na této stránce vydán nový obsah.",buttonText:"Načíst aktuální verzi"},"/en/":{message:"New content is available.",buttonText:"Refresh"}}&&(this.rawPopupConfig=s)},computed:{popupConfig:function(){return Object(o.h)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||s["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||s["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then(function(){location.reload(!0)}),this.updateEvent=null)}}},i=(n(119),n(3)),r=Object(i.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)},[],!1,null,"ef6a919a",null);e.default=r.exports},87:function(t,e,n){}}]);