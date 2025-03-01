import React from "react";

function VideoAnimator() {
  return (
    <style jsx>{`
      /* Animation keyframes */
      @keyframes pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
        }
        70% {
          transform: scale(1.05);
          box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
      }

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes colorShift {
        0% {
          border-color: #58f1ff;
        }
        25% {
          border-color: #5f83f0;
        }
        50% {
          border-color: #e54bda;
        }
        75% {
          border-color: #ff8d29;
        }
        100% {
          border-color: #58f1ff;
        }
      }

      /* Properly scoped pseudo-elements for the effect */
      .video-play-button::before {
        content: "";
        position: absolute;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: linear-gradient(45deg, #58f1ff, #5f83f0, #e54bda, #ff8d29);
        animation: rotate 4s linear infinite;
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.5s ease;
      }

      .video-play-button::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        border: 2px solid rgba(255, 255, 255, 0.2);
        animation: colorShift 4s infinite;
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.5s ease;
      }

      /* Hover effects for pseudo-elements */
      .video-play-button:hover::before,
      .video-play-button:hover::after {
        opacity: 1;
        transform: scale(1.2);
      }

      .video-play-button:hover::before {
        animation: rotate 4s linear infinite, pulse 2s infinite;
      }

      .video-play-button:hover::after {
        animation: colorShift 4s infinite, pulse 2s infinite;
      }

      /* Active state for pseudo-elements */
      .video-play-button:active::before,
      .video-play-button:active::after {
        transform: scale(1.1);
      }
    `}</style>
  );
}

export default VideoAnimator;
