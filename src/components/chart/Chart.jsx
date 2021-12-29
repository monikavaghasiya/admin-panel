import React from 'react';
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">Test</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {props.grid && <CartesianGrid strokeDasharray="3 3" />}
                    <XAxis dataKey={props.dataKey} stroke="blue"/>
                    <YAxis />
                    <Tooltip />
                    {/*<Legend /> it will show which property we are using for showing data*/}
                    <Line type="monotone" dataKey="Active User" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;