import React from "react";
import styles from "./leaderboard.module.css";

export default function Leaderboard() {
  const data = [
    { rank: 1, name: "Name", icon: "", college: "College Name", score: 89 },
    { rank: 2, name: "Name", icon: "", college: "College Name", score: 55 },
    { rank: 3, name: "Name", icon: "", college: "College Name", score: 47 },
    { rank: 4, name: "Name", icon: "", college: "College Name", score: 34 },
    { rank: 5, name: "Name", icon: "", college: "College Name", score: 29 },
    { rank: 102, name: "Name", icon: "", college: "College Name", score: 4 },
  ];

  {
    /*
		1. background
		2. responsiveness	
	*/
  }

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen">
      <h1
        className="text-center text-black mb-0"
        style={{
          fontWeight: 500,
          fontSize: "clamp(1.5rem, 5vw, 4rem)", // Responsive font-size
          letterSpacing: "0.4em",
        }}
      >
        LEADERBOARD
      </h1>
      <ul className="list-none p-0 w-full max-w-4xl">
        {data.map((item) => (
          <div
            className="relative w-full duration-200 hover:scale-105"
            key={item.rank}
          >
            <div className="absolute inset-0 scale-x-[1.005] sm:scale-x-[1.003] scale-y-[1.003] rounded-2xl bg-[#00004E]"></div>
            <div className="relative z-10 translate-y-0.5">
              <li
                className={`py-3 px-4 z-10 relative flex justify-between items-center gap-4 my-6 rounded-2xl shadow-lg overflow-hidden cursor-pointer ${
                  item.rank === 1
                    ? "bg-[#00004E] text-white"
                    : "bg-white text-[#00004E]"
                } ${styles.item}`}
              >
                <div
                  className={`w-[5%] text-lg ${
                    item.rank === 1 ? "text-white" : "text-blue-500 text-2xl"
                  }`}
                >
                  {item.rank === 1
                    ? "🥇"
                    : item.rank === 2
                    ? "🥈"
                    : item.rank === 3
                    ? "🥉"
                    : item.rank}
                </div>
                <div className="h-12 aspect-square bg-gray-600 rounded-full"></div>
                <div className="w-8/12 flex items-center">
                  <div className="flex justify-center items-start gap-3 flex-col sm:flex-row sm:justify-center sm:items-center">
                    <span
                      className={`font-semibold text-3xl ${
                        item.rank === 1 ? "text-white" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                    <span
                      className={`hidden sm:block text-2xl ${
                        item.rank === 1 ? "text-white" : "text-[#00004E]"
                      }`}
                    >
                      |
                    </span>
                    <span
                      className={`font-light text-xl ${
                        item.rank === 1 ? "text-white" : ""
                      }`}
                    >
                      {item.college}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-2/12 text-3xl font-bold ${
                    item.rank === 1 ? "text-white" : "text-blue-500"
                  } text-right`}
                >
                  {item.score}
                </div>
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
