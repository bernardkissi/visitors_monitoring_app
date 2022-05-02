<template>
    <div>
        <Navbar />
        <div class="container mx-auto max-w-5xl mt-6 h-screen">
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-4xl mt-6 font-medium">Users</h3>
                <div class="flex items-center space-x-4">
                    <button @click="openModal"
                        class="bg-purple-100 text-purple-700 shadow font-bold py-3 px-5 text-sm mt-6 inline-flex items-center group rounded-md">
                        ADD A USER
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex flex-col mt-3 w-full p-3 lg:p-0 lg:flex-row">
                <div class="relative block w-full shadow-lg h-32 mb-3 bg-white mr-8 rounded-lg">
                    <div class="p-5">
                        <div class="flex flex-wrap justify-between">
                            <span class="text-gray-700 font-semibold text-sm">
                                TOTAL USERS<br>
                                <span class="text-3xl font-semibold text-gray-700">{{ props.total_users }} </span><br>
                                <span class="text-sm font-normal text-gray-400">Last updated today</span>
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
                                TOTAL ASSIGNED<br>
                                <span class="text-3xl font-semibold text-gray-700"> {{ total_assigned }}</span><br>
                                <span class="text-sm font-normal text-gray-400">Last updated today</span>
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
                                TOTAL UNASSIGNED<br>
                                <span class="text-3xl font-semibold text-gray-700">{{ unassigned }} </span><br>
                                <span class="text-sm font-normal text-gray-400">Last updated today</span>
                            </span>
                            <span>
                                <svg class="w-12 h-12 mt-5 mr-2 text-gray-500" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6">
                                    </path>
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
                            class="block shadow pl-8 pr-4 py-3 w-full bg-white rounded-lg text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
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
                            <th class="text-sm text-gray-700">Fullname</th>
                            <th class="hidden md:table-cell  text-sm text-gray-700">Mobile/Email</th>
                            <th class="text-sm text-gray-700">Status</th>
                            <th class="text-sm text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="props.users.data !== null" class="bg-white">
                        <tr v-for="user in props.users.data" :key="user.id"
                            class="accordion border-b border-gray-100 hover:bg-gray-50">
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
                                        :src="image + user.name" alt="" />
                                </span>
                                <span class="py-3 w-40">
                                    <p class="text-gray-800 text-sm">{{ user.name }}</p>
                                    <p class="md:hidden text-xs text-gray-600 font-medium">{{ user.phone }}</p>
                                    <p class="hidden md:table-cell text-xs text-gray-400 font-medium">{{
                                            dayjs(user.created_at).fromNow()
                                    }}</p>
                                </span>
                            </td>
                            <td class="hidden md:table-cell">
                                <p class="text-sm text-gray-800 font-medium">{{ user.phone }}</p>
                                <p class="text-xs text-gray-400 font-medium">{{ user.email }}</p>
                            </td>
                            <td>
                                <span v-if="user.visitors.length <= 0"
                                    class="bg-rose-50 text-rose-600 text-xs font-bold rounded px-4 py-1">unassigned
                                </span>
                                <span v-if="user.visitors.length > 0"
                                    class="bg-green-50 text-green-600 text-xs font-bold rounded px-4 py-1">
                                    {{ user.visitors.length }}
                                    assigned
                                </span>
                            </td>
                            <td class="flex space-x-3">
                                <Link :href="route('user.edit', user.id)" as="button" type="button"
                                    class="flex items-center space-x-2 text-xs text-blue-600 py-1 px-3 bg-blue-50 rounded-md hover:bg-gray-100">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                                    </path>
                                </svg>
                                <span>Edit</span>
                                </Link>
                                <Link :href="route('logout')" as="button" type="button"
                                    class="flex items-center space-x-2 text-xs text-blue-600 py-1 px-3 bg-blue-50 rounded-md hover:bg-gray-100">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                    </path>
                                </svg>
                                <!-- <span>Remove</span> -->
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="props.users.data.length <= 0"
                class="flex items-center justify-center bg-white h-32 rounded-b-lg p-3 space-x-3 ">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                    </path>
                </svg>
                <h3 class="text-xl font-semibold text-gray-400">No Users Recorded</h3>
            </div>
            <div v-else class="flex items-center justify-end bg-white rounded-b-lg p-3">
                <Pagination :links="users.links" />
            </div>
        </div>

        <Modal @close-submit="closeModal" @close-modal="closeModal" :is-open="isOpen" />
    </div>

</template>

<script setup>
import Navbar from '@/Components/Navbar'
import Modal from '@/Components/UserModal'
import Options from '@/Components/Options.vue'
import Pagination from '@/Components/Pagination.vue'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import { ref, watch, computed } from 'vue'
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)


const props = defineProps({
    flash: Object,
    users: Object,
    total_users: Number,
    total_assigned: Number
})

const image = ref('https://ui-avatars.com/api/?background=f3e8ff&color=7e22ce&bold=true&name=')
const isOpen = ref(false)
const closeModal = () => isOpen.value = false
const openModal = () => isOpen.value = true

const state = computed(() => props.flash.success)
const unassigned = computed(() => props.total_users - props.total_assigned)

watch(state, (state, prevState) => {
    if (state !== null) {
        createToast(props.flash.success, { type: 'success', showIcon: true })
    }
})
</script>
