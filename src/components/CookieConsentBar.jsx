// React import
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components import
import HispanaButton from "../components/reusable/HispanaButton";

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
          <div className="container max-w-lg mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <p className="mr-1.5 p-0 mb-2 sm:mb-0">
              Utilizamos cookies para mejorar su experiencia de navegación,
              mostrar anuncios o contenido personalizado y analizar nuestro
              tráfico. Al hacer clic en "X", usted acepta nuestro uso de
              cookies.
              <Link to="/cookies" className="text-primary font-bold ml-1">
                Leer Más
              </Link>
            </p>
            <HispanaButton
              title="Aceptar"
              backgroundColor="#5d31ce"
              variant="contained"
              onClick={dismissBar}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBar;