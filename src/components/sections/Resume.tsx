import React, { useState, useEffect } from 'react';
import useTilt from '../../hooks/useTilt';
import { Download, Upload, CheckCircle2, FileCheck, Eye, X } from 'lucide-react';

export const Resume: React.FC = () => {
  const { elementRef, tiltProps } = useTilt(4, 1.015);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [resumeFileName, setResumeFileName] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('monisha_resume_pdf');
    const savedName = localStorage.getItem('monisha_resume_filename');
    if (savedData) {
      setResumeUrl(savedData);
      setResumeFileName(savedName || 'Monisha_S_Resume.pdf');
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setResumeUrl(result);
          setResumeFileName(file.name);
          localStorage.setItem('monisha_resume_pdf', result);
          localStorage.setItem('monisha_resume_filename', file.name);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (resumeUrl) {
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.download = resumeFileName || 'Monisha_S_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      const a = document.createElement('a');
      a.href = '/Monisha_S_Java_FullStack_Resume.txt';
      a.download = 'Monisha_S_Java_FullStack_Resume.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <section id="resume" className="py-24 px-6 md:px-16 relative z-10 border-b border-[#D8A7FF]/20 bg-[#08070B]">
      <div className="max-w-[1100px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-extrabold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#FFFFFF]">
            Preview &amp; <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">download my profile</span>.
          </h2>
        </div>

        {/* Live Resume Upload Callout Banner */}
        <div className="mb-12 glass-card p-6 border-[#D8A7FF]/30 bg-[#0E0C16] rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_0_25px_rgba(216,167,255,0.15)]">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#D8A7FF] to-[#FBBF24] flex items-center justify-center text-[#08070B] font-bold shrink-0 shadow-lg">
              <Upload size={22} />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#FFFFFF] flex items-center gap-2">
                Upload Custom Resume PDF
                {resumeUrl && <span className="text-xs bg-[#D8A7FF]/20 text-[#D8A7FF] border border-[#D8A7FF]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono font-medium"><CheckCircle2 size={12} /> PDF Attached</span>}
              </h4>
              <p className="text-xs text-[#E4DFF0] mt-1 font-normal">
                {resumeFileName 
                  ? `Active PDF: ${resumeFileName} — Recruiter can view or download directly!`
                  : 'Optionally upload your custom PDF resume file to publish alongside your interactive online CV.'}
              </p>
            </div>
          </div>

          <label className="btn btn-primary bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(216,167,255,0.35)] cursor-pointer hover:scale-[1.03] transition-all flex items-center gap-2.5 shrink-0">
            <Upload size={16} />
            {resumeUrl ? 'Update Custom PDF' : 'Upload Custom PDF'}
            <input type="file" accept=".pdf" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left side PDF CV Mock */}
          <div className="lg:col-span-6 flex justify-center">
            <div 
              ref={elementRef}
              {...tiltProps}
              className="glass-card w-full max-w-[420px] p-6 border-[#D8A7FF]/30 bg-[#0E0C16] shadow-2xl relative tilt-card flex flex-col gap-6 text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                </div>
                <span className="text-[10px] font-mono text-[#D8A7FF] bg-[#D8A7FF]/10 px-2 py-0.5 rounded border border-[#D8A7FF]/20 truncate max-w-[200px]">
                  {resumeFileName || 'Monisha_S_Resume.pdf'}
                </span>
              </div>
              
              <div className="border-b border-[#D8A7FF]/20 pb-4">
                <h3 className="text-xl font-bold font-heading text-[#FFFFFF]">Monisha S</h3>
                <p className="text-xs text-[#D8A7FF] font-bold mt-0.5">Java Full Stack Developer</p>
                <div className="flex flex-wrap gap-2 text-[10px] text-[#E4DFF0] mt-2 font-mono">
                  <span>📧 monishamonisaravanan08@gmail.com</span>
                  <span>📞 +91 63832 49841</span>
                  <span>📍 Bangalore, India</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 text-xs">
                <div className="flex flex-col gap-1.5">
                  <span className="font-bold text-[#FFFFFF] border-b border-[#D8A7FF]/20 pb-1 uppercase tracking-wider text-[10px]">Education</span>
                  <div className="flex justify-between"><strong className="text-[#FFFFFF]">B.Tech in IT - Sri Ramanujar College</strong><span className="text-[#B6AECA]">2022 - 2026</span></div>
                  <p className="text-[#E4DFF0]">Overall CGPA: <span className="text-[#D8A7FF] font-bold">8.93</span></p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-bold text-[#FFFFFF] border-b border-[#D8A7FF]/20 pb-1 uppercase tracking-wider text-[10px]">Internship</span>
                  <div className="flex justify-between"><strong className="text-[#FFFFFF]">bDreams Global Solution - Java Full Stack Intern</strong><span className="text-[#FBBF24] font-bold">Present</span></div>
                  <p className="text-[#E4DFF0]">Building Spring Boot REST APIs, MySQL schemas, and React components.</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-bold text-[#FFFFFF] border-b border-[#D8A7FF]/20 pb-1 uppercase tracking-wider text-[10px]">Projects</span>
                  <div className="flex justify-between"><strong>EverBloom Platform</strong><span>Java Spring Boot</span></div>
                  <div className="flex justify-between"><strong>Workforce Analytics</strong><span>ReactJS / MySQL</span></div>
                </div>
              </div>

              {/* Action Buttons on Card */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <button 
                  onClick={handleDownload}
                  className="py-2.5 bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] font-extrabold text-xs rounded-xl shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download size={14} /> Download
                </button>
                <button 
                  onClick={() => setIsPreviewOpen(true)}
                  className="py-2.5 bg-[#D8A7FF]/15 border border-[#D8A7FF]/40 text-[#D8A7FF] hover:bg-[#D8A7FF] hover:text-[#08070B] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye size={14} /> Online Viewer
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side CV Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
            <h3 className="text-2xl font-bold font-heading text-[#FFFFFF]">Recruiter-Ready CV</h3>
            <p className="text-sm text-[#E4DFF0] leading-relaxed font-normal">
              View my complete interactive resume online or download the comprehensive curriculum vitae detailing my academic background, technical competencies, internship experience, and full project portfolio.
            </p>
            
            <ul className="flex flex-col gap-3 text-sm text-[#E4DFF0]">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8A7FF]"></span>
                <strong>Structured Summary:</strong> Java Full Stack Developer with enterprise backend focus.
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8A7FF]"></span>
                <strong>Core Technologies:</strong> Java, Spring Boot, MySQL, REST APIs, ReactJS, Git/GitHub.
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]"></span>
                <strong>Hands-on Internships:</strong> bDreams Global Solution, Besant Technologies &amp; NLC India.
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]"></span>
                <strong>Academic History:</strong> B.Tech Information Technology (8.93 CGPA).
              </li>
            </ul>
            
            {/* CTA Buttons Row */}
            <div className="flex flex-wrap gap-4 mt-4 w-full">
              <button 
                onClick={handleDownload}
                className="btn bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] font-extrabold text-xs px-7 py-3.5 rounded-xl shadow-[0_0_20px_rgba(216,167,255,0.4)] flex items-center gap-2 hover:scale-[1.03] transition-all cursor-pointer"
              >
                <Download size={16} /> Download Resume
              </button>

              <button 
                onClick={() => setIsPreviewOpen(true)}
                className="btn border border-[#D8A7FF]/50 bg-[#0E0C16] text-[#FFFFFF] font-bold text-xs px-6 py-3.5 rounded-xl flex items-center gap-2 hover:border-[#D8A7FF] hover:bg-[#D8A7FF]/10 transition-all cursor-pointer"
              >
                <Eye size={16} /> View Online Resume
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Online Resume Viewer Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-[99999] bg-[#08070B]/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fadeIn">
          <div className="w-full max-w-4xl h-[90vh] bg-[#0E0C16] border border-[#D8A7FF]/40 rounded-3xl flex flex-col overflow-hidden shadow-[0_0_60px_rgba(216,167,255,0.25)]">
            
            {/* Modal Toolbar Header */}
            <div className="p-4 px-6 bg-[#08070B] border-b border-[#D8A7FF]/20 flex justify-between items-center text-[#FFFFFF]">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#D8A7FF]/20 border border-[#D8A7FF]/30 flex items-center justify-center text-[#D8A7FF]">
                  <FileCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FFFFFF]">Monisha_S_Java_FullStack_Resume</h4>
                  <p className="text-[11px] font-mono text-[#D8A7FF]">Official Recruiter Resume • Online Document Preview</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={handleDownload}
                  className="px-4 py-2 bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  <Download size={14} /> Download Resume
                </button>
                <button 
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-2 text-[#B6AECA] hover:text-[#FFFFFF] hover:bg-white/10 rounded-xl transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

              {/* Modal Body: PDF iframe if uploaded, or Rich Interactive Document Viewer */}
              <div className="p-6 md:p-10 flex-grow overflow-auto bg-[#08070B] text-left">
                {resumeUrl ? (
                  <iframe src={resumeUrl} title="Resume PDF Preview" className="w-full h-full border-none rounded-xl" />
                ) : (
                  <div className="max-w-[780px] mx-auto bg-[#121018] border border-[#D8A7FF]/30 rounded-2xl p-8 md:p-12 shadow-2xl text-[#FFFFFF] flex flex-col gap-8">
                    
                    {/* Header */}
                    <div className="border-b border-[#D8A7FF]/20 pb-6 flex flex-col md:flex-row justify-between md:items-end gap-4">
                      <div>
                        <h1 className="text-3xl font-black font-heading text-[#FFFFFF]">MONISHA S</h1>
                        <p className="text-base text-[#D8A7FF] font-bold mt-1">Java Full Stack Developer</p>
                        <p className="text-xs text-[#E4DFF0] mt-1">B.Tech Information Technology Graduate (2026)</p>
                      </div>
                      <div className="flex flex-col gap-1 text-xs font-mono text-[#E4DFF0]">
                        <span>📧 monishamonisaravanan08@gmail.com</span>
                        <span>📞 +91 63832 49841</span>
                        <span>🔗 linkedin.com/in/monishaaravanan</span>
                        <span>🐙 github.com/monishasaravanan2004</span>
                        <span>📍 Bangalore, India (Immediate Joiner)</span>
                      </div>
                    </div>

                    {/* Professional Summary */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xs font-mono text-[#D8A7FF] font-extrabold uppercase tracking-widest border-b border-[#D8A7FF]/20 pb-1">Professional Summary</h3>
                      <p className="text-sm text-[#E4DFF0] leading-relaxed">
                        Enthusiastic and self-motivated B.Tech Information Technology graduate with a strong foundation in Java, Spring Boot, MySQL, REST APIs, and ReactJS. Experienced in developing full-stack web applications with database integrations, responsive user interfaces, and structured backend systems.
                      </p>
                    </div>

                    {/* Education */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xs font-mono text-[#D8A7FF] font-extrabold uppercase tracking-widest border-b border-[#D8A7FF]/20 pb-1">Education</h3>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-base font-bold text-[#FFFFFF]">Sri Ramanujar Engineering College</h4>
                          <p className="text-xs text-[#E4DFF0]">Bachelor of Technology in Information Technology</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono text-[#D8A7FF] font-bold">2022 – 2026</span>
                          <p className="text-xs text-[#FBBF24] font-bold">CGPA: 8.93 / 10</p>
                        </div>
                      </div>
                    </div>

                    {/* Internships & Experience */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xs font-mono text-[#D8A7FF] font-extrabold uppercase tracking-widest border-b border-[#D8A7FF]/20 pb-1">Internships &amp; Experience</h3>
                      
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-bold text-[#FFFFFF]">bDreams Global Solution — <span className="text-[#D8A7FF]">Java Full Stack Intern</span></h4>
                          <span className="text-xs font-mono text-[#FBBF24] font-bold">Present</span>
                        </div>
                        <ul className="list-disc pl-5 text-xs text-[#E4DFF0] flex flex-col gap-1">
                          <li>Developing scalable web applications using Java, Spring Boot REST APIs, and ReactJS.</li>
                          <li>Designing MySQL database schemas and configuring Hibernate ORM entity mappings.</li>
                        </ul>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-bold text-[#FFFFFF]">Besant Technologies — <span className="text-[#D8A7FF]">Java Full Stack Trainee &amp; Intern</span></h4>
                          <span className="text-xs font-mono text-[#B6AECA]">2025 – 2026</span>
                        </div>
                        <ul className="list-disc pl-5 text-xs text-[#E4DFF0] flex flex-col gap-1">
                          <li>Completed intensive training in Java Core OOP, Spring Boot, MySQL, REST APIs, and ReactJS.</li>
                          <li>Engineered backend services with Spring Boot controllers, dependency injection, and JPA.</li>
                        </ul>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-bold text-[#FFFFFF]">NLC India Limited — <span className="text-[#D8A7FF]">Web Development Intern (Mines Digitalisation)</span></h4>
                          <span className="text-xs font-mono text-[#B6AECA]">Aug 2024 – Sep 2024</span>
                        </div>
                        <ul className="list-disc pl-5 text-xs text-[#E4DFF0] flex flex-col gap-1">
                          <li>Completed internship training on Mines Digitalisation at Learning &amp; Development Centre, NLC India Limited.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xs font-mono text-[#D8A7FF] font-extrabold uppercase tracking-widest border-b border-[#D8A7FF]/20 pb-1">Projects</h3>
                      
                      <div>
                        <h4 className="text-sm font-bold text-[#FFFFFF]">EverBloom – Event Management System</h4>
                        <p className="text-xs font-mono text-[#D8A7FF]">Tech: Java, Spring Boot, MySQL, HTML, CSS</p>
                        <p className="text-xs text-[#E4DFF0] mt-0.5">Smart event management platform with Customer, Vendor, and Admin workflows built with Spring Boot REST APIs.</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-[#FFFFFF]">Smart Workforce Analytics Dashboard</h4>
                        <p className="text-xs font-mono text-[#D8A7FF]">Tech: ReactJS, JavaScript, HTML, CSS, LocalStorage</p>
                        <p className="text-xs text-[#E4DFF0] mt-0.5">Responsive analytics dashboard presenting employee metrics through interactive visual components.</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-[#FFFFFF]">Laya Bharatanatyam Website</h4>
                        <p className="text-xs font-mono text-[#D8A7FF]">Tech: HTML, CSS, JavaScript</p>
                        <p className="text-xs text-[#E4DFF0] mt-0.5">Elegant responsive web platform showcasing classical performances, classes, and events.</p>
                      </div>
                    </div>

                    {/* Technical Skills */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xs font-mono text-[#D8A7FF] font-extrabold uppercase tracking-widest border-b border-[#D8A7FF]/20 pb-1">Technical Skills</h3>
                      <div className="flex flex-wrap gap-2 text-xs font-mono">
                        {['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Maven', 'Postman'].map((skill, idx) => (
                          <span key={idx} className="bg-[#08070B] border border-[#D8A7FF]/30 text-[#D8A7FF] px-2.5 py-1 rounded-md font-bold">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#08070B] border-t border-[#D8A7FF]/20 flex justify-between items-center text-xs text-[#B6AECA] font-mono">
                <div>Status: <span className="text-[#FBBF24] font-bold">Recruiter Verified Resume Document</span></div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleDownload}
                    className="px-4 py-2 bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] font-extrabold rounded-xl hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download size={14} /> Download Resume
                  </button>
                  <button 
                    onClick={() => setIsPreviewOpen(false)}
                    className="px-5 py-2 bg-[#0E0C16] border border-[#D8A7FF]/40 text-[#FFFFFF] font-bold rounded-xl hover:bg-[#D8A7FF] hover:text-[#08070B] transition-all cursor-pointer"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
        
    </section>
  );
};

export default Resume;

