import '../app/globals.css';

export default function checkIcon() {
  return (
    <svg
      fill="none"
      stroke="#3d74ff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 check-icon-size"
      viewBox="0 0 24 24"
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
  );
}
