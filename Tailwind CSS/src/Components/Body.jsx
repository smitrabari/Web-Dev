import React from "react";

const Body = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src="Assets\Blue-Shape.svg"
          alt="Blue Shape"
          className="-rotate-45 h-64"
        />
        <img
          src="Assets\Pink-Shape.svg"
          alt="Pink Shape"
          className="absolute -rotate-30 h-64"
        />
        <img
          src="Assets\Purple-Shape.svg"
          alt="Purple Shape"
          className="absolute -rotate-15 h-64"
        />
        <img
          src="Assets\Hero-Model.png"
          alt="Hero Model"
          className="absolute h-64"
        />
      </div>
      <div>
        <div>
          <h1 className="text-5xl font-bold font-playfair leading-tight">
            Host your website in less than 5 minutes.
          </h1>
          <p className="font-lato text-gray-400">
            With Hosterr, get your website up and running in no less than 5
            minutes with the most competitive pricing packages available online
          </p>
          <form action="" className="flex flex-col gap-3.5 py-1">
            <input
              className="rounded-xl px-12 py-3 
              bg-gray-200
               placeholder:text-gray-600
              placeholder:font-lato
              placeholder:text-lg
              placeholder:font-bold
              placeholder:justify-center
              items-center"
              type="email"
              placeholder="Enter your website name"
            />
            <button className="bg-blue-500
            p-3
            rounded-2xl
            font-bold
            text-white">Join Waitlist</button>
          </form>
        </div>
        <div className="flex p-1 gap-1">
          <img src="Assets\Checkmark.svg" alt="Checkmark" />
          <p>No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
