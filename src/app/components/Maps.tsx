"use client"
import { APIProvider, Map, Marker, InfoWindow, } from '@vis.gl/react-google-maps';

const Maps = () => {
  return (
    <APIProvider apiKey={ process.env.NEXT_PUBLIC_GOOGLE_MAP || "" }>
      <Map
        style={{ width: '100%', height: '400px' }}
        defaultCenter={{ lat: -8.097987, lng: 113.234853 }}
        defaultZoom={10}
        gestureHandling={'greedy'}
      >
        <Marker position={{ lat: -8.097987, lng: 113.234853 }} />
        <InfoWindow position={{ lat: -8.097987, lng: 113.234853 }} >
          <h4>Tempat Tinggal</h4>
          <p>Desa Madurejo, Kecamatan Pasirian, kabupaten Lumajang</p>
        </InfoWindow>
      </Map>
    </APIProvider>
  )
};

export default Maps