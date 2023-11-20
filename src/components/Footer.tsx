import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-sdmis-primary-600 w-full text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={128} height={77} className="w-12 h-6" />
          <Image src="/images/logoside.jpg" alt="logo" width={150} height={100} className="w-12 h-6 ml-4" />
        </div>
        <div>
          <p className="text-xs">© 2023 Your Website. All rights reserved.</p>
        </div>
      </div>

      <div className="container mx-auto mt-4 text-xs text-center">
        <p>Home | Act | Services | Accessibility Statement | Website Policies | Terms & Conditions | Help | Disclaimer | Archive | Contact Us | Sitemap</p>
        <p className="mt-2">Copyright © 2022. Punjab School Education Board, Vidya Bhawan, Phase-8, SAS Nagar (Mohali), India. All rights reserved.</p>
        <p className="mt-2">For any query regarding this website Please Contact the WIM:board.pseb@punjab.gov.in (Feedback through Email)</p>
      </div>

      <div className="container mx-auto mt-4 text-xs text-center">
        <p>Total Visitors: 1231047</p>
        <p>Last Updated On: 2023-11-06 10:44:26</p>
      </div>

      <div className="container flex mx-auto mt-4 text-xs text-center">
          <a href="/images/logo.png" target="_blank" title="HTML validator">
            <Image width={50} height={50} alt="valid" data-entity-type="file" data-entity-uuid="eefd29d6-1307-48bb-a0d3-d1082667fae7" src="/images/logo.png"/>
          </a>
         
          <a href="/images/logo.png" target="_blank" title="Explanation of WCAG 2.0 Level Double-A Conformance">
            <Image width={50}  height={50} alt="Level Double-A conformance,W3C WAI Web Content Accessibility Guidelines 2.0" src="/images/logo.png"/>
          </a>
      </div>

      <div className="container mx-auto mt-4 text-xs text-center">
        <p>This site is best viewed in 1024 * 768 resolution with the latest version of Chrome, Firefox, Safari, and Internet Explorer (Edge).</p>
      </div>
    </footer>
  );
};

export default Footer;
