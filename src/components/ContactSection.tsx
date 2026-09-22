import { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Download, Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { contactInfo } from '../data/portfolioData.ts';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Quick message form states
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${senderName || 'Visitor'}`);
    const mailtoBody = encodeURIComponent(
      `Hi Harshitha,\n\n${message}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-[var(--bg-main)] overflow-hidden">
      {/* Background illumination */}
      <div
        className="absolute bottom-0 right-10 w-[480px] h-[380px] rounded-full blur-[140px] pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: 'var(--accent-glow)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Editorial Heading & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 theme-accent-badge border">
                Let&apos;s Connect
              </div>

              <h2
                id="contact-heading"
                className="text-6xl sm:text-7xl xl:text-8xl font-bold tracking-tight text-[var(--text-main)] font-serif-display leading-[0.9] mb-6"
              >
                GET IN <br />
                <span className="text-[var(--accent-pastel)]">TOUCH</span>
              </h2>

              <div className="flex items-center gap-3 text-[var(--text-muted)] mb-8">
                <span className="text-2xl opacity-75">👁</span>
                <span className="text-xs font-mono tracking-wider uppercase text-[var(--text-muted)]">
                  Open to Opportunities • Analytics & BI
                </span>
              </div>

              <p className="text-[var(--text-body)] text-lg sm:text-xl font-normal leading-relaxed max-w-md mb-10">
                If you&apos;d like to discuss data projects, collaborations, or opportunities, feel free to reach out.
              </p>

              {/* Direct Reach Out Cards */}
              <div className="space-y-4 max-w-md">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] shadow-xs flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl theme-accent-badge border">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[var(--accent-pastel)] tracking-wider uppercase">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm font-semibold text-[var(--text-main)] hover:underline transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] bg-black/5 dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/[0.1] border border-[var(--border-subtle)] transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] shadow-xs flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl theme-accent-badge border">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[var(--accent-pastel)] tracking-wider uppercase">
                        Phone
                      </span>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-semibold text-[var(--text-main)] hover:underline transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    id="copy-phone-btn"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] bg-black/5 dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/[0.1] border border-[var(--border-subtle)] transition-colors cursor-pointer"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* External Links */}
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  id="contact-resume-btn"
                  href={contactInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/[0.08] text-xs font-semibold text-[var(--text-main)] border border-[var(--border-subtle)] transition-all"
                >
                  <Download className="w-4 h-4 text-[var(--accent-pastel)]" />
                  Download Resume
                </a>

                <a
                  id="contact-linkedin-btn"
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/[0.08] text-xs font-bold text-[var(--text-main)] border border-[var(--border-subtle)] transition-all hover:border-[var(--accent-pastel)]"
                >
                  <Linkedin className="w-4 h-4 text-[var(--accent-pastel)]" />
                  LinkedIn Profile
                </a>

                <a
                  id="contact-github-btn"
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/[0.08] text-xs font-semibold text-[var(--text-main)] border border-[var(--border-subtle)] transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Composer */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-7 sm:p-9 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-card)] shadow-xl relative"
            >
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-2 font-serif-display">
                Send a Message
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-6">
                Fill in your note below to directly launch a pre-formatted email to Harshitha.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label htmlFor="contact-sender-name" className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/[0.03] border border-[var(--border-subtle)] text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-pastel)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                    Subject / Project Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Analytics Role / BI Project Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/[0.03] border border-[var(--border-subtle)] text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-pastel)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Harshitha, I came across your portfolio and would love to connect about..."
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/[0.03] border border-[var(--border-subtle)] text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-pastel)] transition-all resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer hover:scale-[1.01] active:scale-[0.99] theme-accent-btn"
                >
                  <Send className="w-4 h-4" />
                  Compose & Send Email
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
