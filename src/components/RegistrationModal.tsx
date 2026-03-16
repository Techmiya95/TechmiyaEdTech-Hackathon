import React, { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
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

  // Replace this with your Google Apps Script Web App URL after deploying
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx7JtNNS5hqNiqoqw_0K5hwghqzyRj-IAzBS5pRrn_ikES9KHk74ib40grC81sHPCH2/exec';

  if (!isOpen) return null;

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
    // Clear error when typing
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

    // Validation passed, proceed to submit

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script often responds with CORS issues unless specifically handled, or no-cors is used
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Since mode is 'no-cors', response won't have status ok or data
      // For simplicity in GAS apps with no-cors, we assume success if no exception is thrown
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn overflow-y-auto">
      
      {/* Absolute Close button overlays on top right node safe spacing */}
      <button onClick={onClose} disabled={loading} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors cursor-pointer z-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Spacious Card Container */}
      <div className="relative w-full max-w-[650px] bg-[#0d1017] rounded-3xl border border-white/5 shadow-2xl p-6 md:p-10 animate-slideUp text-left" onClick={(e) => e.stopPropagation()}>
        
        {/* Success Confirmation Branch */}
        {success ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black gradient-text mb-3">Registration Successful!</h3>
            <p className="text-sm text-text-secondary max-w-xs leading-relaxed">We will contact you soon over your verified email Address.</p>
            <button onClick={onClose} className="mt-8 neon-btn scale-90">Close</button>
          </div>
        ) : (
          <div>
            {/* Header Content Section */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                HACKATHON <span className="gradient-text">REGISTRATION</span>
              </h2>
              <p className="text-sm text-text-secondary">Please fill out full nodes accurately.</p>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full shadow-[0_0_15px_#00f2ff]"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              
              {/* 1. Full Name */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider ml-2">Full Name *</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <input
                    type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe"
className={`block pl-12 pr-4 py-4.5 w-full bg-white/5 border ring-1 ring-transparent ${errors.fullName ? 'border-red-500 ring-red-500/30' : 'border-white/10 ring-primary/20'} rounded-2xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/60 focus:ring-primary/30 focus:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300 group-hover:scale-[1.01]`}
                  />
                </div>
                {errors.fullName && <span className="text-[10px] text-red-500 mt-1 block">{errors.fullName}</span>}
              </div>

              {/* 2. Email */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">Email Address *</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com"
                    className={`block pl-12 pr-4 py-3.5 w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 hover:border-white/20 transition-all duration-300`}
                  />
                </div>
                {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
              </div>

              {/* 3. Phone */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">Phone Number *</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.7l.39 1.54a1 1 0 01-.23 1l-.96.96a15.91 15.91 0 006.6 6.6l.94-.95a1 1 0 011-.23l1.54.39a1 1 0 01.7.94V19a2 2 0 01-2 2h-1C11.75 21 8.36 19.56 5.33 16.5A16.48 16.48 0 013 11a2 2 0 012-2z" /></svg>
                  </div>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="9876543210"
                    className={`block pl-12 pr-4 py-3.5 w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 hover:border-white/20 transition-all duration-300`}
                  />
                </div>
                {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
              </div>

              {/* 4. College */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">College Name *</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <input
                    type="text" name="college" value={formData.college} onChange={handleInputChange} placeholder="University Name"
                    className={`block pl-12 pr-4 py-3.5 w-full bg-white/5 border ${errors.college ? 'border-red-500' : 'border-white/10'} rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 hover:border-white/20 transition-all duration-300`}
                  />
                </div>
                {errors.college && <span className="text-[10px] text-red-500 mt-1 block">{errors.college}</span>}
              </div>

              {/* 5. Degree & 6. Year */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">Degree *</label>
                  <select
                    name="degree" value={formData.degree} onChange={handleInputChange}
className={`block pl-12 pr-4 py-4.5 w-full bg-white/5 border ring-1 ring-transparent ${errors.degree ? 'border-red-500 ring-red-500/30' : 'border-white/10 ring-primary/20'} rounded-2xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/60 focus:ring-primary/30 focus:bg-white/10 cursor-pointer hover:scale-[1.02] transition-all duration-300`}
                  >
                    <option value="" disabled className="bg-zinc-900">Select</option>
                    <option value="BTech" className="bg-zinc-900">BTech</option>
                    <option value="MCA" className="bg-zinc-900">MCA</option>
                    <option value="BCA" className="bg-zinc-900">BCA</option>
                    <option value="MTech" className="bg-zinc-900">MTech</option>
                  </select>
                  {errors.degree && <span className="text-[10px] text-red-500 mt-1 block">{errors.degree}</span>}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">Year *</label>
                  <select
                    name="year" value={formData.year} onChange={handleInputChange}
                    className={`block w-full py-3.5 px-3 bg-white/5 border ${errors.year ? 'border-red-500' : 'border-white/10'} rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 cursor-pointer transition-all duration-300`}
                  >
                    <option value="" disabled className="bg-zinc-900">Select</option>
                    <option value="1st Year" className="bg-zinc-900">1st Year</option>
                    <option value="2nd Year" className="bg-zinc-900">2nd Year</option>
                    <option value="3rd Year" className="bg-zinc-900">3rd Year</option>
                  </select>
                  {errors.year && <span className="text-[10px] text-red-500 mt-1 block">{errors.year}</span>}
                </div>
              </div>

              {/* 7. Interest & 8. Team */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">Interest *</label>
                  <select
                    name="projectInterest" value={formData.projectInterest} onChange={handleInputChange}
                    className={`block w-full py-3.5 px-3 bg-white/5 border ${errors.projectInterest ? 'border-red-500' : 'border-white/10'} rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 cursor-pointer transition-all duration-300`}
                  >
                    <option value="" disabled className="bg-zinc-900">Select</option>
                    <option value="Software" className="bg-zinc-900">Software</option>
                    <option value="Hardware" className="bg-zinc-900">Hardware</option>
                  </select>
                  {errors.projectInterest && <span className="text-[10px] text-red-500 mt-1 block">{errors.projectInterest}</span>}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">Team Name</label>
                  <input
                    type="text" name="teamName" value={formData.teamName} onChange={handleInputChange} placeholder="Optional"
                    className="block px-4 py-4.5 w-full bg-white/5 border ring-1 ring-transparent border-white/10 ring-primary/20 rounded-2xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/60 focus:ring-primary/30 focus:bg-white/10 hover:scale-[1.02] transition-all duration-300"
                  />
                </div>
              </div>

              {/* 9. Project Name */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-white/90 uppercase tracking-wider ml-2">Project Name *</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h10a4 4 0 004-4M3 15a4 4 0 014-4h10a4 4 0 014 4M3 15V9a4 4 0 014-4h10a4 4 0 014 4v6" /></svg>
                  </div>
                  <input
                    type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} placeholder="Smart AI Monitor"
                    className={`block pl-12 pr-4 py-3.5 w-full bg-white/5 border ${errors.projectName ? 'border-red-500' : 'border-white/10'} rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 hover:border-white/20 transition-all duration-300`}
                  />
                </div>
                {errors.projectName && <span className="text-[10px] text-red-500 mt-1 block">{errors.projectName}</span>}
              </div>

              {/* 10. Project Description */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">Project Description *</label>
                <textarea
rows={4} placeholder="Briefly describe your innovative idea and its impact (min 50 words)..."
                  className={`block px-4 py-4.5 w-full bg-white/5 border ring-1 ring-transparent ${errors.projectDescription ? 'border-red-500 ring-red-500/30' : 'border-white/10 ring-primary/20'} rounded-2xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/60 focus:ring-primary/30 focus:bg-white/10 resize-vertical transition-all duration-300 hover:scale-[1.01]`}
                />
                {errors.projectDescription && <span className="text-[10px] text-red-500 mt-1 block">{errors.projectDescription}</span>}
              </div>

              {/* 11. PPT Link */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">PPT/Pitch Link *</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40 group-focus-within:text-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" /></svg>
                  </div>
                  <input
                    type="url" name="pptLink" value={formData.pptLink} onChange={handleInputChange} placeholder="https://drive.google.com/..."
                    className={`block pl-12 pr-4 py-3.5 w-full bg-white/5 border ${errors.pptLink ? 'border-red-500' : 'border-white/10'} rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 hover:border-white/20 transition-all duration-300`}
                  />
                </div>
                {errors.pptLink && <span className="text-[10px] text-red-500 mt-1 block">{errors.pptLink}</span>}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  type="submit" disabled={loading}
className="w-full bg-gradient-to-r from-primary via-primary/90 to-secondary text-white/95 py-4.5 rounded-2xl font-bold text-base tracking-wider uppercase flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed font-black bg-clip-text"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
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
    </div>
  );
};

export default RegistrationModal;
