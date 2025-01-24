import React, { useEffect, useState } from "react";

const Resume = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("https://w1i6pme229.execute-api.us-east-1.amazonaws.com/prod/counter");
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Rahul Jayaram</h1>
        <p className="text-xl text-gray-600 mb-6">
          Final Year B.Tech Computer Science Student at Shiv Nadar University
          (CGPA: 9.2)
        </p>
        <p className="text-lg text-gray-700">Visitors: {visitorCount ?? "Loading..."}</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Work Experience
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>SDE Intern</strong> at GoDaddy (Jan 2025 - Present)
            </li>
            <li>
              <strong>Quality Engineering Intern</strong> at Zimperium Inc
              (June 2024 - November 2024)
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Links
          </h2>
          <ul className="list-inside space-y-2">
            <li>
              <a
                href="https://github.com/Rahuldj2"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/u/RahulDj_2/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                LeetCode
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
