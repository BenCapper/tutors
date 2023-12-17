<script lang="ts">
  import ResourceForm from "./ResourceForm.svelte";
  import type { Unit, Topic } from "./types";
    
  let clickedUnit = false;


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
    topicName: string;
    unitName: string;
    resourceName: string;
  };

  export let topicNumber: Number;

  const handleAddResource = () => {
      clickedUnit = true;
      console.log('New Unit Added - Show Resource Component', formData);
    };
  </script>

<form>
    <!-- First Row: Course Name and Description -->
    <label for="topic-name" class="mt-3 mb-2 block text-sm font-medium leading-6 text-gray-900">Unit 1 Name</label>
      <input type="text" name="topic-name" id="topic-name" bind:value={formData.unitName} class="block w-full rounded-md 
      border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">


      <!-- Third Row: Conditionally show component  -->
      {#if clickedUnit}
        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8">
          <ResourceForm {formData} />
        </div>
      {/if}
      

      <!-- Fourth Row: Add Topic Button -->
      <div class="mt-8 flex gap-x-6">
          <button type="button" on:click={handleAddResource} class="rounded-md bg-indigo-600 px-3 py-2 text-sm
           font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
           focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Resource</button>
      </div>
</form>