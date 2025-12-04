import React, { useState, useEffect } from 'react';
import { Download, CheckCircle, Users, Heart } from 'lucide-react';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(5);
  const [downloaded, setDownloaded] = useState(false);

  // Update this with your actual PDF filename
  const pdfFileName = 'x.pdf'; // CHANGE THIS
  const pdfPath = `/${pdfFileName}`;

  // Countdown timer for auto-download
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!downloaded) {
      handleDownload();
    }
  }, [countdown, downloaded]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-icon">
            <div className="icon-wrapper">
              <Users size={48} />
            </div>
          </div>
          <h1 className="header-title">
            Thank You for Being Part of Our Journey!
          </h1>
          <p className="header-subtitle">
            Your trust and partnership mean the world to us.
          </p>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="content-grid">
            {/* Left Column - Message */}
            <div className="message-column">
              <div className="message-item">
                <CheckCircle className="message-icon text-green" />
                <div className="message-text">
                  <h3 className="message-title">
                    Valued Partnership
                  </h3>
                  <p className="message-description">
                    We sincerely appreciate your continued support and trust in our company. 
                    Your partnership has been instrumental in our growth and success.
                  </p>
                </div>
              </div>

              <div className="message-item">
                <Heart className="message-icon text-red" />
                <div className="message-text">
                  <h3 className="message-title">
                    Our Commitment
                  </h3>
                  <p className="message-description">
                    We remain committed to providing you with exceptional service and value. 
                    Together, we'll achieve even greater milestones.
                  </p>
                </div>
              </div>

              <div className="info-box">
                <h4 className="info-title">
                  What's Next?
                </h4>
                <p className="info-text">
                  As a token of our appreciation, we've prepared a special document for you. 
                  Download it below to learn more about our shared journey.
                </p>
              </div>
            </div>

            {/* Right Column - Download Card */}
            <div className="download-card">
              <div className="download-content">
                <div className="download-icon-wrapper">
                  <Download className="download-icon" />
                </div>
                
                <h3 className="download-title">
                  Download Your Appreciation Document
                </h3>
                
                <p className="download-description">
                  This PDF contains special insights and our heartfelt appreciation for your partnership.
                </p>

                <div className="download-actions">
                  <button
                    onClick={handleDownload}
                    className={`download-button ${downloaded ? 'downloaded' : ''}`}
                  >
                    <Download size={24} />
                    <span>
                      {downloaded ? 'Downloaded Successfully!' : 'Download PDF Document'}
                    </span>
                  </button>

                  {!downloaded && (
                    <div className="countdown-section">
                      <p className="countdown-label">
                        Auto-downloading in:
                      </p>
                      <div className="countdown-circle">
                        <span className="countdown-number">
                          {countdown}
                        </span>
                      </div>
                    </div>
                  )}

                  {downloaded && (
                    <div className="success-message">
                      <div className="success-content">
                        <CheckCircle size={20} />
                        <span className="success-text">Document downloaded successfully!</span>
                      </div>
                      <p className="success-subtext">
                        Thank you for being with us!
                      </p>
                    </div>
                  )}
                </div>

                <div className="file-info">
                  <p className="file-details">
                    File: {pdfFileName} • Size: ~2.5 MB • Format: PDF
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="footer-message">
            <p className="quote">
              "Great things in business are never done by one person. They're done by a team of people."
            </p>
            <p className="quote-author">- Steve Jobs</p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bottom-banner">
          <div className="banner-content">
            <h4 className="banner-title">
              Need Assistance?
            </h4>
            <p className="banner-text">
              Contact us at <span className="highlight">support@yourcompany.com</span> or call <span className="highlight">+1 (555) 123-4567</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;