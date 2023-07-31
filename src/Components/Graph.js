import Plot from "react-plotly.js";

const Graph = ({ skills }) => {
  //   var graphData = metrics.map((a) => {
  //     var arr = skills.filter((sk) => {
  //       if (sk.endorsements <= 10) {
  //         return sk.name;
  //       }
  //     });
  //     return {
  //       category: a,
  //       values: arr,
  //     };
  //   });
  var temp = metrics.map((a, i) => {
    const valuesInRange = skills.reduce((acc, currentValue) => {
      if (
        currentValue.endorsements >= a &&
        currentValue.endorsements <= metrics[i + 1]
      ) {
        acc.push(currentValue.name);
      }
      return acc;
    }, []);

    return {
      category: a,
      values: valuesInRange,
    };
  });
  return (
    <>
      <Plot
        data={getGraphData(temp)}
        layout={{
          barmode: "stack",
          width: 400,
          height: 500,
          title: "Skills by endorsement",
        }}
      />
    </>
  );
};
const getGraphData = (data) => {
  return data.map((a) => {
    return {
      type: "bar",
      name: a,
      x: a.values.length,
      y: metrics,
    };
  });
};
export default Graph;

var metrics = [0, 10, 40, 60, 100, 200];
