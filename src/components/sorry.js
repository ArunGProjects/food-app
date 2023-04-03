import React from "react";
const Sorry = () => {
  return (
    <div>
      <div class="flex flex-col items-center p-4 space-y-2 bg-white">
        <h1 class="text-4xl font-bold">We Are Sorry </h1>

        <h1 class="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          We are not accepting order now
        </h1>
        <p>Please try later.</p>
      </div>
    </div>
  );
};

export default Sorry;
