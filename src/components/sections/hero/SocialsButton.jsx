'use client'

import { IconButton } from '@mui/material';
import { Github, Instagram, MessageCircle, Twitter } from 'lucide-react';

const SocialsButton = () => {
  return (
    <div className="flex space-x-4 w-fit md:mx-auto my-2 sm:mx-auto">
      <IconButton
        className="bg-gray-200 hover:bg-gray-300 dark:bg-black/20"
        onClick={() => (window.location.href = "https://x.com/KayziGucci")}
      >
        <Twitter
          className="text-black dark:text-white"
          size={15}
        />
      </IconButton>
      <IconButton
        className="bg-gray-200 hover:bg-gray-300 dark:bg-black/20"
        onClick={() =>
          (window.location.href = "https://www.instagram.com/kayzi.2high/")
        }
      >
        <Instagram
          className="text-black dark:text-white"
          size={15}
        />
      </IconButton>
      <IconButton
        className="bg-gray-200 hover:bg-gray-300 dark:bg-black/20"
        onClick={() => (window.location.href = "https://wa.me/+2349132589516")}
      >
        <MessageCircle
          className="text-black dark:text-white"
          size={15}
        />
      </IconButton>
      <IconButton
        className="bg-gray-200 hover:bg-gray-300 dark:bg-black/20"
        onClick={() => (window.location.href = "https://github.com/KAYZI2HIGH")}
      >
        <Github
          className="text-black dark:text-white"
          size={15}
        />
      </IconButton>
    </div>
  );
}

export default SocialsButton