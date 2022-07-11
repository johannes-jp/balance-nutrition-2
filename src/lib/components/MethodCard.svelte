<script>
    import ProgressDot from "./ProgressDot.svelte";
    export let title
    export let description
    export let circle
</script>

<div class="flex flex-col items-center md:w-1/3 max-w-xs">
    <h1 class="text-darkPeach text-2xl pb-4">
        {title}
    </h1>
    <ProgressDot circle={circle}/>
    <!-- <div class="relative w-10 h-10 bg-lightPeach rounded-full z-auto">
        <div class="absolute left-1 top-1 w-8 h-8 bg-darkPeach rounded-full z-auto"></div>
    </div> -->
    <p class="flex flex-col justify-left text-darkPeach text-center items-center bg-lightPeach rounded-xl m-5 p-1 h-3/4">
        {description}
    </p>

</div>
