import{M as B,i as A,e as W,j as N,O as I,W as K,c as J,d as Q,D as U,A as X,k as Y,P as Z,T as R,l as j,m as _,f as F,V}from"./ExtendedTriangle-CFC-kWKu.js";import{S as $}from"./stats.min-GTpOrGrX.js";import{g as ee}from"./lil-gui.module.min-jESndyO-.js";import{a as D,c as te,d as oe,b as ne,e as se}from"./ExtensionUtilities-DtfWnSqQ.js";import{C as H,S as ae,A as re}from"./MeshBVH-CE-cOGaL.js";import"./_commonjsHelpers-Cpj98o6Y.js";B.prototype.raycast=D;j.prototype.computeBoundsTree=ne;j.prototype.disposeBoundsTree=se;A.prototype.raycast=D;A.prototype.computeBoundsTree=te;A.prototype.disposeBoundsTree=oe;const k=13621468,ie=2503224,z=14162784;let p,c,S,u,O,i,t;const M=[],d=new _,P=new W(.25,20,20),de=new N(.01,.01),m=25,e=new I;let T=null,h=0;const o={raycasters:{count:150,speed:1,near:0,far:m},mesh:{splitStrategy:H,useBoundsTree:!0,speed:1}};ce();y();v();function ce(){p=new K({antialias:!0}),p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.setClearColor(k,1),document.body.appendChild(p.domElement),c=new J,c.fog=new Q(k,40,100);const n=new U(16777215,1.5);n.position.set(1,1,1),c.add(n),c.add(new X(16777215,1.2)),i=new I,O=new Y({color:ie}),i.scale.multiplyScalar(10),i.rotation.x=10.989999999999943,i.rotation.y=10.989999999999943,c.add(i),me(),u=new Z(75,window.innerWidth/window.innerHeight,.1,50),u.position.z=60,u.far=100,u.updateProjectionMatrix(),S=new $,document.body.appendChild(S.dom);const r=new ee,s=r.addFolder("Raycasters");s.add(o.raycasters,"count").min(1).max(1e3).step(1).onChange(()=>y()),s.add(o.raycasters,"speed").min(0).max(20),s.add(o.raycasters,"near").min(0).max(m).onChange(()=>y()),s.add(o.raycasters,"far").min(0).max(m).onChange(()=>y()),s.open();const a=r.addFolder("Mesh");a.add(o.mesh,"useBoundsTree").onChange(()=>y()),a.add(o.mesh,"splitStrategy",{CENTER:H,SAH:ae,AVERAGE:re}).onChange(()=>y()),a.add(o.mesh,"speed").min(0).max(20),a.open(),window.addEventListener("resize",function(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)},!1)}function me(){const r=new R(.5,.2,200,100,2,3),s=new R(.5,.2,200,100,3,4),a=new W(.5,100,100),l=r.attributes.position.count,x=s.attributes.position.count,g=a.attributes.position.count,C=l+x+g,G=r.index.count,E=s.index.count,w=a.index.count,f=G+E+w;t=new A(3,C,f,O);const b=t.addGeometry(r),L=t.addGeometry(s),q=t.addGeometry(a);t.addInstance(b),t.addInstance(L),t.addInstance(q),e.position.x=-1.5,e.updateMatrix(),t.setMatrixAt(0,e.matrix),e.position.x=0,e.updateMatrix(),t.setMatrixAt(1,e.matrix),e.position.x=1.5,e.updateMatrix(),t.setMatrixAt(2,e.matrix),t.rotation.x=Math.random()*10,t.rotation.y=Math.random()*10,i.add(t)}function pe(n){t.getMatrixAt(0,e.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale),e.rotation.x+=3e-4*o.mesh.speed*n,e.rotation.y+=3e-4*o.mesh.speed*n,e.updateMatrix(),t.setMatrixAt(0,e.matrix),t.getMatrixAt(1,e.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale),e.rotation.x+=9e-4*o.mesh.speed*n,e.rotation.y+=9e-4*o.mesh.speed*n,e.updateMatrix(),t.setMatrixAt(1,e.matrix),t.getMatrixAt(2,e.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale),e.rotation.x+=5e-4*o.mesh.speed*n,e.rotation.y+=5e-4*o.mesh.speed*n,e.updateMatrix(),t.setMatrixAt(2,e.matrix)}function ue(){const n=new I,r=new F({color:z}),s=new B(P,r),a=new B(P,r);a.scale.multiplyScalar(.25),s.scale.multiplyScalar(.5);const l=new B(de,new F({color:z,transparent:!0,opacity:.5}));n.add(l),n.add(s),n.add(a),c.add(n),s.position.set(m,0,0),n.rotation.x=Math.random()*10,n.rotation.y=Math.random()*10,n.rotation.z=Math.random()*10;const x=new V,g=new V,C=Math.random()-.5,G=Math.random()-.5,E=Math.random()-.5;M.push({update:()=>{n.rotation.x+=C*1e-4*o.raycasters.speed*h,n.rotation.y+=G*1e-4*o.raycasters.speed*h,n.rotation.z+=E*1e-4*o.raycasters.speed*h,s.updateMatrixWorld(),x.setFromMatrixPosition(s.matrixWorld),g.copy(x).multiplyScalar(-1).normalize(),d.set(x,g),d.firstHitOnly=!0;const w=d.intersectObject(i,!0),f=w.length?w[0].distance:m;a.position.set(m-f,0,0);const b=w.length?f-d.near:f-d.near-(m-d.far);l.position.set(m-d.near-b/2,0,0),l.scale.set(1,b,1),l.rotation.z=Math.PI/2},remove:()=>{c.remove(n)}})}function y(){for(d.near=o.raycasters.near,d.far=o.raycasters.far;M.length>o.raycasters.count;)M.pop().remove();for(;M.length<o.raycasters.count;)ue();t&&((!o.mesh.useBoundsTree&&t.boundsTrees||t.boundsTrees&&o.mesh.splitStrategy!==t.boundsTrees.splitStrategy)&&(t.disposeBoundsTree(),t.boundsTrees=null),o.mesh.useBoundsTree&&!t.boundsTrees&&(console.time("computing bounds tree"),t.computeBoundsTree(-1,{maxLeafTris:5,strategy:parseFloat(o.mesh.splitStrategy)}),t.boundsTrees.splitStrategy=o.mesh.splitStrategy,console.timeEnd("computing bounds tree")))}function v(){S.begin();const n=window.performance.now();T=T||n,h=n-T,i.rotation.x+=1e-4*o.mesh.speed*h,i.rotation.y+=1e-4*o.mesh.speed*h,i.updateMatrixWorld(),pe(h),M.forEach(r=>r.update()),p.render(c,u),T=n,S.end(),requestAnimationFrame(v)}
