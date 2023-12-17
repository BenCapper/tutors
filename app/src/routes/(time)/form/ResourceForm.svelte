<script lang="ts">
  import ResourceTypeForm from "./ResourceTypeForm.svelte";
  import type { Unit, Topic, Resource } from "./types";

  export let formData: {
    courseName: string;
    courseDescription: string;
    topics: Topic[];
  };
  export let onDelete: (id: number) => void;
  export let resource: Resource;
  export let topic: Topic;
  export let unit: Unit;
  let resources: String[] = ["Web", "Github", "Archive", "Lab", "Presentation", "Note", "Video"];

  const handleDeleteResource = () => {
    onDelete(resource.id - 1);
    console.log(formData);
  };
</script>

<div class="border flex flex-col items-left">
  <label for="resourceName" class="mt-3 mb-2 block text-sm font-medium leading-6 text-gray-900"><button type="button" on:click={handleDeleteResource} class="mr-2 rounded-md bg-indigo-600 px-3 py-2 text-sm
    font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
    focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete Resource</button>Resource {resource.id + 1}:</label>
  <select id="resourceName" class="border rounded p-2 mb-2 w-64" bind:value={resource.type}>
    <option value="" selected>Select Resource Type</option>
    {#each resources as resource}
      <option value={resource}>
        {resource}
      </option>
    {/each}
  </select>

  <div class="mt-8 flex gap-x-6">
</div>
  {#if resource.type != ''}
    <ResourceTypeForm {formData} />
  {/if}
</div>
