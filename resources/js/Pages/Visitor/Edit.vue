<template>
    <main>
        <Navbar />
        <div class="container mx-auto max-w-5xl mb-12">
            <div class="mt-8">
                <Link :href="route('visitors')" as="button" type="button"
                    class="flex items-center space-x-2 hover:text-gray-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span>Back</span>
                </Link>
            </div>
            <div class="flex items-center justify-start -mt-2">
                <div>
                    <h1 class="text-2xl mt-8 font-medium">{{ visitor.fullname }}</h1>
                    <p class="text-gray-400">Visitor recorded information</p>
                </div>
                <!-- <button type="submit" form="visitor"
                    class="hover:bg-purple-100 hover:text-purple-700 bg-purple-600 text-white shadow-md font-bold py-3 px-5 text-sm mt-6 inline-flex items-center group rounded-md">
                    <hollow-dots-spinner v-if="form.processing" :animation-duration="1000" :dot-size="15" :dots-num="5"
                        color="#ffff" />
                    <span class="text-sm" v-else>CREATE VISITOR</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button> -->
            </div>
            <form @submit.prevent="submit" id="visitor">
                <div class="flex space-x-12 mt-6">

                    <div class="flex flex-col bg-white rounded-lg w-1/4 h-[123px]">
                        <div @click="type = !type"
                            :class="[
                            !type ? 'bg-purple-50 border-l-4 border-purple-600 text-purple-600' : '', 'flex flex-col p-3  cursor-pointer hover:bg-gray-50']">
                            <span class="font-medium text-sm">Personal/Church Information</span>
                            <span class="text-xs text-gray-500">Visitors personal information</span>
                        </div>
                        <div @click="type = !type"
                            :class="[
                            type ? 'bg-purple-50 border-l-4 border-purple-600 text-purple-600' : '', 'flex flex-col p-3  cursor-pointer hover:bg-gray-50']">
                            <span class="font-semibold text-sm">Assigned Member </span>
                            <span class="text-xs text-gray-500">Assigned member to visitor</span>
                        </div>
                    </div>
                    <div class="w-3/4">
                        <Transition>
                            <div v-show="!type" class="flex flex-col bg-white shadow rounded-lg mb-6 mt-2">
                                <div class="flex flex-col p-6 border-b">
                                    <h3 class="text-xl text-gray-700 font-semibold">Personal Information</h3>
                                    <span class="text-sm text-gray-500">Add recipients to receive your invitation</span>

                                    <div class="mt-4 flex items-center justify-between space-x-3">
                                        <div class="flex flex-grow flex-col">
                                            <input type="text" name="fullname" placeholder="Enter Fullname"
                                                v-model="form.fullname" disabled
                                                class="px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                            <span class="text-xs text-red-500">{{ errors.fullname }}</span>
                                        </div>
                                        <div class="flex flex-grow flex-col">
                                            <input type="text" name="phone" placeholder="Enter Phone number"
                                                v-model="form.phone" disabled
                                                class="w-full px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                            <span class="text-xs text-red-500">{{ errors.phone }}</span>
                                        </div>
                                    </div>
                                    <div class="mt-4 flex items-center justify-between space-x-3">
                                        <div class="flex flex-grow flex-col">
                                            <input type="text" name="address" placeholder="Enter Residential Address"
                                                v-model="form.address" disabled
                                                class="px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                            <span class="text-xs text-red-500">{{ errors.address }}</span>
                                        </div>
                                        <div class="flex flex-grow flex-col">
                                            <input type="text" name="occupation" placeholder="Enter Current Occupation"
                                                v-model="form.occupation" disabled
                                                class="w-full px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                            <span class="text-xs text-red-500">{{ errors.occupation }}</span>
                                        </div>
                                    </div>
                                    <div class="mt-4 flex items-center justify-between space-x-3">
                                        <div class="flex flex-grow flex-col">
                                            <input type="text" name="email" placeholder="Enter Email Address"
                                                v-model="form.email" disabled
                                                class="w-2/4 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                            <span class="text-xs text-red-500">{{ errors.email }}</span>
                                        </div>

                                    </div>
                                    <h3 class="text-gray-400 mt-5">Select Age Range</h3>
                                    <span class="text-xs text-red-500">{{ errors.age_range }}</span>
                                    <div class="mt-3 flex items-center justify-between space-x-3">
                                        <div class="flex items-center">
                                            <label>Below 20 years</label>
                                            <input class="ml-3 p-3" v-model="form.age_range" type="checkbox"
                                                name="age-range" value="Below 20 years" disabled>
                                        </div>
                                        <div class="flex items-center">
                                            <label>21-34 years</label>
                                            <input class="ml-3 p-3" v-model="form.age_range" type="checkbox"
                                                name="age-range" value="21-34 years" disabled>
                                        </div>
                                        <div class="flex items-center">
                                            <label>35-44 years</label>
                                            <input class="ml-3 p-3" v-model="form.age_range" type="checkbox"
                                                name="age-range" value="35-44 years" disabled>
                                        </div>
                                        <div class="flex items-center">
                                            <label>Above 45 years</label>
                                            <input class="ml-3 p-3" v-model="form.age_range" type="checkbox"
                                                name="age-range" value="Above 45 years" disabled>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Transition>
                        <Transition>
                            <div v-show="!type" class="flex flex-col bg-white shadow rounded-lg mb-6">
                                <div class="flex flex-col p-6 border-b">
                                    <h3 class="text-xl text-gray-700 font-semibold">Church Information</h3>
                                    <span class="text-sm text-gray-500">Church related information</span>

                                    <h3 class="text-gray-400 mt-5">Service Attendance</h3>
                                    <span class="text-xs text-red-500">{{ errors.service_attendance }}</span>
                                    <div class="mt-3 flex flex-col">
                                        <div class="flex items-center space-x-3">
                                            <div class="flex items-center">
                                                <label>Sunday Service</label>
                                                <input class="ml-3 p-2" type="checkbox"
                                                    v-model="form.service_attendance" name="service_attendance"
                                                    value="Sunday Service" disabled>
                                            </div>
                                            <div class="flex items-center">
                                                <label>Other, Please Specify</label>
                                                <input class="ml-3 p-2" v-model="form.service_attendance"
                                                    type="checkbox" name="service_attendance" value="others" disabled>
                                            </div>
                                        </div>
                                        <div v-if="service_detail" class="mt-3">
                                            <input type="text" placeholder="Please enter details"
                                                v-model="form.service_attendance_detail"
                                                class="w-full px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400"
                                                disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col p-6 border-b">
                                    <h3 class="text-gray-400 mt-2">How did you get here?</h3>
                                    <span class="text-xs text-red-500">{{ errors.get_here_option }}</span>
                                    <div class="mt-3 flex flex-col">
                                        <div class="flex items-center space-x-3">
                                            <div class="flex items-center">
                                                <label>Radio</label>
                                                <input class="ml-3 p-3" v-model="form.get_here_option" type="checkbox"
                                                    name="get_here_option" value="Radio" disabled>
                                            </div>
                                            <div class="flex items-center">
                                                <label>Church Handbill/Social Media</label>
                                                <input class="ml-3 p-3" v-model="form.get_here_option" type="checkbox"
                                                    name="get_here_option" value="Church Handbill/Social Media"
                                                    disabled>
                                            </div>
                                            <div class="flex items-center">
                                                <label>Was invited by, specify</label>
                                                <input class="ml-3 p-3" v-model="form.get_here_option" type="checkbox"
                                                    name="get_here_option" value="Invited" disabled>
                                            </div>
                                        </div>
                                        <div v-if="here_detail" class="mt-3">
                                            <input type="text" placeholder="Please enter member name"
                                                v-model="form.get_here_detail" disabled
                                                class="w-full px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col p-6 border-b">
                                    <h3 class="text-gray-400 mt-2">Wants to be a member?</h3>
                                    <span class="text-xs text-red-500">{{ errors.membership }}</span>
                                    <div class="mt-3 flex flex-col">
                                        <div class="flex items-center space-x-3">
                                            <div class="flex items-center">
                                                <label>Yes</label>
                                                <input class="ml-3 p-3" v-model="form.membership" type="checkbox"
                                                    name="membership" value="yes" disabled>
                                            </div>
                                            <div class="flex items-center">
                                                <label>No</label>
                                                <input class="ml-3 p-3" v-model="form.membership" type="checkbox"
                                                    name="membership" value="no" disabled>
                                            </div>
                                            <div class="flex items-center">
                                                <label>Not decided</label>
                                                <input class="ml-3 p-3" v-model="form.membership" type="checkbox"
                                                    name="membership" value="not decided" disabled>
                                            </div>
                                        </div>
                                        <div v-if="member" class="mt-3">
                                            <input type="text" placeholder="Please provide details"
                                                v-model="form.membership_detail"
                                                class="w-full px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400"
                                                disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col p-6">
                                    <h3 class="text-gray-400 mt-2">I desire help/information in </h3>
                                    <span class="text-xs text-red-500">{{ errors.help_information }}</span>
                                    <div class="mt-3 flex flex-col">
                                        <div class="flex items-center space-x-3">
                                            <div class="flex items-center">
                                                <label>Becoming born again</label>
                                                <input class="ml-3 p-3" v-model="form.help_information" type="checkbox"
                                                    name="help_information" value="Becoming born again" disabled>
                                            </div>
                                            <div class="flex items-center">
                                                <label>Joining a bible study</label>
                                                <input class="ml-3 p-3" v-model="form.help_information" type="checkbox"
                                                    name="help_information" value="Joining a bible study" disabled>
                                            </div>
                                            <div class="flex items-center">
                                                <label>Any others, please specify</label>
                                                <input class="ml-3 p-3" v-model="form.help_information" type="checkbox"
                                                    name="help_information" value="others" disabled>
                                            </div>
                                        </div>
                                        <div v-if="help" class="mt-3">
                                            <input type="text" placeholder="Please provide details"
                                                v-model="form.help_information_detail"
                                                class="w-full px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400"
                                                disabled>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                        <Transition>
                            <div v-show="type" class="flex flex-col bg-white shadow rounded-lg">
                                <div class="flex flex-col p-6">

                                    <h3 class="text-gray-500 mt-4">Assigned Member</h3>
                                    <p class="font-bold mt-2">{{ props.visitor.user.name }}</p>
                                    <!-- <select v-model="form.user_id" name="user_id"
                                        class="mt-3 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                        <option value="" selected>{{ props.visitor.user.name }}</option>
                                    </select> -->
                                    <span class="text-xs text-red-500">{{ errors.user_id }}</span>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue'
