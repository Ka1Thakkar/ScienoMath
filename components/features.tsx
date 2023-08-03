import {PiExamDuotone, PiSealQuestionDuotone} from 'react-icons/pi'
import {RiFeedbackFill} from 'react-icons/ri'
import {MdTouchApp} from 'react-icons/md'

const Features = () => {
    return (
        <section id='features' className=" bg-gradient-to-b from-bgyellow to-bgorange min-h-screen flex flex-col justify-center items-center gap-16 pb-32 xl:pb-0 pt-32">
            <div>
                <h1 className="text-center font-semibold text-5xl md:text-6xl">Features</h1>
            </div>
            <div className=" w-10/12 h-3/5 rounded-xl pb-10">
                <div className="grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2 2xl:gap-0 2xl:grid-cols-4 text-center h-full 2xl:bg-bgwhite rounded-xl">
                    <div className="lg:hover:bg-bgred transition-all ease-in-out pt-10 2xl:py-20 py-10 px-10 flex flex-col items-center bg-bgwhite rounded-xl">
                        <div className='text-4xl md:text-6xl 2xl:text-7xl pb-5'>
                            <PiExamDuotone />
                        </div>
                        <h1 className="text-3xl font-semibold">Monthly Tests</h1>
                        <p className="pt-5 px-10">We conduct monthly tests to track our student’s progress. These evaluations help us figure out where the students are lagging behind.</p>
                    </div>
                    <div className="lg:hover:bg-bgred transition-all ease-in-out rounded-xl 2xl:py-20 py-10 px-10 flex flex-col items-center bg-bgwhite">
                        <div className='text-4xl md:text-6xl 2xl:text-7xl pb-5'>
                            <PiSealQuestionDuotone />
                        </div>
                        <h1 className="text-3xl font-semibold">Doubt Sessions</h1>
                        <p className='pt-5 px-10'>Regular doubt sessions are conducted where students can asks doubts regarding the material taught in class and also from the tests conducted.</p>
                    </div>
                    <div className="lg:hover:bg-bgred transition-all ease-in-out rounded-xl 2xl:py-20 py-10 px-10 flex flex-col items-center bg-bgwhite">
                        <div className='text-4xl md:text-6xl 2xl:text-7xl pb-5'>
                            <RiFeedbackFill />
                        </div>
                        <h1 className="text-xl md:text-3xl font-semibold">Easy Feedback</h1>
                        <p className='pt-5 px-10'>Parents can directly share their concerns to us anytime. We are always ready to clear any queries you might have regarding your {"child’s"} progress.</p>
                    </div>
                    <div className="lg:hover:bg-bgred transition-all ease-in-out rounded-xl 2xl:py-20 py-10 px-10 flex flex-col items-center pb-10 bg-bgwhite">
                        <div className='text-4xl md:text-6xl 2xl:text-7xl pb-5'>
                            <MdTouchApp />
                        </div>
                        <h1 className="text-3xl font-semibold">More Interactive</h1>
                        <p className='pt-5 px-10'>Online mode helps us make the classes more interactive by making students understand the concepts by using different visuals and interactive in-class quizzes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Features;