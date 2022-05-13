<template>
    <div class="container mx-auto max-w-5xl">
        <img src="/images/gracefields.png" alt="logo" class="w-32 mx-auto mt-12 mb-6">
        <h1 class="text-3xl font-normal text-center mt-3">Welcome, {{ auth.user.fullname }}</h1>
        <p class="text-center text-gray-400 mt-2 text-lg">You can monitor, assign and create new vistors</p>
        <div class="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mt-12 lg:mt-20">
            <!-- Card -->
            <Link :href="route('dashboard')" class="bg-white p-8 w-[24rem] rounded-lg shadow-lg hover:shadow-blue-300">
                <!-- Header -->
                <header class="flex font-light text-sm">
                    <p>GRACEFIELDS</p>
                </header>
                <!-- Title -->
                <h2 class="font-bold text-3xl mt-2 mb-3">
                    Dashboard
                </h2>
                <!-- Description -->
                <p class="text-gray-500"> Monitor and Manage new visitors</p>
                <!-- Button -->
                <Link :href="route('dashboard')"
                    class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 px-5 text-sm mt-6 inline-flex items-center group rounded-md">
                    <p> GO TO DASHBOARD </p>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </Link>

            <Link :href="route('visitor.create')" class="bg-white p-8 w-[24rem] rounded-lg shadow-lg hover:shadow-blue-300">
                <!-- Header -->
                <header class="flex font-light text-sm">
                    <p>GRACEFIELDS</p>
                </header>
                <!-- Title -->
                <h2 class="font-bold text-3xl mt-2 mb-3">
                    Record New Visitors
                </h2>
                <!-- Description -->
                <p class="font-normal text-gray-500"> Create a record for new visitors </p>
                <!-- Button -->
                <Link :href="route('visitor.create')"
                    class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 px-5 text-sm mt-6 inline-flex items-center group rounded-md">
                <p> CREATE A VISITOR </p>
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                </Link>
            </Link>
        </div>


    </div>
</template>
<script setup>
const props = defineProps({
    auth: Object,
    permissions: Array
})
</script>
