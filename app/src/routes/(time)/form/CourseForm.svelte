<script lang="ts">
  import TopicForm from "./TopicForm.svelte";
  import type { FormData } from "./types";


  let formData: FormData = {
      courseName: '',
      courseDescription: '',
      topics: [
          { id: 0, title: '', desc: '', icon: '', units: [] },
      ]
  };

  let uploadedImageURL: string;

  const handleAddTopic = () => {
    formData.topics = [
      ...formData.topics,
      { id: formData.topics.length, title: '', desc: '', icon: '', units: [] },
    ];
    console.log(formData)
  };

  function handleFileSelect(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      uploadedImageURL = URL.createObjectURL(file);
    }
}
</script>

<form>
  <div class="space-y-12">
    <!-- Course Details -->
    <div class="border border-gray-900 p-6">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Course Details</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Generate a custom course structure</p>

      <!-- Course Name and Description -->
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
        <div class="flex flex-col sm:flex-row">
          <div class="sm:w-1/3 pr-4">
            <label for="course-name" class="block text-sm font-medium leading-6 text-gray-900">Course Name</label>
            <div class="mt-2">
              <input type="text" name="course-name" id="course-name" bind:value={formData.courseName} class="block w-full rounded-md border-0 
              py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
              focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:w-2/3">
            <label for="course-desc" class="block text-sm font-medium leading-6 text-gray-900">Course Description</label>
            <div class="mt-2">
              <input type="text" name="course-desc" id="course-desc" bind:value={formData.courseDescription} class="block w-full rounded-md 
              border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
              focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
      </div>

      <!-- Upload Icon and Add Topic -->
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
        <div class="flex flex-col sm:flex-row">
          <!-- Hidden File Input -->
          <input type="file" id="file-upload" class="hidden" accept="image/*" on:change={handleFileSelect} />

          <div class="sm:w-1/3 pr-4">
            <button
              type="button"
              class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              on:click={() => {
                const fileUploadElement = document.getElementById('file-upload');
                if (fileUploadElement) {
                  fileUploadElement.click();
                }
              }}
            >
              Upload Course Icon
            </button>
          </div>

          <div class="sm:w-2/3">
            {#if uploadedImageURL}
              <img src={uploadedImageURL} alt="Uploaded Icon" class="max-w-xs max-h-24" />
            {:else}
              <div class="text-sm text-gray-600">
                This is where the icon name is displayed.
              </div>
            {/if}
          </div>
        </div>
  

  
        <!-- Third Row: Conditionally show component -->
        <div class="grid mt-12 grid-cols-1 gap-x-6">
        {#if formData.topics.length > 0}
          <div class="grid grid-cols-1 gap-x-6">
            {#each formData.topics as topic (topic.id)}
              <TopicForm {formData} {topic} topicNumber={topic.id} />
            {/each}
          </div>
        {/if}
        </div>

        <!-- Fourth Row: Add Topic Button -->
        <div class="mt-8 flex gap-x-6">
          <button type="button" on:click={handleAddTopic} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold 
          text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
          focus-visible:outline-indigo-600">Add Topic</button>
        </div>
</form>

