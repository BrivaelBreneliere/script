class Object3D {
    Faces: Face[] = [];
}

class Face {
    Point1: Point | undefined;
    Point2: Point | undefined;
    Point3: Point | undefined;
}

class Point {
    X: number = 0;
    Y: number = 0;
    Z: number = 0;
}

// {} objet
// [] tableau
// un tableau contient 0, 1 ou plusieurs objets séparés par des ,

const Object3D1: Object = {
    Faces: [
        Point1: {
            X: 2,
            Y: 2,
            Z: 2,
        },
        Point2: {
            X: 2,
            Y: 2,
            Z: 2,
        },
        Point3: {
            X: 2,
            Y: 2,
            Z: 2,
        },
    ],
};

console.log(Object3D1)