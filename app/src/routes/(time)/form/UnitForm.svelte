<script lang="ts">
  import ResourceForm from "./ResourceForm.svelte";
  import type { Unit, Topic, Resource } from "./types";
    
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
  };

  export let topicNumber: Number;
  export let unit: Unit;


  const handleAddResource = () => {

      const newResource: Resource = {
        id: formData.topics[topic.id - 1].units[unit.id - 1].resources.length + 1,
        type: "",
      };

      formData.topics[topic.id - 1].units[unit.id - 1].resources = [
        ...formData.topics[topic.id - 1].units[unit.id - 1].resources,
        newResource,
      ];
      console.log('New Unit Added - Show Resource Component', formData);
    };
  </script>

<form>
    <!-- First Row: Course Name and Description -->
    <label for="unit-name" class="mt-3 mb-2 block text-sm font-medium leading-6 text-gray-900">Unit {unit.id} Name</label>
      <input type="text" name="unit-name" id="unit-name" bind:value={unit.title} class="block w-full rounded-md 
      border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">


      <!-- Third Row: Conditionally show multiple UnitForm components -->
      {#each formData.topics[topic.id - 1].units[unit.id - 1].resources as resource (resource.id)}
        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8">
          <ResourceForm {formData} {topic} {unit} {resource}/>
        </div>
      {/each}

      <!-- Fourth Row: Add Topic Button -->
      <div class="mt-8 flex gap-x-6">
          <button type="button" on:click={handleAddResource} class="rounded-md bg-indigo-600 px-3 py-2 text-sm
           font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
           focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Resource</button>
      </div>
</form>