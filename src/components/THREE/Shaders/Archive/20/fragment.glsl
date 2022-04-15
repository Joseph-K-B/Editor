uniform float uTime;
varying vec2 vUv;

#define PI 3.14159265

// From https://iquilezles.org/www/articles/palettes/palettes.htm

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos(2. * PI *(c*t+d) );
}
//--------------//

mat3 yuv2rgb = mat3 (
  1.0, 0.0, 1.13983,
  1.0, -0.39465, -0.58060,
  1.0, 2.03211, 0.0
);

mat3 rgb2yuv = mat3 (
    0.2126, 0.7152, 0.0722, 
    -0.09991, -0.33609, 0.43600, 
    0.615, -0.5586, -0.05639
  );

void main(){
  vec2 st = -1. + 2. * vUv;
  // float y = st.y * (sin(uTime));
  vec3 color = vec3(sin(st.x / st.y));
  vec3 colorA = vec3(0.0, 0.8667, 1.0);
  vec3 colorB = vec3(0.0157, 0.5216, 0.6118);
  vec3 colorC = vec3(0.0157, 0.8118, 0.9922);

  color = rgb2yuv * vec3(0.45, st.x, st.y);
  colorA = yuv2rgb * color;
  colorB = yuv2rgb * colorA;


  color = mix(color, colorA, colorB);
  color += palette(st.x, color, colorA, colorB, colorC);

  gl_FragColor = vec4(color, 0.9);
}