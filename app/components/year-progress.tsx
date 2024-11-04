"use client";

export default function YearProgress() {
  return (
    <div className="bg-white rounded-lg w-72 border shadow block p-4">
      <div className="w-full h-8 bg-gray-300 rounded-full border-4 shadow-inner box-shadow-s">
        <div
          style={{
            backgroundImage:
              "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
          }}
          className="inner w-1/4 h-full text-center text-xs text-white bg-green-500 rounded-full ltr-linear-infinite"
        ></div>
      </div>
    </div>
  );
}
