uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

#define PI = 3.1456

varying vec2 vUv;

float plot(vec2 st, float pct) {    
    // return smoothstep(pct-0.02, pct, abs(st.y - st.x)) -
    // return smoothstep(pct-0.02, pct, st.y) -
    return smoothstep(pct-0.02, pct, st.x) -
            smoothstep(pct, pct+0.02, st.y);
}

float easeExpoInOut(float t) {
    t = t * 2.0;
    if (t == 0.0) return 0.0;
    if (t == 1.0) return 1.0;
    if (t < 1.0) return 0.5 * pow(2.0, 10.0 * (t - 1.0));
    return 0.5 * (-pow(2.0, -10.0 * --t) + 2.0);
}

vec3 colorA = vec3(0.0118, 0.3725, 0.3725);
vec3 colorB = vec3(0.1333, 0.0078, 0.2588);

void main() {
  vec2 st = vUv;

  /* Easing Expo InOut equation */
  /* Adapted from Robert Penner easing equations */

  // float y = pow(st.x,5.0);
  // float y = step(0.5, st.x);
  // float y = smoothstep(0.01,0.9, st.y);
  float y = (smoothstep(0.2,0.5,st.x) - smoothstep(0.5,0.8,st.x));
  vec3 color = vec3(y);

  float a = smoothstep(0.1, 0.5, sin(st.x)) * uTime;
  // float a = ceil(smoothstep(0.1, 0.9, sin(st.x))) * uTime;
  float b = smoothstep(0.1, 0.5, cos(st.y)) * uTime;
  // float b = floor(smoothstep(0.1, 0.9, sin(st.x))) * uTime;
  float c = easeExpoInOut(smoothstep(0.1, 0.9, fract((st.x * smoothstep(0.1, 0.9, uMouse.y)))));
  // b = mod(st.x, 0.5);
  // c = fract(a);
  // a = ceil(b);
  // c = floor(b);
  float pct = plot(st, y);
  color = (1.0-pct)*color+pct*vec3(a,b,c);

  color = mix(smoothstep(0.1, 0.9, color), smoothstep(0.1, 0.9, (colorA * vec3(a))), smoothstep(colorB.r, colorA.g, colorB.b));

  gl_FragColor= vec4(color, 1.0);
}