import{n as e}from"./chunk-Bh1tDfsg.js";import{Bt as t,H as n,Vt as r,Y as i,Yr as a,_n as o,an as s,dr as c,fr as l,i as u,nt as d,o as f,qt as p,rn as m,zt as h}from"./ExtendedTriangle-cvTTtm2k.js";import{t as g}from"./Pass-BZUemdGI.js";import{t as _}from"./MeshBVH-BCJSiupA.js";import{n as v,t as y}from"./MeshBVHUniformStruct-CsEKwaR-.js";import{n as b,r as x,t as S}from"./bvh_struct_definitions.glsl-D-uzwxra.js";import{t as C}from"./stats.min-CnMmk804.js";import{t as w}from"./lil-gui.module.min-CCk8J1jY.js";import{t as T}from"./BufferGeometryUtils-EZSMrVj-.js";import{t as E}from"./GLTFLoader-k9Ro4ZOw.js";import{t as D}from"./OrbitControls-CZExYGpc.js";var O=e(C(),1),k={enableRaytracing:!0,smoothImageScaling:!0,resolutionScale:.5/window.devicePixelRatio,bounces:3,accumulate:!0},A,j,M,N,P,F,I,L,R,z=0,B;V(),W();function V(){A=new u({antialias:!1}),A.setPixelRatio(window.devicePixelRatio),A.setClearColor(594970),A.setSize(window.innerWidth,window.innerHeight),A.outputEncoding=void 0,document.body.appendChild(A.domElement),B=document.getElementById(`output`),M=new c;let e=new n(16777215,1);e.position.set(1,1,1),M.add(e),M.add(new f(11583173,.5)),j=new m(75,window.innerWidth/window.innerHeight,.1,50),j.position.set(-2,2,3),j.far=100,j.updateProjectionMatrix(),P=new O.default,document.body.appendChild(P.dom);let C=new l({defines:{BOUNCES:5},uniforms:{bvh:{value:new y},normalAttribute:{value:new v},cameraWorldMatrix:{value:new h},invProjectionMatrix:{value:new h},seed:{value:0},opacity:{value:1}},vertexShader:`

			varying vec2 vUv;
			void main() {

				vec4 mvPosition = vec4( position, 1.0 );
				mvPosition = modelViewMatrix * mvPosition;
				gl_Position = projectionMatrix * mvPosition;

				vUv = uv;

			}

		`,fragmentShader:`
			#define RAY_OFFSET 1e-5

			precision highp isampler2D;
			precision highp usampler2D;
			${x}
			${S}
			${b}
			#include <common>

			uniform mat4 cameraWorldMatrix;
			uniform mat4 invProjectionMatrix;
			uniform sampler2D normalAttribute;
			uniform BVH bvh;
			uniform float seed;
			uniform float opacity;
			varying vec2 vUv;

			void main() {

				// get [-1, 1] normalized device coordinates
				vec2 ndc = 2.0 * vUv - vec2( 1.0 );
				vec3 rayOrigin, rayDirection;
				ndcToCameraRay( ndc, cameraWorldMatrix, invProjectionMatrix, rayOrigin, rayDirection );

				// Lambertian render
				gl_FragColor = vec4( 0.0 );

				vec3 throughputColor = vec3( 1.0 );
				vec3 randomPoint = vec3( .0 );

				// hit results
				uvec4 faceIndices = uvec4( 0u );
				vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
				vec3 barycoord = vec3( 0.0 );
				float side = 1.0;
				float dist = 0.0;

				for ( int i = 0; i < BOUNCES; i ++ ) {

					if ( ! bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist ) ) {

						float value = ( rayDirection.y + 0.5 ) / 1.5;
						vec3 skyColor = mix( vec3( 1.0 ), vec3( 0.75, 0.85, 1.0 ), value );

						gl_FragColor = vec4( skyColor * throughputColor * 2.0, 1.0 );

						break;

					}

					// 1 / PI attenuation for physically correct lambert model
					// https://www.rorydriscoll.com/2009/01/25/energy-conservation-in-games/
					throughputColor *= 1.0 / PI;

					randomPoint = vec3(
						rand( vUv + float( i + 1 ) + vec2( seed, seed ) ),
						rand( - vUv * seed + float( i ) - seed ),
						rand( - vUv * float( i + 1 ) - vec2( seed, - seed ) )
					);
					randomPoint -= 0.5;
					randomPoint *= 2.0;

					// ensure the random vector is not 0,0,0 and that it won't exactly negate
					// the surface normal

					float pointLength = max( length( randomPoint ), 1e-4 );
					randomPoint /= pointLength;
					randomPoint *= 0.999;

					// fetch the interpolated smooth normal
					vec3 normal =
						side *
						textureSampleBarycoord(
							normalAttribute,
							barycoord,
							faceIndices.xyz
						).xyz;

					// adjust the hit point by the surface normal by a factor of some offset and the
					// maximum component-wise value of the current point to accommodate floating point
					// error as values increase.
					vec3 point = rayOrigin + rayDirection * dist;
					vec3 absPoint = abs( point );
					float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
					rayOrigin = point + faceNormal * ( maxPoint + 1.0 ) * RAY_OFFSET;
					rayDirection = normalize( normal + randomPoint );

				}

				gl_FragColor.a = opacity;

			}

		`});F=new g(C),C.transparent=!0,C.depthWrite=!1,new E().load(`https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/dragon-attenuation/DragonAttenuation.glb`,e=>{let n;e.scene.traverse(e=>{e.isMesh&&e.name===`Dragon`&&(n=e,e.geometry.scale(.25,.25,.25).rotateX(Math.PI/2))});let r=new s(5,5,1,1);r.rotateX(-Math.PI/2);let i=T([r,n.geometry],!1);i.translate(0,-.5,0),R=new t(i,new p),M.add(R);let a=new _(R.geometry,{maxLeafSize:1,strategy:2});C.uniforms.bvh.value.updateFrom(a),C.uniforms.normalAttribute.value.updateFrom(R.geometry.attributes.normal)}),L=new a(1,1,{format:o,type:A.extensions.get(`OES_texture_float_linear`)?i:d}),I=new g(new r({map:L.texture})),new D(j,A.domElement).addEventListener(`change`,()=>{H()}),N=new w,N.add(k,`enableRaytracing`).name(`enable`),N.add(k,`accumulate`),N.add(k,`smoothImageScaling`),N.add(k,`resolutionScale`,.1,1,.01).onChange(U),N.add(k,`bounces`,1,10,1).onChange(e=>{C.defines.BOUNCES=parseInt(e),C.needsUpdate=!0,H()}),N.open(),window.addEventListener(`resize`,U,!1),U()}function H(){z=0}function U(){j.aspect=window.innerWidth/window.innerHeight,j.updateProjectionMatrix();let e=window.innerWidth,t=window.innerHeight,n=window.devicePixelRatio*k.resolutionScale;A.setSize(e,t),A.setPixelRatio(n),L.setSize(e*n,t*n),H()}function W(){if(P.update(),requestAnimationFrame(W),A.domElement.style.imageRendering=k.smoothImageScaling?`auto`:`pixelated`,R&&k.enableRaytracing){if(k.accumulate)if(z===0)j.clearViewOffset();else{let e=L.width,t=L.height;j.setViewOffset(e,t,Math.random()-.5,Math.random()-.5,e,t)}else H();j.updateMatrixWorld();let e=(F.material.uniforms.seed.value+.11111)%2;F.material.uniforms.seed.value=e,F.material.uniforms.cameraWorldMatrix.value.copy(j.matrixWorld),F.material.uniforms.invProjectionMatrix.value.copy(j.projectionMatrixInverse),F.material.uniforms.opacity.value=1/(z+1),A.autoClear=z===0,A.setRenderTarget(L),F.render(A),A.setRenderTarget(null),I.render(A),A.autoClear=!0,z++}else H(),j.clearViewOffset(),A.render(M,j);B.innerText=`samples: ${z}`}
//# sourceMappingURL=gpuPathTracing-DATRRuDi.js.map