import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../services/api';
import { createPortal } from 'react-dom';
import { X, ExternalLink } from 'lucide-react';

const CertificatesSection = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const staticCertificates = [
      {
        _id: "69b3a5565447721ad734d2c9",
        title: "RAG with MongoDB",
        issuer: "MongoDB University",
        date: "2025-06-28T00:00:00.000Z",
        imageUrl: "/certificates/rag-mongo-cert.png",
        credentialUrl: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/1d3368cf-b3ef-4b51-b548-91d0a9cab388-sarthak-kaundal-ae93dd04-bad2-4fdc-aa6c-8237951e3297-certificate.pdf"
      },
      {
        _id: "69b3a6ec5447721ad734d2cb",
        title: "Building GenAI Apps",
        issuer: "MongoDB University",
        date: "2025-06-29T00:00:00.000Z",
        imageUrl: "/certificates/genaiapp-mongo-cert.png",
        credentialUrl: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/1d3368cf-b3ef-4b51-b548-91d0a9cab388-sarthak-kaundal-2b298a40-909b-4d21-9efb-4c4ff52df182-certificate.pdf"
      },
      {
        _id: "69b3a8655447721ad734d2cd",
        title: "Bits and Bytes of Networking",
        issuer: "Coursera",
        date: "2024-09-13T00:00:00.000Z",
        imageUrl: "/certificates/networking-google-cert.png",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/G46CF2E30QIE"
      },
      {
        _id: "69b3aa425447721ad734d2cf",
        title: "Privacy and Security Online",
        issuer: "NPTEL",
        date: "2025-05-27T00:00:00.000Z",
        imageUrl: "/certificates/nptel-cert.png",
        credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs79/Course/NPTEL25CS79S14750057704485612.pdf"
      },
      {
        _id: "69b3ab505447721ad734d2d1",
        title: "Data Structures & Algorithms",
        issuer: "NeoColab",
        date: "2024-12-02T00:00:00.000Z",
        imageUrl: "/certificates/dsa-neo-cert.png",
        credentialUrl: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BuxHqonPuJkNh3PDEtg2EUWLTkFJWYM2Q%3D"
      }
    ];

    const fetchCertificates = async () => {
      try {
        const response = await api.get('/certificates');
        if (response.data && response.data.length > 0) {
          setCertificates(response.data);
        } else {
          setCertificates(staticCertificates);
        }
      } catch (err) {
        setCertificates(staticCertificates);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <section id="certificates" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-black text-text-dark uppercase tracking-tight inline-block mb-3">
          Certifications
        </h2>
        <div className="h-1 w-24 bg-accent-teal border border-text-dark"></div>
      </div>

      {certificates.length === 0 ? (
        <div className="retro-card-large bg-white p-12 text-center flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="w-16 h-16 bg-primary-cream border-4 border-text-dark flex items-center justify-center mb-6 shadow-[4px_4px_0_var(--text-dark)] rotate-12">
              <span className="text-text-dark font-display font-black text-xl">{'</>'}</span>
            </div>
            <h3 className="text-2xl font-black text-text-dark mb-2 uppercase tracking-wide">Continuous Learner</h3>
            <p className="text-text-medium max-w-md text-base font-medium leading-relaxed">Active certifications are currently being updated. Check back soon for my latest credentials and achievements.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert._id}
              className="retro-card cursor-pointer group flex flex-col h-72 border-2 bg-primary-cream"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-40 overflow-hidden border-b-2 border-text-dark bg-white flex items-center justify-center">
                <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-text-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-lg font-black text-text-dark leading-tight line-clamp-2">{cert.title}</h4>
                  <p className="text-text-medium text-xs font-bold uppercase tracking-wider mt-1">{cert.issuer}</p>
                </div>
                
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0 mt-2">
                  <span className="retro-icon bg-accent-teal text-white p-1 shadow-[2px_2px_0_var(--text-dark)]">
                    <ExternalLink size={16} strokeWidth={3} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Preview */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-text-dark/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl w-full bg-primary-cream rounded-xl p-3 border-4 border-text-dark shadow-[10px_10px_0_var(--accent-teal)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute -top-5 -right-5 bg-accent-coral text-white p-2 rounded border-4 border-text-dark hover:bg-white hover:text-text-dark transition-colors z-[101] shadow-[4px_4px_0_var(--text-dark)] hover:-translate-y-1"
                >
                  <X size={24} strokeWidth={3} />
                </button>
                
                <div className="bg-white border-2 border-text-dark p-2">
                  <img src={selectedCert.imageUrl} alt={selectedCert.title} className="w-full object-contain max-h-[75vh]" />
                </div>

                {selectedCert.credentialUrl && (
                  <div className="absolute -bottom-6 w-full flex justify-center items-center left-0 px-4">
                     <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-retro-primary bg-accent-blue text-lg shadow-[6px_6px_0_var(--text-dark)] px-8 hover:translate-y-0 hover:-translate-x-1"
                    >
                      Verify Credential <ExternalLink size={20} className="ml-2" />
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default CertificatesSection;
