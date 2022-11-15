import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.css';


const Video = (props) => {
    const [display, setDisplay] = useState(false);
    const [selectedUrl, setUrl] = useState("https://www.youtube.com/watch?v=P-DhwN87JDY");

    function overVideo() {
        setDisplay(true);
    }
    const changeClick = (url) => {
        setUrl(url)
    }

    return (
        <div className={styles.main}>
            <h2>Video Player</h2>
            <div className={styles.content}>
                <div onMouseOver={overVideo} className={styles.upper}>
                    <ReactPlayer width='50%' height='100%' controls light={true} url={selectedUrl} />
                </div>
                {display &&
                    <div className={styles.lower}>
                        {props.urls.map((item) => <button onClick={() => changeClick(item.url)}> <img src={item.link} /> </button>)}
                    </div>}
            </div>
        </div>
    );
};

export default Video;