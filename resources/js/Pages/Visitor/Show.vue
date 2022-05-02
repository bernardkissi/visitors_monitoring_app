<template>
    <div>
        <Navbar />
        <div class="container mx-auto max-w-5xl">
            <div class="flex items-center justify-end mt-8 space-x-3 text-md">
                <a class="text-gray-500">Dashboard</a>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7">
                    </path>
                </svg>
                <a class="text-gray-500">Visitors</a>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7">
                    </path>
                </svg>
                <a class="text-gray-900 font-semibold">Desmond Kissi</a>
            </div>

            <div class="flex space-x-12 mt-6">
                <div class="flex flex-col w-1/4 h-[123px]">
                    <div class="flex flex-col">
                        <img class="hidden mr-1 md:mr-2 md:inline-block h-32 w-32 rounded-full object-cover"
                            src="https://ui-avatars.com/api/?background=random&name=Desmond Kissi" alt="" />
                    </div>

                </div>
                <div class="w-3/4">
                    <div class="flex flex-col bg-white shadow rounded-lg mb-6 mt-2">
                        <div class="flex flex-col p-6 border-b">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h3 class="text-xl text-gray-700 font-semibold">Personal Information</h3>
                                    <span class="text-sm text-gray-500">Add recipients to receive your invitation</span>
                                </div>
                                <Link :href="route('visitor.edit')"
                                    class="bg-blue-500 text-white font-bold py-3 px-5 text-sm inline-flex items-center group rounded-md">
                                EDIT VISITOR
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                                </Link>
                            </div>
                            <div class="mt-4">
                                <div class="flex flex-col space-y-4">
                                    <div class="flex flex-col border-b border-gray-100 py-2">
                                        <span class="text-sm text-gray-500">First Name</span>
                                        <span class="text-base font-semibold text-gray-700">Desmond</span>
                                    </div>
                                    <div class="flex flex-col border-b border-gray-100 py-2">
                                        <span class="text-sm text-gray-500">Last Name</span>
                                        <span class="text-base font-semibold text-gray-700">Kissi</span>
                                    </div>
                                    <div class="flex flex-col border-b border-gray-100 py-2">
                                        <span class="text-sm text-gray-500">Email</span>
                                        <span
                                            class="text-base font-semibold text-gray-700">BernardKissi18@gmail.com</span>
                                    </div>
                                    <div class="flex flex-col border-b border-gray-100 py-2">
                                        <span class="text-sm text-gray-500">Occupation</span>
                                        <span class="text-base font-semibold text-gray-700">Software Engineer</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-sm text-gray-500">Address</span>
                                        <span class="text-base font-semibold text-gray-700">Santasi-Newsite,
                                            Kumasi</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="flex flex-col bg-white shadow rounded-lg mb-6">
                        <div class="flex flex-col p-6 border-b">
                            <h3 class="text-xl text-gray-700 font-semibold">Activity logs</h3>
                            <span class="text-sm text-gray-500">Recent actions taken for visitor</span>

                            <h3 class="text-gray-400 mt-5">Service Attendance</h3>
                            <div class="mt-3 flex items-center space-x-3">
                                <div class="flex items-center">
                                    <label>Sunday Service</label>
                                    <input class="ml-3 p-2" type="checkbox" checked>
                                </div>
                                <div class="flex items-center">
                                    <label>Other, Please Specify</label>
                                    <input class="ml-3 p-2" type="checkbox">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue'
</script>

<style>
</style>
