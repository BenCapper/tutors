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

  let uploadedTopicIconURL: string;

  const handleAddUnit = () => {
    const newUnit: Unit = {
      id: formData.topics[topic.id].units.length,
      title: "",
      type: "",
      resources: [],
    };

    formData.topics[topic.id].units = [
      ...formData.topics[topic.id].units,
      newUnit,
    ];
  };

  function handleTopicIconSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      uploadedTopicIconURL = URL.createObjectURL(file);
      topic.icon = uploadedTopicIconURL; // Update topic icon URL
    }
  }
</script>

<form>
  <div class="space-y-12">
    <div class="border border-gray-900 p-6 rounded-md">
      <!-- Topic Name and Description -->
      <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
        <!-- ... Topic Name and Description code ... -->
      </div>

      <!-- Upload Topic Icon -->
      <div class="mt-2 mb-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
        <div class="flex flex-col sm:flex-row">
          <!-- Hidden File Input for Topic Icon -->
          <input type="file" id="topic-icon-upload" class="hidden" accept="image/*" on:change={handleTopicIconSelect} />

          <div class="sm:w-1/3 pr-4">
            <button type="button"
                    class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600"
                    on:click={() => document.getElementById('topic-icon-upload').click()}>
              Upload Topic Icon
            </button>
          </div>

          <div class="sm:w-2/3">
            {#if uploadedTopicIconURL}
              <img src={uploadedTopicIconURL} alt="Uploaded Topic Icon" class="max-w-xs max-h-24" />
            {:else}
              <div class="text-sm text-gray-600">
                This is where the icon name is displayed.
              </div>
            {/if}
          </div>
        </div>
      </div>

      <!-- Unit Forms -->
      {#each formData.topics[topic.id].units as unit (unit.id)}
        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8">
          <UnitForm {formData} {unit} topic={topic} topicNumber={topicNumber} />
        </div>
      {/each}
      
      <!-- Add Unit Button -->
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
    </div>
  </div>
</form>