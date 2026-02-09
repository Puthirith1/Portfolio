import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';

export default function EducationSection() {
  return (
    <section id='education'>
			<div className="wrapper mt-20">
				<h2 className="text-base! text-primary">Education</h2>
        <div className='mt-10'>
          <Timeline position="alternate">

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography>2014-2018</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ minHeight: 150 }}>
                <Typography>CIA INTERNATION SCHOOL</Typography>
                <Typography>Highschool Diploma</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography>2023-present</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ minHeight: 150 }}>
                <Typography>ASSOCIATION OF CHARTERED CERTIFIED ACCOUNTANTS (ACCA)</Typography>
                <Typography>ACCA Diploma in Accounting and Business/Management</Typography>
                <Typography>Working toward ACCA Member</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography>2026</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ minHeight: 150 }}>
                <Typography variant="h6" component="span">
                  META FULL STACK DEVELOPER: FRONT-END & BACK-END FROM SCRATCH
                </Typography>
                <Typography>Specialization Certificate</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
			</div>
    </section>
  )
}