#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;

varying vec2 vUv;

//--------------//

// From https://iquilezles.org/www/articles/palettes/palettes.htm

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos(2. * PI *(c*t+d) );
}
//--------------//

void main() {
  vec2 st = vUv.xy;
  vec3 color = vec3(0.0);

  vec2 pos = vec2(0.5) - st;

  float r = length(pos) * 2.0;
  float a = atan(pos.y, pos.x);

  float f = cos(a * 3.0) ;
  f = abs(cos(a * 12.0 ) * sin(a * 3.0) * sin(uTime)) * 0.8 + 0.1;

  color = vec3((1.0 - smoothstep(f, f + 0.02, r) ));

  color += palette(f, vec3(.52,.45,.61),vec3(.40,.42,.31),vec3(.26,.30,.35),vec3(.15,.4,.4));

  gl_FragColor = vec4(color, 1.0);
}


