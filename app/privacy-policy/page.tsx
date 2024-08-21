'use client';

import React from 'react';

const PrivacyPolicy: React.FC = () => {

  const websiteName = "DigitalEdge.com";
  const businessName = "Digital Edge";
  const email = "contact@digitaledge.com"; // Replace with your actual email
  const address = "123 Main St, Anytown, USA"; // Replace with your actual address
  const date = "2022-01-01"; // Replace with the current date

  return (
    <main className="flex flex-grow flex-col items-center justify-between">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>Welcome to {websiteName}. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-5">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Business information (Company name, address, etc.)</li>
            <li>Usage data (Pages visited, time spent on the site, etc.)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p>We use the information we collect in the following ways:</p>
          <ul className="list-disc pl-5">
            <li>To provide and maintain our services</li>
            <li>To improve our website and services</li>
            <li>To communicate with you, including responding to your inquiries and sending promotional materials</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:</p>
          <ul className="list-disc pl-5">
            <li>With your consent</li>
            <li>To trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential</li>
            <li>To comply with the law, enforce our site policies, or protect ours or others&apos; rights, property, or safety</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
          </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-5">
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
          <p>{businessName} reserves the right to update this Privacy Policy at any time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p>Email: <a href={`mailto:${email}`} className="text-blue-500">{email}</a></p>
          <p>Address: {address}</p>
          <p>Date: {date}</p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;