import * as Plot from "npm:@observablehq/plot";

export default function hexbinPlot(data, {
    fillAccessor = (d) => d,
    fillTransform=  'count',
    x = 'longitude',
    y = 'latitude',
    binWidth = 10,
    title = 'Average precipitation (cm)',
    width,
} = {}){
  return Plot.plot({
    title,
    width,
      fill: { label: 'Precipitation' },
      x: { label: 'Longitude' },
    marks: [
        Plot.dot(data, Plot.hexbin(
            {
                fill: fillTransform,
            },
            {
                x,
                y,
                fill: fillAccessor,
                binWidth,
                tip: true,
            }
        )),
        Plot.hexgrid(),
    ],
  })
}
