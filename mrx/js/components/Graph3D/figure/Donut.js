Figure.prototype.donut = (R = 10, count = 10, z = 6, r = 5) => {
    const points = [];
    //(sqrt(x*x+y*y)-r)^2+z^2=R^2
    let t = 0;
    const dt = 2 * Math.PI / count;
    for (let z = 0; z < 5; z++) {
        while (t < 2 * Math.PI) {
            points.push(new Point(
                (sqrt(x * x + y * y) - r) * (sqrt(x * x + y * y) - r) + z * z,
                0
            ));
            t += dt;
        }
    }
    return new Subject(points);
}
