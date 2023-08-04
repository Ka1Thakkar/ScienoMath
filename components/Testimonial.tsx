'use client'
import Reviews from "./Reviews";

const Testimonial = () => {
    return (
        <section id="testimonials" className="flex flex-col justify-center items-center min-h-screen px-5 sm:px-0">
            <h1 className="text-5xl md:text-6xl text-textgray underline underline-offset-8 decoration-textblue decoration-4 font-bold pb-5 text-center">Testimonials</h1>
            <h1 className="text-xl md:text-2xl font-semibold text-bgbrown pb-20 text-center">Don't believe us? Listen to what other parents have to say.</h1>
            <Reviews />
        </section>
    );
}
 
export default Testimonial;