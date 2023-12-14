<script lang="ts">
    import TutorsUnitForm from "./TutorsUnitForm.svelte";
    

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
    let clicked = false;
  
  const handleAddUnit = () => {
      clicked = true;
      console.log('New Topic Added - Show Unit Component', formData);
    };
  </script>
  
  <div class="flex mt-4 space-x-4">
    <div class="flex flex-col">
      <label for="topicName">Topic Name:</label>
      <input type="text" id="topicName" bind:value={formData.topicName} class="border rounded p-2" />
    </div>
    <div class="flex">
      <button type="submit" class="bg-white-500 text-black px-4 py-2 rounded-md hover:bg-white-700 transition-all" on:click={handleAddUnit}>Add Unit</button>
    </div>
  </div>
  <div class="flex">
    {#if clicked}
    <TutorsUnitForm {formData} />
    {/if}
    
  </div>