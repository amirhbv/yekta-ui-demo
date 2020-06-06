<template>
    <y-form
        :errors="errors"
        @before-scroll="beforeScroll($event)"
        @submit="showServerErrors()"
    >
        <y-box
            title="فرم‌های یکتانت"
            subtitle="(می‌تونه اینطوری هم باشه)"
            class="my-4"
            footer-class="text-left"
        >
            <template #header>
                متن سمت چپ
            </template>
            <y-file-input
                v-model="file"
                field-label="file"
                multiple
                :rules="{ file_required: file }"
                :serivce="
                    () =>
                        new Promise((resolve, reject) => {
                            reject({ data: {} });
                        })
                "
                browse-text="انتخاب فایل"
                placeholder="فایلتون اینجا آپلود شه"
                accept="image/*,.xlsx"
                check-type
            >
                <template #prepend>
                    <div class="mx-1 d-flex justify-content-center">
                        <b-btn variant="outline-danger" class="ml-1">
                            +
                        </b-btn>
                        <b-btn variant="outline-dark">
                            -
                        </b-btn>
                    </div>
                </template>
                <template #append>
                    <div class="mx-1 d-flex justify-content-center">
                        <b-btn variant="outline-danger" class="ml-1">
                            +
                        </b-btn>
                        <b-btn variant="outline-dark">
                            -
                        </b-btn>
                    </div>
                </template>
            </y-file-input>
            <div class="d-flex align-items-center">
                <y-input
                    v-model="input"
                    field-label="input"
                    rules="required"
                    :help="{ title: 'عنوان', content: 'این فایل لازم است' }"
                    class="ml-1 flex-grow-1"
                    number
                >
                    <template #help-title>
                        توضیحات <strong>فیلد</strong>
                    </template>
                    <template v-slot:append>
                        <div class="flex-grow-3 mr-1">
                            <y-btn
                                v-clipboard:copy="input"
                                v-clipboard:success="onCopySuccess"
                                v-clipboard:error="onCopyError"
                                class="ml-1 "
                                >copy</y-btn
                            >

                            <y-btn @click="copy">copy with promise</y-btn>
                        </div>
                    </template>
                </y-input>
            </div>

            <y-select
                v-model="select"
                field-label="select"
                rules="list_required"
                allow-empty
                :options="[
                    { id: 5, title: 'گزارش مشکل در پنل تبلیغ‌کننده' },
                    { id: 6, title: 'سوال کلی تبلیغ‌کننده' },
                    { id: 8, title: 'درخواست بررسی حساب مسدود' },
                    {
                        id: 9,
                        title: 'پیگیری در مورد تایید شدن محتوا/ بنر/ نوتیف',
                    },
                    {
                        id: 10,
                        title: 'سوال در مورد اسکریپت یکتانت، ریتارگتینگ یا تگ',
                    },
                    { id: 12, title: 'مالی و صدور فاکتور' },
                ]"
                multiple
            />
            <y-emoji-picker
                v-model="emoji"
                field-label="emoji-picker"
                placeholder="placehodler"
                component-type="textarea"
            />
            <y-tag v-model="tags" :description="tagsDescription" />
            <y-textarea autofocus field-label="textarea" />
            <!-- <y-file-input field-label="فایل ضمیمه" /> -->
            <y-radio
                v-model="radio"
                field-label="Radio"
                :options="[
                    { text: 'پست', value: 'POST' },
                    { text: 'استوری', value: 'STORY' },
                ]"
            />
            <y-checkbox
                field-label="checkbox"
                :options="[
                    { text: 'گزینه اول', key: 'option-a' },
                    { text: 'گزینه دوم', key: 'option-b' },
                ]"
            />
            <y-toggle v-model="toggle" field-label="Toggle" />
            <y-toggle
                v-model="toggle"
                :width="100"
                field-label="Toggle with text"
            >
                <template #checked>
                    بله
                </template>
                <template #unchecked>
                    خیر
                </template>
            </y-toggle>
            <y-toggle v-model="toggle" field-label="Disabled Toggle" disabled />
            <y-slider v-model="slider" field-label="Slider"></y-slider>

            <b-row>
                <b-col cols="12" md="6">
                    <y-date-picker
                        v-model="date"
                        field-label="تاریخ"
                        type="datetime"
                        clearable
                        with-gregorian
                        :locale.sync="locale"
                    />
                </b-col>
                <b-col cols="12" md="6">
                    <y-date-picker
                        v-model="date"
                        type="datetime"
                        clearable
                        with-gregorian
                        :locale.sync="locale"
                        rules="required"
                        validation-name="از تاریخ"
                    >
                        <template #field-label>
                            از تاریخ
                        </template>
                        <template #label>
                            از
                        </template>
                    </y-date-picker>
                </b-col>
            </b-row>

            <y-input
                v-model="maskInput"
                field-label="input-with-date-mask"
                ltr
                mask="date"
            />
            {{ maskInput }}

            <y-input
                v-model="maskInput2"
                field-label="input-with-custom-mask"
                ltr
                fill-mask
                mask="(#### ### ## ##)"
            />
            {{ maskInput2 }}

            <y-input
                v-model="commaMask"
                field-label="input-with-comma-mask"
                ltr
                mask="comma"
            />
            {{ commaMask }}

            <br />

            <y-link href="https://google.com" target="_blank" class="my-3">
                لینک به گوگل
            </y-link>

            <y-alert variant="success" dismissible @dismissed="log('close')">
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
            </y-alert>
            <y-alert shadowed @retry="log('emitttttt')">
                Aww yeah, you successfully read this important alert message.
            </y-alert>
            <y-form-description
                variant="success"
                icon="fa-check"
                show-more
                @more="alert"
            >
                شما می‌توانید با تعریف
                <b>گروه نمایش‌دهنده</b>، نمایش تبلیغات خود را به گروهی خاص از
                نمایش‌دهندگان محدود کنید. <br />همچنین با افزودن یک نمایش‌دهنده
                به <b>لیست سیاه</b>، هیچ کدام از محتواهای تبلیغاتی شما در آن
                نمایش داده نخواهد شد. شما می‌توانید با تعریف
                <b>گروه نمایش‌دهنده</b>، نمایش تبلیغات خود را به گروهی خاص از
            </y-form-description>

            <template #footer>
                <y-btn variant="outline-secondary" type="submit">
                    <i class="fa fa-list" />
                    Submit
                </y-btn>
                <y-btn loading>
                    <i class="fa fa-list" />
                    مشاهده لیست
                </y-btn>
            </template>
        </y-box>

        <y-box class="my-4">
            <y-fetch-guard :response="res" @retry="fetch">
                data loaded :D
                <b-btn @click="fetch">
                    Retry
                </b-btn>
            </y-fetch-guard>
        </y-box>
        <y-scroll-to-top />
    </y-form>
