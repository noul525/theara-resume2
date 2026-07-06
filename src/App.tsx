/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Printer, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import headshot from './assets/images/photo.png';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-8 px-4 sm:px-6 lg:px-8 no-print flex flex-col items-center justify-start selection:bg-blue-100">
      {/* Utility Toolbar - Hidden during print */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-neutral-200/80 no-print"
      >
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-sm font-medium text-neutral-600">
            Huot Theara's Live Portfolio CV
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="mailto:huot.t.sm@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Email Me
          </a>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#003366] text-white hover:bg-[#002244] text-xs font-semibold rounded-lg shadow-sm transition-all hover:shadow-md cursor-pointer active:scale-95"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Save as PDF
          </button>
        </div>
      </motion.div>

      {/* Main CV Sheet Container */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        id="cv-sheet"
        className="w-full max-w-4xl bg-white shadow-lg border border-neutral-200/60 print-shadow-none print-m-0 rounded-none sm:rounded-md transition-all duration-300"
      >
        {/* Printable/Display Area with Authentic CV Spacing */}
        <div className="p-8 sm:p-12 md:p-16 text-[#333333] text-sm leading-relaxed">
          
          {/* Header Section with Profile Pic and Details */}
          <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 mb-8 pb-4">
            {/* Candidate Photo */}
            <div className="relative shrink-0 mx-auto sm:mx-0">
              <img 
                src={headshot} 
                alt="Huot Theara Headshot" 
                referrerPolicy="no-referrer"
                className="w-32 h-32 object-cover bg-neutral-100 rounded-full border-2 border-[#003366]/40 shadow-sm"
              />
            </div>
            
            {/* Name and Contact Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-[#003366] tracking-wide mb-3 uppercase">
                HUOT THEARA
              </h1>
              
              <div className="space-y-2 text-neutral-700 text-[13px] sm:text-sm">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="font-semibold text-neutral-900">Phnom Penh</span>
                  <span className="text-neutral-400">|</span>
                  <a href="tel:+85517351474" className="hover:text-[#003366] hover:underline transition-colors">
                    +85517351474
                  </a>
                </div>
                
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-bold text-neutral-900 min-w-[70px] text-right sm:text-left">Email:</span>
                  <a href="mailto:huot.t.sm@gmail.com" className="text-neutral-700 hover:text-[#003366] hover:underline transition-colors">
                    huot.t.sm@gmail.com
                  </a>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-bold text-neutral-900 min-w-[70px] text-right sm:text-left">LinkedIn:</span>
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-neutral-700 hover:text-[#003366] hover:underline transition-colors inline-flex items-center gap-1"
                  >
                    LinkedIn/Huot Theara
                    <ExternalLink className="w-3 h-3 text-neutral-400 no-print" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SUMMARY SECTION */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#003366] tracking-wider uppercase border-b-2 border-[#003366] pb-1 mb-3">
              SUMMARY
            </h2>
            <p className="text-neutral-700 text-justify leading-relaxed">
              Recent graduate with strong sales and customer engagement skills, complemented by effective 
              communication abilities. Skilled in supporting marketing campaigns and thriving in collaborative team 
              environments. Passionate about the cosmetics industry and eager to contribute to brand growth.
            </p>
          </div>

          {/* WORK EXPERIENCE SECTION */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#003366] tracking-wider uppercase border-b-2 border-[#003366] pb-1 mb-3">
              WORK EXPERIENCE
            </h2>
            
            <div className="space-y-6">
              {/* Job 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-bold text-neutral-900 text-sm">
                    NTL Technology <span className="font-normal text-neutral-400">|</span> Sales Intern
                  </h3>
                  <span className="text-neutral-600 text-xs sm:text-sm whitespace-nowrap font-medium sm:font-normal">
                    Oct 2023 to Dec 2023
                  </span>
                </div>
                <ul className="list-none space-y-1 pl-1 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366] select-none mt-0.5">•</span>
                    <span>Assisted customers to choose products based on needs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366] select-none mt-0.5">•</span>
                    <span>Demonstrated product features and completed sales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366] select-none mt-0.5">•</span>
                    <span>Gained customer service and product knowledge in a fast-paced environment.</span>
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-bold text-neutral-900 text-sm">
                    Friendly Startup Business <span className="font-normal text-neutral-400">|</span> Project Team Member
                  </h3>
                  <span className="text-neutral-600 text-xs sm:text-sm whitespace-nowrap font-medium sm:font-normal">
                    May 2023 to Jan 2024
                  </span>
                </div>
                <ul className="list-none space-y-1 pl-1 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366] select-none mt-0.5">•</span>
                    <span>Co-planned and ran a small startup project.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366] select-none mt-0.5">•</span>
                    <span>Created marketing content and collected customer feedback.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366] select-none mt-0.5">•</span>
                    <span>Managed tasks and learned basic product positioning.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* COURSES AND TRAININGS SECTION */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#003366] tracking-wider uppercase border-b-2 border-[#003366] pb-1 mb-3">
              COURSES AND TRAININGS
            </h2>
            
            <div className="space-y-6">
              {/* Institution 1 */}
              <div>
                <div className="mb-2">
                  <h3 className="font-bold text-neutral-900 text-sm">
                    Spring Education Centre <span className="font-normal text-neutral-400">|</span> <span className="font-normal text-neutral-600 text-xs sm:text-sm">Phnom Penh, Cambodia</span>
                  </h3>
                </div>
                
                <div className="space-y-3 pl-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-start gap-2 text-neutral-700">
                      <span className="text-[#003366] select-none mt-0.5">●</span>
                      <span>Spring Internship Program | Batch 24&25</span>
                    </div>
                    <span className="text-neutral-600 text-xs sm:text-sm pl-6 sm:pl-0 whitespace-nowrap font-medium sm:font-normal">
                      Sep 2023 ─ Nov 2023
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-start gap-2 text-neutral-700">
                      <span className="text-[#003366] select-none mt-0.5">●</span>
                      <span>Spring Business Club & Competition | Batch 4</span>
                    </div>
                    <span className="text-neutral-600 text-xs sm:text-sm pl-6 sm:pl-0 whitespace-nowrap font-medium sm:font-normal">
                      Oct 2023 ─ Dec 2023
                    </span>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-bold text-neutral-900 text-sm">
                    Dynamic Leadership Course <span className="font-normal text-neutral-400">|</span> Spotting Opportunities in Agriculture
                  </h3>
                  <span className="text-neutral-600 text-xs sm:text-sm whitespace-nowrap font-medium sm:font-normal">
                    Sep ─ 2025
                  </span>
                </div>
                
                <ul className="list-none space-y-1 pl-1 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366] select-none mt-0.5">●</span>
                    <span>
                      <strong className="text-neutral-900 font-semibold text-[13px]">Provider:</strong> NICC, Supported by Child Fund Korean & KOICA
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#003366] select-none mt-0.5">●</span>
                    <span>Focused on market analysis and identifying sustainable business opportunities within the agricultural value chain.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#003366] tracking-wider uppercase border-b-2 border-[#003366] pb-1 mb-3">
              EDUCATION
            </h2>
            
            <div className="space-y-4">
              {/* University */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-bold text-neutral-900 text-sm">
                    National University of Management
                  </h3>
                  <span className="text-neutral-600 text-xs sm:text-sm whitespace-nowrap font-medium sm:font-normal">
                    2025 ─ Present
                  </span>
                </div>
                <div className="flex items-start gap-2 text-neutral-700 pl-1">
                  <span className="text-[#003366] select-none mt-0.5">●</span>
                  <span>Currently a first-year student pursuing a bachelor.</span>
                </div>
              </div>

              {/* High School */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-bold text-neutral-900 text-sm">
                    Chea Sim Samaky High School
                  </h3>
                  <span className="text-neutral-600 text-xs sm:text-sm whitespace-nowrap font-medium sm:font-normal">
                    2019 ─ 2025
                  </span>
                </div>
                <div className="flex items-start gap-2 text-neutral-700 pl-1">
                  <span className="text-[#003366] select-none mt-0.5">●</span>
                  <span>Achieve grade C diploma in National High School Graduation Examination.</span>
                </div>
              </div>
            </div>
          </div>

          {/* ADDITIONAL INFORMATION SECTION */}
          <div>
            <h2 className="text-base font-bold text-[#003366] tracking-wider uppercase border-b-2 border-[#003366] pb-1 mb-3">
              ADDITIONAL INFORMATION
            </h2>
            
            <ul className="list-none space-y-3 pl-1 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-[#003366] select-none mt-1">●</span>
                <span>
                  <strong className="text-neutral-900 font-bold">Key Skills:</strong> Creating marketing content, supporting digital marketing tasks, working on campaigns, and presenting ideas. customer engagement, audience targeting, event hosting.
                </span>
              </li>
              
              <li className="flex items-start gap-2">
                <span className="text-[#003366] select-none mt-1">●</span>
                <span>
                  <strong className="text-neutral-900 font-bold">Language:</strong> Khmer, English, Chinese ─ Basic.
                </span>
              </li>
              
              <li className="flex items-start gap-2">
                <span className="text-[#003366] select-none mt-1">●</span>
                <span>
                  <strong className="text-neutral-900 font-bold">Certificate:</strong> Completion of business certificates.
                </span>
              </li>
              
              <li className="flex items-start gap-2">
                <span className="text-[#003366] select-none mt-1">●</span>
                <span>
                  <strong className="text-neutral-900 font-bold">Award/Activities:</strong> Top three award in content creation at Spring Business Club, recognition for effective communication in sales role, successful support in planning and running market activities during internship.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </motion.div>

      {/* Footer / Contact Card (Hidden during print) */}
      <footer className="w-full max-w-4xl mt-8 text-center text-xs text-neutral-500 no-print border-t border-neutral-200/60 pt-6 pb-4">
        <p>© {new Date().getFullYear()} Huot Theara. All original rights reserved.</p>
        <p className="mt-1">Designed with precision to match the original document perfectly.</p>
      </footer>
    </div>
  );
}
