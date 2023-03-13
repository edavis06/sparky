(function(window, _) {
    window.sparky = window.sparky || {
        numz: {},
        phyz: {
            /**
             * 
             * @param {*} pointA 
             * @param {*} pointB 
             * @returns the distance between the pointsA and pointsB. It is always positive, and directionless
             */
            getDistance(pointA, pointB){
                const
                    distanceX = pointB.x - pointA.x,
                    distanceY = pointB.y - pointA.y,
                    distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                return distance;
            }
        },
    };
}(window, window._));