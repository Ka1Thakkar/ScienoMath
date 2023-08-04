import {PiExamDuotone, PiSealQuestionDuotone} from 'react-icons/pi'
import {RiFeedbackFill} from 'react-icons/ri'
import {MdTouchApp} from 'react-icons/md'

const Features = () => {
    return (
        <section id='features' className=" bg-white min-h-screen flex flex-col justify-center items-center gap-16 pb-32 xl:pb-0 pt-20">
            <div>
                <h1 className="text-center font-semibold text-5xl md:text-6xl text-textgray underline underline-offset-8 decoration-4 decoration-textblue">Features</h1>
            </div>
            <div className=" 2xl:w-10/12 2xl:h-3/5 rounded-xl pb-10 px-5 2xl:px-0">
                <div className="grid gap-2 grid-cols-2 2xl:gap-5 2xl:grid-cols-4 text-center h-full 2xl:bg-white rounded-xl">
                    <div className="lg:hover:bg-bggray transition-all ease-in-out pt-10 2xl:py-20 py-10 flex flex-col items-center bg-buttonorange rounded-xl lg:hover:text-white">
                        <div className='text-4xl md:text-6xl 2xl:text-7xl pb-5'>
                            <PiExamDuotone />
                        </div>
                        <h1 className="text-xl md:text-3xl font-semibold">Monthly Tests</h1>
                        <p className="pt-5 px-2 text-sm md:text-base">We conduct monthly tests to track our student’s progress. These evaluations help us figure out where the students are lagging behind.</p>
                    </div>
                    <div className="lg:hover:bg-bggray transition-all ease-in-out rounded-xl 2xl:py-20 py-10 flex flex-col items-center bg-buttonorange lg:hover:text-white">
                        <div className='text-4xl md:text-6xl 2xl:text-7xl pb-5'>
                            <PiSealQuestionDuotone />
                        </div>
                        <h1 className="text-xl md:text-3xl font-semibold">Doubt Sessions</h1>
                        <p className='pt-5 text-sm md:text-base px-2'>Regular doubt sessions are conducted where students can asks doubts regarding the material taught in class and also from the tests conducted.</p>
                    </div>
                    <div className="lg:hover:bg-bggray transition-all ease-in-out rounded-xl 2xl:py-20 py-10 px-1 flex flex-col items-center bg-buttonorange lg:hover:text-white">
                        <div className='text-4xl md:text-6xl 2xl:text-7xl pb-5'>
                            <RiFeedbackFill />
                        </div>
                        <h1 className="text-xl md:text-3xl font-semibold">Easy Feedback</h1>
                        <p className='pt-5 text-sm px-1 md:text-base'>Parents can directly share their concerns to us anytime. We are always ready to clear any queries you might have regarding your {"child’s"} progress.</p>
                    </div>
                    <div className="lg:hover:bg-bggray transition-all ease-in-out rounded-xl 2xl:py-20 py-10 flex flex-col items-center pb-10 bg-buttonorange lg:hover:text-white">
                        <div className='text-4xl md:text-6xl 2xl:text-7xl pb-5'>
                            <MdTouchApp />
                        </div>
                        <h1 className="text-xl md:text-3xl font-semibold">More Interactive</h1>
                        <p className='pt-5 px-2 text-xs md:text-base'>Online mode helps us make the classes more interactive by making students understand the concepts by using different visuals and interactive in-class quizzes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Features;