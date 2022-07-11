<script>
    export let circle

</script>


<div class="relative p-8 bg-lightPeach rounded-full">

    {#if circle==="full"}
    <div class="absolute inset-1.5 bg-darkPeach rounded-full text-center"></div>
    {/if}

    {#if circle==="min" || circle==="half"}
    <div class="absolute top-8 inset-1.5 bg-darkPeach rounded-b-full text-center"></div>
    {/if}

    {#if circle === "min"}
        <div class="absolute rounded-b-xl w-14 h-7 bottom-3  left-1 bg-lightPeach"></div>
    {/if}

</div>