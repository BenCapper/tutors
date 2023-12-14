<script lang="ts">
  import { modeCurrent } from "@skeletonlabs/skeleton";
  import TutorsResourceForm from "./TutorsResourceForm.svelte";
    
  let clickedUnit = false;

  type Topic = {
    id: number;
    title: string;
    desc: string;
    icon: string;
    numUnits: string;
  };

  export let topic: {
    id: number;
    title: string;
    desc: string;
    icon: string;
    numUnits: string;
  };


  export let formData: {
    courseName: string;
    courseDescription: string;
    topics: Topic[];
    topicName: string;
    unitName: string;
    resourceName: string;
  };
  
  const handleAddResource = () => {
      clickedUnit = true;
      console.log('New Unit Added - Show Resource Component', formData);
    };
  </script>
  
<div class="flex mt-4 space-x-4">
  <div class="flex flex-col">
    <label for="topicName">Unit Name:</label>
    <input type="text" id="topicName" bind:value={formData.unitName} class="border rounded p-2" />
  </div>
  <div class="flex">
    <button type="button" class="bg-white-500 text-black px-4 py-2 rounded-md hover:bg-white-700 transition-all" on:click={handleAddResource}>Add Resource</button>
  </div>
</div>
<div class="flex">
{#if clickedUnit}
    <TutorsResourceForm {formData} />
{/if}
</div>