<script lang="ts">
  import "../../../app.postcss";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";
  import CourseForm from "./CourseForm.svelte";


  export let data: any;
  let { supabase, session } = data;
  $: ({ supabase, session } = data);

</script>

<TutorsShell {session} {supabase} title={"Tutors Course Builder"} subTitle={"Build a custom course"}>
  <div class="bg-surface-100-800-token mx-auto mb-2 place-items-center overflow-hidden rounded-xl p-4">
    <CourseForm/>
    <div class="flex flex-wrap justify-center">

    </div>
  </div>
</TutorsShell>
