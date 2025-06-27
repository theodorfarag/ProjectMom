import "./home.css"
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-background text-card-foreground py-8 transition-colors duration-300">
            <div className="intro-section flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl p-6 bg-card rounded-xl shadow-lg">
                <img src="egypt.jpg" alt="Picture of Theodors Mom and him in Egypt"
                    className="circle-img w-40 h-40 border-3 border-primary shadow-md object-cover"/>
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="font-extrabold text-3xl md:text-4xl mb-2 text-primary">What Started Project Mom?</h1>
                    <p className="text-lg text-muted-foreground">
                        One day my mom asked me to help her lose weight. Despite her losing hope and being overwhelmed on how to approach this fitness journey, I came up with an idea. This was the start of a personal project that stems from a personal relationship. This is Project Mom ❤️
                    </p>
                </div>
            </div>
            <div className="mission-statement mt-10 p-6 bg-card rounded-xl shadow w-full max-w-3xl text-center">
                <h2 className="font-bold text-2xl mb-2 text-primary">Our Mission</h2>
                <p className="mb-2 text-card-foreground text-lg">
                    Project Mom is dedicated to making fitness and nutrition accessible, supportive, and personalized for my mom—and, in the future, for anyone seeking a healthier lifestyle. Our mission is to provide a clear, compassionate, and structured plan for workouts and diets, removing the guesswork and stress from the journey. We believe that everyone deserves a plan tailored to their needs, and our goal is to expand Project Mom into a customizable platform for all.
                </p>
                <p className="text-muted-foreground">
                    Whether you’re just starting or looking to take your health to the next level, Project Mom is here to support you every step of the way.
                </p>
            </div>
            <div className="carousel-section mt-12 w-full max-w-2xl flex flex-col items-center">
                <h2 className="font-bold text-xl mb-4 text-primary">Memories with Mom</h2>
                <ImageCarousel images={[
                  { src: "graduation.jpg", alt: "Graduation day" },
                  { src: "mall.jpg", alt: "Shopping day at the mall" },
                  { src: "championship.jpg", alt: "Celebrating a championship" },
                  { src: "billerica.jpg", alt: "Photo in Theodor's old child Home" },
                  { src: "egypt_young.jpg", alt: "Another photo from Egypt" },
                  { src:"grandma.jpg", alt: "Theodor's grandma and mom", className: "grandma-img"},
                ]} />
            </div>
        </div>
    )
}

export default Home;