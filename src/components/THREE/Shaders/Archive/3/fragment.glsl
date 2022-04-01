#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;

varying vec2 vUv;

// vec3 colorA = vec3(0.149,0.141,0.912);
// vec3 colorB = vec3(0.2235, 0.8824, 1.0);

// //sqrt function are expensive, cheaper hack for circle
//   float circle(in vec2 _st, in float _radius) {
//     vec2 dist = _st-vec2(0.5);
//     return 1.-smoothstep(
//       _radius-(_radius * 0.01),
//       _radius+(_radius*0.01),
//       dot(dist , dist)*4.0);
//   }

// void main() {
//   vec2 st = vUv.xy;
//   float pct = 0.0;

//   //Methods to calc center of billboard



//   vec3 color = vec3(circle(st, 0.9));

//   //a. DISTANCE from pixel to center
//   // pct = distance(st, vec2(0.5));
//   // float a = smoothstep(0.2,0.5,st.x) - smoothstep(0.5,0.8,st.x);
//   // float b = sin(a + uTime);
  
//   // pct = distance(st, vec2(0.4)) + distance(st, vec2(0.6));
//   // pct = distance(st, vec2(0.4)) * distance(st, vec2(0.6));
//   // pct = min(distance(st, vec2(0.4)), distance(st, vec2(0.6)));
//   // pct = max(distance(st, vec2(0.4)), distance(st, vec2(0.6)));
//   // pct = pow(distance(st, vec2(0.4)), distance(st, vec2(0.8)));

//   //b. LENGTH of vector
//   // vec2 toCenter = vec2(0.5) - st;
//   // pct = length(toCenter);

//   //c. SQRT of the vector from px to center
//   // vec2 tC = vec2(0.5)-st;
//   // pct = sqrt(tC.x * tC.x + tC.y * tC.y);

//   // vec3 color = vec3(0.0);
//   // color = mix(colorA, vec3(b), pct);


//   // gl_FragColor = vec4(step(vec3(0.9), color), 1.0 );
  
//   gl_FragColor = vec4(color, 1.0 );

  
//   // vec2 st = vUv.xy;
//   // vec3 color = vec3(0.0);

//   // //bottom - left
//   // vec2 bl = step(vec2(0.168), st);
//   // // vec2 bl = smoothstep(0.1, 0.1, st);
//   // // float pct = (bl.x * bl.y);
//   // float pct = floor(bl.x * bl.y);

//   // //top-right
//   // vec2 tr = step(vec2(0.1), 1.0 - st);
//   // pct *= tr.x * tr.y;

//   // color = vec3(pct);

//   // gl_FragColor=vec4(color, 1.0);
// }

// void main() {
//   vec2 st = vUv.xy;
//   // st.x *= uResolution.x / uResolution.y;

//   vec3 color = vec3(0.0);

//   float d = 0.0;

//   //Remap the space between to -1.0-1.0
//   st = st * 2.-1.;

//   //Create distance field
//   d = length(abs(st)-.3);
//   // d = length(min(abs(st) - 0.3, 0.0));
//   // d = length(max (abs(st) - 0.3, 0.0));

//   float anim = sin(d * uTime);

//   //Visualize distance field
//   // gl_FragColor = vec4(vec3(fract(d * 10.0 )), 1.0);

//   // gl_FragColor = vec4(vec3( step(0.3, d) ), 1.0);
//   gl_FragColor = vec4(vec3( step(0.3, anim) * step(anim, 0.4)), 1.0);
//   // gl_FragColor = vec4(vec3(
//   //   smoothstep(0.3, 0.5, anim) *
//   //   smoothstep(0.6, 0.5, anim)),
//   //   1.0);
// }

// void main() {
//   vec2 st = vUv.xy;
//   vec3 color = vec3(0.0);

//   vec2 pos = vec2(0.5) - st;

//   float r = length(pos) * 2.0;
//   float a = atan(pos.y, pos.x);

//   //propeller
//   float f = cos(a * 3.0);
//   //dbl propeller?
//   // f = abs(cos(a * 3.0));
//   //floweresque
//   // f = abs(cos(a * 2.5 )) * 0.5 + 0.3;
//   //Hella snow flake for points material
//   // f = abs(cos(a * 12.0 ) * sin(a * 3.0)) * 0.8 + 0.1;
//   //gear shape
//   // f = smoothstep(-0.5, 1.0, cos(a* 10.0)) * 0.2 + 0.5;

//   color = vec3((1.0 - smoothstep(f, f + 0.02, r) ));

//   gl_FragColor = vec4(color, 1.0);
// }

void main() {
  vec2 st = vUv.xy;
  vec3 color = vec3 (0.0);
  float d = 0.0;

  st = st * 2.0 - 1.0;

  //Number of sides for shape
  int N = 5;

//Angle and radius from current pixel
  float a = atan(st.x, st.y) + PI;
  float r = TWO_PI/ float(N);

//shaping function to modulate distance
  d = cos(floor(0.5 + a / r) * r - a) * length(st);


  color = vec3(1.0 - smoothstep(0.4, 0.41, d));
  // color = vec3(d);

  gl_FragColor = vec4(color, 1.0);
}

