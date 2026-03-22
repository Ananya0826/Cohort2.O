import React from 'react'
import MACWindow from './MACWindow'
import "./spotify.scss"

const Spotify = ({windowName, setWindowsState}) => {
  return (
    <MACWindow width='25vw' windowName={windowName} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbVhgADFy3im?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MACWindow>
  )
}

export default Spotify