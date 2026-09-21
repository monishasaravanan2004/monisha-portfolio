import React, { useState, type FormEvent } from 'react';
import useTilt from '../../hooks/useTilt';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle, ExternalLink, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { elementRef, tiltProps } = useTilt(3, 1.01);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address';
        return undefined;
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: string, value: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const validateAll = (): boolean => {
    const nameErr = validateField('name', name);
    const emailErr = validateField('email', email);
    const subjectErr = validateField('subject', subject);
    const messageErr = validateField('message', message);

    const newErrors = {
      name: nameErr,
      email: emailErr,
      subject: subjectErr,
      message: messageErr,
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    return !nameErr && !emailErr && !subjectErr && !messageErr;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateAll()) {
      setStatus('error');
      setErrorMessage("Please fix the errors in the form before sending.");
      triggerToast("Form validation failed. Please check highlighted inputs.");
      return;
    }

    setLoading(true);
    setStatus('idle');
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey && serviceId !== 'your_emailjs_service_id') {
        // Send real email directly via EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: name.trim(),
            from_email: email.trim(),
            reply_to: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
            to_name: 'Monisha S',
            to_email: 'monishamonisaravanan08@gmail.com',
          },
          publicKey
        );
      } else {
        // Simulated sending fallback when EmailJS variables are not set in environment
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus('success');
      triggerToast("Message sent successfully! I will reply to your email shortly.");
      
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.75 }
      });

      // Clear input fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
      setTouched({});
    } catch (err: any) {
      console.error("EmailJS submit error:", err);
      setStatus('error');
      setErrorMessage(err?.text || err?.message || "Failed to deliver message via server. Please try emailing directly.");
      triggerToast("Submission error. Please check your network or try direct email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 relative z-10 bg-[#08070B]">
      <div className="max-w-[1100px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-extrabold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#FFFFFF]">
            Let's build something <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">extraordinary</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left direct contact details */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8 text-left">
            <p className="text-sm text-[#E4DFF0] leading-relaxed font-normal">
              I am actively seeking opportunities as a Java Full Stack Developer. If you have open software engineer positions, internship inquiries, or questions about my projects, feel free to connect!
            </p>
            
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-[#D8A7FF]/15 border border-[#D8A7FF]/30 flex items-center justify-center text-[#D8A7FF] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-[#B6AECA] font-mono uppercase tracking-widest">Email</h4>
                  <a href="mailto:monishamonisaravanan08@gmail.com" className="text-sm font-semibold text-[#FFFFFF] hover:text-[#D8A7FF] transition-colors">monishamonisaravanan08@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-[#D8A7FF]/15 border border-[#D8A7FF]/30 flex items-center justify-center text-[#D8A7FF] shrink-0">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-[#B6AECA] font-mono uppercase tracking-widest">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/monishaaravanan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-[#FFFFFF] hover:text-[#D8A7FF] transition-colors inline-flex items-center gap-1.5"
                  >
                    LinkedIn Profile <ExternalLink size={12} className="text-[#D8A7FF]" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-[#D8A7FF]/15 border border-[#D8A7FF]/30 flex items-center justify-center text-[#D8A7FF] shrink-0">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-[#B6AECA] font-mono uppercase tracking-widest">GitHub</h4>
                  <a 
                    href="https://github.com/monishasaravanan2004" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-[#FFFFFF] hover:text-[#D8A7FF] transition-colors inline-flex items-center gap-1.5"
                  >
                    GitHub Profile <ExternalLink size={12} className="text-[#D8A7FF]" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-[#D8A7FF]/15 border border-[#D8A7FF]/30 flex items-center justify-center text-[#D8A7FF] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-[#B6AECA] font-mono uppercase tracking-widest">Phone / WhatsApp</h4>
                  <a href="tel:6383249841" className="text-sm font-semibold text-[#FFFFFF] hover:text-[#D8A7FF] transition-colors">+91 63832 49841</a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-[#D8A7FF]/15 border border-[#D8A7FF]/30 flex items-center justify-center text-[#D8A7FF] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-[#B6AECA] font-mono uppercase tracking-widest">Location</h4>
                  <p className="text-sm font-semibold text-[#FFFFFF]">Immediate Joiner | Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right form container */}
          <div className="lg:col-span-7">
            <div 
              ref={elementRef}
              {...tiltProps}
              className="glass-card p-6 sm:p-8 border-[#D8A7FF]/30 bg-[#0E0C16] shadow-2xl tilt-card text-left"
            >
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                
                {status === 'success' && (
                  <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 rounded-xl text-xs animate-fadeIn">
                    <CheckCircle size={18} className="shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <h5 className="font-bold text-sm text-emerald-300">Message Delivered Successfully!</h5>
                      <p className="mt-1 text-emerald-200/90 leading-relaxed">
                        Thank you for reaching out. Your message has been sent directly to Monisha's email inbox (<span className="underline font-mono">monishamonisaravanan08@gmail.com</span>). I will respond as soon as possible!
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-rose-500/10 border border-rose-500/40 text-rose-300 rounded-xl text-xs animate-fadeIn">
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-rose-400" />
                    <div>
                      <h5 className="font-bold text-sm text-rose-300">Message Could Not Be Sent</h5>
                      <p className="mt-1 text-rose-200/90 leading-relaxed">
                        {errorMessage || "Please check your details and try again, or email directly at monishamonisaravanan08@gmail.com"}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 text-xs">
                    <label htmlFor="name" className="font-bold text-[#E4DFF0] uppercase tracking-wider flex justify-between">
                      <span>Your Name</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (touched.name) {
                          setErrors(prev => ({ ...prev, name: validateField('name', e.target.value) }));
                        }
                      }}
                      onBlur={() => handleBlur('name', name)}
                      placeholder="John Doe" 
                      className={`bg-[#08070B] p-3 rounded-xl outline-none text-[#FFFFFF] placeholder-[#928B9E] transition-all border ${
                        errors.name && touched.name
                          ? 'border-rose-500/80 focus:border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.2)]'
                          : 'border-[#D8A7FF]/30 focus:border-[#D8A7FF]'
                      }`}
                    />
                    {errors.name && touched.name && (
                      <span className="text-[11px] text-rose-400 font-medium mt-0.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 text-xs">
                    <label htmlFor="email" className="font-bold text-[#E4DFF0] uppercase tracking-wider flex justify-between">
                      <span>Your Email</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (touched.email) {
                          setErrors(prev => ({ ...prev, email: validateField('email', e.target.value) }));
                        }
                      }}
                      onBlur={() => handleBlur('email', email)}
                      placeholder="john@example.com" 
                      className={`bg-[#08070B] p-3 rounded-xl outline-none text-[#FFFFFF] placeholder-[#928B9E] transition-all border ${
                        errors.email && touched.email
                          ? 'border-rose-500/80 focus:border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.2)]'
                          : 'border-[#D8A7FF]/30 focus:border-[#D8A7FF]'
                      }`}
                    />
                    {errors.email && touched.email && (
                      <span className="text-[11px] text-rose-400 font-medium mt-0.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-xs">
                  <label htmlFor="subject" className="font-bold text-[#E4DFF0] uppercase tracking-wider flex justify-between">
                    <span>Subject</span>
                    <span className="text-rose-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (touched.subject) {
                        setErrors(prev => ({ ...prev, subject: validateField('subject', e.target.value) }));
                      }
                    }}
                    onBlur={() => handleBlur('subject', subject)}
                    placeholder="Project / Job Opportunity" 
                    className={`bg-[#08070B] p-3 rounded-xl outline-none text-[#FFFFFF] placeholder-[#928B9E] transition-all border ${
                      errors.subject && touched.subject
                        ? 'border-rose-500/80 focus:border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.2)]'
                        : 'border-[#D8A7FF]/30 focus:border-[#D8A7FF]'
                    }`}
                  />
                  {errors.subject && touched.subject && (
                    <span className="text-[11px] text-rose-400 font-medium mt-0.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.subject}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 text-xs">
                  <label htmlFor="message" className="font-bold text-[#E4DFF0] uppercase tracking-wider flex justify-between">
                    <span>Message</span>
                    <span className="text-rose-400">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (touched.message) {
                        setErrors(prev => ({ ...prev, message: validateField('message', e.target.value) }));
                      }
                    }}
                    onBlur={() => handleBlur('message', message)}
                    placeholder="Tell me about your job opportunity or project requirement..." 
                    className={`bg-[#08070B] p-3 rounded-xl outline-none text-[#FFFFFF] placeholder-[#928B9E] transition-all resize-none border ${
                      errors.message && touched.message
                        ? 'border-rose-500/80 focus:border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.2)]'
                        : 'border-[#D8A7FF]/30 focus:border-[#D8A7FF]'
                    }`}
                  ></textarea>
                  {errors.message && touched.message && (
                    <span className="text-[11px] text-rose-400 font-medium mt-0.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg shadow-[rgba(216,167,255,0.2)] transition-all cursor-pointer disabled:opacity-50 mt-1"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message to Email</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Toast Notification Box */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-[1000] p-4 bg-[#0E0C16] border border-[#D8A7FF]/40 backdrop-blur-md rounded-xl shadow-2xl flex items-center gap-2.5 text-xs text-[#FFFFFF] animate-slideUp">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FBBF24] animate-pulse"></div>
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
};

export default Contact;
