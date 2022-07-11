<script>
    export let title
    export let subtitle
    export let description
    export let buttonText

    import Button from "./Button.svelte";
</script>

<div class="flex flex-col items-center p-3 md:w-1/3">
    <h1 class="text-black text-2xl font-semibold capitalize">
        {title}
    </h1>
    <h2 class="text-black text-xl">
        {subtitle}
    </h2>
    <p class="text-black text-center align-top p-3 m-2 leading-loose">
        {description}
    </p>

    <Button buttonText={buttonText}/>
</div>