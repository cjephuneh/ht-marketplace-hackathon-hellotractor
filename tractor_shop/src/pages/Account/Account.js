import React from 'react'

export default function Account() {
  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="bg-gray-100 rounded-xl shadow p-4 sm:p-7 ">
        <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 ">
            Profile
        </h2>
        <p className="text-sm text-gray-600">
            Manage your name, password and account settings.
        </p>
        </div>

        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            <div className="sm:col-span-3">
            <label className="inline-block text-sm text-gray-800 mt-2.5">
                Profile photo
            </label>
            </div>

            <div className="sm:col-span-9">
            <div className="flex items-center gap-5">
                <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white " src="../../../public/smallLogo.ico" alt="profiIe"/>
                <div className="flex gap-x-2">
                <div>
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                    Upload photo
                    </button>
                </div>
                </div>
            </div>
            </div>

            <div className="sm:col-span-3">
            <label for="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5">
                Full name
            </label>
            <div className="hs-tooltip inline-block">
                <button type="button" className="hs-tooltip-toggle ms-1">
                <svg className="inline-block w-3 h-3 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                </button>
                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-s" role="tooltip">
                Displayed on public forums, such as Preline
                </span>
            </div>
            </div>

            <div className="sm:col-span-9">
            <div className="sm:flex">
                <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 " placeholder="Maria"/>
                <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Boone"/>
            </div>
            </div>

            <div className="sm:col-span-3">
            <label for="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 ">
                Email
            </label>
            </div>

            <div className="sm:col-span-9">
            <input id="af-account-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 " placeholder="maria@site.com"/>
            </div>

            <div className="sm:col-span-3">
            <label for="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 ">
                Password
            </label>
            </div>

            <div className="sm:col-span-9">
            <div className="space-y-2">
                <input id="af-account-password" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Enter current password"/>
                <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " placeholder="Enter new password"/>
            </div>
            </div>

            <div className="sm:col-span-3">
            <div className="inline-block">
                <label for="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5">
                Phone
                </label>
                <span className="text-sm text-gray-400">
                (Optional)
                </span>
            </div>
            </div>

            <div className="sm:col-span-9">
            {/* <div className="sm:flex">
                <input id="af-account-phone" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="+x(xxx)xxx-xx-xx"/>
                <select className="py-2 px-3 pe-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                <option selected>Mobile</option>
                <option>Home</option>
                <option>Work</option>
                <option>Fax</option>
                </select>
            </div> */}

            <p className="mt-3">
                <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 " href="../docs/index.html">
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                Add phone
                </a>
            </p>
            </div>

            <div className="sm:col-span-3">
            <label for="af-account-gender-checkbox" className="inline-block text-sm text-gray-800 mt-2.5">
                Gender
            </label>
            </div>

            <div className="sm:col-span-9">
            {/* <div className="sm:flex">
                <label for="af-account-gender-checkbox" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox" checked>
                <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Male</span>
                </label>

                <label for="af-account-gender-checkbox-female" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-female">
                <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Female</span>
                </label>

                <label for="af-account-gender-checkbox-other" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-other">
                <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Other</span>
                </label>
            </div> */}
            </div>

            <div className="sm:col-span-3">
            <label for="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 ">
                BIO
            </label>
            </div>

            <div className="sm:col-span-9">
            <textarea id="af-account-bio" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500" rows="6" placeholder="Type your message..."></textarea>
            </div>
        </div>

        <div className="mt-5 flex justify-end gap-x-2">
            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 ">
            Cancel
            </button>
            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white disabled:opacity-50 ">
            Save changes
            </button>
        </div>
    </div>
    </div>
  )
}
