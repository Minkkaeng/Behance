import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, Send } from "lucide-react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "choi90326@gmail.com";

  const handleCopy = () => {
    navigator.clipboard
      ?.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-accent mb-4 block">Contact</span>
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Let's build something legacy</h2>
        <p className="text-lg md:text-xl text-text-sub max-w-2xl mx-auto leading-relaxed">
          새로운 서비스, 도전적인 프로젝트에 관심이 많습니다. <br />
          함께 성장하고 싶은 팀이나 제안이 있다면 편하게 연락 주세요.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative inline-block"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 p-2 md:p-3 rounded-[32px] bg-surface border border-border-subtle shadow-strong">
          <div className="flex items-center gap-4 px-8 py-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Mail size={20} />
            </div>
            <span className="text-lg font-semibold tracking-tight">{email}</span>
          </div>

          <div className="flex items-center gap-3 pr-3 pb-3 md:pb-0">
            <button
              onClick={handleCopy}
              className="px-6 py-4 rounded-2xl bg-bg-soft text-text-sub hover:text-accent transition-colors flex items-center gap-2 font-bold text-sm"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2 text-green-500"
                  >
                    <Check size={18} /> Copied!
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Copy size={18} /> Copy
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              href={`mailto:${email}`}
              className="px-8 py-4 rounded-2xl bg-accent text-white font-bold flex items-center gap-2 hover:shadow-lg transition-all"
            >
              Send Mail <Send size={18} />
            </a>
          </div>
        </div>

        {/* Decor circles */}
        <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-[#ff8ed2]/5 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
}

export default Contact;