</template>

<script>
import { Response } from 'yekta-ui/utils';

import { createAttachmentAPI } from '~/services';

export default {
    data: () => ({
        toggle: false,
        input: null,
        maskInput: null,
        maskInput2: 12321,
        commaMask: 1234564,
        select: null,
        radio: 'POST',
        emoji: '',
        date: null,
        locale: 'fa',
        file: [],
        slider: [0, 30],
        tags: [],
        script: "console.log('Hello World!');\n",
        errors: {},
        data: [],
        res: new Response(),
    }),
    computed: {
        tagsDescription() {
            return `[ ${this.tags.join(', ')} ]`;
        },
    },
    created() {
        this.fetch();
    },
    methods: {
        createAttachmentAPI,
        beforeScroll(names) {
            /* eslint-disable-next-line no-console */
            console.log(names);
        },
        log(s) {
            /* eslint-disable-next-line no-console */
            console.log(s);
        },
        alert() {
            window.alert('Alert !!!');
        },
        showServerErrors() {
            setTimeout(() => {
                this.errors = {
                    input: ['input value must be greater than 2'],
                };
            }, 1000);
        },
        copy() {
            this.$copyText(this.input)
                .then(message => {
                    this.onCopySuccess(message);
                })
                .catch(error => {
                    this.onCopyError(error);
                });
        },
        onCopySuccess(message) {
            /* eslint-disable-next-line no-console */
            console.log('compied to clipboard', message);
        },
        onCopyError(error) {
            console.error('failed to copy', error);
        },
        fetch() {
            this.res.init();
            setTimeout(() => {
                if (Math.random() < 0.5) {
                    this.res.set();
                } else {
                    this.res.fail();
                }
            }, 1000);
        },
    },
};
</script>
