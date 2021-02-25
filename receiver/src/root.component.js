import React, { useEffect, useState } from "react";
import temperaturesStore from "@rxjs-temp/messenger";
import { Container, Divider, Icon, Grid, Segment, Table } from "semantic-ui-react";
import { Line } from "@reactchartjs/react-chart.js";

export default function Root(props) {
  const [tempState, setTempState] = useState(temperaturesStore.initialState);
  const [graphData, setGraphData] = useState({});

  const options = {
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: 'series',
          ticks: {
            source: "labels",
          },
          time: {
            minUnit: "second",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


  useEffect(() => {
    const subs = temperaturesStore.subscribe(setTempState);
    temperaturesStore.init();

    return () => subs.unsubscribe();
  }, []);

  useEffect(() => {
    console.log("HERE", tempState.temperatures);

    let graphData = {
      labels: tempState.temperatures.map((a) => new Date(a.timestamp)),
      datasets: [
        {
          label: "Temperatures",
          data: tempState.temperatures.map((a) => a.value),
          fill: false,
          backgroundColor: "rgb(33, 133, 208)",
          borderColor: "rgba(33, 133, 208, 0.7)",
        },
      ],
    };

    console.log(graphData);

    setGraphData(graphData);
  }, [tempState]);

  const getDateFormatted = (temperature) => {
    let date = new Date(temperature.timestamp);
    console.log(date.toLocaleDateString("pt-pt"));

    return date.toLocaleString("pt-pt");
  };

  return (
    <Container fluid style={{ padding: "30px" }}>
      <h1>Registered Temperature</h1>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  <Table.HeaderCell>Temperature</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {tempState.temperatures.map((temperature, idx) => (
                  <Table.Row key={idx}>
                    <Table.Cell>{getDateFormatted(temperature)}</Table.Cell>
                    <Table.Cell>{temperature.value} &#176;C</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Line data={graphData} options={options} />
          </Grid.Column>
        </Grid>

        <Divider vertical>
          <Icon name="bar chart" />
        </Divider>
      </Segment>
    </Container>
  );
}
