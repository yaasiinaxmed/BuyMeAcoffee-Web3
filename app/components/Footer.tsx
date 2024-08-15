import { FaTwitter, FaGithub, FaLink } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-4 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://x.com/yaasiin__ahmed" target="_blank" rel="noopener noreferrer" className="hover:text-[#DB6804]">
          <FaTwitter size={16} />
        </a>
        <a href="https://github.com/yaasiinaxmed" target="_blank" rel="noopener noreferrer" className="hover:text-[#DB6804]">
          <FaGithub size={16} />
        </a>
        <a href="https://linktr.ee/yaasinahmed" target="_blank" rel="noopener noreferrer" className="hover:text-[#DB6804]">
          <FaLink size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;