<script lang="ts">
  import type { Unit, Topic } from "./types";

  export let formData: {
    courseName: string;
    courseDescription: string;
    topics: Topic[];
    topicName: string;
    unitName: string;
    resourceName: string;
  };


</script>

<form class="w-full max-w-lg pt-4">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="web-title"> Enter Title </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
        focus:bg-white focus:border-gray-500"
        id="web-title"
        type="text"
      />
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="web-description"> Enter Description </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
        focus:outline-none focus:bg-white focus:border-gray-500"
        id="web-description"
        type="text"
      />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="url"> Enter URL </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 
        leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="url"
        type="url"
      />
    </div>
  </div>
</form>
