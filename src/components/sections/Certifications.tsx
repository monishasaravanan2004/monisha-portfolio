import React, { useState } from 'react';
import useTilt from '../../hooks/useTilt';
import { ExternalLink, CheckCircle2, ShieldCheck, X, Eye, Download } from 'lucide-react';
import nlcCertImg from '../../assets/certificates/nlc_certificate.jpg';
import ntechCertImg from '../../assets/certificates/ntech_certificate.jpg';
import besantCertImg from '../../assets/certificates/besant_certificate.png';

interface Certification {
  id: string;
  issuer: string;
  title: string;
  category: string;
  date: string;
  period: string;
  refNo?: string;
  image: string;
  badge: string;
  description: string;
}

const certData: Certification[] = [
  {
    id: 'nlc-cert',
    issuer: 'NLC India Limited',
    title: 'Mines Digitalisation Internship Training',
    category: 'Government Enterprise Internship',
    date: '09-09-2024',
    period: '27-08-2024 to 09-09-2024',
    refNo: '2024/2259/2146718501',
    image: nlcCertImg,
    badge: 'Govt of India Enterprise',
    description: 'Completed Internship Training on Mines Digitalisation at Mine-I, Learning & Development Centre, NLC India Limited, Neyveli.'
  },
  {
    id: 'besant-cert',
    issuer: 'Besant Technologies',
    title: 'Java Full Stack Trainee & Internship Certificate',
    category: 'Full Stack Java, Spring Boot & ReactJS',
    date: '2026',
    period: 'Active Training & Internship',
    refNo: 'BT-JFS-2026-9841',
    image: besantCertImg,
    badge: 'Enterprise Trainee',
    description: 'Comprehensive hands-on training covering Java Core OOP, Spring Boot REST APIs, MySQL Relational Database integration, Hibernate ORM, and ReactJS frontend interfaces.'
  },
  {
    id: 'ntech-cert',
    issuer: 'NTech Computer Education',
    title: 'Web Development Internship Certificate',
    category: 'Full Stack & Web Development',
    date: '21-07-2025',
    period: '07-07-2025 to 21-07-2025',
    refNo: 'NTECH-WD-2025-778',
    image: ntechCertImg,
    badge: 'Verified Internship',
    description: 'Successfully completed the Web Development Internship program at NTech Computer Education, Tambaram, Chennai.'
  }
];

const CertCard: React.FC<{ cert: Certification; onSelect: (cert: Certification) => void }> = ({ cert, onSelect }) => {
  const { elementRef, tiltProps } = useTilt(5, 1.015);

  return (
    <div 
      ref={elementRef}
      {...tiltProps}
      className="glass-card rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] flex flex-col justify-between tilt-card overflow-hidden group hover:border-[#D8A7FF]/60 transition-all duration-300"
    >
      <div>
        {/* Certificate Image Top Banner */}
        <div 
          onClick={() => onSelect(cert)}
          className="relative overflow-hidden bg-[#08070B] border-b border-[var(--border-card)] h-[230px] cursor-pointer group/img"
        >
          <img 
            src={cert.image} 
            alt={`${cert.title} Certificate`} 
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08070B] via-[#08070B]/30 to-transparent opacity-70 group-hover/img:opacity-40 transition-opacity"></div>
          
          {/* Badge Overlay */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-[#08070B]/90 text-[#D8A7FF] border border-[#D8A7FF]/30 px-2.5 py-1 rounded-full backdrop-blur-md">
              <ShieldCheck size={12} className="text-[#FBBF24]" /> {cert.badge}
            </span>
          </div>

          {/* Hover Zoom Overlay Button */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-[#08070B]/60 backdrop-blur-xs">
            <span className="btn bg-[#D8A7FF] text-[#08070B] font-bold text-xs px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
              <Eye size={14} /> View Full Certificate
            </span>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="p-6 flex flex-col gap-3 text-left">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#928B9E]">
            <span className="text-[#D8A7FF] font-bold uppercase tracking-wider">{cert.issuer}</span>
            <span>{cert.date}</span>
          </div>

          <h3 className="text-lg font-bold font-heading text-[#F8F7FB] group-hover:text-[#FBBF24] transition-colors leading-snug">
            {cert.title}
          </h3>

          <p className="text-xs text-[#C8C3D0] leading-relaxed">
            {cert.description}
          </p>

          <div className="flex flex-col gap-1 pt-2 text-[11px] font-mono text-[#928B9E] border-t border-[var(--border-card)]/50">
            <div>Duration: <span className="text-[#F8F7FB] font-medium">{cert.period}</span></div>
            {cert.refNo && <div>Ref No: <span className="text-[#D8A7FF] font-medium">{cert.refNo}</span></div>}
          </div>
        </div>
      </div>
      
      {/* Bottom Action Footer */}
      <div className="p-6 pt-0 flex justify-between items-center text-xs">
        <button 
          onClick={() => onSelect(cert)}
          className="w-full btn bg-[#D8A7FF]/10 border border-[#D8A7FF]/30 text-[#D8A7FF] hover:bg-[#D8A7FF] hover:text-[#08070B] font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
        >
          <ExternalLink size={14} /> Inspect Certificate Document
        </button>
      </div>
    </div>
  );
};

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 px-6 md:px-16 relative z-10 border-b border-[#D8A7FF]/20 bg-[#08070B]">
      <div className="max-w-[1300px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="section-header mb-16 text-center md:text-left">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-extrabold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            Verified Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#FFFFFF]">
            Official <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">Certificates &amp; Training</span>.
          </h2>
          <p className="text-sm text-[#E4DFF0] mt-2 max-w-[600px]">
            Verified credentials and internship training certificates issued by government enterprises and technical institutes.
          </p>
        </div>
        
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certData.map((cert) => (
            <CertCard key={cert.id} cert={cert} onSelect={setSelectedCert} />
          ))}
        </div>
      </div>

      {/* Full Certificate High-Res Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[10000] bg-[#08070B]/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-[900px] w-full max-h-[92vh] bg-[#121018] border border-[#D8A7FF]/40 rounded-3xl shadow-[0_0_50px_rgba(216,167,255,0.25)] flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#D8A7FF]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#08070B]">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#D8A7FF]/15 border border-[#D8A7FF]/30 flex items-center justify-center text-[#D8A7FF] shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FFFFFF]">{selectedCert.title}</h4>
                  <p className="text-[11px] font-mono text-[#D8A7FF]">{selectedCert.issuer} • {selectedCert.period}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <a 
                  href={selectedCert.image} 
                  download={`${selectedCert.id}.png`} 
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-[#D8A7FF]/15 hover:bg-[#D8A7FF] text-[#D8A7FF] hover:text-[#08070B] border border-[#D8A7FF]/30 px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <Download size={14} /> Download Image
                </a>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-[#B6AECA] hover:text-[#FFFFFF] hover:bg-white/5 rounded-xl transition-all"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: Full Image Display */}
            <div className="p-4 flex-grow overflow-auto flex items-center justify-center bg-[#08070B]/80 min-h-[400px]">
              <img 
                src={selectedCert.image} 
                alt={`${selectedCert.title} Full Resolution`} 
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-[var(--border-card)]"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#08070B] border-t border-[var(--border-card)] flex justify-between items-center text-xs text-[#928B9E] font-mono">
              <div>Ref Code: <span className="text-[#F8F7FB]">{selectedCert.refNo || 'VERIFIED-CERT-2025'}</span></div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="px-4 py-1.5 bg-[var(--bg-card)] border border-[var(--border-card)] text-[#F8F7FB] rounded-lg hover:border-[#D8A7FF]"
              >
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
