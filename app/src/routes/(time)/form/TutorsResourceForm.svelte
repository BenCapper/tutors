<script lang="ts">

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
  
  </script>

  <div class="flex mt-4 space-x-4">
    <div class="flex flex-col">
      <label for="topicName">Resource Name:</label>
      <input type="text" id="topicName" bind:value={formData.resourceName} class="border rounded p-2" />
    </div>
  </div>