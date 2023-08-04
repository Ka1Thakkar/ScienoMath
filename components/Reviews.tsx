import type { NextPage } from "next";
import Carousel from "./Carousel";


const Reviews: NextPage = () => {
    const testimonials = [
        [
            "My son totally loved the class. He wanted to join as soon as possible instead of waiting till January.",
            " Nimisha,"
        ],
        [
            "My daughter understood the concepts much better using ScienoMath's methodology. Even the more difficult concept of mathematics were at her fingertips now.",
            " Nilima,"
        ],
        [
            "I wish we had found ScienoMath earlier.",
            " Anvita,"
        ],
        [
            "My son found the classes very enjoyable along with making him understand some important concepts.",
            " "
        ]
    ]
  return (
    <div
    className="lg:w-5/12 w-10/12 mx-auto my-2">
      <Carousel loop>
        {testimonials.map((review, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <div className="flex justify-around pb-10">
                <h1 className="text-4xl font-bold md:text-7xl">"</h1>
                <h1 className=" text-xl md:text-2xl lg:text-3xl text-center text-gray-700">{review[0]}</h1>
                <h1 className="text-4xl font-bold md:text-7xl">"</h1>
              </div>
              <h1 className="text-center md:text-xl font-light">~{review[1]} Parent</h1>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Reviews;


// const Testimonial = () => {
    // const testimonials = [
    //     [
    //         "My son totally loved the class. He wanted to join as soon as possible instead of waiting till January.",
    //         " Nimisha,"
    //     ],
    //     [
    //         "My daughter understood the concepts much better using ScienoMath's methodology. Even the more difficult concept of mathematics were at her fingertips now.",
    //         " Nilima,"
    //     ],
    //     [
    //         "I wish we had found ScienoMath earlier.",
    //         " Anvita,"
    //     ],
    //     [
    //         "My son found the classes very enjoyable along with making him understand some important concepts.",
    //         " "
    //     ]
    // ]
//     return (
//         <section id="testimonials" className="min-h-screen flex flex-col justify-center items-center bg-white pt-16">
//             <h1 className="text-5xl md:text-6xl font-semibold text-textgray underline underline-offset-8 decoration-4 decoration-buttonorange">Testimonials</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 xl:px-40 pt-20 gap-x-2 gap-y-2 2xl:gap-x-10 2xl:gap-y-10">
//                 {testimonials.map((testimonial, key) => (
//                     <div className="bg-textblue rounded-xl px-2 md:px-5 py-5 text-center transition-all ease-in-out flex flex-col justify-center items-center" key={key}>
//                         <div className="flex justify-around">
//                             <h1 className="text-xl sm:text-3xl lg:text-7xl font-serif font-bold opacity-0 sm:opacity-100">"</h1>
//                             <h1 className="text-sm sm:text-2xl font-semibold sm:px-5">{testimonial[0]}</h1>
//                             <h1 className="text-xl sm:text-3xl lg:text-7xl font-serif font-bold opacity-0 sm:opacity-100">"</h1>
//                         </div>
//                         <h1 className="text-base sm:text-xl font-semibold pt-5"><span className="">~</span>{testimonial[1]} Parent</h1>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
 
// export default Testimonial;