<template>
    <VueApexCharts type="bar" :options="obj.chartOptions" :series="obj.chartOptions.series" />
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
const props = defineProps({
    options: {
        type: Object,
        default: null
    },
})
</script>
