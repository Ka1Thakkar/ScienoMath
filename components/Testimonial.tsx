const Testimonial = () => {
    const testimonials = [
        [
            "My son totally loved the class. He wanted to join as soon as possible instead of waiting till January.",
            "Nimisha,"
        ],
        [
            "My daughter understood the concepts much better using ScienoMath's methodology. Even the more difficult concept of mathematics were at her fingertips now.",
            "Nilima,"
        ],
        [
            "I wish we had found ScienoMath earlier.",
            "Anvita,"
        ],
        [
            "My son found the classes very enjoyable along with making him understand some important concepts.",
            ""
        ]
    ]
    return (
        <section id="testimonials" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-bgorange to-bgred pt-32">
            <h1 className="text-5xl md:text-6xl font-semibold">Testimonials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 xl:px-40 pt-20 gap-x-10 gap-y-10">
                {testimonials.map((testimonial, key) => (
                    <div className="bg-bgwhite rounded-xl p-10 text-center lg:bg-opacity-80 lg:hover:shadow-lg lg:hover:shadow-bgyellow lg:hover:bg-opacity-100 transition-all ease-in-out" key={key}>
                        <div className="flex justify-around">
                            <h1 className="text-lg sm:text-3xl lg:text-7xl font-serif font-bold">"</h1>
                            <h1 className="text-xl sm:text-2xl font-semibold sm:px-5">{testimonial[0]}</h1>
                            <h1 className="text-lg sm:text-3xl lg:text-7xl font-serif font-bold">"</h1>
                        </div>
                        <h1 className="text-xl font-medium pt-5">~{testimonial[1]} Parent</h1>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Testimonial;