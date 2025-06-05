import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

const LOCATIONS = [
  { name: "Mendoza", lat: -32.8908, lng: -68.8272 },
  { name: "Ciudad de México", lat: 19.4326, lng: -99.1332 },
  { name: "Bogotá", lat: 4.711, lng: -74.0721 },
  { name: "Nueva York", lat: 40.7128, lng: -74.006 },
  { name: "Berlín", lat: 52.52, lng: 13.405 },
  { name: "Singapur", lat: 1.3521, lng: 103.8198 },
  { name: "Lisboa", lat: 38.7223, lng: -9.1393 },
  { name: "Tokio", lat: 35.6895, lng: 139.6917 },
  { name: "Londres", lat: 51.5074, lng: -0.1278 },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
  { name: "París", lat: 48.8566, lng: 2.3522 },
  { name: "Estambul", lat: 41.0082, lng: 28.9784 },
  { name: "Sídney", lat: -33.8688, lng: 151.2093 },
  { name: "Dubái", lat: 25.2048, lng: 55.2708 },
  { name: "Johannesburgo", lat: -26.2041, lng: 28.0473 },
];

// Generar arcos entre varias ciudades (conexiones globales)
const ARCS = [
  { startLat: -32.8908, startLng: -68.8272, endLat: 19.4326, endLng: -99.1332 }, // Mendoza - CDMX
  { startLat: 19.4326, startLng: -99.1332, endLat: 4.711, endLng: -74.0721 }, // CDMX - Bogotá
  { startLat: 40.7128, startLng: -74.006, endLat: 52.52, endLng: 13.405 }, // NY - Berlín
  { startLat: 52.52, startLng: 13.405, endLat: 1.3521, endLng: 103.8198 }, // Berlín - Singapur
  { startLat: 38.7223, startLng: -9.1393, endLat: 35.6895, endLng: 139.6917 }, // Lisboa - Tokio
  { startLat: 51.5074, startLng: -0.1278, endLat: -23.5505, endLng: -46.6333 }, // Londres - São Paulo
  { startLat: 48.8566, startLng: 2.3522, endLat: 41.0082, endLng: 28.9784 }, // París - Estambul
  { startLat: -33.8688, startLng: 151.2093, endLat: 25.2048, endLng: 55.2708 }, // Sídney - Dubái
  { startLat: 25.2048, startLng: 55.2708, endLat: -26.2041, endLng: 28.0473 }, // Dubái - Johannesburgo
];

const earthTexture = "https://unpkg.com/three-globe/example/img/earth-dark.jpg";
const bumpTexture = "https://unpkg.com/three-globe/example/img/earth-topology.png";

interface GloboInteractivoProps {
  highlight?: string | null;
  color?: "red" | "green";
}

const COLORS = {
  red: {
    atm: "#E71D36",
    point: "#E71D36",
    arc: "#3E3EF4",
    highlight: "#fff",
  },
  green: {
    atm: "#39ff14",
    point: "#39ff14",
    arc: "#39ff14",
    highlight: "#fff",
  },
};

const GloboInteractivo: React.FC<GloboInteractivoProps> = ({ highlight, color = "red" }) => {
  const globeEl = useRef<any>();
  const c = COLORS[color];

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 2.2; // velocidad rápida
      globeEl.current.controls().enableZoom = false; // desactivar zoom manual
      // Vista general inicial (centrar en América/Europa)
      globeEl.current.pointOfView({ lat: 20, lng: -30, altitude: 2.1 }, 0);
    }
  }, []);

  // Cambiar altitude al hacer highlight
  useEffect(() => {
    if (globeEl.current) {
      if (highlight) {
        const loc = LOCATIONS.find((l) => l.name === highlight);
        if (loc) {
          globeEl.current.pointOfView({ lat: loc.lat, lng: loc.lng, altitude: 2.7 }, 1200);
        }
      } else {
        globeEl.current.pointOfView({ lat: 20, lng: -30, altitude: 2.1 }, 1200);
      }
    }
  }, [highlight]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 320,
        maxHeight: 600,
        minWidth: 320,
        maxWidth: 600,
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        borderRadius: 24,
        overflow: "visible",
      }}
    >
      <Globe
        ref={globeEl}
        width={520}
        height={520}
        globeImageUrl={earthTexture}
        bumpImageUrl={bumpTexture}
        backgroundColor="#03033000"
        showAtmosphere={true}
        atmosphereColor={c.atm}
        atmosphereAltitude={0.18}
        pointsData={LOCATIONS}
        pointLat={"lat"}
        pointLng={"lng"}
        pointColor={(d: any) => (highlight && d.name === highlight ? c.highlight : c.point)}
        pointAltitude={0.04}
        pointRadius={0.38}
        pointLabel={(d: any) => d.name}
        arcsData={ARCS}
        arcColor={() => c.arc}
        arcDashLength={0.4}
        arcDashGap={0.7}
        arcDashInitialGap={() => Math.random()}
        arcStroke={2.2}
        arcAltitude={0.22}
        arcDashAnimateTime={3500}
      />
    </div>
  );
};

export default GloboInteractivo; 