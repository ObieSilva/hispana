// React import
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsentBar = () => {
  const [hasConsent, setHasConsent] = useState(false);

  const dismissBar = () => {
    setHasConsent(true);
    sessionStorage.setItem("cookieConsent", "true");
  };

  useEffect(() => {
    const storedConsent = sessionStorage.getItem("cookieConsent");
    if (storedConsent) {
      setHasConsent(true);
    }
  }, []);

  return (
    <>
      {!hasConsent && (
        <div className="fixed bottom-0 w-full bg-secondary text-main p-4 opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="container max-w-lg mx-auto flex items-center justify-between px-4">
            <p className="mr-1.5 p-0">
              Este sitio web utiliza cookies para mejorar tu experiencia. Al
              continuar utilizando este sitio, aceptas el uso de cookies. 
              <Link to="/cookies" className="text-primary font-bold ml-1">
                Leer Más
              </Link>
            </p>
            <button
              className="bg-transparent border-none text-gray-600 cursor-pointer"
              onClick={dismissBar}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBar;