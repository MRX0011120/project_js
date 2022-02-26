class Graph3D {
    constructor({ WIN }) {
        this.WIN = WIN;
    }

    xs(point) {
        return point.x * (this.WIN.CAMERA.z - this.WIN.DISPLAY.z) / (this.WIN.CAMERA.z - point.z);
    }
    ys(point) {
        return point.y * (this.WIN.CAMERA.z - this.WIN.DISPLAY.z) / (this.WIN.CAMERA.z - point.z);
    };

    multMatrix(T, m) { // T = [[], [], [], []]     m = [x, y, z, 1]
        let array = [0, 0, 0, 0];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                array[i] += T[i][j] * m[j];
            }
        }
        return array;
    };

    zoom(delta, point) {
        const array = this.multMatrix(
            [[delta, 0, 0, 0],
            [0, delta, 0, 0],
            [0, 0, delta, 0],
            [0, 0, 0, 1]],
            [point.x, point.y, point.z, 1]
        )
        point.x = array[0];
        point.y = array[1];
        point.z = array[2];
    };

    move(dx, dy, dz, point) {
        const array = this.multMatrix(
            [[1, 0, 0, dx],
            [0, 1, 0, dy],
            [0, 0, 1, dz],
            [0, 0, 0, 1]],
            [point.x, point.y, point.z, 1]
        )
        point.x = array[0];
        point.y = array[1];
        point.z = array[2];
    };
}