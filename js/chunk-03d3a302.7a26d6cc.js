(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03d3a302"],{"1e76":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("H1",[t._v("D3Bar Hello World.")])],1)},r=[],o=n("5698"),l={name:"D3Bar",computed:{},methods:{},mounted:function(){var t=400,a=400,n=o["y"](this.$el).append("svg").attr("width",t).attr("height",a),e={left:30,right:30,top:20,bottom:20},r=[10,20,30,40,33,24,12,5],l=o["t"]().domain(o["s"](r.length)).rangeRound([0,t-e.left-e.right]),c=o["u"]().domain([0,o["o"](r)]).range([a-e.top-e.bottom,0]),i=o["b"]().scale(l),u=o["c"]().scale(c),s=4;n.selectAll("rect").data(r).enter().append("rect").attr("fill","steelblue").attr("transform","translate("+e.left+","+e.top+")").attr("x",(function(t,a){return l(a)+s/2})).attr("y",(function(t){return c(t)})).attr("width",l.bandwidth()-s).attr("height",(function(t){return a-e.top-e.bottom-c(t)})),n.selectAll("text").data(r).enter().append("text").attr("fill","white").attr("transform","translate("+e.left+","+e.top+")").attr("x",(function(t,a){return l(a)+s/2})).attr("y",(function(t){return c(t)})).attr("dx",(function(){return(l.bandwidth()-s)/2})).attr("dy",(function(){return 20})).text((function(t){return t})),n.append("g").attr("class","axis").attr("transform","translate("+e.left+","+(a-e.bottom)+")").call(i),n.append("g").attr("class","axis").attr("transform","translate("+e.left+","+e.top+")").call(u)}},c=l,i=(n("381c"),n("2877")),u=Object(i["a"])(c,e,r,!1,null,"5aae0c3a",null);a["default"]=u.exports},"343f":function(t,a,n){},"381c":function(t,a,n){"use strict";var e=n("343f"),r=n.n(e);r.a}}]);