<script lang="ts">
    import TutorsTopicForm from "./TutorsTopicForm.svelte";

    let clicked = false;
    let formData = {
      courseName: '',
      courseDescription: '',
      numTopics: 0,
      topics: Array(0).fill({id: 0, title: '', desc: '', icon: '', numUnits: ''}),
      topicName: '',
      unitName: '',
      resourceName: '',
    };
  
    const handleAddTopic = () => {
      clicked = true;
      console.log('New Course Added - Show Topic Component', formData);
    };
  </script>
  
  <div class="bg-gray-100 p-4 rounded-md">

      <form class="flex space-x-4 flex-col">
        <div class="flex space-x-4">
          <div class="flex flex-col">
            <label for="courseName">Course Name:</label>
            <input type="text" id="courseName" bind:value={formData.courseName} class="border rounded p-2" />
          </div>
          <div class="flex flex-col">
            <label for="courseDescription">Course Description:</label>
            <input type="text" id="courseDescription" bind:value={formData.courseDescription} class="border rounded p-2" />
          </div>
          <div class="flex">
            <button type="submit" class="bg-white-500 text-black px-4 py-2 rounded-md hover:bg-white-700 transition-all" on:click={handleAddTopic}>Add Topic</button>
          </div>
        </div>
  
        {#if clicked}
        <TutorsTopicForm {formData}/>
        {/if}
      </form>
  </div>