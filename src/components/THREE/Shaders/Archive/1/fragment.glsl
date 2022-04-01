#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 uResolution;
uniform float uTime;
uniform float uMouse;

varying vec2 vUv;

float plot(vec2 st, float pct) {
	return smoothstep(pct - 0.02, pct, st.y) - smoothstep( pct, pct + 0.02, st.y);	
}

void main() {
    // vec2 st = gl_FragCoord.xy/uResolution;
		vec2 st = vUv;

    // float x = smoothstep(0.2,0.5,st.x) - smoothstep(0.5,0.8,st.x);
		// float x = (st.x + uTime);
		// float x = (uTime * st.x);
		// float y = sin(x);
		// float a = ceil(y);
		// float b = floor(y);
		// float c = a + b;

		// float x = smoothstep(0.2,0.5,st.x) - smoothstep(0.5,0.8,st.x);

		// float y = mod(st.x, 0.5);
		// float y = fract(st.x);
		// float y = floor(st.x);
		// float y = sign(st.x);
		// float y = abs(st.x);
		// float y = clamp(st.x, 0.0, 1.0);
		// float y = min(0.0, st.x);
		float y = max(0.0, st.x);

    vec3 color = vec3(y);

    float pct = plot(st, y);
    color = (1.0-pct) * color + pct *vec3(0.0, 1.0, 0.0);

    gl_FragColor=vec4(color, 1.0);
}