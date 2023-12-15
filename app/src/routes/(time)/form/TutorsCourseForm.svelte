<script lang="ts">
  import TutorsTopicForm from "./TutorsTopicForm.svelte";

  type Topic = {
    id: number;
    title: string;
    desc: string;
    icon: string;
    numUnits: string;
  };

  type FormData = {
    courseName: string;
    courseDescription: string;
    topics: Topic[];
    topicName: string;
    unitName: string;
    resourceName: string;
  };

  let formData: FormData = {
    courseName: '',
    courseDescription: '',
    topics: [],
    topicName: '',
    unitName: '',
    resourceName: '',
  };

  let uploadedImageURL: string;

  const handleAddTopic = () => {
    formData.topics = [
      ...formData.topics,
      { id: formData.topics.length + 1, title: '', desc: '', icon: '', numUnits: '' },
    ];
  };

  function handleFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      uploadedImageURL = URL.createObjectURL(file);
    }
  }
</script>

<form>
  <div class="space-y-12">
    <!-- Course Details -->
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Course Details</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Generate a custom course structure</p>

      <!-- Course Name and Description -->
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
        <div class="flex flex-col sm:flex-row">
          <div class="sm:w-1/3 pr-4">
            <label for="course-name" class="block text-sm font-medium leading-6 text-gray-900">Course Name</label>
            <div class="mt-2">
              <input type="text" name="course-name" id="course-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:w-2/3">
            <label for="course-desc" class="block text-sm font-medium leading-6 text-gray-900">Course Description</label>
            <div class="mt-2">
              <input type="text" name="course-desc" id="course-desc" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
            <button type="button"
                    class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    on:click={() => document.getElementById('file-upload').click()}>
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

        <div class="flex gap-x-6">
          <button type="button" on:click={handleAddTopic} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Topic</button>
        </div>
      </div>

      {#if formData.topics.length > 0}
        <!-- Topic Forms -->
        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8">
          {#each formData.topics as topic (topic.id)}
            <TutorsTopicForm {formData} {topic} topicNumber={topic.id} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
</form>
