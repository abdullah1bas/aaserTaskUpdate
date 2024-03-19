import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
const data = [
  {
    id: "php",
    label: "php",
    value: 286,
    color: "hsl(28, 70%, 50%)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 545,
    color: "hsl(69, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 587,
    color: "hsl(118, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 132,
    color: "hsl(51, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 200,
    color: "hsl(348, 70%, 50%)",
  },
];
const Pie = () => {
  return (
    <Box sx={{ height: "300px" , width: '300px'}}>
      <ResponsivePie
        data={data}
        margin={{ top: 50, right: 80, bottom: 80, left: 80 }}
        startAngle={-22}
        sortByValue={true}
        innerRadius={0.85}
        padAngle={3}
        cornerRadius={7}
        activeOuterRadiusOffset={5}
        colors={{ scheme: "category10" }}
        borderWidth={2}
        // borderColor={{
        //   from: "color",
        //   modifiers: [["darker", "0.3"]],
        // }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabel="id"
        arcLabelsRadiusOffset={0.8}
        arcLabelsSkipAngle={41}
        // arcLabelsTextColor={{
        //   from: "color",
        //   modifiers: [["opacity", "1.4"]],
        // }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 53,
            translateY: -18,
            itemWidth: 99,
            itemHeight: 31,
            itemsSpacing: 17,
            symbolSize: 9,
            itemDirection: "left-to-right",
          },
        ]}
      />
    </Box>
  );
};

export default Pie;
