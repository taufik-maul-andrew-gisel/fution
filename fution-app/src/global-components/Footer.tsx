import React from "react";

function Footer() {
  // const backgroundImage = `${process.env.NEXT_PUBLIC_URL}/backgroundFooter.jpg`;
  return (
    <footer className="bg-white border-t-[1] text-black p-4">
      <div className="container mx-auto">
        {/* Use grid for the base class and apply grid-cols-4 on md screens */}
        <div className="flex justify-between items-start px-10">
          {/* FUTION Information */}
          <div>
            <h2 className="text-lg font-semibold mb-2">FUTION</h2>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Sitemap</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* CONTACT US Information */}
          <div>
            <h2 className="text-lg font-semibold mb-2">CONTACT US</h2>
            <ul>
              <li className="flex items-center">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/whatsapp--v1.png"
                  alt="whatsapp--v1"
                />
                021-3456789
              </li>
              <li className="flex items-center">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/ios-glyphs/60/send-mass-email.png"
                  alt="send-mass-email"
                />
                cs@fution.co.id
              </li>
            </ul>
          </div>

          {/* Social Media Information */}
          <div>
            <h2 className="text-lg font-semibold mb-2">SOCIAL MEDIA</h2>
            <div className="flex space-x-2">
              {/* Social Media Icons */}
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
            </div>
          </div>

          {/* SECURITY Information */}
          <div>
            <h2 className="text-lg font-semibold mb-2">SECURITY</h2>
            <img
              src="/security.png"
              alt="Security Badge"
              className="w-auto h-20"
            />
          </div>
        </div>

        {/* Legal Information */}
        <div className="text-center text-sm mt-4">
          © 2023 Fution. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
