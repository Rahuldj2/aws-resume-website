"use client"

import React, { useEffect, useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const Portfolio = () => {
  const [visitorCount, setVisitorCount] = useState(null)

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("https://w1i6pme229.execute-api.us-east-1.amazonaws.com/prod/counter")
        const data = await response.json()
        setVisitorCount(data.count)
      } catch (error) {
        console.error("Failed to fetch visitor count:", error)
      }
    }

    fetchVisitorCount()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Rahul Jayaram</h1>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section id="about" className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
          <div className="bg-gray-700 rounded-lg shadow-xl p-6">
            <p className="text-xl mb-4">
              Final Year B.Tech Computer Science Student at Shiv Nadar University (CGPA: 9.2)
            </p>
            <p className="text-lg text-gray-300">
              Passionate about software development and always eager to learn new technologies. Currently exploring the
              realms of full stack development and cloud computing.
            </p>
          </div>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">Work Experience</h2>
          <div className="space-y-6">
            <div className="bg-gray-700 rounded-lg shadow-xl p-6">
              <h3 className="text-2xl font-semibold mb-2">SDE Intern</h3>
              <p className="text-gray-300">GoDaddy | Jan 2025 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Working on cutting-edge technologies</li>
                <li>Collaborating with cross-functional teams</li>
              </ul>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-xl p-6">
              <h3 className="text-2xl font-semibold mb-2">Quality Engineering Intern</h3>
              <p className="text-gray-300">Zimperium Inc | June 2024 - November 2024</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Developed and maintained automated test suites in Katalon Studio</li>
                <li>Improved product quality through rigorous testing</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
  <h2 className="text-4xl font-bold mb-6 text-blue-400">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <a 
      href="https://github.com/Rahuldj2/asur-next" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-gray-700 rounded-lg shadow-xl p-6 hover:shadow-2xl transform transition-transform hover:scale-105"
    >
      <h3 className="text-2xl font-semibold mb-2">A.S.U.R (Attendance System Using Recognition)</h3>
      <p className="text-gray-300">
        • Collaborated closely with a team of seven and developed an advanced attendance management system integrating geofencing,
        facial recognition, and real-time tracking for precise classroom attendance recording and management.<br></br>
        • Engineered SQL database and Next.js API endpoints; spearheaded brainstorming sessions to enhance precise indoor
        geolocation tracking. Utilized location smoothing techniques and achieved high accuracy despite using free APIs.
      </p>
    </a>
    <a 
      href="https://github.com/Rahuldj2/EnviFund" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-gray-700 rounded-lg shadow-xl p-6 hover:shadow-2xl transform transition-transform hover:scale-105"
    >
      <h3 className="text-2xl font-semibold mb-2">ENVIFUND</h3>
      <p className="text-gray-300">
        • Developed a decentralized crowdfunding application utilizing blockchain technology and smart contracts to enable secure
        and transparent transactions, specifically targeting various environmental initiatives.<br></br>
        • Implemented the user interface with Next.js, and utilized JIRA for project management, effectively handling user stories,
        sprint planning, and task tracking to ensure smooth project execution and timely delivery.
      </p>
    </a>
  </div>
</section>


        <section id="contact" className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">Contact</h2>
          <div className="bg-gray-700 rounded-lg shadow-xl p-6">
            <p className="text-xl mb-4">Feel free to reach out to me for any opportunities or collaborations!</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Rahuldj2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/RahulDj_2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-400 transition-colors"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-jayaram-1925a2230/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-center py-4">
        <p className="text-gray-300">Visitors: {visitorCount ?? "Loading..."}</p>
        <p className="text-gray-300">&copy; 2025 Rahul Jayaram. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Portfolio

