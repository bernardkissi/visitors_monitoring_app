<template>
    <div class="h-screen">
        <Navbar />
        <div class="container mx-auto max-w-5xl mt-12">
            <div class="flex items-center justify-between mb-4">
                <span class="font-medium text-base"></span>
                <div class="hidden md:flex items-center space-x-0">

                    <span class="flex px-3 py-2 rounded-l bg-purple-100 border-r border-gray-200 text-sm">
                        <svg class="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                            </path>
                        </svg>
                        <span class="text-gray-900">{{ current_month_name }}</span>
                    </span>
                    <div class="date-wrapper">
                        <select v-model="year"
                        class="outline-none focus:outline-none pl-[32px] w-32 block text-gray-600 hover:text-gray-800 bg-white px-3 py-2 rounded-r border-0 border-gray-700 text-sm">
                            <option value="2022" selected>2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-3 w-full p-3 lg:p-0 lg:flex-row">
                <div class="relative block w-full shadow-lg h-32 mb-3 bg-white mr-8 rounded-lg">
                    <div class="p-5">
                        <div class="flex flex-wrap justify-between">
                            <span class="text-gray-700 font-semibold text-sm">
                                TOTAL VISITORS<br>
                                <span class="text-3xl font-semibold text-gray-700"> {{ analytics.visitors_count }}
                                </span><br>
                                <span class="text-sm font-normal text-gray-500">Overall Visitors</span>
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
                                TOTAL USER ASSIGNED<br>
                                <span class="text-3xl font-semibold text-gray-700">{{ analytics.total_assigned_users
                                }}</span><br>
                                <span class="text-sm font-normal text-gray-500">Overall users assigned</span>
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
                                TOTAL FOLLOW UP ACTIVITES <br>
                                <span class="text-3xl font-semibold text-gray-700">{{ analytics.total_follow_up_actions
                                }}
                                </span><br>
                                <span class="text-sm font-normal text-gray-500">System wide</span>
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
                    <div class="hidden md:flex items-center space-x-0">

                        <div class="flex bg-purple-100 py-3 rounded-l px-3 text-sm border-r border-gray-200 text-gray-900 space-x-2">
                            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                            <span>Filter by: </span>
                        </div>
                        <div class="filter-wrapper">
                            <select v-model="active"
                                class="outline-none focus:outline-none w-48 block text-gray-900 hover:text-gray-800 bg-white px-3 py-3 rounded-r border-0 border-gray-700 text-sm">
                                <option value="membership">Membership Analytics</option>
                                <option value="visitors">Visitors Analytics</option>
                                <option value="age">Age Analytics</option>
                                <option value="visited">Channel Analytics</option>
                                <option value="help">Assitance Analytics</option>
                                <option value="service">Service Analytics</option>
                            </select>
                        </div>
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
                        <BarChart v-if="active === 'visitors'" :series="analytics.total_visitors" />
                        <AnalyticsChart v-if="active === 'age'" :series="analytics.age" title="Age Range of Visitors" />
                        <AnalyticsChart v-if="active === 'service'" :series="analytics.service"
                            title="Service Attendance of Visitors" />
                        <AnalyticsChart v-if="active === 'visited'" :series="analytics.visited"
                            title="Visitation Medium of Visitors" />
                        <AnalyticsChart v-if="active === 'help'" :series="analytics.help"
                            title="Assistance need by Visitors" />
                        <AnalyticsChart v-if="active === 'membership'" :series="analytics.membership"
                            title="Membership State of Visitors" />
                    </div>
                    <div class="lg:w-1/4 flex flex-row lg:flex-col ">
                        <button class="flex bg-gray-50 p-2 border-r lg:border-b hover:bg-gray-100">
                            <div class="m-3">
                                <div class="flex flex-col items-start">
                                    <h4
                                        class="hidden lg:inline-flex text-xs uppercase text-gray-400 font-semibold text-left">
                                        Total Visitors this Month
                                    </h4>
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                            </path>
                                        </svg>
                                        <h1 class="flex items-center justify-between">
                                            <span class="mr-2 text-2xl lg:text-2xl font-medium text-gray-700">
                                                {{ this_month[0] ? this_month[0].total : 0 }}</span>
                                        </h1>
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
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                            </path>
                                        </svg>
                                        <h1 class="flex">
                                            <span class="mr-2 text-2xl lg:text-2xl font-medium text-gray-700">
                                                {{ last_month[0] ? last_month[0].total : 0 }}
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button class="flex p-2 border-r lg:border-b hover:bg-gray-100">
                            <div class="m-3">
                                <div class="flex flex-col items-start">
                                    <h4
                                        class="hidden lg:inline-flex text-xs uppercase text-gray-400 font-semibold text-left">
                                        Total Visitors Last Week
                                    </h4>
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                            </path>
                                        </svg>
                                        <h1 class="flex items-center justify-between">
                                            <span class="mr-2 text-2xl lg:text-2xl font-medium text-gray-700">
                                                {{ last_week[0] ? last_week[0].total : 0 }}
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button class="flex p-2 border-r lg:border-b hover:bg-gray-100">
                            <div class="m-3">
                                <div class="flex flex-col items-start">
                                    <h4
                                        class="hidden lg:inline-flex text-xs uppercase text-gray-400 font-semibold text-left">
                                        Total Visitors this year
                                    </h4>
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                            </path>
                                        </svg>
                                        <h1 class="flex items-center justify-between">
                                            <span class="mr-2 text-2xl lg:text-2xl font-medium text-gray-700">{{
                                                    analytics.total_visitors_for_the_year
                                            }}</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <div class="mt-12" style="overflow-x:auto;">
                <div class="flex items-center justify-end">
                    <div class="select-wrapper">
                        <select v-model="filters.form.status" class="block mr-5 py-3 text-gray-900 px-4 w-full rounded-l-lg border-r border-gray-200 text-sm focus:outline-none">
                            <option class="text-gray-900" value="" selected>Filter By</option>
                            <option value="pending">Pending</option>
                            <option value="called">Called</option>
                            <option value="visited">Visited</option>
                        </select>
                    </div>
                    <div class="hidden lg:block relative w-64">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg class="h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
                            </svg>
                        </span>
                        <input v-model="filters.form.search"
                            class="block pl-8 pr-4 py-3 w-full bg-white rounded-r-lg text-sm placeholder-gray-400 focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
                            placeholder="Search for visitors" />
                    </div>
                </div>
                <table class="w-full mt-2 rounded-lg shadow-md">
                    <thead class="rounded-t-lg">
                        <tr class="text-left rounded-t-lg bg-gray-50 border-b border-grey uppercase">
                            <th class="px-2 py-4">
                                <span
                                    class="bg-white border-2 ml-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-purple-500">
                                    <input type="checkbox" class="opacity-0 absolute">
                                    <svg class="fill-current hidden w-4 h-4 text-purple-500 pointer-events-none"
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
                    <tbody v-if="analytics.visitors.data !== null" class="bg-white">
                        <tr v-for="visitor in analytics.visitors.data" :key="visitor.id"
                            class="accordion border-b border-gray-100 hover:bg-gray-50">
                            <td class="px-3 py-5">
                                <span
                                    class="bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-purple-500">
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
                                        :src="image + visitor.fullname" alt="" />
                                </span>
                                <span class="py-3 w-40">
                                    <p class="text-gray-800 text-sm">{{ visitor.fullname }}</p>
                                    <p class="md:hidden text-xs text-gray-600 font-medium">{{ visitor.phone }}</p>
                                    <p class="hidden md:table-cell text-xs text-gray-400 font-medium">{{ visitor.address
                                    }}</p>
                                </span>
                            </td>
                            <td class="hidden md:table-cell">
                                <p class="text-sm text-gray-800 font-medium">{{ visitor.phone }}</p>
                                <p class="text-xs text-gray-400 font-medium">{{ dayjs(visitor.created_at).fromNow() }}
                                </p>
                            </td>
                            <td class="hidden lg:table-cell">
                                <p v-if="visitor.user" class="text-sm text-gray-400 font-medium">{{visitor.user.name}}</p>
                                <p v-else class="text-sm text-gray-400 font-medium">not assigned</p>
                            </td>
                            <td>
                                <span v-if="visitor.state === 'pending'"
                                    class="bg-rose-50 text-rose-600 text-xs font-bold rounded px-4 py-1">{{
                                            visitor.state
                                    }}
                                </span>
                                <span v-if="visitor.state === 'called'"
                                    class="bg-yellow-100 text-yellow-600 text-xs font-bold rounded px-4 py-1">{{
                                            visitor.state
                                    }}
                                </span>
                                <span v-if="visitor.state === 'visited'"
                                    class="bg-green-100 text-green-600 text-xs font-bold rounded px-4 py-1">{{
                                            visitor.state
                                    }}
                                </span>
                            </td>
                            <td class="flex space-x-3">
                                <Link :href="route('actions.visitor', visitor.id)" as="button" type="button"
                                    class="text-xs text-purple-600 py-1 px-3 bg-purple-50 rounded-md hover:bg-gray-100">
                                Follow up
                                </Link>
                                <Link :href="route('visitor.edit', visitor.id)" as="button" type="button"
                                    class="flex items-center space-x-2 text-xs text-purple-600 py-1 px-3 bg-purple-50 rounded-md hover:bg-gray-100">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                    </path>
                                </svg>
                                </Link>
                                <Link :href="route('visitor.delete', visitor.id)" method="delete" as="button" type="button" preserve-scroll
                                    class="flex items-center space-x-2 text-xs text-purple-600 py-1 px-3 bg-purple-50 rounded-md hover:bg-gray-100">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                    </path>
                                </svg>
                                <!-- <span><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></span> -->
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="analytics.visitors.data.length === 0"
                class="flex items-center justify-center bg-white h-32 rounded-b-lg p-3 space-x-3 ">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                    </path>
                </svg>
                <h3 class="text-xl font-semibold text-gray-400">No Visitors Recorded</h3>
            </div>
            <div v-else class="flex items-center justify-end bg-white rounded-b-lg p-3">
                <Pagination :links="analytics.visitors.links" />
            </div>
            <!-- end table -->
            <br><br>
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue'
import BarChart from '@/Components/BarChart.vue'
import AnalyticsChart from '@/Components/AnalyticsChart.vue'
import Pagination from '@/Components/Pagination.vue'
import { ref, reactive, watch, computed} from 'vue'
import { Inertia } from '@inertiajs/inertia'
import throttle from 'lodash/throttle'

