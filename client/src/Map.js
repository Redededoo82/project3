import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiaWdneXl5IiwiYSI6ImNrMzNqbzBncDA0em0zaHFvdXAxMjdybnIifQ.eQGdfi2PXEAbRkk0Jpi4TA"

class Mapbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default Mapbox

