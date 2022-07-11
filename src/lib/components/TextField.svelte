<script>
    let name = '';
    export let placeholder;
    export let width;
</script>

<input class="h-8 p-6 w-{width} border border-lightPeach focus:outline-none focus:border-darkPeach" bind:value={name} placeholder={placeholder}>
