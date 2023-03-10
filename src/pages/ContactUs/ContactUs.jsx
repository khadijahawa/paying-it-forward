import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';

import contactus from '../../assets/images/contactus.svg';
import sendEmail from '../../utils/sendEmail';

function Contactus() {
    const modelRef = useRef();
    const { t } = useTranslation(['common']);

    return (
        <section className="text-gray-600 body-font relative">
            <h1 className="text-gray-400 text-5xl p-5 font-medium">
                {t('CONTACTUS')}
            </h1>
            <h2 className="text-3xl font-medium drop-shadow-md px-10">
                {t('expertTeam')}
            </h2>
            <div className="px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap flex-col md:flex-row items-center">
                <div className="lg:w-2/3 md:w-1/2 w-full">
                    <img src={contactus} alt="Contact Us" />
                </div>
                <div className="rounded lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center p-4">
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        validate={(values) => {
                            const errors = {};
                            if (values.email === '') {
                                errors.email = 'Email is required';
                            } else if (
                                !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(
                                    values.email,
                                )
                            ) {
                                errors.email = 'Invalid email address format';
                            }
                            if (values.name === '') {
                                errors.name = 'Name is required';
                            }
                            if (values.message === '') {
                                errors.message =
                                    'Please add a message at least one character long';
                            }
                            return errors;
                        }}
                        onSubmit={(values) => {
                            sendEmail(values, modelRef);
                        }}
                    >
                        <Form>
                            <div className="mb-4 text-left">
                                <Field name="name">
                                    {({ field }) => (
                                        <label
                                            htmlFor="name"
                                            className="uppercase text-sm text-gray-500 font-bold"
                                        >
                                            {t('fullName')}
                                            <input
                                                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                name={field.name}
                                                value={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                            />
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="text-red-600 text-xs normal-case font-normal"
                                            />
                                        </label>
                                    )}
                                </Field>
                            </div>
                            <div className="mb-4 text-left">
                                <Field name="email">
                                    {({ field }) => (
                                        <label
                                            htmlFor="email"
                                            className="uppercase text-sm text-gray-500 font-bold"
                                        >
                                            Email
                                            <input
                                                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                name={field.name}
                                                value={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-red-600 text-xs normal-case font-normal"
                                            />
                                        </label>
                                    )}
                                </Field>
                            </div>
                            <div className="mb-4 text-left">
                                <Field name="message">
                                    {({ field }) => (
                                        <label
                                            htmlFor="message"
                                            className="uppercase text-sm text-gray-500 font-bold"
                                        >
                                            {t('message')}
                                            <textarea
                                                rows="4"
                                                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                name={field.name}
                                                value={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                            />
                                            <ErrorMessage
                                                name="message"
                                                component="div"
                                                className="text-red-600 text-xs normal-case font-normal"
                                            />
                                        </label>
                                    )}
                                </Field>
                            </div>
                            <button
                                type="submit"
                                className="uppercase text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                            >
                                {t('sendMessage')}
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
            <div
                className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                ref={modelRef}
            >
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div className="mt-3 text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                            <svg
                                className="h-6 w-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Successful!
                        </h3>
                        <div className="mt-2 px-7 py-3">
                            <p className="text-sm text-gray-500">
                                Your message has been sent successfully.
                            </p>
                        </div>
                        <div className="items-center px-4 py-3">
                            <button
                                type="button"
                                onClick={() => {
                                    modelRef.current.style.display = 'none';
                                }}
                                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div className="mt-3 text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                            <svg
                                className="h-6 w-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Error!
                        </h3>
                        <div className="mt-2 px-7 py-3">
                            <p className="text-sm text-gray-500">
                                A problem has occured and we couldn&#39;t
                                deliver your mail.
                            </p>
                        </div>
                        <div className="items-center px-4 py-3">
                            <button
                                type="button"
                                onClick={() => {
                                    modelRef.current.style.display = 'none';
                                }}
                                className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contactus;
