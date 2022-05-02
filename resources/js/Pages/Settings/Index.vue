<template>
    <div>
        <Navbar />
        <div class="container mx-auto max-w-6xl mt-12">
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <fieldset>
                                <legend class="text-base font-medium text-gray-900">By Email</legend>
                                <div class="mt-4 space-y-4">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="comments" name="comments" type="checkbox"
                                                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="comments" class="font-medium text-gray-700">Automate Welcome
                                                Message</label>
                                            <p class="text-gray-500">Send new visitors messages after they are first
                                                saved.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="candidates" name="candidates" type="checkbox"
                                                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="candidates" class="font-medium text-gray-700">Assignees</label>
                                            <p class="text-gray-500">Send SMS to assignees when they are assigned to
                                                visitors.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="offers" name="offers" type="checkbox"
                                                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="offers" class="font-medium text-gray-700">Generate
                                                reports</label>
                                            <p class="text-gray-500 mb-3">Automatically generate reports at the end of
                                                the
                                                month
                                            </p>
                                            <label for="offers" class="font-medium text-gray-700">Admin
                                                Email</label>
                                            <input type="text" name="first-name" id="first-name"
                                                autocomplete="given-name" placeholder="Please Enter Admin email" class=" p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block
                                                w-full shadow-sm sm:text-sm border border-gray-300 rounded-md">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div>
                                    <legend class="text-base font-medium text-gray-900">Push Notifications</legend>
                                    <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.
                                    </p>
                                </div>
                                <div class="mt-4 space-y-4">
                                    <div class="flex items-center">
                                        <input id="push-everything" name="push-notifications" type="radio"
                                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                        <label for="push-everything"
                                            class="ml-3 block text-sm font-medium text-gray-700">
                                            Everything </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="push-email" name="push-notifications" type="radio"
                                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                        <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">
                                            Same
                                            as
                                            email </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="push-nothing" name="push-notifications" type="radio"
                                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                        <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">
                                            No
                                            push
                                            notifications </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit"
                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import Navbar from '@/Components/Navbar.vue'

</script>
