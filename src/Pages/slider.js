import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "assets/img/back2.png" },
    { url: "assets/img/backimage.png" },
    { url: "assets/img/back1.png" },
    { url: "assets/img/2.jpg" },
    { url: "assets/img/back3.png" }

];

const HomeSlider = () => {
    return (<
        div >
        <
            SimpleImageSlider width={
                "100%"
            }
            height={"90vh"}
            style={{objectFit : 'contain', backgroundSize: 'contain'}}
            images={images}

            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={3}
        /> < /
        div >
        );
}

        export default HomeSlider;