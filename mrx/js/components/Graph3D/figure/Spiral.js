Figure.prototype.spiral = (a = 9, count = 30) => {
    const points = [];
    const edges = [];
    let t = 0;
    const dt = 2 * Math.PI / count;
    while (t < 2 * Math.PI) {
        points.push (new Point(
            a * Math.cos(t) / t,
            a * Math.sin(t) / t,
            0
            ));
            t+= dt;
    }
    return new Subject(points, edges);
}