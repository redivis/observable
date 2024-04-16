import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6.14/+esm";
import * as topojson from "https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/+esm";

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
