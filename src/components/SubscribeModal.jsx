import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Users } from "lucide-react";

export default function SubscribeModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subscribers, setSubscribers] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  // Load subscribers from localStorage on mount
  useEffect(() => {
    const data = localStorage.getItem("elementum_subscribers");
    if (data) {
      try {
        setSubscribers(JSON.parse(data));
      } catch (e) {
        setSubscribers([]);
      }
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    const newSubscriber = {
      email: email,
      timestamp: new Date().toLocaleString(),
    };

    const updated = [newSubscriber, ...subscribers];
    localStorage.setItem("elementum_subscribers", JSON.stringify(updated));
    setSubscribers(updated);
    setIsSubmitted(true);
    setEmail("");
  };

  const clearSubscribers = () => {
    localStorage.removeItem("elementum_subscribers");
    setSubscribers([]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md bg-[#fcfbf7] rounded-3xl border border-neutral-200/80 p-8 shadow-2xl overflow-hidden z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-neutral-605" />
            </button>

            {/* Content Switcher */}
            {!isSubmitted ? (
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#ef4444]">BECOME AN INSIDER</span>
                <h3 className="font-display font-medium text-2xl text-neutral-900 mt-2 leading-tight">
                  Join the Elementum newsletter
                </h3>
                <p className="font-sans text-neutral-500 text-xs md:text-sm mt-3 leading-relaxed">
                  Subscribe to receive curated case studies, design insights, and technological summaries straight to your inbox monthly. No spam, ever.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-3.5 bg-neutral-100/85 border border-neutral-200 rounded-2xl text-sm focus:outline-none focus:border-neutral-900 focus:bg-white transition-all text-neutral-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-[#fcfbf7] rounded-2xl font-display font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>

                {/* Secret admin listing toggler to demonstrate persistence */}
                <div className="mt-8 border-t border-neutral-200/60 pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setShowAdmin(!showAdmin)}
                    className="inline-flex items-center gap-2 text-[10px] font-mono text-neutral-400 hover:text-neutral-600 transition-colors"
                  >
                    <Users className="w-3.5 h-3.5" />
                    {showAdmin ? "Hide Subscribers" : "Show Subscribers List"}
                  </button>

                  <p className="text-[10px] text-neutral-400 font-mono">
                    {subscribers.length} total
                  </p>
                </div>

                {showAdmin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 max-h-36 overflow-y-auto bg-neutral-50 border border-neutral-200/50 rounded-xl p-3"
                  >
                    {subscribers.length === 0 ? (
                      <p className="text-[11px] font-mono text-neutral-400 text-center py-2">No subscribers yet.</p>
                    ) : (
                      <div className="space-y-1.5">
                        {subscribers.map((sub, i) => (
                          <div key={i} className="flex justify-between items-center text-[10px] font-mono py-1 border-b border-neutral-100 last:border-0">
                            <span className="text-neutral-700 truncate max-w-[180px]">{sub.email}</span>
                            <span className="text-neutral-400 text-[8px]">{sub.timestamp}</span>
                          </div>
                        ))}
                        <button
                          onClick={clearSubscribers}
                          className="w-full mt-3 py-1 bg-red-50 hover:bg-red-100 text-red-600 text-[9px] font-mono uppercase tracking-wide rounded"
                        >
                          Clear Database
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                
                <h3 className="font-display font-bold text-2xl text-neutral-900">You're Subscribed!</h3>
                <p className="font-sans text-xs text-neutral-500 mt-3 max-w-sm leading-relaxed">
                  We have added you to our mailing list. You will begin receiving strategic design insights on our next publication cycles.
                </p>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="mt-8 px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all"
                >
                  Dismiss
                </button>
              </motion.div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
