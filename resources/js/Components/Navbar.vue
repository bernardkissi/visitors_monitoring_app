<template>
    <header class="flex flex-col bg-purple-900 w-full">
        <nav class="container mx-auto max-w-5xl py-3">
            <div class="flex items-centter justify-between">
                <div class=" flex items-center space-x-1">
                    <img src="/images/gracefields.png" alt="logo" class="w-24">
                    <!-- <span class="text-sm text-white font-medium leading-4">v1.0</span> -->
                </div>

                <div class="flex items-center gap-4 text-white font-medium">
                    <Link :href="route('login')" class="hover:text-blue-600 cursor-pointer px-3 py-1 rounded">Developer
                    </Link>
                    <Link href="#"
                        class="text-sm bg-black opacity-50 p-1 rounded-md hover:text-purple-800 cursor-pointer">
                    Active Year: {{ $page.props.year }}
                    </Link>
                    <Dropdown />
                </div>
            </div>
        </nav>
        <div class="flex text-gray-600 items-center bg-white shadow-lg border-t border-gray-100 ">
            <div class="container mx-auto max-w-5xl">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-5">

                        <div class="flex items-center cursor-pointer py-3 transform transition duration-300"
                            :class="{ 'text-purple-600': $page.url === '/dashboard' }">
                            <svg class="h-5 w-5 mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <Link :href="route('dashboard')" class="text-gray-500 hover:text-gray-400"
                                :class="{ 'text-purple-600 font-bold': $page.url === '/dashboard' }">Dashboard</Link>
                        </div>
                        <div class="flex items-center cursor-pointer py-3"
                            :class="{ ' text-purple-600': $page.url === '/users' }">
                            <svg class="w-5 h-5 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                            <Link :href="route('users')" class="text-gray-500"
                                :class="{ 'text-purple-600 font-bold': $page.url === '/users' }">Users</Link>
                        </div>

                        <div class="flex items-center cursor-pointer py-3"
                            :class="{ 'text-purple-600': $page.url === '/visitors' }">
                            <svg class="h-5 w-5 mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <Link :href="route('visitors')" class="text-gray-500 hover:text-gray-400"
                                :class="{ 'text-purple-600 font-bold': $page.url === '/visitors' }">Vistors</Link>
                        </div>

                        <div class="flex items-center cursor-pointer py-3"
                            :class="{ 'text-purple-600': $page.url === '/logs' }">
                            <svg class="h-5 w-5 mr-2 stroke-current" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                            </svg>
                            <Link :href="route('logs')" class="text-gray-500 hover:text-gray-400"
                                :class="{ 'text-purple-600 font-bold': $page.url === '/logs' }">Logs</Link>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center cursor-pointer py-3"
                            :class="{ ' text-purple-500': $page.url === '/settings' }">
                            <svg class="h-5 w-5 mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <Link :href="route('settings')" class="text-gray-500 hover:text-gray-400"
                                :class="{ 'text-purple-600 font-bold': $page.url === '/settings' }">Settings</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import Dropdown from '@/Components/Dropdown.vue'
import { computed, watch } from 'vue'
const props = defineProps({
    auth: {
        type: Object,
        default: null
    },
    year: String
})

const currentYear = computed(() => props.year)

// watch(currentYear, (newyear, prevyear) => {
//     if (newyear !== prevyear) {
//         Inertia.get('/dashboard', { year: newyear }, { replace: true })
//     }
// })
</script>
