<template>
    <Navbar />
    <div class="container mx-auto max-w-5xl mt-8 mb-12">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-4xl mt-6 font-medium">Activity Logs</h3>
            <div class="flex items-center space-x-4">
                <button @click="openModal"
                    class="bg-blue-500 text-white font-bold py-3 px-5 text-sm mt-6 inline-flex items-center group rounded-md">
                    Export logs
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="flex flex-col mt-5 w-full p-3 lg:p-0 lg:flex-row">
            <div class="relative block w-full shadow-lg h-32 mb-3 bg-white rounded-lg -z-10">
                <div class="p-5">
                    <div class="flex flex-wrap justify-between">
                        <span class="text-gray-700 font-semibold text-sm">
                            TOTAL LOGS<br>
                            <span class="text-3xl font-semibold text-gray-700">1220 </span><br>
                            <span class="text-sm font-normal text-gray-400">Last updated 3 hours ago</span>
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
        </div>
        <div class="mt-12" style="overflow-x:auto;">
            <div class="flex items-center justify-end">
                <div class="relative w-72">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
                        </svg>
                    </span>
                    <input
                        class="block pl-8 pr-4 py-3 w-full bg-white rounded-lg text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
                        placeholder="Search for visitors" />
                </div>
            </div>
            <table class="w-full mt-2 rounded-lg shadow-md">

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
                        <th class="text-sm text-gray-700">Activity type</th>
                        <th class="hidden md:table-cell  text-sm text-gray-700">Performed On</th>
                        <th class="hidden md:table-cell  text-sm text-gray-700">Performed By</th>
                        <th class="hidden md:table-cell text-sm text-gray-700">Performed At</th>
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
                                    src="https://ui-avatars.com/api/?background=random&name=Bernard Owiredu" alt="" />
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
                            <span class="bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1">monitoring
                            </span>
                        </td>
                        <td class="flex space-x-3">
                            <Link :href="route('user.edit')" as="button" type="button"
                                class="text-xs text-blue-600 py-1 px-3 bg-blue-50 rounded-md hover:bg-gray-100">Edit
                            </Link>
                            <Link :href="route('user.delete')" as="button" type="button"
                                class="text-xs text-blue-600 py-1 px-3 bg-blue-50 rounded-md hover:bg-gray-100">
                            Delete
                            </Link>
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
    </div>

</template>

<script setup>
import Navbar from '@/Components/Navbar.vue'
</script>

<style>
</style>
