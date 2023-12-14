<script lang="ts">
    import { modeCurrent } from "@skeletonlabs/skeleton";
    import TutorsResourceForm from "./TutorsResourceForm.svelte";
    
    let clicked = false;
    export let formData: {
    courseName: string;
    courseDescription: string;
    numTopics: number;
    topics: {
      id: number;
      title: string;
      desc: string; 
      icon: string;
      numUnits: string;
    }[];
    topicName: string;
    unitName: string;
    resourceName: string;
  };
  
  const handleAddResource = () => {
    clicked = true;
      console.log('New Unit Added - Show Resource Component', formData);
    };
  </script>
  
<div class="flex mt-4 space-x-4">
  <div class="flex flex-col">
    <label for="topicName">Unit Name:</label>
    <input type="text" id="topicName" bind:value={formData.unitName} class="border rounded p-2" />
  </div>
  <div class="flex">
    <button type="submit" class="bg-white-500 text-black px-4 py-2 rounded-md hover:bg-white-700 transition-all" on:click={handleAddResource}>Add Resource</button>
  </div>
</div>
<div class="flex">
{#if clicked}
    <TutorsResourceForm {formData} />
{/if}
</div>