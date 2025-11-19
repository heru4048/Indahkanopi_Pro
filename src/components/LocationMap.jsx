import React from 'react';
export default function LocationMap(){
  return (
    <section className="section container map-small" id="location">
      <h2>Lokasi Kantor</h2>
      <div style={{marginTop:12}}>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!2m12!1m3!1d0!2d0!3d0" loading="lazy"></iframe>
      </div>
    </section>
  )
}
