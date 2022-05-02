<template>
    <TransitionRoot appear :show="open" as="template">
        <Dialog as="div" @close="emits('closeAction', false)" class="fixed inset-0 z-10 overflow-y-auto">
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
                            <DialogTitle as="h3" class="text-xl font-medium leading-6 text-gray-900">
                                Record Activity
                            </DialogTitle>
                            <DialogDescription class="text-sm mb-3 text-gray-500">
                                Record your activity with a visitor
                            </DialogDescription>
                            <form @submit.prevent="submit">
                                <div class="flex flex-col mt-2 py-2 px-1">
                                    <div class="mb-4">
                                        <label class="text-gray-600 font-semibold text-sm">Action Performed</label><br>
                                        <select name="action_type" v-model="form.action_performed"
                                            class="w-full mt-3 px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                            >
                                            <option value="" selected>Select action</option>
                                            <option value="called">Called Visitor</option>
                                            <option value="visited">Visited Visitor</option>
                                        </select>
                                        <span v-if="form.errors.action_performed" class="text-xs text-red-500">{{
                                                form.errors.action_performed
                                        }}</span>
                                    </div>
                                    <div class="mb-4">
                                        <label class="text-gray-600 font-semibold text-sm">Actions Details</label>
                                        <textarea v-model="form.action_performed_detail" name="action_detail" rows="6"
                                            cols="50" placeholder="Enter Action Details"
                                            class="w-full mt-2 px-2 py-3 rounded-md border border-gray-300 focus:outline-none  focus:ring focus:ring-gray-400">
                                    </textarea>
                                        <span v-if="form.errors.action_performed_detail" class="text-xs text-red-500">{{
                                                form.errors.action_performed_detail
                                        }}</span>
                                    </div>
                                </div>

                                <div class="flex items-start space-x-3 p-3">
                                    <button type="submit"
                                        class="inline-flex justify-center uppercase font-bold px-4 py-3 text-sm text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-offset-1 focus-visible:ring-blue-500">
                                        <span v-if="form.processing">Submitting...</span>
                                        <span v-else>Record an Action</span>
                                    </button>
                                    <button type="button"
                                        class="inline-flex justify-center uppercase font-bold px-4 py-3 text-sm text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-offset-1 focus-visible:ring-blue-500"
                                        @click="emits('closeAction', false)">
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



const isOpen = ref(false)
const emits = defineEmits(["closeAction", "CloseSubmit"])
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: 'false'
    },
    auth: {
        type: Object,
        default: null
    },
    visitor: {
        type: Object,
        default: null
    },
})

const open = computed(() => props.isOpen)
const authId = computed(() => props.auth.user.id)
const visitorId = computed(() => props.visitor.id)

let form = useForm({
    action_performed: '',
    action_performed_detail: '',
    user_id: authId,
    visitor_id: visitorId,
})

const submit = () => {
    form.post('/action/store', {
        preserveScroll: true,
        onSuccess: () => {
            form.clearErrors()
            form.reset()
            emits('closeSubmit', false)
        },
        onError: (errors) => {

        }
    });

}
</script>
