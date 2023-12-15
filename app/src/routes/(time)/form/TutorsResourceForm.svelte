<script lang="ts">
  import TutorsResourceTypeForm from "./TutorsResourceTypeForm.svelte";

  type Unit = {
    id: number;
    title: string;
    type: string;
    resources: [];
  };

  type Topic = {
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

  let resources: String[] = ["Web", "Github", "Archive", "Lab", "Presentation", "Note", "Video"];
</script>

<div class="flex flex-col items-left">
  <label for="resourceName" class="mb-2">Resource:</label>
  <select id="resourceName" class="border rounded p-2 mb-2 w-64" bind:value={formData.resourceName}>
    <option value="" selected>Select resource</option>
    {#each resources as resource}
      <option value={resource}>
        {resource}
      </option>
    {/each}
  </select>
  {#if formData.resourceName}
    <TutorsResourceTypeForm {formData} />
  {/if}
</div>
