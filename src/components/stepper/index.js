import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./style.css";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { FiCheck } from "react-icons/fi";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const steps = [
  {
    title: "Verify Token",
    desc: "Enter the token address and verify",
  },
  {
    title: "DeFi Launchpad Info",
    desc: "Enter the launchpad information that you want to raise, that should be enter all details about your presale",
  },
  {
    title: "Add Additional Info",
    desc: "Let people know who you are",
  },
  {
    title: "Finish",
    desc: "Review your information",
  },
  // "DeFi Launchpad Info",
  // "Add Additional Info",
  // "Finish",
];

export default function CustomStepper({ step }) {
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#0d98da",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#0d98da",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor: "#0d98da",
      borderRadius: 1,
    },
  }));
  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "" : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(!ownerState.active &&
      !ownerState.completed && {
        backgroundColor: "#111721",
        border: "3px solid #0d98da",
        // color:"#111721",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      }),
    ...(ownerState.active && {
      backgroundColor: "#0d98da",
      border: "3px solid #0d98da",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      border: "3px solid #0d98da",
      backgroundColor: "#0d98da",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {completed ? (
          <span className="text-2xl">
            <FiCheck />
          </span>
        ) : (
          icons[String(props.icon)]
        )}
      </ColorlibStepIconRoot>
    );
  }
  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };
  return (
    <Box sx={{ width: "100%" }} className="custom-stepper">
      <Stepper
        activeStep={step}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        {steps.map((val, i) => (
          <Step key={i}>
            <StepLabel StepIconComponent={ColorlibStepIcon} className="">
              <>
                <p className="text-white text-lg"> {val.title}</p>
                <p className=" text-primary-text mt-2 px-10">{val.desc}</p>
              </>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
