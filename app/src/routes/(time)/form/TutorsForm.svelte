<script lang="ts">
  import { modeCurrent } from "@skeletonlabs/skeleton";

  let formData = {
    courseName: '',
    courseDescription: '',
    numTopics: 0,
    topics: Array(0).fill({id: 0, title: '', desc: '', icon: '', numUnits: ''})
  };

  const handleSubmit = () => {
    const topics = formData.topics.slice(0, formData.numTopics);
    console.log('Form submitted:', formData);
  };
</script>

<div class="bg-gradient-to-l from-primary-50 dark:from-primary-900 to-accent-50 dark:to-accent-900">
  <div class="container lg:flex justify-center items-center mx-auto py-32">
    <div class="lg:w-1/2 mx-4">
      <h1 class="font-bold !text-5xl inline-block my-4">
        An
        <span class="font-bold !text-5xl inline-block bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone">Open and Simple </span>
        Way to Build Courses
      </h1>
      <div class="grid grid-cols-2 gap-3">
        <form on:submit|preventDefault={handleSubmit}>
          <label for="courseName">Course Name:</label>
          <input type="text" id="courseName" bind:value={formData.courseName} />
        
          <label for="courseDescription">Course Description:</label>
          <input type="text" id="courseDescription" bind:value={formData.courseDescription} />
        
          <label for="numTopics">Number of Topics:</label>
          <input type="number" id="numTopics" bind:value={formData.numTopics} />

          {#if formData.numTopics > 0}
          <!-- Show this input only when numTopics is more than 0 -->
          <label for="Topic 1">Additional Input:</label>
          <input type="text" id="additionalInput" bind:value={formData} />
        {/if}
        
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
    <div class="w-full lg:w-1/2">
      <div>
        <a class="btn btn-xl bg-primary-500 text-white font-bold hover:scale-105 transition-all w-60" href="/form" target="_blank" rel="noreferrer">Download Course</a>
      </div>
    </div>
  </div>
</div>
