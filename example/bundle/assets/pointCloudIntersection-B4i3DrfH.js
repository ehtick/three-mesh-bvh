import{C as J,ae as K,af as Q,l as k,ag as A,ah as q,M as W,J as E,m as ee,W as te,c as ne,P as se,ai as re,aj as oe,f as O,e as ae,q as ie}from"./ExtendedTriangle-CFC-kWKu.js";import{S as le}from"./Stats-9dH8FB2H.js";import{O as ce}from"./OrbitControls-DPxOa-V_.js";import{g as ue}from"./lil-gui.module.min-jESndyO-.js";import{M as de}from"./MeshBVHHelper-PaFFnbA9.js";import{C as X,A as pe,S as me,N as Y,I as he}from"./MeshBVH-CE-cOGaL.js";import{a as fe,b as ge,e as ye}from"./ExtensionUtilities-DtfWnSqQ.js";const g=new J;class xe extends K{constructor(c){super(c),this.propertyNameMapping={},this.customPropertyMapping={}}load(c,P,T,x){const h=this,p=new Q(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(c,function(u){try{P(h.parse(u))}catch(C){x?x(C):console.error(C),h.manager.itemError(c)}},T,x)}setPropertyNameMapping(c){this.propertyNameMapping=c}setCustomPropertyNameMapping(c){this.customPropertyMapping=c}parse(c){function P(e,r=0){const n=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let t="";const s=n.exec(e);s!==null&&(t=s[1]);const o={comments:[],elements:[],headerLength:r,objInfo:""},i=t.split(/\r\n|\r|\n/);let a;function w(d,m){const l={type:d[0]};return l.type==="list"?(l.name=d[3],l.countType=d[1],l.itemType=d[2]):l.name=d[1],l.name in m&&(l.name=m[l.name]),l}for(let d=0;d<i.length;d++){let m=i[d];if(m=m.trim(),m==="")continue;const l=m.split(/\s+/),G=l.shift();switch(m=l.join(" "),G){case"format":o.format=l[0],o.version=l[1];break;case"comment":o.comments.push(m);break;case"element":a!==void 0&&o.elements.push(a),a={},a.name=l[0],a.count=parseInt(l[1]),a.properties=[];break;case"property":a.properties.push(w(l,H.propertyNameMapping));break;case"obj_info":o.objInfo=m;break;default:console.log("unhandled",G,l)}}return a!==void 0&&o.elements.push(a),o}function T(e,r){switch(r){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(e);case"float":case"double":case"float32":case"float64":return parseFloat(e)}}function x(e,r){const n={};for(let t=0;t<e.length;t++){if(r.empty())return null;if(e[t].type==="list"){const s=[],o=T(r.next(),e[t].countType);for(let i=0;i<o;i++){if(r.empty())return null;s.push(T(r.next(),e[t].itemType))}n[e[t].name]=s}else n[e[t].name]=T(r.next(),e[t].type)}return n}function h(){const e={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const r of Object.keys(H.customPropertyMapping))e[r]=[];return e}function p(e){const r=e.map(t=>t.name);function n(t){for(let s=0,o=t.length;s<o;s++){const i=t[s];if(r.includes(i))return i}return null}return{attrX:n(["x","px","posx"])||"x",attrY:n(["y","py","posy"])||"y",attrZ:n(["z","pz","posz"])||"z",attrNX:n(["nx","normalx"]),attrNY:n(["ny","normaly"]),attrNZ:n(["nz","normalz"]),attrS:n(["s","u","texture_u","tx"]),attrT:n(["t","v","texture_v","ty"]),attrR:n(["red","diffuse_red","r","diffuse_r"]),attrG:n(["green","diffuse_green","g","diffuse_g"]),attrB:n(["blue","diffuse_blue","b","diffuse_b"])}}function u(e,r){const n=h(),t=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let s,o;(o=t.exec(e))!==null?s=o[1].split(/\s+/):s=[];const i=new we(s);e:for(let a=0;a<r.elements.length;a++){const w=r.elements[a],d=p(w.properties);for(let m=0;m<w.count;m++){const l=x(w.properties,i);if(!l)break e;f(n,w.name,l,d)}}return C(n)}function C(e){let r=new k;e.indices.length>0&&r.setIndex(e.indices),r.setAttribute("position",new A(e.vertices,3)),e.normals.length>0&&r.setAttribute("normal",new A(e.normals,3)),e.uvs.length>0&&r.setAttribute("uv",new A(e.uvs,2)),e.colors.length>0&&r.setAttribute("color",new A(e.colors,3)),(e.faceVertexUvs.length>0||e.faceVertexColors.length>0)&&(r=r.toNonIndexed(),e.faceVertexUvs.length>0&&r.setAttribute("uv",new A(e.faceVertexUvs,2)),e.faceVertexColors.length>0&&r.setAttribute("color",new A(e.faceVertexColors,3)));for(const n of Object.keys(H.customPropertyMapping))e[n].length>0&&r.setAttribute(n,new A(e[n],H.customPropertyMapping[n].length));return r.computeBoundingSphere(),r}function f(e,r,n,t){if(r==="vertex"){e.vertices.push(n[t.attrX],n[t.attrY],n[t.attrZ]),t.attrNX!==null&&t.attrNY!==null&&t.attrNZ!==null&&e.normals.push(n[t.attrNX],n[t.attrNY],n[t.attrNZ]),t.attrS!==null&&t.attrT!==null&&e.uvs.push(n[t.attrS],n[t.attrT]),t.attrR!==null&&t.attrG!==null&&t.attrB!==null&&(g.setRGB(n[t.attrR]/255,n[t.attrG]/255,n[t.attrB]/255,q),e.colors.push(g.r,g.g,g.b));for(const s of Object.keys(H.customPropertyMapping))for(const o of H.customPropertyMapping[s])e[s].push(n[o])}else if(r==="face"){const s=n.vertex_indices||n.vertex_index,o=n.texcoord;s.length===3?(e.indices.push(s[0],s[1],s[2]),o&&o.length===6&&(e.faceVertexUvs.push(o[0],o[1]),e.faceVertexUvs.push(o[2],o[3]),e.faceVertexUvs.push(o[4],o[5]))):s.length===4&&(e.indices.push(s[0],s[1],s[3]),e.indices.push(s[1],s[2],s[3])),t.attrR!==null&&t.attrG!==null&&t.attrB!==null&&(g.setRGB(n[t.attrR]/255,n[t.attrG]/255,n[t.attrB]/255,q),e.faceVertexColors.push(g.r,g.g,g.b),e.faceVertexColors.push(g.r,g.g,g.b),e.faceVertexColors.push(g.r,g.g,g.b))}}function z(e,r){const n={};let t=0;for(let s=0;s<r.length;s++){const o=r[s],i=o.valueReader;if(o.type==="list"){const a=[],w=o.countReader.read(e+t);t+=o.countReader.size;for(let d=0;d<w;d++)a.push(i.read(e+t)),t+=i.size;n[o.name]=a}else n[o.name]=i.read(e+t),t+=i.size}return[n,t]}function b(e,r,n){function t(s,o,i){switch(o){case"int8":case"char":return{read:a=>s.getInt8(a),size:1};case"uint8":case"uchar":return{read:a=>s.getUint8(a),size:1};case"int16":case"short":return{read:a=>s.getInt16(a,i),size:2};case"uint16":case"ushort":return{read:a=>s.getUint16(a,i),size:2};case"int32":case"int":return{read:a=>s.getInt32(a,i),size:4};case"uint32":case"uint":return{read:a=>s.getUint32(a,i),size:4};case"float32":case"float":return{read:a=>s.getFloat32(a,i),size:4};case"float64":case"double":return{read:a=>s.getFloat64(a,i),size:8}}}for(let s=0,o=e.length;s<o;s++){const i=e[s];i.type==="list"?(i.countReader=t(r,i.countType,n),i.valueReader=t(r,i.itemType,n)):i.valueReader=t(r,i.type,n)}}function U(e,r){const n=h(),t=r.format==="binary_little_endian",s=new DataView(e,r.headerLength);let o,i=0;for(let a=0;a<r.elements.length;a++){const w=r.elements[a],d=w.properties,m=p(d);b(d,s,t);for(let l=0;l<w.count;l++){o=z(i,d),i+=o[1];const G=o[0];f(n,w.name,G,m)}}return C(n)}function I(e){let r=0,n=!0,t="";const s=[],o=new TextDecoder().decode(e.subarray(0,5)),i=/^ply\r\n/.test(o);do{const a=String.fromCharCode(e[r++]);a!==`
`&&a!=="\r"?t+=a:(t==="end_header"&&(n=!1),t!==""&&(s.push(t),t=""))}while(n&&r<e.length);return i===!0&&r++,{headerText:s.join("\r")+"\r",headerLength:r}}let N;const H=this;if(c instanceof ArrayBuffer){const e=new Uint8Array(c),{headerText:r,headerLength:n}=I(e),t=P(r,n);if(t.format==="ascii"){const s=new TextDecoder().decode(e);N=u(s,t)}else N=U(c,t)}else N=u(c,P(c));return N}}class we{constructor(c){this.arr=c,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}W.prototype.raycast=fe;k.prototype.computeBoundsTree=ge;k.prototype.disposeBoundsTree=ye;let F,L,B,R,v,M,j,Z,D=new E,S;const Te="https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/point-cloud-porsche/scene.ply",V=new ee,y={displayHelper:!1,helperDepth:10,displayParents:!1,strategy:X,pointSize:.005,raycastThreshold:.005,useBVH:!0};function Ce(){Z=document.getElementById("output"),R=new te({antialias:!0}),R.setPixelRatio(window.devicePixelRatio),R.setSize(window.innerWidth,window.innerHeight),R.setClearColor(1251612,1),document.body.appendChild(R.domElement),L=new ne,B=new se(75,window.innerWidth/window.innerHeight,.1,50),B.position.set(3,3,3),B.far=100,B.updateProjectionMatrix(),new ce(B,R.domElement),F=new le,document.body.appendChild(F.dom),window.addEventListener("resize",function(){B.aspect=window.innerWidth/window.innerHeight,B.updateProjectionMatrix(),R.setSize(window.innerWidth,window.innerHeight)},!1),new xe().load(Te,u=>{u.center();const C=new re({size:y.pointSize,vertexColors:!0});j=new oe(u,C),j.matrixAutoUpdate=!1,L.add(j);const f=[],z=u.clone();let b=z.attributes.position.count;for(let I=0,N=b;I<N;I++)f.push(I,I,I);z.setIndex(f);const U=new O({color:16711680});v=new W(z,U),console.time("computeBoundsTree"),v.geometry.computeBoundsTree({mode:y.mode}),console.timeEnd("computeBoundsTree"),M=new de(v,y.depth),L.add(M)});const P=new ae(.01,32,32),T=new O({color:16776960,opacity:.9,transparent:!0});S=new W(P,T),S.visible=!1,L.add(S);const x=new ue,h=x.addFolder("helper");h.add(y,"displayHelper"),h.add(y,"displayParents").onChange(u=>{M.displayParents=u,M.update()}),h.add(y,"helperDepth",1,20,1).name("depth").onChange(u=>{M.depth=parseInt(u),M.update()}),h.open();const p=x.addFolder("points");p.add(y,"useBVH"),p.add(y,"strategy",{CENTER:X,AVERAGE:pe,SAH:me}).onChange(u=>{console.time("computeBoundsTree"),v.geometry.computeBoundsTree({strategy:parseInt(u)}),console.timeEnd("computeBoundsTree"),M.update()}),p.add(y,"pointSize",.001,.01,.001),p.add(y,"raycastThreshold",.001,.01,.001),p.open()}window.addEventListener("pointermove",_=>{if(!v)return;D.x=_.clientX/window.innerWidth*2-1,D.y=-(_.clientY/window.innerHeight)*2+1,V.setFromCamera(D,B);const c=window.performance.now();if(y.useBVH){S.visible=!1;const T=new ie;T.copy(v.matrixWorld).invert(),V.ray.applyMatrix4(T);const h=V.params.Points.threshold/((v.scale.x+v.scale.y+v.scale.z)/3),p=h*h,{ray:u}=V;let C=1/0;v.geometry.boundsTree.shapecast({boundsTraverseOrder:f=>f.distanceToPoint(u.origin),intersectsBounds:(f,z,b)=>b>C?Y:(f.expandByScalar(h),u.intersectsBox(f)?he:Y),intersectsTriangle:f=>{if(u.distanceSqToPoint(f.a)<p){const b=u.origin.distanceTo(f.a);b<C&&(C=b,S.position.copy(f.a).applyMatrix4(v.matrixWorld),S.visible=!0)}}})}else{const x=V.intersectObject(j,!0)[0];x?(S.position.copy(x.point),S.visible=!0):S.visible=!1}const P=window.performance.now()-c;Z.innerText=`${P.toFixed(2)}ms`},!1);function $(){requestAnimationFrame($),j&&(j.material.size=y.pointSize,M.visible=y.displayHelper,V.params.Points.threshold=y.raycastThreshold),F.begin(),R.render(L,B),F.end()}Ce();$();
