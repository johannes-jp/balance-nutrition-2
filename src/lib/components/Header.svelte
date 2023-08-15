<script>
    import MenuButton from '$lib/components/MenuButton.svelte'
</script>

<div class="flex flex-row w-full justify-between p-2 bg-lightYellow">
        <MenuButton class="fixed" />
        <h1 class="absolute ml-10 text-black place-self-center xs:visible invisible uppercase text-lg text-left font-semibold whitespace-nowrap">
            Balance Nutrition
        </h1>
    <div class="flex flex-row min-w-sm justify-end items-center gap-3">
        <button link="#" class="text-sm xs:visible invisible background-none text-black font-semibold">About</button>
        <button link="#" class="text-sm xs:visible invisible background-none text-black font-semibold">Coaching Services</button>
        <button link="#" class="text-sm xs:visible invisible background-none text-black font-semibold">Contact</button>
        <button link="#" class="text-xs bg-orangeButton rounded-full text-md font-semibold p-2 px-4 whitespace-nowrap">Join Now</button>
    </div>
</div>
