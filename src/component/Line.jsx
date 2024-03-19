/* eslint-disable react/prop-types */
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const Line = ({ data }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: "300px" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 14,
                fill: "#fff",
              },
            },
          },
        }}
        gridYValues={[50, 100, 200]} // القيم التمثيلية التي تريد عرضها على محور Y
        // yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 0,
          tickValues: [50, 100, 200], // القيم التمثيلية التي تريد عرضها على المحور الرأسي
          tickPadding: 16,
          tickRotation: 0,
          legend: "",
          legendOffset: -49,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        enableGridX={false}
        colors={{ scheme: "pink_yellowGreen" }}
        lineWidth={6}
        enablePoints={false}
        pointSize={8}
        pointColor={{ theme: "labels.text.fill" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={24}
        enableArea={true}
        areaBlendMode="luminosity"
        areaBaselineValue={5}
        areaOpacity={0.8}
        enableSlices="y"
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[]}
        motionConfig="slow"
      />
    </Box>
  );
};

export default Line;
