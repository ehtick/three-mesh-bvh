import{M as ne,i as ae,V as b,J as se,W as de,c as ce,d as le,D as me,A as pe,v as fe,P as ue,am as Y,an as we,k as ie,ao as he,u as Q,n as ye,K as ge,r as xe,U as be}from"./ExtendedTriangle-CNpFv597.js";import{S as ve}from"./Stats-9dH8FB2H.js";import{g as Se}from"./lil-gui.module.min-Bc0DeA9g.js";import{O as Be}from"./OrbitControls-I50Ha_kb.js";import{a as Ce}from"./BufferGeometryUtils-BjOdgyuH.js";import{M as Me}from"./MeshBVHHelper-DbtlD37d.js";import{I as $,a as Ee,N as ze}from"./MeshBVH-ujCvfObx.js";import{a as Ae,c as Te,d as Pe}from"./ExtensionUtilities-Bcul3Of0.js";ne.prototype.raycast=Ae;ae.prototype.computeBoundsTree=Te;ae.prototype.disposeBoundsTree=Pe;let U,x,M,C,I,o,h,S,y,He=new b(0,0,1),O=!1,B=new se,W=new se,Z=!1,ee=!1,v=new b,q,oe=!1;const t={matcap:"Clay",size:.1,brush:"clay",intensity:50,maxSteps:10,invert:!1,symmetrical:!0,flatShading:!1,depth:10,displayHelper:!1},H={};Ie();re();function te(){o&&(o.geometry.dispose(),o.material.dispose(),x.remove(o));let m=new he(1,100);m.deleteAttribute("uv"),m=Ce(m),m.attributes.position.setUsage(Q),m.attributes.normal.setUsage(Q),m.computeBoundsTree({setBoundingBox:!1}),o=new ne(m,q),o.frustumCulled=!1,x.add(o),y||(y=new Me(o,t.depth),t.displayHelper&&x.add(y)),y.mesh=o,y.update()}function Ie(){C=new de({antialias:!0}),C.setPixelRatio(window.devicePixelRatio),C.setSize(window.innerWidth,window.innerHeight),C.setClearColor(394761,1),C.outputEncoding=void 0,document.body.appendChild(C.domElement),C.domElement.style.touchAction="none",x=new ce,x.fog=new le(2503224/2,20,60);const a=new me(16777215,.5);a.position.set(1,1,1),x.add(a),x.add(new pe(16777215,.4));const n=[new b,new b(0,0,1)];for(let e=0;e<50;e++){const s=e+1,r=Math.sin(2*Math.PI*e/50),d=Math.cos(2*Math.PI*e/50),i=Math.sin(2*Math.PI*s/50),f=Math.cos(2*Math.PI*s/50);n.push(new b(r,d,0),new b(i,f,0))}h=new fe,h.geometry.setFromPoints(n),h.material.color.set(16485376),x.add(h),S=h.clone(),x.add(S),M=new ue(75,window.innerWidth/window.innerHeight,.1,50),M.position.set(0,0,3),M.far=100,M.updateProjectionMatrix(),U=new ve,document.body.appendChild(U.dom),H.Clay=new Y().load("../textures/B67F6B_4B2E2A_6C3A34_F3DBC6-256px.png"),H["Red Wax"]=new Y().load("../textures/763C39_431510_210504_55241C-256px.png"),H["Shiny Green"]=new Y().load("../textures/3B6E10_E3F2C3_88AC2E_99CE51-256px.png"),H.Normal=new Y().load("../textures/7877EE_D87FC5_75D9C7_1C78C0-256px.png"),q=new we({flatShading:t.flatShading});for(const e in H)H[e].encoding=void 0;te();const p=new Se;p.add(t,"matcap",Object.keys(H));const c=p.addFolder("Sculpting");c.add(t,"brush",["normal","clay","flatten"]),c.add(t,"size").min(.025).max(.25).step(.005),c.add(t,"intensity").min(1).max(100).step(1),c.add(t,"maxSteps").min(1).max(25).step(1),c.add(t,"symmetrical"),c.add(t,"invert"),c.add(t,"flatShading").onChange(e=>{o.material.flatShading=e,o.material.needsUpdate=!0}),c.open();const l=p.addFolder("BVH Helper");l.add(t,"depth").min(1).max(20).step(1).onChange(e=>{y.depth=parseFloat(e),y.update()}),l.add(t,"displayHelper").onChange(e=>{e?(x.add(y),y.update()):x.remove(y)}),l.open(),p.add({reset:te},"reset"),p.add({rebuildBVH:()=>{o.geometry.computeBoundsTree({setBoundingBox:!1}),y.update()}},"rebuildBVH"),p.open(),window.addEventListener("resize",function(){M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight)},!1),window.addEventListener("pointermove",function(e){B.x=e.clientX/window.innerWidth*2-1,B.y=-(e.clientY/window.innerHeight)*2+1,O=!0}),window.addEventListener("pointerdown",e=>{B.x=e.clientX/window.innerWidth*2-1,B.y=-(e.clientY/window.innerHeight)*2+1,Z=!!(e.buttons&3),oe=!!(e.buttons&2),O=!0;const s=new ie;s.setFromCamera(B,M),s.firstHitOnly=!0;const r=s.intersectObject(o);I.enabled=r.length===0},!0),window.addEventListener("pointerup",e=>{Z=!!(e.buttons&3),e.pointerType==="touch"&&(O=!1)}),window.addEventListener("contextmenu",function(e){e.preventDefault()}),window.addEventListener("wheel",function(e){let s=e.deltaY;e.deltaMode===1&&(s*=40),e.deltaMode===2&&(s*=40),t.size+=s*1e-4,t.size=Math.max(Math.min(t.size,.25),.025),p.controllersRecursive().forEach(r=>r.updateDisplay())}),I=new Be(M,C.domElement),I.minDistance=1.5,I.addEventListener("start",function(){this.active=!0}),I.addEventListener("end",function(){this.active=!1})}function X(m,a,n=!1,p={}){const{accumulatedTriangles:c=new Set,accumulatedIndices:l=new Set,accumulatedTraversedNodeIndices:e=new Set}=p,s=new ye;s.copy(o.matrixWorld).invert();const r=new ge;r.center.copy(m).applyMatrix4(s),r.radius=t.size;const d=new Set,i=new b,f=new b,z=o.geometry.index,g=o.geometry.attributes.position,D=o.geometry.attributes.normal,V=new Set;o.geometry.boundsTree.shapecast({intersectsBounds:(u,N,L,w,E)=>{e.add(E);const F=r.intersectsBox(u),{min:_,max:R}=u;if(F){for(let A=0;A<=1;A++)for(let T=0;T<=1;T++)for(let P=0;P<=1;P++)if(i.set(A===0?_.x:R.x,T===0?_.y:R.y,P===0?_.z:R.z),!r.containsPoint(i))return $;return Ee}return F?$:ze},intersectsTriangle:(u,N,L)=>{const w=N;V.add(w),c.add(w);const E=3*N,F=E+0,_=E+1,R=E+2,A=z.getX(F),T=z.getX(_),P=z.getX(R);return L?(d.add(A),d.add(T),d.add(P),l.add(A),l.add(T),l.add(P)):(r.containsPoint(u.a)&&(d.add(A),l.add(A)),r.containsPoint(u.b)&&(d.add(T),l.add(T)),r.containsPoint(u.c)&&(d.add(P),l.add(P))),!1}});const J=new b;J.copy(m).applyMatrix4(s);const k=new b;let j=0;if(d.forEach(u=>{i.fromBufferAttribute(D,u),f.add(i),n||(j++,i.fromBufferAttribute(g,u),k.add(i))}),f.normalize(),a.quaternion.setFromUnitVectors(He,f),j&&k.multiplyScalar(1/j),n)return;const K=t.intensity*1e-4,G=new xe;G.setFromNormalAndCoplanarPoint(f,k),d.forEach(u=>{i.fromBufferAttribute(g,u);const N=i.distanceTo(J),L=t.invert!==oe?-1:1;let w=1-N/t.size;if(t.brush==="clay"){w=Math.pow(w,3);const E=G.distanceToPoint(i),F=L*Math.min(w*4,1);i.addScaledVector(f,F*K-L*E*F*.3)}else if(t.brush==="normal")w=Math.pow(w,2),i.addScaledVector(f,L*w*K);else if(t.brush==="flatten"){w=Math.pow(w,2);const E=G.distanceToPoint(i);i.addScaledVector(f,-E*w*t.intensity*.01*.5)}g.setXYZ(u,i.x,i.y,i.z),D.setXYZ(u,0,0,0)}),d.size&&(g.needsUpdate=!0)}function De(m,a){const n=new b,p=new b,c=o.geometry.index,l=o.geometry.attributes.position,e=o.geometry.attributes.normal,s=new be;m.forEach(r=>{const d=r*3,i=d+0,f=d+1,z=d+2,g=c.getX(i),D=c.getX(f),V=c.getX(z);s.a.fromBufferAttribute(l,g),s.b.fromBufferAttribute(l,D),s.c.fromBufferAttribute(l,V),s.getNormal(p),a.has(g)&&(n.fromBufferAttribute(e,g),n.add(p),e.setXYZ(g,n.x,n.y,n.z)),a.has(D)&&(n.fromBufferAttribute(e,D),n.add(p),e.setXYZ(D,n.x,n.y,n.z)),a.has(V)&&(n.fromBufferAttribute(e,V),n.add(p),e.setXYZ(V,n.x,n.y,n.z))}),a.forEach(r=>{n.fromBufferAttribute(e,r),n.normalize(),e.setXYZ(r,n.x,n.y,n.z)}),e.needsUpdate=!0}function re(){if(requestAnimationFrame(re),U.begin(),q.matcap=H[t.matcap],I.active||!O)h.visible=!1,S.visible=!1,v.setScalar(1/0);else{const m=new ie;m.setFromCamera(B,M),m.firstHitOnly=!0;const a=m.intersectObject(o,!0)[0];if(a)if(h.visible=!0,h.scale.set(t.size,t.size,.1),h.position.copy(a.point),S.visible=t.symmetrical,S.scale.set(t.size,t.size,.1),S.position.copy(a.point),S.position.x*=-1,I.enabled=!1,v.x===1/0&&v.copy(a.point),!(Z||ee))X(a.point,h,!0),t.symmetrical&&(a.point.x*=-1,X(a.point,S,!0),a.point.x*=-1),W.copy(B),v.copy(a.point);else{const n=(B.x-W.x)*window.innerWidth*window.devicePixelRatio,p=(B.y-W.y)*window.innerHeight*window.devicePixelRatio;let c=Math.sqrt(n*n+p*p),l=a.point.distanceTo(v);const e=t.size*.15,s=Math.max(e/l,1/t.maxSteps),r=c*s;let d=0;const i=new Set,f=new Set,z=new Set,g={accumulatedTriangles:i,accumulatedIndices:f,accumulatedTraversedNodeIndices:z};for(;l>e&&c>t.size*200/a.distance&&(W.lerp(B,s),v.lerp(a.point,s),l-=e,c-=r,X(v,h,!1,g),t.symmetrical&&(v.x*=-1,X(v,S,!1,g),v.x*=-1),d++,!(d>t.maxSteps)););d>0?(De(i,f),o.geometry.boundsTree.refit(z),y.parent!==null&&y.update()):(X(a.point,h,!0),t.symmetrical&&(a.point.x*=-1,X(a.point,S,!0),a.point.x*=-1))}else I.enabled=!0,h.visible=!1,S.visible=!1,W.copy(B),v.setScalar(1/0)}ee=Z,C.render(x,M),U.end()}