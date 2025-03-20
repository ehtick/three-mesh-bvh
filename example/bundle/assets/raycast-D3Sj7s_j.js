import{M,l as D,m as V,e as G,j as L,W as O,c as I,d as k,D as K,A as N,O as R,T as q,k as J,P as Q,V as S,f as P}from"./ExtendedTriangle-CFC-kWKu.js";import{S as U}from"./stats.min-GTpOrGrX.js";import{g as X}from"./lil-gui.module.min-jESndyO-.js";import{C as F,S as Y,A as Z}from"./MeshBVH-CE-cOGaL.js";import{M as _}from"./MeshBVHHelper-PaFFnbA9.js";import{a as $,b as ee,e as te}from"./ExtensionUtilities-DtfWnSqQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";M.prototype.raycast=$;D.prototype.computeBoundsTree=ee;D.prototype.disposeBoundsTree=te;const ne=2503224/2;let g,y,B,x,i,H,r,s;const l=[],T=[],m=new V,z=new G(.25,20,20),ae=new L(.01,.01),f=25;let b=null,w=0;const e={raycasters:{count:150,speed:1,near:0,far:f},mesh:{splitStrategy:F,count:1,useBoundsTree:!0,visualizeBounds:!1,displayParents:!1,speed:1,visualBoundsDepth:10}};se();c();W();function se(){g=new O({antialias:!0}),g.setPixelRatio(window.devicePixelRatio),g.setSize(window.innerWidth,window.innerHeight),g.setClearColor(ne,1),document.body.appendChild(g.domElement),y=new I,y.fog=new k(2503224/2,40,80);const t=new K(16777215,.5);t.position.set(1,1,1),y.add(t),y.add(new N(16777215,.4));const o=1,d=.4,p=400,h=100;s=new R,i=new q(o,d,p,h),H=new J({color:15277667}),s.scale.multiplyScalar(10),s.rotation.x=10.989999999999943,s.rotation.y=10.989999999999943,y.add(s),x=new Q(75,window.innerWidth/window.innerHeight,.1,50),x.position.z=60,x.far=100,x.updateProjectionMatrix(),B=new U,document.body.appendChild(B.dom);const u=new X,a=u.addFolder("Raycasters");a.add(e.raycasters,"count").min(1).max(1e3).step(1).onChange(()=>c()),a.add(e.raycasters,"speed").min(0).max(20),a.add(e.raycasters,"near").min(0).max(f).onChange(()=>c()),a.add(e.raycasters,"far").min(0).max(f).onChange(()=>c()),a.open();const n=u.addFolder("Mesh");n.add(e.mesh,"useBoundsTree").onChange(()=>c()),n.add(e.mesh,"splitStrategy",{CENTER:F,SAH:Y,AVERAGE:Z}).onChange(()=>c()),n.add(e.mesh,"count").min(1).max(300).step(1).onChange(()=>c()),n.add(e.mesh,"speed").min(0).max(20),n.add(e.mesh,"visualizeBounds").onChange(()=>c()),n.add(e.mesh,"displayParents").onChange(()=>c()),n.add(e.mesh,"visualBoundsDepth").min(1).max(20).step(1).onChange(()=>c()),n.open(),window.addEventListener("resize",function(){x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight)},!1)}function oe(){const t=new M(i,H);t.rotation.x=Math.random()*10,t.rotation.y=Math.random()*10,l.push(t),s.add(t)}function re(){const t=new R,o=new P({color:16777215}),d=new M(z,o),p=new M(z,o);p.scale.multiplyScalar(.25),d.scale.multiplyScalar(.5);const h=new M(ae,new P({color:16777215,transparent:!0,opacity:.25}));t.add(h),t.add(d),t.add(p),y.add(t),d.position.set(f,0,0),t.rotation.x=Math.random()*10,t.rotation.y=Math.random()*10,t.rotation.z=Math.random()*10;const u=new S,a=new S,n=Math.random()-.5,C=Math.random()-.5,j=Math.random()-.5;T.push({update:()=>{t.rotation.x+=n*1e-4*e.raycasters.speed*w,t.rotation.y+=C*1e-4*e.raycasters.speed*w,t.rotation.z+=j*1e-4*e.raycasters.speed*w,d.updateMatrixWorld(),u.setFromMatrixPosition(d.matrixWorld),a.copy(u).multiplyScalar(-1).normalize(),m.set(u,a),m.firstHitOnly=!0;const E=m.intersectObject(s,!0),v=E.length?E[0].distance:f;p.position.set(f-v,0,0);const A=E.length?v-m.near:v-m.near-(f-m.far);h.position.set(f-m.near-A/2,0,0),h.scale.set(1,A,1),h.rotation.z=Math.PI/2},remove:()=>{y.remove(t)}})}function c(){for(m.near=e.raycasters.near,m.far=e.raycasters.far;T.length>e.raycasters.count;)T.pop().remove();for(;T.length<e.raycasters.count;)re();if(!i)return;(!e.mesh.useBoundsTree&&i.boundsTree||i.boundsTree&&e.mesh.splitStrategy!==i.boundsTree.splitStrategy)&&i.disposeBoundsTree(),e.mesh.useBoundsTree&&!i.boundsTree&&(console.time("computing bounds tree"),i.computeBoundsTree({maxLeafTris:5,strategy:parseFloat(e.mesh.splitStrategy)}),i.boundsTree.splitStrategy=e.mesh.splitStrategy,console.timeEnd("computing bounds tree"),r&&r.update());const t=l.length;for(;l.length>e.mesh.count;)s.remove(l.pop());for(;l.length<e.mesh.count;)oe();if(t!==l.length){const d=(a,n,C)=>a+(n-a)*C,p=(l.length-1)/299,h=d(0,2,p),u=d(1,.2,p);l.forEach(a=>{a.scale.set(1,1,1).multiplyScalar(u);const n=new S(0,1,0);n.applyAxisAngle(new S(1,0,0),Math.PI*Math.random()),n.applyAxisAngle(new S(0,1,0),2*Math.PI*Math.random()),n.multiplyScalar(h),a.position.set(n.x,n.y,n.z)})}const o=e.mesh.visualizeBounds&&i.boundsTree;r&&!o&&(s.remove(r),r=null),!r&&o&&(r=new _(l[0]),s.add(r)),r&&(r.depth=e.mesh.visualBoundsDepth,r.displayParents=e.mesh.displayParents,r.update())}function W(){B.begin();const t=window.performance.now();b=b||t,w=t-b,s.rotation.x+=1e-4*e.mesh.speed*w,s.rotation.y+=1e-4*e.mesh.speed*w,s.children.forEach(o=>{o.rotation.x+=1e-4*e.mesh.speed*w,o.rotation.y+=1e-4*e.mesh.speed*w}),s.updateMatrixWorld(),T.forEach(o=>o.update()),g.render(y,x),b=t,B.end(),requestAnimationFrame(W)}
