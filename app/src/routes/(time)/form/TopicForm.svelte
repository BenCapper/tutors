<script lang="ts">
  import UnitForm from "./UnitForm.svelte";
  import type { Unit, Topic } from "./types";

  export let topic: {
    id: number;
    title: string;
    desc: string;
    icon: string;
    units: Unit[];
  };

  export let formData: {
    courseName: string;
    courseDescription: string;
    topics: Topic[];
  };

  export let topicNumber: number;

  const handleAddUnit = () => {
    const newUnit: Unit = {
      id: formData.topics[topicNumber - 1].units.length + 1,
      title: "",
      type: "",
      resources: [],
    };

    formData.topics[topicNumber - 1].units = [
      ...formData.topics[topicNumber - 1].units,
      newUnit,
    ];

    console.log(formData);
  };
</script>
  
  <form>
    <div class="space-y-12">
      <div class="border-gray-900/10 pb-12">
  
        <!-- First Row: Course Name and Description -->
        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
          <div class="flex flex-col sm:flex-row">
            <div class="sm:w-1/3 pr-4">
              <label for="topic-name" class="block text-sm font-medium leading-6 text-gray-900">Topic {topicNumber} Name</label>
              <div class="mt-2">
                <input type="text" name="topic-name" id="topic-name" bind:value={topic.title} class="block w-full rounded-md border-0 py-1.5 
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          
            <div class="sm:w-2/3">
              <label for="topic-desc" class="block text-sm font-medium leading-6 text-gray-900">Topic {topicNumber} Description</label>
              <div class="mt-2">
                <input type="text" name="topic-desc" id="topic-desc" bind:value={topic.desc} class="block w-full rounded-md border-0 py-1.5 
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
        </div>
  
        <!-- Second Row: Upload Icon and Text -->
        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
          <div class="flex flex-col sm:flex-row">
            <div class="sm:w-1/3 pr-4">
              <button type="button" class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-indigo-600">Upload Topic Icon</button>
            </div>
          
            <div class="sm:w-2/3">
              <div class="text-sm text-gray-600">
                This is where the icon name is displayed.
              </div>
            </div>
          </div>
        </div>
  

  
        <!-- Third Row: Conditionally show multiple UnitForm components -->
        {#each formData.topics[topicNumber - 1].units as unit (unit.id)}
          <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8">
            <UnitForm {formData} {unit} topic={topic} topicNumber={topicNumber} />
          </div>
        {/each}
        
        <!-- Fourth Row: Add Unit Button -->
        <div class="mt-8 flex gap-x-6">
          <button
            type="button"
            on:click={handleAddUnit}
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white 
                  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-indigo-600"
          >
            Add Unit
          </button>
  </div>
</form>