(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1519:function(e,t,i){"use strict";i(886)},1646:function(e,t,i){"use strict";i.r(t);i(45),i(59);var r={name:"ArticleAdvertiSpace",props:["width","height"],data:function(){return{carouses:[{imgUrl:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/AdvertiSpace/1607499461751-adslo.png",text:"广告位招租",id:"1",target:"_blank",href:"http://itclancoder.mikecrm.com/z1zXWvz"},{imgUrl:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/AdvertiSpace/1607499509358-adslocation.png",text:"广告位招租",id:"2",href:"/adverent/"}],centerDialogVisible:!1,isDiaLog:!0}},methods:{linkFun:function(){var e=this;if(!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return this.isDiaLog=!1,this.$message({message:"如需合作,请您联系站长,期待我们合作愉快",type:"error",center:!0,duration:5e3}),console.log("移动端下不显示dialog");this.carouses.forEach((function(t){"javascript:;"!=t.href?t.href=t.href:e.centerDialogVisible=!0}))}}},s=(i(1519),i(10)),n=Object(s.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"carousel"},[i("el-carousel",{attrs:{trigger:"click",height:"150px"}},e._l(e.carouses,(function(t){return i("el-carousel-item",{key:t.id},[i("a",{attrs:{href:t.href},on:{click:e.linkFun}},[i("img",{attrs:{src:t.imgUrl,width:e.width,height:e.height,alt:""}})])])})),1)],1),e._v(" "),e.isDiaLog?i("el-dialog",{attrs:{title:"提示",visible:e.centerDialogVisible,"close-on-click-modal":"false",width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[i("span",[e._v("如需合作:请您联系站长,添加微信:suibichuanji,期待我们合作愉快")]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("确 定")])],1)]):e._e()],1)}),[],!1,null,"08f234bc",null);t.default=n.exports},886:function(e,t,i){}}]);