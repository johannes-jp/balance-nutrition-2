<script>
    import BurgerMenu from 'svelte-burger-menu';
</script>

<nav class="flex flex-row justify-between mx-auto p-2 gap-x-10 fixed">
    <div class="flex flex-row gap-1 mx-auto justify-start items-center max-w-xs">
        <h1 class="text-white uppercase text-lg text-left font-semibold whitespace-nowrap">
            Balance Nutrition    
        </h1>
    </div>
    <div class="hidden sm:flex flex-row min-w-sm justify-end items-center gap-6">
        <button link="#" class="text-sm background-none text-white font-semibold">About</button>
        <button link="#" class="text-sm background-none text-white font-semibold">Coaching Services</button>
        <button link="#" class="text-sm background-none text-white font-semibold">Contact</button>
        <button link="#" class="text-xs bg-orangeButton rounded-full text-md font-semibold p-2 px-4 whitespace-nowrap">Join Now</button>
    </div>
    <BurgerMenu class="lg:hidden burgerColor=#e4e4e7 backgroundColor=#ebeadf duration=0.2 menuColor=#000000 width=100%">
        <div class="flex flex-col gap-3 items-center ">
            <button link="#" class="text-sm background-none text-black font-semibold">About</button>
            <button link="#" class="text-sm background-none text-black font-semibold">Coaching Services</button>
            <button link="#" class="text-sm background-none text-black font-semibold">Clients</button>
            <button link="#" class="text-sm background-none text-black font-semibold">Login</button>
            <button link="#" class="self-centered text-xs text-white bg-black rounded-full text-md font-semibold p-2 px-4 whitespace-nowrap max-w-2xs">Join Now</button>
        </div>
    </BurgerMenu>
</nav>