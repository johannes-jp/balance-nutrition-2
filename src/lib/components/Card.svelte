<script>
    export let title
    export let description
</script>

<div class="flex flex-row items-top justify-center max-w-xs p-3">
    <div class="flex flex-col items-center p-3">
        <h1 class="text-white text-4xl font-semibold">
            {title}
        </h1>
        <p class="text-white text-center align-top p-3 m-2 leading-loose">
            {description}
        </p>
    </div>

</div>