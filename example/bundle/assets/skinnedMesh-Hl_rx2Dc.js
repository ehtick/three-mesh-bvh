import{i as A,W as E,p as R,c as z,D,A as U,P as I,aL as $,aM as j,b as N,aN as V,f as q,M as B,s as J,aG as K,h as Q}from"./ExtendedTriangle-CNpFv597.js";import{G as X}from"./GLTFLoader-CPZ_tJoX.js";import{S as Y}from"./stats.min-GTpOrGrX.js";import{g as Z}from"./lil-gui.module.min-Bc0DeA9g.js";import{O as _}from"./OrbitControls-I50Ha_kb.js";import{M as ee}from"./MeshBVHHelper-DbtlD37d.js";import{g as te}from"./Debug-CxembHqK.js";import{c as ae}from"./ExtensionUtilities-Bcul3Of0.js";import{S as re}from"./StaticGeometryGenerator-BuhbcQd1.js";import"./BufferGeometryUtils-BjOdgyuH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./MeshBVH-ujCvfObx.js";A.prototype.computeBoundsTree=ae;const e={display:!0,displayOriginal:!0,material:"wireframe",updatePositionOnly:!1,skeletonHelper:!1,bvhHelper:!0,bvhHelperDepth:10,autoUpdate:!0,updateRate:2.5,pause:!1,regenerate:()=>{T()}};let r,o,s,W,b,P,L,H,v,M,d,f,y,t,S,x=0,C=null,F,G,k;oe();O();function oe(){L=document.getElementById("output"),r=new E({antialias:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(1118481,1),r.shadowMap.enabled=!0,r.shadowMap.type=R,r.outputEncoding=void 0,document.body.appendChild(r.domElement),s=new z;const i=new D(16777215,3);i.position.set(5,5,2.5),i.shadow.mapSize.setScalar(1024),i.shadow.normalBias=.01,i.castShadow=!0;const n=i.shadow.camera;n.left=n.bottom=-7.5,n.right=n.top=7.5,n.updateProjectionMatrix(),s.add(i),s.add(new U(11583173,2.4)),o=new I(75,window.innerWidth/window.innerHeight,.1,50),o.position.set(10,0,0),o.far=100,o.updateProjectionMatrix(),H=new _(o,r.domElement),W=new Q,P=new Y,document.body.appendChild(P.dom),new X().load("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/trex/scene.gltf",a=>{d=a.scene,d.traverse(w=>{w.isMesh&&(w.castShadow=!0,w.receiveShadow=!0,w.frustumCulled=!1)}),d.updateMatrixWorld(!0),s.add(d),y=new $(d),y.visible=!1,s.add(y);const h=a.animations;v=new j(d),M=v.clipAction(h[0]),M.play(),M.paused=e.pause;const g=new N;g.setFromObject(d),g.getCenter(H.target),g.getCenter(o.position),o.position.x=7.5,o.position.z=3.5,H.update(),S=new re(d),k=S.getMaterials(),G=k.map(w=>new V({normalMap:w.normalMap})),F=new q({wireframe:!0,transparent:!0,opacity:.05,depthWrite:!1}),t=new B(new A,F),t.receiveShadow=!0,s.add(t),f=new ee(t,10),s.add(f),T()});const l=new B(new J,new K({color:16777215,opacity:.025,transparent:!0}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,l.scale.setScalar(50),s.add(l),b=new Z;const p=b.addFolder("static mesh");p.add(e,"display"),p.add(e,"displayOriginal"),p.add(e,"material",["wireframe","normal","original"]).onChange(a=>{if(t)switch(a){case"wireframe":t.material=F,t.castShadow=!1;break;case"normal":t.material=G,t.castShadow=!0;break;case"original":t.material=k,t.castShadow=!0;break}}),p.add(e,"updatePositionOnly").onChange(a=>{S.attributes=a?["position"]:["position","normal","tangent","uv","uv2"];const h=t.geometry;h.dispose();for(const g in h.attributes)h.deleteAttribute(g)}),p.open();const m=b.addFolder("helpers");m.add(e,"skeletonHelper"),m.add(e,"bvhHelper"),m.add(e,"bvhHelperDepth",1,20,1).onChange(a=>{f.depth=parseInt(a),f.update()}),m.open();const c=b.addFolder("bvh animation");c.add(e,"autoUpdate"),c.add(e,"updateRate",0,5,.001),c.add(e,"pause").onChange(a=>{M&&(M.paused=a)}),c.add(e,"regenerate"),c.open(),b.open(),window.addEventListener("resize",function(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},!1)}function T(){if(t){let u,i,n;n=window.performance.now(),S.generate(t.geometry),u=window.performance.now()-n,n=window.performance.now(),t.geometry.boundsTree?(t.geometry.boundsTree.refit(),i=(window.performance.now()-n).toFixed(2)):(t.geometry.computeBoundsTree(),i="-"),f.update(),x=0;const l=te(t.geometry.boundsTree);C===null&&(C=l);let p=0,m=0;for(const a in l)p+=l[a].surfaceAreaScore,m+=C[a].surfaceAreaScore;const c=p/m-1;L.innerHTML=`mesh generation time: ${u.toFixed(2)} ms
refit time: ${i} ms
bvh degradation: ${(100*c).toFixed(2)}%`}}function O(){P.update(),requestAnimationFrame(O);const u=Math.min(W.getDelta(),30*.001);v&&(v.update(u),y.visible=e.skeletonHelper,t.visible=e.display,f.visible=e.bvhHelper,d.visible=e.displayOriginal),s.updateMatrixWorld(!0),e.autoUpdate&&!e.pause?(x>e.updateRate&&T(),x+=u):x=0,r.render(s,o)}