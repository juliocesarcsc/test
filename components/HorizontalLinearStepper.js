import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from 'react-bootstrap/Card';
import Slider from '@material-ui/lab/Slider';
import {ErrorOutline} from '@material-ui/icons'
import CustomSlider from './CustomSlider';

const useStyles = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        {
            title: 'Willingness to take risks',
            subtitle: 'Risk Taker + Competitive',
            footer: 'Avoid Risk'
        },
        {
            title: 'Ability to exibit emotions',
            subtitle: 'Emotions are Controlled',
            footer: 'Display Emotions'
        },
        {
            title: 'Ability to feel empathy',
            subtitle: 'Less Empathetic',
            footer: 'Highly Empathetic'
        },
        {
            title: 'Preference of small teams over networking',
            subtitle: 'Workbest in small teams',
            footer: 'Prefers Networking'
        },
        {
            title: 'Confort level with touch',
            subtitle: 'Lesser Tendency to Touch',
            footer: 'Display Touch Easily'
        },
        {
            title: 'Preference of machine over people',
            subtitle: 'Loves Tool/Tech',
            footer: 'Love of Community'
        },
        {
            title: 'Ability to multi-task',
            subtitle: 'Focused Consentration',
            footer: 'Multi-tasking Master'
        },
        {
            title: 'Preference of abtraction over details',
            subtitle: 'Big Picture Vision',
            footer: 'Detailed Oriented'
        },
        {
            title: 'Ability to think logically',
            subtitle: 'Analitycal',
            footer: 'Balance + Prioritize'
        },
        {
            title: 'Acute stress response',
            subtitle: 'Fight or Flight',
            footer: 'Diplomatic Befriend'
        }
    ];
}

function getStepContent(step) {
    let steps = getSteps();
    return steps[step];
}

export default function HorizontalLinearStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [sliderAssessed, setSliderAssessed] = React.useState(5);
    const [sliderOther, setSliderOther] = React.useState(5);
    const steps = getSteps();
    const {url} = props;
    const name1 = url && url.query && url.query.name;
    const name2 = url && url.query && url.query.name2;

    function isStepOptional(step) {
        return step === 1;
    }

    function isStepSkipped(step) {
        return skipped.has(step);
    }

    function handleNext() {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleSkip() {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    }

    function handleReset() {
        setActiveStep(0);
    }

    let assessedValue = 0;
    const handleChangeAssessed = (value) => {
        setSliderAssessed(value);
    };

    let timeout = 0;
    const handleChangeOther = (value) => {
        setSliderOther(value);
    };

    //let assessedChilds = document.getElementById('assessed-answer').child;

    const lolo = false;

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}></StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div className="assess-wrap">
                        <div className="assess-title">{getStepContent(activeStep).title}</div>
                        <div className="subtitle-wrap">
                            <div id="assessed-name">{name1}</div>
                            <div id="center" className="question-title">
                                {getStepContent(activeStep).subtitle}
                                <ErrorOutline className="myicon-info"/>
                            </div>
                            <div id="other-name">{name2}</div>

                        </div>
                        <div id="assess-content">
                            <div id="assessed">
                                <div id="assessed-answer" className="answers">
                                    <div className={`answers-up ${sliderAssessed > 80 && 'cactive'}`}>Extreme</div>
                                    <div
                                        className={`answers-up ${sliderAssessed > 69 && sliderAssessed < 80 && 'cactive'}`}>
                                        Very Strong
                                    </div>
                                    <div
                                        className={`answers-up ${sliderAssessed > 59 && sliderAssessed < 70  && 'cactive'}`}>
                                        Strong
                                    </div>
                                    <div
                                        className={`answers-up ${sliderAssessed > 49 && sliderAssessed < 60 && 'cactive'}`}>
                                        Moderate
                                    </div>
                                    <div className="answers-separator">Separator</div>
                                    <div
                                        className={`answers-down ${sliderAssessed > 29 && sliderAssessed < 40  && 'cactive'}`}>
                                        Moderate
                                    </div>
                                    <div
                                        className={`answers-down ${sliderAssessed > 19 && sliderAssessed < 30  && 'cactive'}`}>
                                        Strog
                                    </div>
                                    <div
                                        className={`answers-down ${sliderAssessed > 9 && sliderAssessed < 20  && 'cactive'}`}>
                                        Very Strog
                                    </div>
                                    <div className={`answers-down ${sliderAssessed < 10 && 'cactive'}`}>Extreme</div>
                                </div>
                            </div>
                            <div id="assessed-slider" className="slider-wrap">
                                <CustomSlider
                                    orientation="vertical"
                                    getAriaValueText={handleChangeAssessed}
                                    defaultValue={5}
                                    min={0}
                                    max={90}
                                />
                            </div>
                            <div style={{flex:1}}></div>
                            <div id="other-slider" className="slider-wrap">
                                <CustomSlider
                                    getAriaValueText={handleChangeOther}
                                    orientation="vertical"
                                    defaultValue={5}
                                    min={0}
                                    max={90}
                                />
                            </div>
                            <div id="other">
                                <div id="other-answer" className="answers">
                                    <div className={`answers-up ${sliderOther > 80 && 'cactive'}`}>Extreme</div>
                                    <div className={`answers-up ${sliderOther > 69 && sliderOther < 80 && 'cactive'}`}>
                                        Very Strong
                                    </div>
                                    <div className={`answers-up ${sliderOther > 59 && sliderOther < 70  && 'cactive'}`}>
                                        Strong
                                    </div>
                                    <div className={`answers-up ${sliderOther > 49 && sliderOther < 60 && 'cactive'}`}>
                                        Moderate
                                    </div>
                                    <div className="answers-separator">Separator</div>
                                    <div
                                        className={`answers-down ${sliderOther > 29 && sliderOther < 40  && 'cactive'}`}>
                                        Moderate
                                    </div>
                                    <div
                                        className={`answers-down ${sliderOther > 19 && sliderOther < 30  && 'cactive'}`}>
                                        Strog
                                    </div>
                                    <div
                                        className={`answers-down ${sliderOther > 9 && sliderOther < 20  && 'cactive'}`}>
                                        Very Strog
                                    </div>
                                    <div className={`answers-down ${sliderOther < 10 && 'cactive'}`}>Extreme</div>
                                </div>
                            </div>
                        </div>
                        <div className="question-footer">
                            {getStepContent(activeStep).footer}
                            <ErrorOutline className="myicon-info"/>
                        </div>
                        <div className="btns-content">
                            <Button
                                variant="contained"
                                disabled={activeStep === 0}
                                color="primary"
                                onClick={handleBack}
                                className={classes.button}>
                                Previous
                            </Button>
                            <div></div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
