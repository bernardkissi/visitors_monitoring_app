<template>
    <main>
        <!-- <Navbar /> -->
        <div class="container mx-auto max-w-5xl">
            <div class="flex items-center justify-between mt-5">
                <div class="flex items-center space-x-3">
                    <img class="h-8 w-8 rounded-full mt-8"
                        src="https://ui-avatars.com/api/?background=random&name=Bernard Owiredu" alt="" />
                    <h1 class="text-2xl mt-10 font-medium">Ashong Lawerence</h1>
                </div>
                <Link :href="route('visitors')"
                    class="bg-blue-500 text-white font-bold py-3 px-5 text-sm mt-6 inline-flex items-center group rounded-md">
                UPDATE VISITOR
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                </Link>
            </div>

            <div class="flex space-x-12 mt-6">
                <div class="flex flex-col bg-white rounded-lg w-1/4 h-[123px]">
                    <div class="flex flex-col p-3 bg-blue-50 border-l-2 border-blue-600 cursor-pointer">
                        <span class="text-gray-700 font-medium text-sm">Personal/Church Information</span>
                        <span class="text-xs text-gray-500">Visitors personal information</span>
                    </div>
                    <div class="flex flex-col p-3 cursor-pointer">
                        <span class="text-gray-700 font-semibold text-sm">Assign Member (optional) </span>
                        <span class="text-xs text-gray-500">Assign a member to a visitor</span>
                    </div>
                </div>
                <div class="w-3/4">
                    <div class="flex flex-col bg-white shadow rounded-lg mb-6 mt-2">
                        <div class="flex flex-col p-6 border-b">
                            <h3 class="text-xl text-gray-700 font-semibold">Personal Information</h3>
                            <span class="text-sm text-gray-500">Add recipients to receive your invitation</span>

                            <div class="mt-4 flex items-center justify-between space-x-3">
                                <input type="text" name="memberId" placeholder="Enter Fullname" value="Bernard Kissi"
                                    class="w-2/4 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">

                                <input type="text" name="memberId" placeholder="Enter Phone number" value="233245067089"
                                    class="w-2/4 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                            </div>
                            <div class="mt-4 flex items-center justify-between space-x-3">
                                <input type="text" name="memberId" placeholder="Enter Residential Address"
                                    value="Slabsyr 19 Berlin"
                                    class="w-2/4 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">

                                <input type="text" name="memberId" placeholder="Enter Current Occupation"
                                    value="Software Engineer"
                                    class="w-2/4 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                            </div>
                            <div class="mt-4 flex items-center justify-between space-x-3">
                                <input type="text" name="memberId" placeholder="Enter Email Address"
                                    value="Bernardkissi18@gmail.com"
                                    class="w-2/4 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">

                                <input type="text" name="memberId" placeholder="Phone number" value="Some information"
                                    class="w-2/4 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                            </div>
                            <h3 class="text-gray-400 mt-5">Select Age Range</h3>
                            <div class="mt-3 flex items-center justify-between space-x-3">
                                <div class="flex items-center">
                                    <label>Below 20 years</label>
                                    <input class="ml-3 p-3" type="checkbox">
                                </div>
                                <div class="flex items-center">
                                    <label>Below 21-34 years</label>
                                    <input class="ml-3 p-3" type="checkbox" checked>
                                </div>
                                <div class="flex items-center">
                                    <label>Below 35-44 years</label>
                                    <input class="ml-3 p-3" type="checkbox">
                                </div>
                                <div class="flex items-center">
                                    <label>Above 45 years</label>
                                    <input class="ml-3 p-3" type="checkbox">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col bg-white shadow rounded-lg mb-6">
                        <div class="flex flex-col p-6 border-b">
                            <h3 class="text-xl text-gray-700 font-semibold">Church Information</h3>
                            <span class="text-sm text-gray-500">Church related information</span>

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
                        <div class="flex flex-col p-6 border-b">
                            <h3 class="text-gray-400 mt-2">How did you get here?</h3>
                            <div class="mt-3 flex items-center space-x-3">
                                <div class="flex items-center">
                                    <label>Radio</label>
                                    <input class="ml-3 p-3" type="checkbox">
                                </div>
                                <div class="flex items-center">
                                    <label>Church Handbill/Social Media</label>
                                    <input class="ml-3 p-3" type="checkbox" checked>
                                </div>
                                <div class="flex items-center">
                                    <label>Was invited by, specify</label>
                                    <input class="ml-3 p-3" type="checkbox">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col p-6 border-b">
                            <h3 class="text-gray-400 mt-2">Wants to be a member?</h3>
                            <div class="mt-3 flex items-center space-x-3">
                                <div class="flex items-center">
                                    <label>Yes</label>
                                    <input class="ml-3 p-3" type="checkbox" checked>
                                </div>
                                <div class="flex items-center">
                                    <label>No</label>
                                    <input class="ml-3 p-3" type="checkbox">
                                </div>
                                <div class="flex items-center">
                                    <label>Not decided</label>
                                    <input class="ml-3 p-3" type="checkbox">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col p-6">
                            <h3 class="text-gray-400 mt-2">I desire help/information in </h3>
                            <div class="mt-3 flex items-center space-x-3">
                                <div class="flex items-center">
                                    <label>Becoming born again</label>
                                    <input class="ml-3 p-3" type="checkbox">
                                </div>
                                <div class="flex items-center">
                                    <label>Joining a bible study</label>
                                    <input class="ml-3 p-3" type="checkbox" checked>
                                </div>
                                <div class="flex items-center">
                                    <label>Any others, please specify</label>
                                    <input class="ml-3 p-3" type="checkbox">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col bg-white shadow rounded-lg">
                        <div class="flex flex-col p-6">
                            <h3 class="text-xl text-gray-700 font-semibold">Assign Member <span
                                    class="text-gray-400 text-sm">(optional)</span></h3>
                            <span class="text-sm text-gray-500">Assigned member to this visitor</span>

                            <h3 class="text-gray-500 mt-4">Assigned To</h3>
                            <select name="member"
                                class="mt-3 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                <option>Derrick Kissi</option>
                                <option>Derrick Kissi</option>
                                <option>Bernard Kissi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue'
</script>

<style>
</style>
