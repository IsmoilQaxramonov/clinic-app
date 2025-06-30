import React from "react";

export const GoogleMapCart: React.FC = () => {
  return (
    <div className="h-[300px] rounded-xl overflow-hidden shadow-md m-4">
      <iframe
        src="https://www.google.com/maps?q=41.344882,69.343904&z=16&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
