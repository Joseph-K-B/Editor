uniform float uTime;
varying vec2 vUv;

// Modified version of: https://www.shadertoy.com/view/4sjXRG
// Modified version Author: https://www.shadertoy.com/user/tillmanjex
float lTime;

float noise(vec2 p)
{
  return cos(p.x*1.5) * sin(p.y*(1.5 + sin(lTime/11.))) + .2; 
}

mat2 rotate(float angle)
{
    return mat2(0.0, -2.0, sin(1.0), 0.0);
  //return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}


float fbm(vec2 p)
{
  p *= 1.0;
  float f = 0.0;
  float amp = .5;
  for( int i = 0; i < 3; i++) {
    mat2 modify = rotate(lTime/50. * float(i*i));
    f += amp*noise(p);
    p = modify * p;
    p *= 2.;
    amp /= 2.2;
  }
  return f;
}

float pattern(vec2 p, out vec2 q, out vec2 r) {
  q = vec2( fbm(p + vec2(1.)),
	    fbm(rotate(.1*lTime)*p + vec2(3.)));
  r = vec2( fbm(rotate(.2)*q + vec2(0.)),
	    fbm(q + vec2(0.)));
  return fbm(p + 1.*r);

}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(0.7059, 0.1333, 0.1333, 2.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 3.0 - K.www);
    return c.z - K.x * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), smoothstep(0.5, 0.9, c.y));
}

void main() {
  vec2 p = vUv;
  lTime = uTime;
  float ctime = lTime + fbm(p/8.)*40.;
  float ftime = fract(ctime/6.);
  lTime = floor(ctime/6.) + (1.-cos(ftime*3.1415)/2.);
  lTime = lTime*6.;
  vec2 q;
  vec2 r;
  float f = pattern(p, q, r);
  vec3 col = hsv2rgb(vec3(q.x/10. + lTime/100. + .4, abs(r.y)*3. + .1, r.x + f));
  float vig = 1. - pow(4.*(p.x - .5)*(p.x - .5), 10.);
  vig *= 1. - pow(4.*(p.y - .5)*(p.y - .5), 10.);
  gl_FragColor = vec4(col*vig,1.);
}