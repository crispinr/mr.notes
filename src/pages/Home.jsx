import Layout from "./Layout";
import CreateNote from "./components/home/CreateNote";
import GetNotes from "./components/home/GetNotes";
import { motion } from "framer-motion";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default function Home() {
    const easing = [0.6, -0.05, 0.01, 0.99];
    const fadeIn1 = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: easing,
            },
        },
    };
    const fadeIn2 = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2.5,
                ease: easing,
            },
        },
    };
    return (
        <Layout>
            <motion.div exit = "exit" initial = "initial" animate = "animate">
                <motion.div variants = {fadeIn1}>
                    <CreateNote></CreateNote>
                </motion.div>
            </motion.div>

            <motion.div exit = "exit" initial = "initial" animate = "animate">
                <motion.div variants = {fadeIn2}>
                    <GetNotes></GetNotes>
                </motion.div>
            </motion.div>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant = "outlined" color = "primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Eat
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant = "outlined" color = "secondary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Code
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant = "outlined" color = "primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Sleep
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant = "outlined" color = "secondary" />
                    </TimelineSeparator>
                    <TimelineContent>
                        Repeat
                    </TimelineContent>
                </TimelineItem>
                </Timeline>
        </Layout>
    );
}