import Select from '@/components/Select.vue'
import { useForm } from '@inertiajs/inertia-vue3';
import { HollowDotsSpinner } from 'epic-spinners'
import { computed, ref, watch } from 'vue'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const props = defineProps({
    visitor: Object,
    errors: Object,
})

const type = ref(false);

let form = useForm({
    fullname: props.visitor.fullname,
    email: props.visitor.email,
    phone: props.visitor.phone,
    address: props.visitor.address,
    occupation: props.visitor.occupation,
    age_range: [props.visitor.age_range],
    service_attendance: [props.visitor.service_attendance],
    service_attendance_detail: props.visitor.service_attendance_detail,
    get_here_option: [props.visitor.get_here_option],
    get_here_detail: props.visitor.get_here_detail,
    membership: [props.visitor.membership],
    membership_detail: props.visitor.membership_detail,
    help_information: [props.visitor.help_information],
    help_information_detail: props.visitor.help_information_detail,
    user_id: props.visitor.user.name,

})


const state = computed(() => props.errors)
const service_detail = computed(() => form.service_attendance.includes('others') ? true : false)
const here_detail = computed(() => form.get_here_option.includes('Invited') ? true : false)
const help = computed(() => form.help_information.includes('others') ? true : false)
const member = computed(() => form.membership.includes('not decided') ? true : false)

watch(state, (state, prevState) => {
    if (state !== null) {
        createToast('The form has errors', { type: 'danger', showIcon: true })
    }
})

const submit = () => {
    form.post('/visitor/store', {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    });
}

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
