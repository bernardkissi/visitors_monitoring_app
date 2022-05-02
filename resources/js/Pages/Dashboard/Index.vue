<template>
    <div class="h-screen">
        <Navbar />
        <div class="container mx-auto max-w-5xl mt-12">
            <div class="flex items-center justify-between mb-4">
                <span class="font-medium text-base">Last 30 days</span>
                <button
                    class="block border-b text-gray-600 hover:text-gray-800 bg-white px-3 py-1 border-1 rounded shadow text-sm">20-09-19
                    - 30-09-19
                </button>
            </div>
            <div class="flex flex-col mt-3 w-full p-3 lg:p-0 lg:flex-row">
                <div class="relative block w-full shadow-lg h-32 mb-3 bg-white mr-8 rounded-lg">
                    <div class="p-5">
                        <div class="flex flex-wrap justify-between">
                            <span class="text-gray-700 font-semibold text-sm">
                                TOTAL VISITORS<br>
                                <span class="text-3xl font-semibold text-gray-700">1220 </span><br>
                                <span class="text-sm font-normal text-gray-500">Last accepted today</span>
                            </span>
                            <span>
                                <svg class="mt-6 mr-2 fill-current text-gray-500" width="37" height="41"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.371 20.408c-5.637 0-10.206-4.57-10.206-10.206 0-5.637 4.57-10.206 10.206-10.206 5.637 0 10.206 4.57 10.206 10.206 0 5.637-4.569 10.206-10.206 10.206zm0-4.082a6.124 6.124 0 100-12.248 6.124 6.124 0 000 12.248zM36.742 38.78a2.041 2.041 0 11-4.082 0v-4.083a6.124 6.124 0 00-6.124-6.124h-16.33a6.124 6.124 0 00-6.124 6.124v4.083a2.041 2.041 0 01-4.082 0v-4.083c0-5.637 4.57-10.206 10.206-10.206h16.33c5.637 0 10.206 4.57 10.206 10.206v4.083z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="relative block w-full shadow-lg h-32 mb-3 bg-white mr-8 rounded-lg">
                    <div class="p-5">
                        <div class="flex flex-wrap justify-between">
                            <div class="text-gray-700 font-semibold text-sm">
                                TOTAL CONVERTED<br>
                                <span class="text-3xl font-semibold text-gray-700">350 </span><br>
                                <span class="text-sm font-normal text-gray-500">Last accepted today</span>
                            </div>
                            <div>
                                <svg class="w-12 h-12 mt-5 mr-2 text-gray-500" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative block w-full shadow-lg h-32 mb-3 bg-white rounded-lg">
                    <div class="p-5">
                        <div class="flex flex-wrap justify-between">
                            <span class="text-gray-700 font-semibold text-sm">
                                TOTAL ACTIVITES <br>
                                <span class="text-3xl font-semibold text-gray-700">750 </span><br>
                                <span class="text-sm font-normal text-gray-500">Last accepted today</span>
                            </span>
                            <span>
                                <svg class="h-12 w-12 mt-5 mr-2 text-gray-500" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- event analytics -->
            <section class="w-full lg:mt-6 p-3 lg:p-0">
                <div class="hidden md:flex md:-mt-2 lg:mt-3 xl:mt-3 justify-between mt-3">
                    <span class="text-gray-700 font-medium text-xl">Visitors Analytics <span
                            class="md:hidden text-gray-500 font-normal text-sm px-1"> 3 seconds ago</span></span>
                    <div class="hidden md:flex">
                        <button
                            class="mr-3 shadow block text-gray-600 hover:text-gray-800 bg-white px-3 py-1 rounded border-0 border-gray-700 text-sm">
                            Today
                        </button>
                        <button
                            class="block border-b text-gray-600 hover:text-gray-800 bg-white px-3 py-1 border-1 rounded shadow text-sm">20-09-19
                            - 30-09-19</button>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row shadow rounded-lg mt-3 bg-white">
                    <div class="sm:hidden flex items-center justify-between p-3 border-b">
                        <button class="text-gray-700 font-medium px-2 py-1 rounded">Event Analytics</button>
                        <button class="inline-flex items-center border px-2 py-1 rounded">
                            <span class="mr-1">
                                <svg class="-mb-1 h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path
                                        d="M7 2.58V2c0-1.1.9-2 2-2h2a2 2 0 012 2v.58a8 8 0 011.92 1.11l.5-.29a2 2 0 012.74.73l1 1.74a2 2 0 01-.73 2.73l-.5.29a8.06 8.06 0 010 2.22l.5.3a2 2 0 01.73 2.72l-1 1.74a2 2 0 01-2.73.73l-.5-.3A8 8 0 0113 17.43V18a2 2 0 01-2 2H9a2 2 0 01-2-2v-.58a8 8 0 01-1.92-1.11l-.5.29a2 2 0 01-2.74-.73l-1-1.74a2 2 0 01.73-2.73l.5-.29a8.06 8.06 0 010-2.22l-.5-.3a2 2 0 01-.73-2.72l1-1.74a2 2 0 012.73-.73l.5.3A8 8 0 017 2.57v.01zM5.88 5.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 000 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 002.4 1.4l.72.2V18h2v-2.04l.71-.2a6 6 0 002.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 000-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 00-2.4-1.4l-.72-.2V2H9v2.04l-.71.2a6 6 0 00-2.41 1.4zM10 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </span>
                            <span class="text-gray-700 text-sm hover:bg-gray-900">Apply Filter</span>
                        </button>
                    </div>
                    <div class="border-b lg:border-r lg:w-3/4 pt-3 lg:pr-0 pr-2 lg:p-3">
                        <VueApexCharts type="bar" :options="obj.chartOptions" :series="obj.chartOptions.series" />
                    </div>
                    <div class="lg:w-1/4 flex flex-row lg:flex-col ">
                        <button class="flex p-2 border-r lg:border-b hover:bg-gray-100">
                            <div class="m-3">
                                <div class="flex flex-col items-start">
                                    <h4
                                        class="hidden lg:inline-flex text-xs uppercase text-gray-400 font-semibold text-left">
                                        Total Visitors this Month
                                    </h4>
                                    <div class="flex items-baseline">
                                        <h1 class="flex items-center justify-between">
                                            <span class="mr-2 text-2xl lg:text-3xl font-medium text-gray-700">725</span>
                                        </h1>
                                        <div class="flex text-baseline text-xs font-bold text-green-600">
                                            <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                                            </svg>
                                            <span>12%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button class="flex p-2 border-r lg:border-b hover:bg-gray-100">
                            <div class="m-3">
                                <div class="flex flex-col items-start">
                                    <h4
                                        class="hidden lg:inline-flex text-xs uppercase text-gray-400 font-semibold text-left">
                                        Total Visitors Last Month
                                    </h4>
                                    <div class="flex items-baseline">
                                        <h1 class="flex items-center justify-between">
                                            <span class="mr-2 text-2xl lg:text-3xl font-medium text-gray-700">413</span>
                                        </h1>
                                        <div class="flex text-baseline text-xs font-bold text-red-600">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                                            </svg>
                                            <span>9%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button class="flex p-2 border-r lg:border-b hover:bg-gray-100">
                            <div class="m-3">
                                <div class="flex flex-col items-start">
                                    <h4
                                        class="hidden lg:inline-flex text-xs uppercase text-gray-400 font-semibold text-left">
                                        Total Visitors over 6 months
                                    </h4>
                                    <div class="flex items-baseline">
                                        <h1 class="flex items-center justify-between">
                                            <span class="mr-2 text-2xl lg:text-3xl font-medium text-gray-700">200</span>
                                        </h1>
                                        <div class="flex text-baseline text-xs font-bold text-red-600">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                                            </svg>
                                            <span>9%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
            <!-- vistors table -->
            <div style="overflow-x:auto;">
                <table class="w-full mt-12 rounded-lg shadow-md">
                    <thead class="rounded-t-lg">
                        <tr class="text-left rounded-t-lg bg-gray-50 border-b border-grey uppercase">
                            <th class="px-2 py-4">
                                <span
                                    class="bg-white border-2 ml-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500">
                                    <input type="checkbox" class="opacity-0 absolute">
                                    <svg class="fill-current hidden w-4 h-4 text-blue-500 pointer-events-none"
                                        viewBox="0 0 20 20">
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                </span>
                            </th>
                            <th class="text-sm text-gray-700">Recent Visitors</th>
                            <th class="hidden md:table-cell  text-sm text-gray-700">Mobile</th>
                            <th class="hidden md:table-cell text-sm text-gray-700">Assignee</th>
                            <th class="text-sm text-gray-700">Status</th>
                            <th class="text-sm text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="accordion border-b border-gray-100 hover:bg-gray-50">
                            <td class="px-3 py-5">
                                <span
                                    class="bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500">
                                    <input type="checkbox" class="opacity-0 absolute">
                                    <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                        viewBox="0 0 20 20">
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                </span>
                            </td>
                            <td class="flex items-center">
                                <span>
                                    <img class="hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover"
                                        src="https://ui-avatars.com/api/?background=random&name=Bernard Owiredu"
                                        alt="" />
                                </span>
                                <span class="py-3 w-40">
                                    <p class="text-gray-800 text-sm">Bernard Owiredu</p>
                                    <p class="md:hidden text-xs text-gray-600 font-medium">0244224317</p>
                                    <p class="hidden md:table-cell text-xs text-gray-400 font-medium">Anyinamu</p>
                                </span>
                            </td>
                            <td class="hidden md:table-cell">
                                <p class="text-sm text-gray-800 font-medium">0244224317</p>
                                <p class="text-xs text-gray-500 font-medium">bernardkissi18@gmail.com</p>
                            </td>
                            <td class="hidden lg:table-cell">
                                <p class="text-sm text-gray-700 font-medium">Nelly Sarpong</p>
                            </td>
                            <td>
                                <span
                                    class="bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1">monitoring
                                </span>
                            </td>
                            <td>
                                <svg class="mr-3 md:mr-1 h-12 w-6 fill-current text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                                </svg>
                            </td>
                        </tr>
                        <tr class="accordion border-b border-grey-light items-center">
                            <td class="px-3 py-5">
                                <span
                                    class="bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500">
                                    <input type="checkbox" class="opacity-0 absolute">
                                    <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                        viewBox="0 0 20 20">
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                </span>
                            </td>
                            <td class="flex items-center">
                                <span>
                                    <img class="hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover"
                                        src="https://ui-avatars.com/api/?background=random&name=Molly Sanders" alt="" />
                                </span>
                                <span class="py-3">
                                    <p class="text-gray-800 text-sm">Molly Sanders</p>
                                    <p class="md:hidden text-xs text-gray-700 font-medium">244224317</p>
                                    <p class="hidden md:table-cell text-xs text-gray-400 font-medium">Stadium</p>
                                </span>
                            </td>
                            <td class="hidden md:table-cell">
                                <p class="text-sm text-gray-800 font-medium">0242822669</p>
                                <p class="text-xs text-gray-400 font-medium">bernardkissi18@gmail.com</p>
                            </td>
                            <td class="hidden lg:table-cell">
                                <p class="text-sm text-gray-700 font-medium">Bernard Afrane</p>
                            </td>
                            <td>
                                <span class="bg-yellow-50 text-yellow-600 text-xs font-bold rounded-lg px-4 py-1">paused
                                </span>
                            </td>
                            <td>
                                <svg class="h-12 w-6 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                                </svg>
                            </td>
                        </tr>
                        <tr class="accordion border-b border-grey-light items-center">
                            <td class="px-3 py-5">
                                <span
                                    class="bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500">
                                    <input type="checkbox" class="opacity-0 absolute">
                                    <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                        viewBox="0 0 20 20">
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                </span>
                            </td>
                            <td class="flex items-center">
                                <span>
                                    <img class="hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover"
                                        src="https://ui-avatars.com/api/?background=random&name=Gify Osei" alt="" />
                                </span>
                                <span class="py-3">
                                    <p class="text-gray-800 text-sm">Gify Osei</p>
                                    <p class="md:hidden text-xs text-gray-600 font-medium">244224317</p>
                                    <p class="hidden md:table-cell text-xs text-gray-500 font-medium">Asokwa</p>
                                </span>
                            </td>
                            <td class="hidden md:table-cell">
                                <p class="text-sm text-gray-800 font-medium">0243243810</p>
                                <p class="text-xs text-gray-500 font-medium">bernardkissi18@gmail.com</p>
                            </td>
                            <td class="hidden lg:table-cell">
                                <p class="text-sm text-gray-700 font-medium">Gify Gyamfi</p>
                            </td>
                            <td>
                                <span class="bg-red-50 text-red-600 text-xs font-bold rounded-lg px-4 py-1">Stopped
                                </span>
                            </td>
                            <td>
                                <svg class="h-12 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                                </svg>
                            </td>
                        </tr>
                        <tr class="accordion border-b border-grey-light items-center">
                            <td class="px-3 py-5">
                                <span
                                    class="bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500">
                                    <input type="checkbox" class="opacity-0 absolute">
                                    <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                        viewBox="0 0 20 20">
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                </span>
                            </td>
                            <td class="flex items-center">
                                <span>
                                    <img class="hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover"
                                        src="https://ui-avatars.com/api/?background=random&name=Ransford Aboagy"
                                        alt="" />
                                </span>
                                <span class="py-3">
                                    <p class="text-gray-800 text-sm">Ransford Aboagye</p>
                                    <p class="md:hidden text-xs text-gray-600 font-medium">244224317</p>
                                    <p class="hidden md:table-cell text-xs text-gray-400 font-medium">Santasi</p>
                                </span>
                            </td>
                            <td class="hidden md:table-cell">
                                <p class="text-sm text-gray-800 font-medium">0245065767</p>
                                <p class="text-xs text-gray-400 font-medium">bernardkissi18@gmail.com</p>
                            </td>
                            <td class="hidden lg:table-cell">
                                <p class="text-sm text-gray-700 font-medium">Fred Boateng</p>
                            </td>
                            <td>
                                <span
                                    class="bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1">monitoring
                                </span>
                            </td>
                            <td>
                                <svg class="h-12 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex items-center justify-between bg-white rounded-b-lg p-3">
                <span class="text-sm text-gray-500">updated 2m ago</span>
                <span class="text-sm text-gray-600">
                    1 2 3
                </span>
            </div>
            <br><br>
            <!-- end table -->
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue'
import VueApexCharts from "vue3-apexcharts";
import { reactive } from 'vue'

const obj = reactive({
    chartOptions: {
        chart: {
            animations: {
                enabled: false,
            },
            height: 50,
            type: 'bar',
            stacked: true,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        },
        title: {
            text: 'Visitors per month for service',
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                fontWeight: 'medium',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
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
        colors: ['#63B3ED', '#EDF2F7'],
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
            fontSize: '13px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            labels: {
                colors: '#4A5568',
            }
        },
        series: [{
            name: 'series-1',
            data: [30, 12, 25, 50, 49, 21, 70, 51, 22, 34, 45, 20]
        }]
    }
})

</script>
