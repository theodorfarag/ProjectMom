import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const aboutText = "I'm an inspiring Software but also a mama's boy. I like to workout, play sports like basketball and volleyball, go serve at my coptic orthodox church. I study Computer Science at UMass Lowell";

// Additional content
const professionalText = "Professionally, I am passionate about software engineering, with hands-on experience in full-stack development, cloud technologies, and agile methodologies. My academic journey at UMass Lowell has provided me with a solid foundation in computer science and a drive to solve real-world problems through technology.";
const skillsText = "Skills: JavaScript, TypeScript, React, Node.js, Python, cloud infrastructure, REST APIs, teamwork, leadership, and continuous learning.";
const visionText = "Project Mom is more than just a portfolio—it's the beginning of a vision to create a company that empowers others through innovative technology and community-driven solutions. I aspire to grow this project into a platform that connects, inspires, and delivers value to users and organizations alike.";

const About = () => {
    return (
        <div className="flex flex-col items-center my-3 ">
            {/* Existing Card */}
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
                    {/* Portfolio Website Link */}
                    <div className="mt-3">
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit my portfolio website (coming soon)
                        </a>
                    </div>
                </div>
            </div>
            {/* Additional About Content */}
            <div className="mt-8 max-w-2xl p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Professional Background</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-400">{professionalText}</p>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Skills & Expertise</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-400">{skillsText}</p>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Vision for Project Mom</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-400">{visionText}</p>
                <p className="text-gray-700 dark:text-gray-400">
                    If you're interested in collaborating, investing, or learning more, feel free to reach out. Let's build something impactful together!
                </p>
            </div>
        </div>
    )
}

export default About;