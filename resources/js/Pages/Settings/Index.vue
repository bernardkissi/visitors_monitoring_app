<template>
    <div>
        <Navbar />
        <div class="container mx-auto max-w-5xl mt-12">
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form @submit.prevent="submit">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <fieldset>
                                <legend class="text-xl font-medium text-gray-900">System Settings</legend>
                                <div class="mt-4 space-y-4">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="comments" v-model="form.automate_welcome_message" type="checkbox"
                                                value="1"
                                                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="comments" class="font-medium text-gray-700">Automate Welcome
                                                Message</label>
                                            <span v-if="form.errors" class="text-xs text-red-500">{{
                                                    form.errors.automate_welcome_message
                                            }}</span>
                                            <p class="text-gray-500">Send new visitors messages after they are first
                                                saved.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="candidates" v-model="form.msg_assignees" type="checkbox"
                                                value="1"
                                                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="candidates" class="font-medium text-gray-700">Assignees</label>
                                            <span v-if="form.errors" class="text-xs text-red-500">{{
                                                    form.errors.msg_assignees
                                            }}</span>
                                            <p class="text-gray-500">Send SMS to assignees when they are assigned to
                                                visitors.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="offers" v-model="form.automate_reports" type="checkbox" value="1"
                                                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="offers" class="font-medium text-gray-700">Generate
                                                reports</label>
                                            <span v-if="form.errors" class="text-xs text-red-500">{{
                                                    form.errors.automate_reports
                                            }}</span>
                                            <p class="text-gray-500 mb-3">Automatically generate reports at the end of
                                                the
                                                month
                                            </p>
                                            <label v-if="form.automate_reports !== false" for="offers"
                                                class="font-medium text-gray-700">Admin
                                                Email</label>
                                            <input v-if="form.automate_reports !== false" type="text"
                                                v-model="form.admin_email" id="first-name" autocomplete="given-name"
                                                placeholder="Please Enter Admin email" class=" p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block
                                                w-full shadow-sm sm:text-sm border border-gray-300 rounded-md">
                                            <span v-if="form.errors" class="text-xs text-red-500">{{
                                                    form.errors.admin_email
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit"
                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span v-if="form.processing">Submitting...</span>
                                <span v-else>Save Setting</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import Navbar from '@/Components/Navbar.vue'
import { useForm } from '@inertiajs/inertia-vue3'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const props = defineProps({
    flash: Object,
    setting: {
        type: Object,
        default: {},
        required: true
    }
})

let form = useForm({
    automate_welcome_message: props.setting.automate_welcome_message,
    msg_assignees: props.setting.msg_assignees,
    automate_reports: props.setting.automate_reports,
    admin_email: props.setting.admin_email,
})

const submit = () => {
    form.put('/settings/update', {
        preserveScroll: true,
        onSuccess: () => {
            form.clearErrors()
            if (props.flash.success !== null) {
                createToast(props.flash.success, { type: 'success', showIcon: true })
            }
        },
        onError: (errors) => {
            if (errors !== null) {
                createToast('Form has errors', { type: 'danger', showIcon: true })
            }
        }
    });
}

</script>
