import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'
import education1 from "../assets/mubarak-showole-Ve7xjKImd28-unsplash.png"
import student1 from "../assets/female.png"
import student2 from "../assets/start.png"
import education2 from "../assets/college project-pana.png"
import regular1 from "../assets/regularsavings.png"
import regular2 from "../assets/girlpig.png"
import { IoMdClose } from 'react-icons/io'
import Unavailable from './Unavailable'


export const Modal = ({header, text, image1, image2}) => {

    const [modal, setModal] = useState(false)

    return(
        <>
            <div className='px-5 pt-10 py-5 lg:flex jusify-between gap-10'>
                <div className="">
                    <h1 className='text-theme-color text-2xl font-bold pb-2 lg:pb-5'>{header}</h1>
                    <p className='pb-4 text-sm'>{text}</p>
                </div>
                <img src={image1} className='w-[100%] lg:w-[50%] object-cover rounded-lg shadow-sm' alt="" />
            </div>
            <div className='px-5 pt-10 py-5 flex items-center justify-between gap-10'>
                <img src={image2} className='w-[30%] object-contain' alt="" />
                <button className='bg-theme-color text-white hover:text-black flex items-center gap-2 rounded-md shadow-sm p-2 transition-all duration-700 hover:bg-white'
                onClick={() => setModal(!modal)}
                ><FaPlus />CREATE A TARGET</button>
            </div>
            {
                modal 
                &&
                <>
                <div className='bg-[#C6FCC9] transition-all duration-700 opacity-50 w-[100vw] h-[100vh] fixed top-0 left-0 z-40'></div>
                <div className='fixed top-[50%] left-[50%] bg-white w-[60%] rounded-2xl shadow-sm p-10 translate-x-[-50%] translate-y-[-50%] z-50'>
                    <h1 className="font-bold">Create your Box</h1>
                    <p className='text-xs'>Time to reach your goal</p>

                    <form action="">
                        <div className="py-2">
                            <label htmlFor="" className='block text-sm font-semibold py-1'>Box Name</label>
                            <input type="text" className='bg-theme-light px-3 py-2 rounded-lg w-full focus:outline-none' />
                        </div>
                        <div className="py-2">
                            <label htmlFor="" className='block text-sm font-semibold py-1'>Target Amount</label>
                            <input type="number" inputMode='numeric' className='bg-theme-light w-full px-3 py-2 rounded-lg focus:outline-none' />
                        </div>
                        <div className="py-2">
                            <label htmlFor="" className='block text-sm font-semibold py-1'>Duration</label>
                            <select name="" id="" className='w-full bg-theme-light px-3 py-2 rounded-lg focus:outline-none cursor-pointer'>
                                <option value="" disabled selected>Select Duration</option>
                                <option value="3">3 Months</option>
                                <option value="6">6 Months</option>
                                <option value="9">9 Months</option>
                                <option value="12">12 Months</option>
                            </select>
                        </div>
                        <div className="py-2">
                            <label htmlFor="" className='block text-sm font-semibold py-1'>Strictness</label>
                            <select name="" id="" className='w-full bg-theme-light px-3 py-2 rounded-lg focus:outline-none cursor-pointer'>
                                <option value="" disabled selected>Select Strictness</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <button className='bg-theme-lighter text-white hover:text-black flex items-center gap-2 rounded-md shadow-sm p-2 mt-1 transition-all duration-700 hover:bg-white'
                        onClick={() => setModal(!modal)}
                        ><FaPlus />Create</button>
                    </form>
                    <button onClick={() => setModal(!modal)} className='absolute top-3 right-3 hover:bg-gray-200 transition-all duration-700 p-2 rounded-full'><IoMdClose size={20}/></button>
                </div>
                </>
            }

    </>
    )
}

function Boxes({type}) {
    const [modal, setModal] = useState(false)

    if(type === "regular-savings"){
        let header = "Regular Savings"
        let text = "Are you tired of struggling to save money consistently? Do you wish there was an easier way to build your savings without the stress? Look no further! We’re here to revolutionize your saving habits and help you achieve your financial goals effortlessly with our innovative regular saving feature. We understand that life can get busy, and saving money often takes a backseat. That's why we've designed this box that automates the saving process for you, making it convenient and effortless."
        return(
           <Modal header={header} text={text} image1={regular1} image2={regular2}/>
        )
    }
    else if(type === "education"){
        let header = "Education Targetbox"
        let text = "Are you tired of scrambling to pay for your school fees every semester? Say goodbye to financial stress and hello to the Education Targetbox. This feature empowers students like you to effortlessly save money for your next round of educational expenses. So get started by setting a target and the duration you would like to save for!"
        return(
           <Modal header={header} text={text} image1={education1} image2={education2}/>
        )
    }
    else if(type === "studentpreneur"){
        let header = "Studentpreneur Targetbox"
        let text = "Are you a student entrepreneur looking to make the most of your hard-earned money? We understand the challenges you face while juggling your studies and business ventures. That's why we've developed a game-changing feature that will revolutionize the way you save – the Studentpreneur Targetbox."
        return(
           <Modal header={header} text={text} image1={student1} image2={student2}/>
        )
    }
    else if(type === "investment"){
        return(
            <Unavailable />
        )
    }
}

export default Boxes
