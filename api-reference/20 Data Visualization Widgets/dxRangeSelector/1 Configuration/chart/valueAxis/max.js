﻿$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: [
            { x: 10, y1: 0, y2: 10 },
            { x: 15, y1: 6, y2: 12 },
            { x: 20, y1: 8, y2: 15 },
            { x: 30, y1: 10, y2: 10 },
            { x: 50, y1: 16, y2: 5 },
            { x: 150, y1: 12, y2: 6 },
            { x: 180, y1: 8, y2: 10 }
        ],
        chart: {
            commonSeriesSettings: {
                argumentField: 'x',
                type: 'line'
            },
            series: [
                { valueField: 'y1' },
                { valueField: 'y2' }
            ],
            valueAxis: {
                max: 16
            }
        }
    });
});