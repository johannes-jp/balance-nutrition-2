<script>
    export let open;
    export let duration;
    export let burgerColor = 'black';
    export let menuColor = 'black';
</script>

<style>

    button {
        position: relative;
        left: 0px;
        top: 0px;



        background-color: Transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
    }

	svg line {
		stroke: currentColor;
		stroke-width: 2.5;
    }

    /* rotate the top line */
    .open #top {
        transform: translate(10px, 0px) rotate(45deg)
    }

    /* hide the middle */
    .open #mid {
        opacity: 0
    }

    /* rotate the bottom line */
    .open #bot {
        transform: translate(-15px, 8px) rotate(-45deg)
    }
</style>

<button class:open on:click={() => open = !open} style="transition: color {duration}s ease-in-out; color: {open ? menuColor : burgerColor};">
	<svg width=20 height=18>
        <line id="top" x1=0 y1=2    x2=20 y2=2    style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"/>
		<line id="mid" x1=0 y1=9    x2=20 y2=9     style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"/>
		<line id="bot" x1=0 y1=16    x2=20 y2=16  style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"/>
	</svg>
</button>
