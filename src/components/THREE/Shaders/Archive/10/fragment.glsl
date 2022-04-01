#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;

varying vec2 vUv;

float plot(vec2 st, float pct) {
	return smoothstep(pct - 0.02, pct, st.y) - smoothstep( pct, pct + 0.02, st.y);	
}

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}


// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 5

float fbm ( in vec2 st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(st);
        st = rot * st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

// #define OCTAVES 6
// float fbm (in vec2 st) {
//     // Initial values
//     float value = 0.0;
//     float amplitude = .5;
//     float frequency = 0.;
//     //
//     // Loop of octaves
//     for (int i = 0; i < OCTAVES; i++) {
//         value += amplitude * noise(st);
//         st *= 2.;
//         amplitude *= .5;
//     }
//     return value;
// }

// Author: @patriciogv - 2015
// Tittle: Turbulence
// Some useful functions
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

//
// Description : GLSL 2D simplex noise function
//      Author : Ian McEwan, Ashima Arts
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License :
//  Copyright (C) 2011 Ashima Arts. All rights reserved.
//  Distributed under the MIT License. See LICENSE file.
//  https://github.com/ashima/webgl-noise
//
float snoise(vec2 v) {

    // Precompute values for skewed triangular grid
    const vec4 C = vec4(0.211324865405187,
                        // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,
                        // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,
                        // -1.0 + 2.0 * C.x
                        0.024390243902439);
                        // 1.0 / 41.0

    // First corner (x0)
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);

    // Other two corners (x1, x2)
    vec2 i1 = vec2(0.0);
    i1 = (x0.x > x0.y)? vec2(1.0, 0.0):vec2(0.0, 1.0);
    vec2 x1 = x0.xy + C.xx - i1;
    vec2 x2 = x0.xy + C.zz;

    // Do some permutations to avoid
    // truncation effects in permutation
    i = mod289(i);
    vec3 p = permute(
            permute( i.y + vec3(0.0, i1.y, 1.0))
                + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(
                        dot(x0,x0),
                        dot(x1,x1),
                        dot(x2,x2)
                        ), 0.0);

    m = m*m ;
    m = m*m ;

    // Gradients:
    //  41 pts uniformly over a line, mapped onto a diamond
    //  The ring size 17*17 = 289 is close to a multiple
    //      of 41 (41*7 = 287)

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    // Normalise gradients implicitly by scaling m
    // Approximation of: m *= inversesqrt(a0*a0 + h*h);
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0+h*h);

    // Compute final noise value at P
    vec3 g = vec3(0.0);
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * vec2(x1.x,x2.x) + h.yz * vec2(x1.y,x2.y);
    return 130.0 * dot(m, g);
}


// #define OCTAVES 3
// float turbulence (in vec2 st) {
//     // Initial values
//     float value = 0.0;
//     float amplitude = .5;
//     float frequency = 0.;
//     //
//     // Loop of octaves
//     for (int i = 0; i < OCTAVES; i++) {
//         value += amplitude * abs(snoise(st));
//         st *= 2.;
//         amplitude *= .5;
//     }
//     return value;
// }

// Ridged multifractal
// See "Texturing & Modeling, A Procedural Approach", Chapter 12
// float ridge(float h, float offset) {
//     h = abs(h);     // create creases
//     h = offset - h; // invert so creases are at top
//     h = h * h;      // sharpen creases
//     return h;
// }

// float ridgedMF(vec2 p) {
//     float lacunarity = 2.0;
//     float gain = 0.5;
//     float offset = 0.9;

//     float sum = 0.0;
//     float freq = 1.0, amp = 0.5;
//     float prev = 1.0;
//     for(int i=0; i < OCTAVES; i++) {
//         float n = ridge(snoise(p*freq), offset);
//         sum += n*amp;
//         sum += n*amp*prev;  // scale by previous octave
//         prev = n;
//         freq *= lacunarity;
//         amp *= gain;
//     }
//     return sum;
// }

// void main() {
//   vec2 st = vUv; 


//   gl_FragColor = vec4(vUv, uMouse.x, uMouse.y);
// }

// void main() {
//   vec2 st = vUv;

//   // float y = 0.0;
//   float y = max(0.0, st.x);

//     vec3 color = vec3(y);


//   float amplitude = 1.;
//   float frequency = 1.;
//   // frequency += uTime;
//   // amplitude += uTime;
//   y = amplitude * sin(st.x * frequency);
//   float x = st.x;

//   float t = 0.01*(-uTime*130.0);
//   y += sin(x*frequency*5.1 + t)*4.5;
//   y += sin(x*frequency*1.72 + t*1.121)*4.0;
//   y += sin(x*frequency*2.221 + t*0.437)*5.0;
//   y += sin(x*frequency*3.1122+ t*4.269)*2.5;
//   y *=amplitude * 0.06;

//   float pct = plot(st, y);  
//   color = (1.0-pct) * color + pct *vec3(0.0, 1.0, 0.0);

//   gl_FragColor = vec4(color, vUv.x);
// }

// void main() {
//   vec2 st = vUv;
//   float x = st.x;
//   float y = max(0.0, x);

//   vec3 color = vec3(y);

//   const int octaves = 1;
//   float lacunarity = 2.0;
//   float gain = 0.5;

//   float amplitude = 0.5;
//   float frequency = 1.0;

//   for (int i = 0; i < octaves; i++) {
//     y += amplitude * noise(frequency*st);
//     frequency *= lacunarity;
//     amplitude *= gain;
//   }

//   float pct = plot(st, y);
//   color = (1.0-pct) * color + pct *vec3(0.0, 1.0, 0.0);  

//   gl_FragColor = vec4(color, 1.0);
// }

// void main() {
//   vec2 st = vUv;
  

//   vec3 color = vec3(0.0);

//   color+= fbm(st*3.0);

//   gl_FragColor = vec4(color,1.0);
// }

// void main() {
//   vec2 st = vUv;

//   vec3 color = vec3(0.0);

//   color += turbulence(st*3.0);

//   gl_FragColor = vec4(color, 1.0);
// }

// void main() {
//   vec2 st = vUv;
//   vec3 color = vec3(0.0);

//   color += ridgedMF(st*3.0);
//   // color += sin(ridgedMF(st*3.0) * uTime);

//   gl_FragColor = vec4(color, 1.0);
// }

void main() {
  vec2 st = vUv;

  vec3 color = vec3(0.0);

  vec2 q = vec2(0.);
  q.x = fbm( st + 0.00*uTime);
  q.y = fbm( st + vec2(1.0));

  vec2 r = vec2(0.);

  r.x = fbm( st + 1.0*q + vec2(1.7, 9.2)+ 0.15*uTime );
  r.y = fbm( st + 1.0*q + vec2(8.3,2.8) + 0.126*uTime);

  float f = fbm(st+r);

  color = mix(vec3(0.101961,0.619608, 0.666667),
              vec3(0.666667, 0.666667, 0.498039),
              clamp((f*f)*4.0, 0.0, 1.0));

  color = mix(color,
            vec3(0,0,0.164706),
            clamp(length(q),0.0,1.0));

  color = mix(color, 
              vec3(0.666667,1,1),
              clamp(length(r.x), 0.0, 1.0));
  
  gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color,1.);
}