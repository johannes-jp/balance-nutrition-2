<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Card from "$lib/components/Card.svelte";
    import PlanCard from "$lib/components/PlanCard.svelte";
    import TextField from "$lib/components/TextField.svelte";
    import Button from "$lib/components/Button.svelte";
    import Modal from "$lib/components/Modal.svelte";

    // <!-- Font Awesome -->
    // src="https://kit.fontawesome.com/45bf4482a3.js" 
    // crossorigin="anonymous"
</script>


<Modal message = "join our mailing list"/>
<body class="bg-lightYellow">
    <section id="hero" class="bg-[url('src/lib/assets/food-hero.jpg')] h-screen bg-bottom bg-cover">
        <Header/>
        <div class="flex flex-col flex-wrap items-center p-6 w-full object-bottom">
            <div class="flex flex-row flex-nowrap"></div>
                <p class="text-white text-8xl text-left">
                    <i>It's all about <br><u>balance</u></i>.
                </p> 
                <div class="w-"></div>
        <button link="#" class="text-md bg-orangeButton rounded-full text-xl mt-8 p-6 px-9 whitespace-nowrap hover:bg-orangeButtonHighlight active:bg-orange-400 justify-between">Get Started</button>
        </div>
    </section>

    <section id="image-card" class="flex flex-row gap-3 p-4 flex-nowrap justify-center items-center">
        <div class="flex flex-col justify-left items-center max-w-md p-4">
            <h1 class="text-4xl font-normal">
                Online Nutrition & Wellness Coaching
            </h1>
            <p class="text-sm justify-left pt-8 leading-loose">
                Say goodbye to restrictive dieting, and hello to balance. Together we will create a foundation of simple, manageable habits that will guide you to your goals. Maybe you want to lose or gain weight, build muscle, or even just take the necessary steps to improving your overall health. Whatever your goals may be, you shouldn’t have to give up the things you love. Let me help you find what works best.
            </p>
            <button link="#" class="text-md text-white bg-black rounded-full mt-8 p-4 px-9 whitespace-nowrap hover:bg-gray-800 active:bg-gray-800 justify-between self-start">About Me</button> 
        </div>
        <img src="src/lib/assets/pizza.jpg" alt="" class="w-1/3 max-w-xl p-6">
    </section>

    <section id="method" class="bg-[url('src/lib/assets/wood-tomato.jpg')] bg-center">
        <div class="flex flex-col justify-center items-center">
            <h1 class="pt-6 md:text-5xl text-white text-center text-4xl mt-32 capitalize">
                my coaching method
            </h1>    
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
    
    <h1 class="pt-11 text-darkPeach text-center capitalize text-4xl">
        choose your starting point
    </h1>
    
    <section id="services">
        <div class="flex flex-col gap-4 items-top p-4 pt-6 md:flex-row">
            <PlanCard
            title="Free Consultation"
            subtitle="Free"
            description="I think everyone can benefit from some support to boost their nutrition game! Not sure if nutrition coaching is for you yet? Fill out the contact form on my Contact page and let me know you are interested in a free consultation. (Can either be done online via call/video chat or in-person)" 
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

    <section id="newsletter">
        <div class="flex flex-col justify-center items-center flex-wrap gap-4 border-t border-darkPeach mt-8 m-3">
            <h1 class="text-4xl p-2 text-center">Subscribe to the Balance Nutrition Newsletter</h1>
            <p class="text-darkPeach text-center">Sign up for your monthly dose of nutrition and lifestyle tips, recipes, motivation & more</p>
            <div id="signup" class="flex flex-row justify-center items-center gap-4 flex-wrap py-4">
                <TextField placeholder=" First Name" width=24/>
                <TextField placeholder=" Last Name" width=24/>
                <TextField placeholder=" Email Address" width=32/>
            </div>
            <Button buttonText="Sign Up"/>
    </section>

    <section id="hero" class="relative bg-[url('src/lib/assets/pie-table.jpg')] h-screen bg-bottom bg-cover">
        <div class="relative flex flex-col items-center p-6 w-full">
            <div class="flex flex-row flex-nowrap text-center"></div>
                <h1 class="text-white text-8xl text-center">
                    Let's find your<br>balance today.
                </h1> 
                <h2 class="text-white text-2xl pt-4">
                    I'll be with you every step of the way.
                </h2>
                <div class="w-"></div>
        <button link="#" class="text-md bg-orangeButton rounded-full text-xl mt-8 p-6 px-9 whitespace-nowrap hover:bg-orangeButtonHighlight active:bg-orange-400 justify-between">Join Now</button>
        </div>
    </section>

    <Footer />
</body>

