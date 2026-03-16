import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../services/api';
import { X } from 'lucide-react';

const CertificatesSection = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    // We leave this section empty initially as requested, or fetch from API
    const fetchCertificates = async () => {
      try {
        const response = await api.get('/certificates');
        setCertificates(response.data);
      } catch (err) {
        console.error('Failed to fetch certificates:', err);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <section id="certificates" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-neonBlue font-mono text-xl mr-2">05.</span> Certifications
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </div>

        {certificates.length === 0 ? (
          <div className="glass p-12 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-darkGray border-2 border-neonBlue flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,243,255,0.5)]">
               <span className="text-electricPurple font-bold text-2xl">?</span>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Continuous Learner</h3>
             <p className="text-gray-400 max-w-md">More certificates and achievements are being updated and will be showcased here soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <motion.div
                key={cert._id}
                whileHover={{ scale: 1.05 }}
                className="glass-card cursor-pointer group relative overflow-hidden h-64 border border-white/5"
                onClick={() => setSelectedCert(cert)}
              >
                <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-darkGray to-transparent p-6 flex flex-col justify-end">
                  <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                  <p className="text-neonBlue text-sm">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full bg-darkGray rounded-xl p-2 border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 bg-electricPurple text-white p-2 rounded-full hover:bg-neonBlue transition-colors z-[101]"
              >
                <X size={24} />
              </button>
              <img src={selectedCert.imageUrl} alt={selectedCert.title} className="w-full rounded-lg object-contain max-h-[80vh]" />
              {selectedCert.credentialUrl && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                   <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/50 backdrop-blur-md px-6 py-2 rounded-full text-white font-medium hover:bg-neonBlue transition-colors border border-white/20"
                  >
                    Verify Credential
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
