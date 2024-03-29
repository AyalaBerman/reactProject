import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function SingleMeeting(props) {
    const { id, erviceName, serviceDescription, servicePrice, dateTime, clientName, clientPhone, clientEmail } = props;
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);
    let color = 'green';
    if (meetingDate < currentDate)
        color = 'gray';
    if (currentDate.toDateString() === meetingDate.toDateString()) {
        color = 'red';
    } else if (
        meetingDate >= currentDate && meetingDate <= new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
    ) {
        color = 'orange';
    }
    
    return (<>
        <Accordion sx={{ width: '100%',backgroundColor:color }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{ textAlign: 'right', direction: 'rtl' }}>{props.serviceName} / {props.clientName}   {props.dateTime}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ direction: 'rtl', textAlign: 'right' }}>
                <Typography>{props.serviceName}</Typography>
                <Typography>{props.serviceDescription}</Typography>
                <Typography>{props.clientName}</Typography>
                <Typography>{props.clientPhone}</Typography>
                <Typography>{props.clientEmail}</Typography>
            </AccordionDetails>

        </Accordion>
    </>)
}