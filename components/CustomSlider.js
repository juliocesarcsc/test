import Slider from '@material-ui/lab/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const CustomSlider = withStyles({
    root: {
        color: '#FFCA3F'
    },
    track: {
        height: 5,
        width: 3,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        width: 3,
        borderRadius: 4,
    }
})(Slider);

export default CustomSlider;