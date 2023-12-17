<script lang="ts">
  import ResourceTypeForm from "./ResourceTypeForm.svelte";
  import type { Unit, Topic, Resource } from "./types";

  export let formData: {
    courseName: string;
    courseDescription: string;
    topics: Topic[];
  };
  export let resource: Resource;
  export let topic: Topic;
  export let unit: Unit;
  let resources: String[] = ["Web", "Github", "Archive", "Lab", "Presentation", "Note", "Video"];
</script>

<div class="flex flex-col items-left">
  <label for="resourceName" class="mt-3 mb-2 block text-sm font-medium leading-6 text-gray-900">Resource:</label>
  <select id="resourceName" class="border rounded p-2 mb-2 w-64" bind:value={resource.type}>
    <option value="" selected>Select Resource</option>
    {#each resources as resource}
      <option value={resource}>
        {resource}
      </option>
    {/each}
  </select>
  {#if resource}
    <ResourceTypeForm {formData} />
  {/if}
</div>
