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
        <section id="testimonials" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-bgyellow to-bgred">
            <h1 className="text-5xl md:text-6xl font-semibold text-bgbrown">Testimonials</h1>
            <div className="grid grid-cols-2 px-5 xl:px-40 pt-20 gap-x-2 gap-y-2">
                {testimonials.map((testimonial, key) => (
                    <div className="bg-bgwhite rounded-xl px-2 py-5 text-center lg:hover:shadow-lg lg:hover:shadow-bgbrown lg:hover:bg-opacity-100 transition-all ease-in-out" key={key}>
                        <div className="flex justify-around">
                            <h1 className="text-xl sm:text-3xl lg:text-7xl font-serif font-bold text-bgbrown">"</h1>
                            <h1 className="text-sm sm:text-2xl font-semibold sm:px-5">{testimonial[0]}</h1>
                            <h1 className="text-xl sm:text-3xl lg:text-7xl font-serif font-bold text-bgbrown">"</h1>
                        </div>
                        <h1 className="text-base sm:text-xl font-medium pt-5">~{testimonial[1]} Parent</h1>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Testimonial;