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

// 平移矩阵
function getTranslateMatrix(x = 0, y = 0 ,z = 0) {
    return new Float32Array([
        1.0, 0.0, 0.0,0.0,
        0.0, 1.0, 0.0,0.0,
        0.0, 0.0, 1.0, 0.0,
        x, y, z, 1,
    ])
}


// 缩放矩阵

function getScaleMatrix(x = 1, y = 1 ,z = 1) {
    return new Float32Array([
        x, 0.0, 0.0,0.0,
        0.0, y, 0.0,0.0,
        0.0, 0.0, z, 0.0,
        0.0, 0.0, 0.0, 1,
    ])
}


// 绕z轴旋转的旋转矩阵
function getRotateMatrix(deg) {
    return new Float32Array([
        Math.cos(deg), Math.sin(deg), 0.0,0.0,
        -Math.sin(deg), Math.cos(deg), 0.0,0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1,
    ])
}

// 矩阵复合函数
function mixMatrix(a, b) {
    const result = new Float32Array(16);

    for (let i = 0; i < 4; i++) {
        result[i] = a[i] * b[0] +  a[i + 4] * b[1] + a[i+8] * b[2] + a[i+12] * b[3]    
        result[i + 4] = a[i] * b[4] +  a[i + 4] * b[5] + a[i+8] * b[6] + a[i+12] * b[7]    
        result[i + 8] = a[i] * b[8] +  a[i + 4] * b[9] + a[i+8] * b[10] + a[i+12] * b[11]    
        result[i + 12] = a[i] * b[12] +  a[i + 4] * b[13] + a[i+8] * b[14] + a[i+12] * b[15]    
    }

    return result;
}