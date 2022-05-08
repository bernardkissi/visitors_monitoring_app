<template>
    <VueApexCharts type="bar" :options="obj.chartOptions" :series="obj.series" />
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
import { reactive, onBeforeMount } from 'vue'

const props = defineProps({
    series: {
        type: Array,
        default: []
    },
    title: {
        type: String,
        default: null
    },
})
const obj = reactive({
    chartOptions: {
        chart: {
            animations: {
                enabled: true,
            },
            height: 50,
            type: 'bar',
            stacked: true,
            fontFamily: '"Inter", sans-serif',
        },
        title: {
            text: props.title,
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                fontFamily: '"Inter", sans-serif',
                color: '#263238'
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false,
                    position: 'top'
                },
                columnWidth: '50%',
                endingShape: 'rounded'
            },
        },
        colors: ['#c084fc', '#f87171', '#cbd5e1'],
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
        },
        legend: {
            floating: false,
            position: 'top',
            horizontalAlign: 'center',
            offsetX: 0,
            offsetY: 10,
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            labels: {
                colors: '#4A5568',
            }
        },
    },
    series: [{
        name: 'series-1',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
})

const data = reactive({ values: props.series })

onBeforeMount(() => {
    populateChart()
})


const groupData = (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

const populateChart = () => {
    let mapData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const finalData = []
    const groupedData = Object.entries(groupData(data.values, 'response'))
    const results = groupedData.map((values, i) => {
        values[1].map(x => mapData[x.month - 1] = x.total)
        finalData.push({ name: values[0], data: mapData })
        mapData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })

    obj.series = [...finalData]
}
</script>


