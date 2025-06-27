import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const aboutText = "I'm an inspiring Software but also a mama's boy. I like to workout, play sports like basketball and volleyball, go serve at my coptic orthodox church. I study Computer Science at UMass Lowell";

const About = () => {
    return (
        <div className="flex justify-center mt-3">
            <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./vacation.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Theodor Farag 🇪🇬</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{aboutText}</p>
                    <div className='flex'>
                    <a href="https://www.linkedin.com/in/theodor-farag/" className='w-fit'>
                    <FaLinkedin className="dark:text-white w-3 hover:text-blue-600 transition-colors"/>
                    </a>
                    <a href="https://www.instagram.com/theodorfarag/">
                    <FaInstagram className='dark:text-white pl-1  hover:text-red-500 transition-colors'/>
                    </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;