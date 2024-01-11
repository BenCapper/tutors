<script>
  import Icon from "@iconify/svelte";
</script>

<div class="flex">
  <div class="flex-1 mx-4 max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create a new topic!</h5>
    </span>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Top level learning resource for a course. Typically encapsulating a session or week of learning material.</p>
    <span
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <Icon icon="grommet-icons:previous" class="mr-2" />
      Previous
    </span>
  </div>

  <div class="flex-1 w-full max-w p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
      <h5 class="text-xl font-medium text-gray-900 dark:text-white">Topic 1</h5>
      <div class="flex">
        <div class="flex-1 flex-col">
          <div class="mr-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="topicName"> Topic Name </label>
            <input
              required
              name="topicName"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
              focus:bg-white focus:border-gray-500"
              id="topicName"
              type="text"
            />
          </div>
          <div class="mr-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="description"> Topic Description </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
         focus:outline-none focus:bg-white focus:border-gray-500"
              name="description"
              id="description"
              required
              type="text"
            />
          </div>
          <br />
          <button
            type="submit"
            class="mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Add Topic</button
          >
          <button
            class="text-blue-50 font-thin bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 font-medium px-5 py-2.5 rounded-lg text-sm shadow"
          >
            Reset
          </button>
        </div>

        <div class="flex-2 p-2 mb-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-300 w-60 h-50">
          <div class="flex flex-col items-center justify-center">
            <div class="items-center justify-center mt-6">
              <div class="w-35 h-37 border-dotted border-2 border-gray-490 p-8">
                <Icon icon="ant-design:picture-twotone" width="20" height="20" class="mt-2 mx-10" />
              </div>
            </div>
            <button class="mt-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <Icon icon="material-symbols:cloud-upload" />
              <span class="ml-3">Upload Icon</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

<br />

<div class="max-w mx-4 p-8 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">Units</h5>
  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
    A unit will encapsulate learning resources, framed by a title. Units can be within topics, or can appear directly in a course folder.
  </p>
  <div class="flex">
    <ul class="my-4 space-y-3 flex-1">
      <li>
        <a
          href="#"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <span class="flex-grow ms-3 whitespace-nowrap">Topic 1 -> Units</span>
          <span class="items-center px-2 py-0.5 ms-3 text-gray-500 dark:text-gray-400"><Icon icon="zondicons:add-solid" color="blue" width="20" height="20" /></span>
        </a>
      </li>
      <!-- <li class="ml-7">No units found</li> -->

      <ul class="ml-2 pl-2 mr-5 divide-y divide-gray-200 dark:divide-gray-700">
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Unit 1 Name</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">Unit 1 Description</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <Icon icon="akar-icons:edit" width="23" height="23" color="blue" class="mr-2" />
              <Icon icon="ic:outline-delete" width="23" height="23" color="red" />
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Unit 2 Name</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">Unit 2 Description</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <Icon icon="akar-icons:edit" width="23" height="23" color="blue" class="mr-2" />
              <Icon icon="ic:outline-delete" width="23" height="23" color="red" />
            </div>
          </div>
        </li>
      </ul>
    </ul>

    <div class="flex-1 mt-8 mx-10 border border-gray-200 p-5">
      <h5 class="mx-4 font-light text-gray-900 dark:text-white">UNIT 1</h5>
      <hr />
      <br />
      <div class="flex">
        <div class="mx-4">
          <input
            class="placeholder:font-thin py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            type=""
            name="unitName"
            id="unitName"
            required
            placeholder="Unit Name"
          />
        </div>
        <div class="ml-2">
          <input
            class="placeholder:font-thin py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            type=""
            name="description"
            id="description"
            required
            placeholder="Unit Description"
          />
        </div>
        <button
          type="submit"
          class="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Add</button
        >
      </div>
    </div>
  </div>
</div>
