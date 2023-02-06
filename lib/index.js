function initShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE) {
     // 创建顶点着色器
     const vertexShader = gl.createShader(gl.VERTEX_SHADER);
     const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

     gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE); // 制定着色器的源码
     gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE) // 指定片源着色器的远吗

     // 编译着色器
     gl.compileShader(vertexShader);
     gl.compileShader(fragmentShader);

     // 创建一个程序对象
     const program = gl.createProgram();

     gl.attachShader(program, vertexShader);
     gl.attachShader(program, fragmentShader);

     gl.linkProgram(program);

     gl.useProgram(program);

     // 执行绘制
    //  gl.drawArrays(gl.POINTS, 0, 1);

    return program;
}