import React from "react";

const ThankYou = () => {
  return (
    <div>
      <div className="py-6">
        <div class="flex items-center justify-center h-screen">
          <div class="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
            <div class="flex flex-col items-center p-4 space-y-2 bg-white">
              <h1 class="text-4xl font-bold">Your Order has been placed</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-green-600 w-28 h-28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 class="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Thank You !
              </h1>
              <p>Enjoy your food.Have a great day.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
