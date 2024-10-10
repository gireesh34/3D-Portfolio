let glContext = null;

export function initializeWebGL(canvas) {
    if (glContext) {
        console.log("Reusing existing WebGL context.");
        return glContext;
    }

    try {
        glContext = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!glContext) {
            throw new Error("Unable to initialize WebGL. Your browser may not support it.");
        }
        console.log("WebGL context created.");
    } catch (e) {
        console.error(e);
    }

    return glContext;
}

export function disposeWebGL() {
    if (glContext) {
        // Perform any necessary cleanup here
        glContext = null;
        console.log("WebGL context disposed.");
    }
}