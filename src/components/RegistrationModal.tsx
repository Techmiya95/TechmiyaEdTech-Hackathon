import React, { useState } from 'react';

interface Participant {
  name: string;
  email: string;
  phone: string;
  college: string;
}

interface RegistrationModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isFullPage?: boolean;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, isFullPage = false }) => {
  const [formData, setFormData] = useState({
    teamName: '',
    participants: [{ name: '', email: '', phone: '', college: '' }] as Participant[],
    eventType: 'Hackathon' as 'Hackathon' | 'Ideathon',
    projectTitle: '',
    ideaDescription: '',
    fileLink: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [teamId, setTeamId] = useState('');

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx7JtNNS5hqNiqoqw_0K5hwghqzyRj-IAzBS5pRrn_ikES9KHk74ib40grC81sHPCH2/exec';

  if (!isFullPage && !isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.teamName.trim()) newErrors.teamName = 'Team Name is required';

    formData.participants.forEach((p, index) => {
      if (!p.name.trim()) newErrors[`p_name_${index}`] = 'Name is required';
      if (!p.college.trim()) newErrors[`p_college_${index}`] = 'College is required';
      if (!p.email.trim()) {
        newErrors[`p_email_${index}`] = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) {
        newErrors[`p_email_${index}`] = 'Invalid email';
      }
      if (!p.phone.trim()) {
        newErrors[`p_phone_${index}`] = 'Phone is required';
      } else if (!/^\d{10}$/.test(p.phone.replace(/[- ]/g, ''))) {
        newErrors[`p_phone_${index}`] = 'Must be 10 digits';
      }
    });

    if (formData.eventType === 'Hackathon') {
      if (!formData.projectTitle.trim()) newErrors.projectTitle = 'Project Title is required';
    } else {
      if (!formData.fileLink.trim()) {
        newErrors.fileLink = 'Google Drive Link is required';
      } else if (!formData.fileLink.includes('drive.google.com')) {
        newErrors.fileLink = 'Must be a valid Google Drive link (make sure it is public)';
      }
    }
    if (!formData.ideaDescription.trim()) newErrors.ideaDescription = 'Idea Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleParticipantChange = (index: number, field: keyof Participant, value: string) => {
    const updatedParticipants = [...formData.participants];
    updatedParticipants[index] = { ...updatedParticipants[index], [field]: value };
    setFormData(prev => ({ ...prev, participants: updatedParticipants }));

    const errorKey = `p_${field}_${index}`;
    if (errors[errorKey]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[errorKey];
        return next;
      });
    }
  };

  const addParticipant = () => {
    if (formData.participants.length < 4) {
      setFormData(prev => ({
        ...prev,
        participants: [...prev.participants, { name: '', email: '', phone: '', college: '' }]
      }));
    }
  };

  const removeParticipant = (index: number) => {
    if (formData.participants.length > 1) {
      const updated = formData.participants.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, participants: updated }));
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!validate()) return;

    setLoading(true);

    const generatedTeamId = `TM-${Math.random().toString(36).slice(2, 11).toUpperCase()}`;

    const submissionData = {
      timestamp: new Date().toISOString(),
      teamId: generatedTeamId,
      teamName: formData.teamName,
      eventType: formData.eventType,

      p1Name: formData.participants[0]?.name || '',
      p1Email: formData.participants[0]?.email || '',
      p1Phone: formData.participants[0]?.phone || '',
      p1College: formData.participants[0]?.college || '',

      p2Name: formData.participants[1]?.name || '',
      p2Email: formData.participants[1]?.email || '',
      p2Phone: formData.participants[1]?.phone || '',
      p2College: formData.participants[1]?.college || '',

      p3Name: formData.participants[2]?.name || '',
      p3Email: formData.participants[2]?.email || '',
      p3Phone: formData.participants[2]?.phone || '',
      p3College: formData.participants[2]?.college || '',

      p4Name: formData.participants[3]?.name || '',
      p4Email: formData.participants[3]?.email || '',
      p4Phone: formData.participants[3]?.phone || '',
      p4College: formData.participants[3]?.college || '',

      projectTitle: formData.eventType === 'Hackathon' ? formData.projectTitle : 'N/A',
      ideaDescription: formData.ideaDescription,
      fileUploadLink: formData.eventType === 'Ideathon' ? formData.fileLink : 'N/A',
    };

    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(submissionData),
      });

      const data = await res.json();

      if (data.status === 'success') {
        setTeamId(generatedTeamId);
        setSuccess(true);

        setFormData({
          teamName: '',
          participants: [{ name: '', email: '', phone: '', college: '' }],
          eventType: 'Hackathon',
          projectTitle: '',
          ideaDescription: '',
          fileLink: '',
        });
      } else {
        throw new Error('Submission failed');
      }

    } catch (error) {
      console.error('Submission error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const modalContent = (
    <div className={`relative w-full max-w-5xl glass bg-[#050B14]/80 border border-white/5 rounded-[40px] shadow-[0_0_100px_rgba(34,211,238,0.05)] p-8 md:p-16 animate-slideUp ${isFullPage ? '' : ''} overflow-hidden`} onClick={(e) => e.stopPropagation()}>
      {/* Animated Cyberpunk Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      {success ? (
        <div className="flex flex-col items-center justify-center py-20 text-center relative z-10">
          <div className="w-32 h-32 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(34,211,238,0.3)] animate-pulse">
            <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-5xl font-black gradient-text mb-4 uppercase tracking-tight">Access Granted</h3>
          <p className="text-white/60 max-w-md text-lg font-medium leading-relaxed mb-8">Your crew has been successfully registered to the mainframe.</p>

          <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-8 w-full max-w-sm mx-auto backdrop-blur-xl relative overflow-hidden group hover:border-cyan-400 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 group-hover:from-cyan-500/10 transition-colors"></div>
            <p className="text-[10px] text-cyan-400/70 uppercase tracking-[0.4em] mb-2 font-bold relative z-10">Unique Identity Hash</p>
            <p className="text-4xl font-mono font-black text-white tracking-wider relative z-10">{teamId}</p>
          </div>

          {onClose && <button onClick={onClose} className="mt-12 group relative px-10 py-4 font-black uppercase tracking-[0.3em] text-sm text-cyan-400 transition-colors hover:text-black border border-cyan-400/50 hover:border-transparent rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            <span className="relative z-10">Return to Nexus</span>
          </button>}
        </div>
      ) : (
        <div className="relative z-10">
          <div className="mb-20 text-center px-4 md:px-0 relative">
            {/* Background Dimmer for Heading Area */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full bg-black/40 blur-[100px] pointer-events-none z-0"></div>
            
            <div className="relative z-10 animate-levitate inline-block px-8 py-10 sm:px-20 sm:py-16 rounded-[2.5rem] sm:rounded-[4rem] bg-black/20 backdrop-blur-[24px] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden group">
              {/* Holographic Scanning Line - Subtle */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-32 w-full -translate-y-full animate-[scan_6s_linear_infinite] pointer-events-none"></div>
              
              <h2 className="text-3xl sm:text-6xl lg:text-9xl font-black uppercase tracking-tighter leading-[1.1] relative z-10">
                <span className="text-white block mb-4 sm:mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  TECHMIYA
                </span> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-[length:200%_auto] animate-gradient-flow drop-shadow-[0_0_30px_rgba(0,114,255,0.5)]">
                  NEXTGEN 1.0
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse"></div>
                <p className="text-[11px] text-white/80 font-bold uppercase tracking-[0.4em]">International Level Hackathon & National Level Ideathon</p>
              </div>
              <p className="text-blue-400/60 text-xs font-black uppercase tracking-widest mt-2">Innovation Challenges Series</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-32">
            {/* Section 1: Team Details */}
            <div className="space-y-12">
              <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-8">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-cyan-400 font-black text-base md:text-lg shadow-[0_0_15px_rgba(34,211,238,0.2)]">1</div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">TEAM DETAILS</h3>
              </div>

              <div className="relative group flex flex-col gap-5">
                <label htmlFor="teamName" className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Team Name <span className="text-red-500">*</span></label>
                <div className={`relative flex items-center w-full h-16 px-6 bg-white/[0.02] border ${errors.teamName ? 'border-red-500' : 'border-white/10'} rounded-2xl focus-within:border-cyan-400 focus-within:bg-white/[0.05] focus-within:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 group-focus-within:text-cyan-400`}>
                  <svg className="w-6 h-6 text-white/30 mr-4 group-focus-within:text-cyan-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <input
                    type="text" id="teamName" name="teamName" value={formData.teamName} onChange={handleInputChange} placeholder="e.g., Cyber Knights"
                    className="w-full bg-transparent text-base md:text-xl font-medium text-white focus:outline-none placeholder-white/20 h-full"
                  />
                </div>
                {errors.teamName && <span className="text-sm text-red-500 font-bold ml-2">{errors.teamName}</span>}
              </div>
            </div>

            {/* Section 2: Participants */}
            <div className="space-y-12">
              <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-8">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-cyan-400 font-black text-base md:text-lg shadow-[0_0_15px_rgba(34,211,238,0.2)]">2</div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">TEAM MEMBERS</h3>
                <span className="ml-auto text-xs md:text-sm font-black text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-3 md:px-4 py-2 rounded-xl">{formData.participants.length} / 4</span>
              </div>

              <div className="space-y-12">
                {formData.participants.map((participant, index) => (
                  <div key={index} className="relative p-8 md:p-10 glass border border-white/5 rounded-3xl space-y-12 group transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                    <div className="flex justify-between items-center border-b border-white/5 pb-8">
                      <div className="flex items-center gap-4">
                        <span className="text-base md:text-lg font-black text-white/80 uppercase tracking-widest">Participant {index + 1}</span>
                        {index === 0 && <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-[10px] md:text-xs font-black px-3 md:px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.3)]">Team Leader</span>}
                      </div>
                      {index > 0 && (
                        <button type="button" onClick={() => removeParticipant(index)} className="text-white/30 hover:text-red-400 hover:bg-red-400/10 p-3 rounded-xl transition-all">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-5">
                        <label className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Full Name <span className="text-red-500">*</span></label>
                        <div className={`relative flex items-center w-full h-16 px-5 bg-white/[0.02] border ${errors[`p_name_${index}`] ? 'border-red-500' : 'border-white/10'} rounded-2xl focus-within:border-cyan-400 focus-within:bg-white/[0.05] transition-all group/input`}>
                          <svg className="w-6 h-6 text-white/30 mr-4 group-focus-within/input:text-cyan-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                          <input
                            type="text" value={participant.name} placeholder="e.g., Jane Doe"
                            onChange={(e) => handleParticipantChange(index, 'name', e.target.value)}
                            className="w-full bg-transparent text-lg font-medium text-white focus:outline-none placeholder-white/20 h-full"
                          />
                        </div>
                        {errors[`p_name_${index}`] && <span className="text-sm text-red-500 font-bold ml-2">{errors[`p_name_${index}`]}</span>}
                      </div>

                      <div className="flex flex-col gap-5">
                        <label className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Phone Number <span className="text-red-500">*</span></label>
                        <div className={`relative flex items-center w-full h-16 px-5 bg-white/[0.02] border ${errors[`p_phone_${index}`] ? 'border-red-500' : 'border-white/10'} rounded-2xl focus-within:border-cyan-400 focus-within:bg-white/[0.05] transition-all group/input`}>
                          <svg className="w-6 h-6 text-white/30 mr-4 group-focus-within/input:text-cyan-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                          <input
                            type="tel" value={participant.phone} placeholder="10-digit number"
                            onChange={(e) => handleParticipantChange(index, 'phone', e.target.value)}
                            className="w-full bg-transparent text-base md:text-lg font-medium text-white focus:outline-none placeholder-white/20 h-full"
                          />
                        </div>
                        {errors[`p_phone_${index}`] && <span className="text-sm text-red-500 font-bold ml-2">{errors[`p_phone_${index}`]}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-5">
                        <label className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Email Address <span className="text-red-500">*</span></label>
                        <div className={`relative flex items-center w-full h-16 px-5 bg-white/[0.02] border ${errors[`p_email_${index}`] ? 'border-red-500' : 'border-white/10'} rounded-2xl focus-within:border-cyan-400 focus-within:bg-white/[0.05] transition-all group/input`}>
                          <svg className="w-6 h-6 text-white/30 mr-4 group-focus-within/input:text-cyan-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          <input
                            type="email" value={participant.email} placeholder="jane@example.com"
                            onChange={(e) => handleParticipantChange(index, 'email', e.target.value)}
                            className="w-full bg-transparent text-base md:text-lg font-medium text-white focus:outline-none placeholder-white/20 h-full"
                          />
                        </div>
                        {errors[`p_email_${index}`] && <span className="text-sm text-red-500 font-bold ml-2">{errors[`p_email_${index}`]}</span>}
                      </div>

                      <div className="flex flex-col gap-5">
                        <label className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">College Name <span className="text-red-500">*</span></label>
                        <div className={`relative flex items-center w-full h-16 px-5 bg-white/[0.02] border ${errors[`p_college_${index}`] ? 'border-red-500' : 'border-white/10'} rounded-2xl focus-within:border-cyan-400 focus-within:bg-white/[0.05] transition-all group/input`}>
                          <svg className="w-6 h-6 text-white/30 mr-4 group-focus-within/input:text-cyan-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                          <input
                            type="text" value={participant.college} placeholder="e.g., Tech University"
                            onChange={(e) => handleParticipantChange(index, 'college', e.target.value)}
                            className="w-full bg-transparent text-base md:text-lg font-medium text-white focus:outline-none placeholder-white/20 h-full"
                          />
                        </div>
                        {errors[`p_college_${index}`] && <span className="text-sm text-red-500 font-bold ml-2">{errors[`p_college_${index}`]}</span>}
                      </div>
                    </div>
                  <div 
            key={`streak-${index}`} 
            className="light-streak opacity-20" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          ></div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addParticipant}
                disabled={formData.participants.length >= 4}
                className="w-full h-20 bg-transparent border-2 border-dashed border-white/20 rounded-3xl text-white/60 font-black text-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl leading-none -mt-0.5">+</span>
                </div>
                ADD ANOTHER MEMBER
              </button>
            </div>

            {/* Section 3: Event Type */}
            <div className="space-y-12">
              <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-8">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-cyan-400 font-black text-base md:text-lg shadow-[0_0_15px_rgba(34,211,238,0.2)]">3</div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">PROJECT TRACK</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 p-3 bg-white/[0.02] border border-white/10 rounded-3xl relative">
                <div className={`absolute bottom-3 h-1.5 w-[calc(50%-16px)] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transition-all duration-500 ease-out z-0 shadow-[0_0_20px_rgba(34,211,238,0.8)] ${formData.eventType === 'Hackathon' ? 'left-3' : 'left-[calc(50%+4px)]'}`}></div>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, eventType: 'Hackathon' }))}
                  className={`relative z-10 py-5 rounded-2xl font-black text-xl transition-colors duration-300 flex items-center justify-center gap-3 ${formData.eventType === 'Hackathon' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  HACKATHON
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, eventType: 'Ideathon' }))}
                  className={`relative z-10 py-5 rounded-2xl font-black text-xl transition-colors duration-300 flex items-center justify-center gap-3 ${formData.eventType === 'Ideathon' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  IDEATHON
                </button>
              </div>

              <div className="min-h-[220px]">
                <div className="flex flex-col gap-8 animate-fadeIn">
                  {formData.eventType === 'Hackathon' && (
                    <div className="flex flex-col gap-5 animate-fadeIn">
                      <label htmlFor="projectTitle" className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Project Title <span className="text-red-500">*</span></label>
                      <input
                        type="text" id="projectTitle" name="projectTitle" value={formData.projectTitle} onChange={handleInputChange} placeholder="e.g., AI Diagnostic System"
                        className={`block w-full h-16 px-6 text-base md:text-xl font-medium text-white bg-white/[0.02] border ${errors.projectTitle ? 'border-red-500' : 'border-white/10'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all placeholder-white/20`}
                      />
                      {errors.projectTitle && <span className="text-sm text-red-500 font-bold ml-2">{errors.projectTitle}</span>}
                    </div>
                  )}

                  <div className="flex flex-col gap-5">
                    <label className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Project Idea / Description <span className="text-red-500">*</span></label>
                    <textarea
                      id="ideaDescription" name="ideaDescription" value={formData.ideaDescription} onChange={handleInputChange}
                      placeholder="Describe what you plan to build..."
                      className={`block w-full min-h-[180px] p-6 text-base md:text-lg font-medium text-white bg-white/[0.02] border ${errors.ideaDescription ? 'border-red-500' : 'border-white/10'} rounded-3xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all resize-none placeholder-white/20`}
                    />
                    {errors.ideaDescription && <span className="text-sm text-red-500 font-bold ml-2">{errors.ideaDescription}</span>}
                  </div>

                  {formData.eventType === 'Ideathon' && (
                    <div className="flex flex-col gap-5 animate-fadeIn">
                      <label htmlFor="fileLink" className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Google Drive Presentation Link <span className="text-red-500">*</span></label>
                      <div className={`relative flex items-center w-full h-16 px-6 bg-white/[0.02] border ${errors.fileLink ? 'border-red-500' : 'border-white/10'} rounded-2xl focus-within:border-cyan-400 focus-within:bg-white/[0.05] transition-all group/input`}>
                        <svg className="w-6 h-6 text-white/30 mr-4 group-focus-within/input:text-cyan-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                        <input
                          type="url" id="fileLink" name="fileLink" value={formData.fileLink} onChange={handleInputChange} placeholder="https://drive.google.com/..."
                          className="w-full bg-transparent text-base md:text-xl font-medium text-white focus:outline-none placeholder-white/20 h-full"
                        />
                      </div>
                      <p className="text-xs text-white/40 ml-2 font-bold uppercase tracking-wider">Please ensure link access is set to "Anyone with the link"</p>
                      {errors.fileLink && <span className="text-sm text-red-500 font-bold ml-2">{errors.fileLink}</span>}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-10 flex flex-col items-center gap-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full max-w-lg h-20 text-2xl font-black shadow-[0_0_50px_rgba(34,211,238,0.3)] hover:shadow-[0_0_80px_rgba(34,211,238,0.6)] flex items-center justify-center rounded-full transition-all duration-500 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none bg-gradient-to-r from-cyan-400 to-blue-600 text-white group"
              >
                {loading ? (
                  <>
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin mr-4"></div>
                    PROCESSING...
                  </>
                ) : (
                  <>
                    SUBMIT REGISTRATION
                    <svg className="w-8 h-8 text-white transition-transform duration-300 ml-4 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </>
                )}
              </button>

              {/* WhatsApp Community Link */}
              <div className="flex flex-col items-center mt-4 w-full max-w-lg">
                <p className="text-text-secondary text-sm md:text-base font-medium mb-3 text-center">
                  Open this link to join my WhatsApp Community:
                </p>
                <a href="https://chat.whatsapp.com/GPaThC9U3ouBGmXP8TkJ4g" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full h-20 rounded-full bg-white/[0.03] border border-green-500/30 text-white font-black text-2xl hover:bg-green-500/10 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 group">
                  <svg className="w-8 h-8 text-green-500 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  Join WhatsApp Group
                </a>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );

  if (isFullPage) {
    return (
      <div className="w-full flex justify-center pt-20 pb-12 px-4">
        {modalContent}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9000] flex items-start justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto pt-80 md:pt-96">
      {onClose && (
        <button
          onClick={onClose}
          disabled={loading}
          className="fixed top-80 md:top-96 right-10 text-white/50 hover:text-white transition-all cursor-pointer z-[10001] hover:rotate-90 p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      {modalContent}
    </div>
  );
};

export default RegistrationModal;

