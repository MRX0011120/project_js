class Graph3DComponent extends Component {
    constructor(options) {
        super(options);
        
        this.WIN = {
            LEFT: -10,
            BOTTOM: -10,
            WIDTH: 20,
            HEIGHT: 20,
            CAMERA: new Point(0, 0, -50),
            DISPLAY: new Point(0, 0, -30)
        };
        this.canvas = new Canvas({
            WIN: this.WIN,
            id: 'graphics',
            callbacks: { wheel: event => this.wheel(event) }
        });

        this.graph3D = new Graph3D({
            WIN: this.WIN,
        });

        this.figure = (new Figure).ring();
        this.render();
    }

    _addEventListeners(){
        document.addEventListener('keydown', event => this.keyDownHanler(event));
    }

    keyDownHanler(event) {
        switch (event.keyCode) {
            case 65: //a
                this.figure.points.forEach(point => this.Graph3D.move(-1, 0, 0, point));
                this.render();
            break;
            case 68: //d
                this.figure.points.forEach(point => this.Graph3D.move(1, 0, 0, point));
                this.render();
            break;
            case 87: //w
                this.figure.points.forEach(point => this.Graph3D.move(0, -1, 0, point));
                this.render();
            break;
            case 83: //s
                this.figure.points.forEach(point => this.Graph3D.move(0, 1, 0, point));
                this.render();
            break;
        }
    }

    wheel(event) {
        const delta = (event.wheelDelta > 0) ? 0.9 : 1.1;
        this.figure.points.forEach(point => this.graph3D.zoom(delta, point));
        this.render();
    }

    render() {
        this.canvas.clear();
        this.figure.edges.forEach(edge => {
            const point1 = this.figure.points[edge.p1];
            const point2 = this.figure.points[edge.p2];
            this.canvas 
            this.graph3D.xs(point1), this.graph3D.ys(point1),
                this.canvas.line(this.graph3D.xs(point2), this.graph3D.ys(point2));
        });
        this.figure.points.forEach(el => {
            this.canvas.point(this.graph3D.xs(el), this.graph3D.ys(el));
        });
    };
}