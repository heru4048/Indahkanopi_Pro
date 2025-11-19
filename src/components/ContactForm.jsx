import React from 'react';
export default function ContactForm(){
  return (
    <section className="section container" id="contact">
      <h2>Contact</h2>
      <div style={{marginTop:12}} className="card">
        <form onSubmit={(e)=>{e.preventDefault(); alert('Terima kasih!')}}>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            <input placeholder="Nama" required style={{flex:1,padding:8}}/>
            <input placeholder="Email" required style={{flex:1,padding:8}}/>
          </div>
          <textarea placeholder="Pesan" required style={{width:'100%',marginTop:8,padding:8}}/>
          <div style={{marginTop:8}}>
            <button className="btn btn-primary" type="submit">Kirim</button>
          </div>
        </form>
      </div>
    </section>
  )
}
