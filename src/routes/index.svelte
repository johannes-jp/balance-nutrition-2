<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Card from "$lib/components/Card.svelte";
    import PlanCard from "$lib/components/PlanCard.svelte";
    import TextField from "$lib/components/TextField.svelte";
    import Button from "$lib/components/Button.svelte";

    // <!-- Font Awesome -->
    // src="https://kit.fontawesome.com/45bf4482a3.js" 
    // crossorigin="anonymous"
</script>


<body class="bg-lightYellow h-screen">
    <Header class="text-lg"/>
    <section id="hero" class="relative overflow-hidden h-1/2 bg-left bg-cover bg-[url('src/lib/assets/food-hero.jpg')]">
    <!-- <section id="hero" class="bg-[url('src/lib/assets/food-hero.jpg')] h-screen bg-bottom bg-cover bg-blend-darken"> -->
        <div class="absolute inset-0 bg-slate-700 mix-blend-darken opacity-20"></div>
        <div class="p-12 relative h-full flex items-center justify-center">
            <div class="flex flex-col items-center m-8 gap-8">
                <div class="text-white text-5xl sm:text-6xl md:text-8xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    <i>It's all about <br><u>balance</u>.</i>
                </div> 
                <button link="#" class="text-md font-semibold bg-orangeButton rounded-full drop-shadow-lg text-xl mt-8 p-3 sm:p-6 px-9 whitespace-nowrap hover:bg-orangeButtonHighlight active:bg-orange-400">Get Started</button>
            </div>
        </div>
    </section>

    <section id="image-card" class="flex md:flex-row flex-wrap items-stretch justify-center m-8">
        <div class="flex flex-col justify-between md:w-[40%] w-2/3 ">
            <p class="text-4xl font-normal pb-4 text-center ">Online Nutrition & Wellness Coaching</p>
            <div class="p-4">
                <img class="float-right w-1/3 md:hidden rounded-lg ml-2" src="src/lib/assets/pizza.jpg">
                <p class="text-sm justify-left leading-loose">
                    Say goodbye to restrictive dieting, and hello to balance. Together we will create a foundation of simple, manageable habits that will guide you to your goals. Maybe you want to lose or gain weight, build muscle, or even just take the necessary steps to improving your overall health. Whatever your goals may be, you shouldn’t have to give up the things you love. Let me help you find what works best.
                </p>
            </div>
            <button link="#" class="text-md self-center md:self-start text-white bg-black rounded-full p-4 px-9 whitespace-nowrap hover:bg-gray-800 active:bg-gray-800 justify-between self-start">About Me</button>
        </div>
    <div class="flex bg-cover bg-top-left w-full hidden md:block sm:w-1/2 h-[300px] rounded-lg" style="background-image: url('src/lib/assets/pizza.jpg')"></div>
</section>

    <section id="method" class="bg-[url('src/lib/assets/wood-tomato.jpg')] bg-center">
        <div class="flex flex-col justify-center items-center">
            <p class="pt-6 md:text-5xl text-white text-center text-4xl mt-32 capitalize">
                my coaching method
            </p>    
            <div class="flex flew-row justify-center items-stretch m-auto pt-6 flex-wrap">
                <Card title="Understand" description="It all starts with learning about you, your goals, and your &quot;why.&quot;"/>
                <Card title="Act" description="Next, we will create small, easy to manage actions for you to put into practice. We go at your pace and what feels doable to you."/>
                <Card title="Refine" description="Then, we will refine your next actions based on the results at your progress check-in. We repeat this process as many times as needed or wanted."/>
            </div>
 
            <div class="text-xl text-white text-center pt-4 mb-32">
                And don't worry, you've got my support the whole way!
            </div>
        </div>
    </section>
    
    <section id="services" class="mb-8">
        <p class="pt-11 text-darkPeach text-center capitalize text-4xl">
            choose your starting point
        </p>
        <div class="flex flex-col gap-4 items-top p-4 pt-6 md:flex-row">
            <PlanCard
                title="Free Consultation"
                subtitle="Free"
                description="Not sure if nutrition coaching is for you yet? Fill out the contact form on my Contact page and let me know you are interested in a free consultation." 
                buttonText="Take me to the form"
            />  
            <PlanCard
                title="Basic Plan"
                subtitle="€100/mo"
                description= "The basic plan contains all the essentials for your nutrition journey!"
                buttonText="Join Now"
            />
            <PlanCard
                title="Premium Plan"
                subtitle="€160/mo"
                description="This plan offers everything the basic plan has plus more accountability measures and other extras to help keep you on track." 
                buttonText="Join Now"
            />
        </div>
    </section>

    <section id="newsletter" class="border-t border-black p-4 pb-8">
        <div class="flex flex-col justify-center items-center flex-wrap gap-4 m-3">
            <p class="text-4xl p-4 text-center">Subscribe to the Balance Nutrition Newsletter</p>
            <p class="text-darkPeach text-center">Sign up for your monthly dose of nutrition and lifestyle tips, recipes, motivation & more</p>
            <div id="signup" class="flex flex-row justify-center items-center gap-4 flex-wrap py-4">
                <TextField placeholder=" First Name" width=24/>
                <TextField placeholder=" Last Name" width=24/>
                <TextField placeholder=" Email Address" width=32/>
            </div>
            <Button buttonText="Sign Up"/>
    </section>

    <section id="hero" class="relative bg-[url('src/lib/assets/pie-table.jpg')] h-1/4 md:h-1/3 bg-top bg-cover">
        <div class="absolute inset-0 bg-slate-700 opacity-20"></div>
        <div class="relative flex flex-col items-center p-6 w-full">
            <div class="flex flex-row flex-nowrap text-center "></div>
                <p class="text-white text-5xl sm:text-6xl md:text-8xl text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                    Let's find your<br>balance today.
                </p> 
                <p class="text-white text-2xl pt-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    I'll be with you every step of the way.
                </p>
        <button link="#" class="font-semibold bg-orangeButton rounded-full text-xl mt-8 p-6 px-9 whitespace-nowrap hover:bg-orangeButtonHighlight active:bg-orange-400 justify-between">Join Now</button>
        </div>
    </section>

    <Footer />
</body>