const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
const weekOfYear = require('dayjs/plugin/weekOfYear')

dayjs.extend(relativeTime)
dayjs.extend(weekOfYear)

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const image = ref('https://ui-avatars.com/api/?background=f3e8ff&color=7e22ce&bold=true&name=')
const active = ref('visitors')
const filters =  reactive({form: {
    search: props.analytics.filters.search,
    status: props.analytics.filters.status ?? ''
}})

const props = defineProps({
    analytics: {
        type: Object,
        default: () => null,
    },
})
const year = ref(props.analytics.query ? props.analytics.query : '2022')

watch(filters, throttle(function(value) {
    Inertia.get('dashboard', {search: value.form.search, status: value.form.status},
    { preserveState: true, preserveScroll: true, replace: true }),
    {deep: true}
}, 600))

const current_month = new Date().getMonth() + 1;
const current_month_name = computed(() => month[current_month - 1]);
const this_month = computed(() => props.analytics.total_visitors.filter((visitor) => visitor.month === current_month))
const last_month = computed(() => props.analytics.total_visitors.filter((visitor) => visitor.month === current_month - 1))
const last_three_month = computed(() => props.analytics.total_visitors.filter((visitor) => visitor.month === current_month - 3))
const last_week = computed(() => props.analytics.total_visitors_last_week.filter((visitor) => visitor.week === dayjs().subtract(1, 'week').week() - 1))

watch(year, (newyear, prevyear) => {
    if (newyear !== prevyear) {
        Inertia.get('/dashboard', { year: newyear }, { replace: true })
    }
})

const percentage_difference = (a, b) => {
    value = 100 * Math.abs((a - b) / ((a + b) / 2));
    return value.toFixed(2);
}

</script>
