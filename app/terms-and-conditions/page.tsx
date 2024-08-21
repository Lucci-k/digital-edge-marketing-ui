'use client';

import React from 'react';

const TermsAndConditions: React.FC = () => {
  
  const websiteName = "DigitalEdge.com";
  const businessName = "Digital Edge";
  const email = "contact@digitaledge.com"; // Replace with your actual email
  const jurisdiction = "Your Country/State"; // Replace with your actual 

  return (
    <main className="flex flex-grow flex-col items-center justify-between">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>Welcome to {websiteName}. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Use of Website</h2>
          <p>The content of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property Rights</h2>
          <p>Unless otherwise stated, {businessName} and/or its licensors own the intellectual property rights for all material on {websiteName}. All intellectual property rights are reserved. You may view and/or print pages from {websiteName} for your own personal use subject to restrictions set in these terms and conditions.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. User Account</h2>
          <p>If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>In no event shall {businessName}, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise, and {businessName}, including its officers, directors, and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Indemnification</h2>
          <p>You hereby indemnify to the fullest extent {businessName} from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney’s fees) arising out of or in any way related to your breach of any of the provisions of these Terms.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of {jurisdiction} and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Changes to Terms</h2>
          <p>{businessName} reserves the right to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis to ensure you understand all terms and conditions governing use of this website.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at <a href={`mailto:${email}`} className="text-blue-500">{email}</a>.</p>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;