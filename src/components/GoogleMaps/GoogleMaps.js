import style from './GoogleMaps.module.css'


function GoogleMaps() {
    return (
        <div>
            <div className={style.map}>
                <iframe style={{width: '100%', height: '400px', border: 'none'}} src="https://maps.google.com/maps?width=100%25&amp;height=600px&amp;hl=en&amp;q=Dubininskaya%20Ulitsa,%2096,%20Moscow,%20Russia,%20115093+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.maps.ie/population/">Calculate population in area</a>
                </iframe>
            </div>
        </div>
    )
}
export default GoogleMaps