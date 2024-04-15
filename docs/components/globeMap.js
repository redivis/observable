import * as Plot from "npm:@observablehq/plot";
import * as topojson from "npm:topojson-client";

export default function globeMap(data, world, { longitude, width } = {}){
    return Plot.plot({
        title: "Stations",
        width,
        projection: {
            type: "orthographic",
            rotate: [longitude, -30]
        },
        marks: [
            Plot.graticule(),
            Plot.sphere(),
            Plot.geo(topojson.feature(world, world.objects.land), {stroke: "var(--theme-foreground-faint)"}),
            Plot.dot(data, {
                x: "longitude",
                y: "latitude",
                r: 3,
                stroke: "#f43f5e",
                channels: { name: "name" },
                tip: true
            }),
        ]
    })
}
