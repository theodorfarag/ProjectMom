import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-white px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 max-w-6xl mx-auto">
        
        {/* Placeholder or Logo */}
        <div className="md:col-span-2 text-center md:text-left text-xl font-bold">
          Project Mom
        </div>

        {/* Resource List 1 */}
        <div className="md:col-start-4 md:col-end-6 col-span-full text-center md:text-left">
          <h6 className="text-lg font-semibold mb-2">Extra Resources</h6>
          <ul className="space-y-1 text-sm">
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Recipes</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Workouts</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Stretches</a></li>
          </ul>
        </div>

        {/* Resource List 2 */}
        <div className="md:col-start-6 md:col-end-8 col-span-full text-center md:text-left">
          <h6 className="text-lg font-semibold mb-2">More Tools</h6>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Recipes</a></li>
            <li><a href="#" className="hover:underline">Workouts</a></li>
            <li><a href="#" className="hover:underline">Stretches</a></li>
            <li><a href="#" className="hover:underline">Calorie Calculator</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-4 pt-6">
        <a href="https://www.linkedin.com/in/theodor-farag/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://www.instagram.com/theodorfarag/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://github.com/theodorfarag" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-500 transition-colors" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
