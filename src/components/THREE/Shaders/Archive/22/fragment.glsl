/*
Author: Inigo Quilez
Tutorial: https://www.youtube.com/watch?v=emjuqqyq_qc
*/

// Created by beautypi - beautypi/2012
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
uniform float uTime;
varying vec2 vUv;

float hash( float n )
{
    return fract(sin(n)*43758.5453);
}

float noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);

    f = f*f*(3.0-2.0*f);

    float n = p.x + p.y*57.0;

    return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
               mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
}

mat2 m = mat2(0.8, 0.6, -0.6, 0.8);

//fractional brownian motion
float fbm (vec2 p) 
{
  float f = 0.0;
  //add one octave of noise => 
  //multiply by 2, next time noise is called twice the frequency
  // f += amplitude * noise(pixels); pixels *= frequency
  f += 0.5000* noise( p ); p *= 2.02;
  f += 0.2500* noise( p ); p *= 2.03;
  f += 0.1250* noise( p ); p *= 2.01;
  f += 0.0625* noise( p ); p *= 2.04;

  f /= 0.9375;
  return f;
}

void main() {
  vec2 q = vUv;
  vec2 p = -1.0 + 2.0*q;

  //Take x component of px coord and create ramp to modulate color
  //Left side of uv is darkened
  // float background = smoothstep( -0.25, 0.25, p.x);

  float r = sqrt( dot(p, p) );
  float a = atan( p.y, p.x );

  float ss = 0.5 + 0.5*sin(1.0*uTime);
  float anim = 1.0 + 0.1* ss * clamp(1.0 - r, 0.0, 1.0);
  r *= anim;


  vec3 col = vec3( 1.0 );
  // float f = fbm( 4.0 * p );
  if(r < 0.8 )
  {
    col = vec3(0.2, 0.3, 0.4);

    float f = fbm( 5.0*p );
    col = mix( col, vec3(0.2, 0.5, 0.4), f);

    f = 1.0 - smoothstep(0.2, 0.5, r);
    col = mix(col, vec3(0.9, 0.6, 0.2), f);

    //apply domain deformation
    // a += fbm( 5.0 p );
    a += 0.05*fbm( 15.0*p );

    //use polar coords for white fibers radius and arc
    f = smoothstep(0.3, 1.0, fbm( vec2(6.0 * r, 20.0 * a) ) );
    col = mix(col, vec3(1.0), f);

    //polar for black fiber alter frequency for radius and arc
    // f = smoothstep(0.3, 1.0, fbm( vec2(8.0 * r, 10.0 * a) ) );
    f = smoothstep(0.4, 0.9, fbm( vec2(10.0 * r, 15.0 * a) ) );
    // col = mix(col, vec3(0.0), f);
    col *= 1.0 - f;

    //Add volume effect
    //apply black color to edge of eyball by inverting coordinates 
    //half the value to lessen intensity
    f = smoothstep( 0.6, 0.8, r);
    col *= 1.0 - 0.5 * f;

    f = smoothstep(0.2, 0.25, r);
    col *= f;

    // fake reflection
    f = 1.0 - smoothstep(0.0, 0.5, length(p - vec2(0.24, 0.2)));
    col += vec3(1.0, 0.9, 0.8) * f * 0.7;

    f = smoothstep (0.75, 0.8, r );
    col = mix( col, vec3(1.0), f);
  } 

  // gl_FragColor = vec4(col * background, 1.0);
  gl_FragColor = vec4(col, 1.0);
}