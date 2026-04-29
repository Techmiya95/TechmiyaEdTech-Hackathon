import React, { useState } from 'react';

interface RegistrationModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isFullPage?: boolean;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, isFullPage = false }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    year: '',
    projectInterest: '',
    teamName: '',
    projectName: '',
    projectDescription: '',
    pptLink: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx7JtNNS5hqNiqoqw_0K5hwghqzyRj-IAzBS5pRrn_ikES9KHk74ib40grC81sHPCH2/exec';

  if (!isFullPage && !isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[- ]/g, ''))) {
      newErrors.phone = 'Invalid phone number (must be 10 digits)';
    }
    if (!formData.college.trim()) newErrors.college = 'College Name is required';
    if (!formData.degree) newErrors.degree = 'Degree is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.projectInterest) newErrors.projectInterest = 'Project Interest is required';
    if (!formData.projectName.trim()) newErrors.projectName = 'Project Name is required';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project Description is required';
    if (!formData.pptLink.trim()) {
      newErrors.pptLink = 'Project pitch PPT link is required';
    } else if (!/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(formData.pptLink)) {
       newErrors.pptLink = 'Invalid link format (must start with http:// or https://)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        college: '',
        degree: '',
        year: '',
        projectInterest: '',
        teamName: '',
        projectName: '',
        projectDescription: '',
        pptLink: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please check network/Configuration.');
    } finally {
      setLoading(false);
    }
  };

  const content = (
    <div className="relative w-full max-w-[650px] bg-bg-dark/80 rounded-3xl border border-white/10 shadow-2xl p-8 md:p-10 animate-slideUp text-left my-8 mx-auto" onClick={(e) => e.stopPropagation()}>
      {/* Subtle glow background inside card */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl -z-10"></div>

      {success ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-black gradient-text mb-3">Registration Successful!</h3>
          <p className="text-sm text-text-secondary max-w-xs leading-relaxed">We will contact you soon over your verified email Address.</p>
          {onClose && <button onClick={onClose} className="mt-8 neon-btn">Close</button>}
        </div>
      ) : (
        <div>
          <div className="mb-8 text-center pt-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
              HACKATHON <span className="gradient-text">REGISTRATION</span>
            </h2>
            <p className="text-sm text-text-secondary">Please fill out all fields accurately.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
          </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-1">
                {/* Section 1: Personal Information */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-primary tracking-widest uppercase">Personal Details</span>
                    <div className="flex-1 h-px bg-white/10"></div>
                  </div>

                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">Full Name *</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors z-10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe"
                        style={{ paddingLeft: '52px' }}
                        className="block pr-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300"
                      />
                    </div>
                    {errors.fullName && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.fullName}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">Email Address *</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors z-10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com"
                        style={{ paddingLeft: '52px' }}
                        className="block pr-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300"
                      />
                    </div>
                    {errors.email && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">Phone Number *</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors z-10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.7l.39 1.54a1 1 0 01-.23 1l-.96.96a15.91 15.91 0 006.6 6.6l.94-.95a1 1 0 011-.23l1.54.39a1 1 0 011 .15z" />
                        </svg>
                      </div>
                      <input
                        type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="9876543210"
                        style={{ paddingLeft: '52px' }}
                        className="block pr-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300"
                      />
                    </div>
                    {errors.phone && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.phone}</span>}
                  </div>

                  {/* College */}
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">College Name *</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors z-10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <input
                        type="text" name="college" value={formData.college} onChange={handleInputChange} placeholder="University Name"
                        style={{ paddingLeft: '52px' }}
                        className="block pr-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300"
                      />
                    </div>
                    {errors.college && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.college}</span>}
                  </div>
                </div>

                {/* Section 2: Academic Details */}
                <div className="flex flex-col gap-5 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-secondary tracking-widest uppercase">Academic Details</span>
                    <div className="flex-1 h-px bg-white/10"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5 border-none">
                      <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">Degree *</label>
                      <select name="degree" value={formData.degree} onChange={handleInputChange} className="block px-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] cursor-pointer transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:calc(100%-20px)_center] pr-10">
                        <option value="" disabled className="bg-[#0d1017]">Select Degree</option>
                        <option value="BTech" className="bg-[#0d1017]">BTech</option>
                        <option value="MCA" className="bg-[#0d1017]">MCA</option>
                        <option value="BCA" className="bg-[#0d1017]">BCA</option>
                        <option value="MTech" className="bg-[#0d1017]">MTech</option>
                      </select>
                      {errors.degree && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.degree}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 border-none">
                      <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">Year *</label>
                      <select name="year" value={formData.year} onChange={handleInputChange} className="block px-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] cursor-pointer transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:calc(100%-20px)_center] pr-10">
                        <option value="" disabled className="bg-[#0d1017]">Select Year</option>
                        <option value="1st Year" className="bg-[#0d1017]">1st Year</option>
                        <option value="2nd Year" className="bg-[#0d1017]">2nd Year</option>
                        <option value="3rd Year" className="bg-[#0d1017]">3rd Year</option>
                        <option value="4th Year" className="bg-[#0d1017]">4th Year</option>
                      </select>
                      {errors.year && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.year}</span>}
                    </div>
                  </div>
                </div>

                {/* Section 3: Project Information */}
                <div className="flex flex-col gap-5 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-primary tracking-widest uppercase">Project Ideas</span>
                    <div className="flex-1 h-px bg-white/10"></div>
                  </div>

                {/* Project Interest / Team Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 border-none">
                    <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">Project Interest *</label>
                    <select name="projectInterest" value={formData.projectInterest} onChange={handleInputChange} className="block px-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] cursor-pointer transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:calc(100%-20px)_center] pr-10">
                      <option value="" disabled className="bg-[#0d1017]">Select Interest</option>
                      <option value="Software" className="bg-[#0d1017]">Software</option>
                      <option value="Hardware" className="bg-[#0d1017]">Hardware</option>
                      <option value="AI/ML" className="bg-[#0d1017]">AI/ML</option>
                      <option value="Web3" className="bg-[#0d1017]">Web3</option>
                    </select>
                    {errors.projectInterest && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.projectInterest}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5 border-none">
                    <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">Team Name (Optional)</label>
                    <input
                      type="text" name="teamName" value={formData.teamName} onChange={handleInputChange} placeholder="Awesome Team"
                      className="block px-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Project Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">Project Name *</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors z-10">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <input
                      type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} placeholder="Smart AI Monitor"
                      style={{ paddingLeft: '52px' }}
                      className="block pr-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300"
                    />
                  </div>
                  {errors.projectName && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.projectName}</span>}
                </div>

                {/* Project Description */}
                <div className="flex flex-col gap-1.5">
                  <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">Project Description *</label>
                  <textarea
                    name="projectDescription" value={formData.projectDescription} onChange={handleInputChange} rows={3} placeholder="Briefly describe your innovative idea and its impact..."
                    className="block px-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-[28px] text-lg font-medium text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] resize-none hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300"
                  />
                  {errors.projectDescription && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.projectDescription}</span>}
                </div>

                {/* PPT Link */}
                <div className="flex flex-col gap-1.5">
                  <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider px-2">PPT/Pitch Link *</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors z-10">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.102-7.172a4 4 0 005.656 0l4-4a4 4 0 005.656-5.656l-1.102 1.101" />
                      </svg>
                    </div>
                    <input
                      type="url" name="pptLink" value={formData.pptLink} onChange={handleInputChange} placeholder="https://drive.google.com/..."
                      style={{ paddingLeft: '52px' }}
                      className="block pr-5 py-4 w-full bg-[#11141b]/80 backdrop-blur-xl border border-white/10 rounded-full text-lg font-medium text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-[#1a1e29] focus:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300"
                    />
                  </div>
                  {errors.pptLink && <span className="text-xs text-red-400 mt-1 block flex items-center gap-1 animate-shake px-2"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>{errors.pptLink}</span>}
                </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit" disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3.5 px-8 rounded-xl font-bold text-base tracking-wider uppercase shadow-[0_0_25px_rgba(0,242,255,0.3)] hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      'Submit Registration'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
  );

  if (isFullPage) {
    return content;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="flex min-h-full items-center justify-center p-4">
        {onClose && (
          <button 
            onClick={onClose} 
            disabled={loading} 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer z-50 p-2 rounded-full hover:bg-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {content}
      </div>
    </div>
  );
};

export default RegistrationModal;

