#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159165358979323846

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;

varying vec2 vUv;

float random (in vec2 st) {
  return fract(sin(dot(st.xy,
                      vec2(12.9898,78.2333)))*
        43758.5453678123);
}

vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

// Gradient Noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/XdXGW8
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // vec2 u = f*f*(3.0-2.0*f);
    vec2 u = f*f*f*(f*(f*6.-15.)+10.);

    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
// float noise (in vec2 st) {
//     vec2 i = floor(st);
//     vec2 f = fract(st);

//     float a = random(i);
//     float b = random(i + vec2(1.0, 0.0));
//     float c = random(i + vec2(0.0, 1.0));
//     float d = random(i + vec2(1.0, 1.0));

//     vec2 u = f*f*(3.0-2.0*f);

//     return mix(a, b, u.x) +
//             (c - a) * u.y * (1.0 - u.x) +
//             (d - b) * u.x * u.y;
// }

float plot(vec2 st, float pct) {    
    return smoothstep( pct-0.028, pct, st.y )-
            smoothstep( pct, pct+0.02, st.y);
}

float rand(float x) {
  return fract(sin(x)*1.0);
}

vec2 skew (vec2 st) {
    vec2 r = vec2(0.0);
    r.x = 1.1547*st.x;
    r.y = st.y+0.5*r.x;
    return r;
}

vec3 simplexGrid (vec2 st) {
    vec3 xyz = vec3(0.0);

    vec2 p = fract(skew(st));
    if (p.x > p.y) {
        xyz.xy = 1.0-vec2(p.x,p.y-p.x);
        xyz.z = p.y;
    } else {
        xyz.yz = 1.0-vec2(p.x-p.y,p.y);
        xyz.x = p.x;
    }

    return fract(xyz);
}

// void main() {
//     vec2 st = vUv;

//   // Smooth interpolation between 0.1 and 0.9
//   float y = smoothstep(0.1,0.9,st.x);
//   float x = st.x * PI;

//   vec3 color = vec3(y);
//   float i = floor(x);
//   float f = fract(x);

//   // y = rand(i);
//   // y = mix(rand(i), rand(i + 1.0), f);
//   // y = mix(rand(i), rand(i + 1.0), smoothstep(0.,1.,f));
//   float u = f * f * (3.0 - 2.0 * f );
//   y = mix(rand(i), rand(i + 1.0), u);



//   float pct = plot(st,y);
//   color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

//   gl_FragColor = vec4(color,1.0);
// }

vec3 colorA = vec3(0.0, 1.0, 1.0);
vec3 colorB = vec3(0.0, 0.0, 1.0);
// void main() {
//   vec2 st = vUv;
//   vec3 color = vec3(1.0);
//   vec3 border = vec3(1.0);
//   float pct = 0.0;

//   pct = distance(st, vec2(0.5));
//   // vec2 pos = vec2(st*5.0);
//   vec2 pos = vec2(st*5.0) / (uMouse / vUv) + uTime;
//   vec2 bl = smoothstep(0.1, 0.5,st);
//   vec2 tr = step(vec2(0.1),1.0-st);
//   border = vec3(bl.x * bl.y * tr.x * tr.y);

//   float n = noise(pos);
//   color = mix(colorA, colorB, border);

//   gl_FragColor = vec4(color, n);
// }

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

float lines(in vec2 pos, float b){
    float scale = 10.0;
    pos *= scale;
    return smoothstep(0.0,
                    .5+b*.5,
                    abs((sin(pos.x*3.1415)+b*2.0))*.5);
}

// void main() {
//   vec2 st = vUv.xy;
//   st.y *= uResolution.y/uResolution.x;
//   vec3 color = vec3(0.0);

//   vec2 pos = st.yx*vec2(10.,3.);

//   // float pattern = pos.x;
//   float pattern = pos.x / uResolution.x;
//   // float pattern = pos.x *= sin(uTime);
  

//   pos = rotate2d( noise(pos) ) * pos;

//   pattern = lines(pos, .5);

//   color = mix(colorA, colorB, vec3(pattern));

//   gl_FragColor = vec4(color, 1.0);
// }


// void main() {
//   vec2 st = vUv;
//   st.x *= uResolution.x / uResolution.y;
//   vec3 color = vec3(0.0);

//   float t = 1.0;

//   st += noise(st*2.)*t;
//   // st += noise(st*2.)*t * (uMouse / vUv);
//   // st += noise(st*2.)*t * (uMouse / vUv) * uTime;
//   color = vec3(1.)* smoothstep(.18, .2, noise(st));
//   color += smoothstep(.15,.2,noise(st*10.));
//   color -= smoothstep(.35,.4,noise(st*10.));

//   gl_FragColor = vec4(1.-color,1.0);
// }

// void main() {
//   vec2 st = vUv;
//   vec3 color = vec3(0.0);

//   st *= 10.;

//   color.rg = fract(st);

//   color.rg = fract(skew(st));

//   color = simplexGrid(st);

//   gl_FragColor = vec4(color, 1.0);
// }

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i); // Avoid truncation effects in permutation
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

void main(){
  vec2 st = vUv;

  st.x *= uResolution.x/uResolution.y;
  vec3 color = vec3(0.0);
  vec2 pos = vec2(st*3.);

  float DF = 0.0;

  float a = 0.0;
  vec2 vel = vec2(uTime *.1);
  DF += snoise(pos+vel)*.25+.25;

  a = snoise(pos*vec2(cos(uTime*0.15),sin(uTime*0.1))*0.1)*3.14;
  vel = vec2(cos(a),sin(a));
  DF += snoise(pos+vel)*.25+.25;

  color = vec3( smoothstep(.7,.75,fract(DF)) );

  gl_FragColor = vec4(1.0-color,1.0);
}