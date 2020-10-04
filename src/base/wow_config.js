import WOW from 'wow.js'

const WowConfig = () => {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    })
    wow.init();
    return true;
}

export default WowConfig;