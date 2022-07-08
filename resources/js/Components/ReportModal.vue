<template>
    <TransitionRoot appear :show="open" as="template">
        <Dialog as="div" @close="emits('closeModal', false)" class="fixed inset-0 z-10 overflow-y-auto">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <DialogOverlay class="fixed inset-0" />
                    </TransitionChild>

                    <span class="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>

                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <div
                            class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <DialogTitle as="h3" class="text-2xl font-medium leading-6 text-gray-900">
                                Generate Reports
                            </DialogTitle>
                            <DialogDescription class="text-sm mb-3 text-gray-500">
                                Select month and year to generate report
                            </DialogDescription>
                            <form @submit.prevent="submit">
                                <div class="flex flex-col mt-2 p-2">
                                    <div class="mb-4">
                                        <label class="text-gray-600 font-semibold text-sm">Month</label>
                                        <select name="action_type" v-model="form.month"
                                            class="w-full mt-3 px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                            >
                                            <option value="" selected>Select Month</option>
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">November</option>
                                        </select>
                                        <span v-if="form.errors.month" class="text-xs text-red-500">{{ form.errors.month
                                        }}</span>
                                    </div>
                                    <div class="mb-4">
                                        <label class="text-gray-600 font-semibold text-sm">Year</label>
                                        <select name="action_type" v-model="form.year"
                                            class="w-full mt-3 px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                            >
                                            <option value="" selected>Select Year</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>
                                            <option value="2031">2031</option>
                                            <option value="2032">2032</option>
                                        </select>
                                        <span v-if="form.errors.year" class="text-xs text-red-500">{{ form.errors.year
                                        }}</span>
                                    </div>
                                </div>

                                <div class="flex items-start space-x-3 p-3">
                                    <button type="submit"
                                        class="inline-flex justify-center uppercase font-bold px-4 py-3 text-sm text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-offset-1 focus-visible:ring-blue-500">
                                        <span v-if="form.processing">Generating...</span>
                                        <span v-else>Generate Report</span>
                                    </button>
                                    <button type="button"
                                        class="inline-flex justify-center uppercase font-bold px-6 py-3 text-sm text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        @click="emits('closeModal', false)">
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogDescription,
    DialogTitle,
} from '@headlessui/vue'
import { useForm } from '@inertiajs/inertia-vue3';

const emits = defineEmits(["closeModal", "closeSubmit"])
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: 'false'
    }
})
const open = computed(() => props.isOpen)

let form = useForm({
    month: '',
    year: '',
})

const submit = () => {
    form.get('/reports/generate', {
        preserveScroll: true,
        onSuccess: () => {
            form.clearErrors()
            form.reset()
            emits('closeSubmit', false)
        },
        onError: (errors) => {
            if (errors !== null) {
                createToast('Form has errors', { type: 'danger', showIcon: true })
            }
        }
    });

}
</script>
