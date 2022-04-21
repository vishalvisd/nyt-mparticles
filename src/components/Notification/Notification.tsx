import {useState, useLayoutEffect, memo} from "react";
import isEmpty from "lodash/isEmpty";
// import Slide, {SlideProps} from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";

const DEFAULT_SHOW_DURATION = 3000;

function Notification({message, duration = DEFAULT_SHOW_DURATION}:{message:string, duration?:number}) {
    const [show, setShow] = useState<boolean>(!isEmpty(message))

    useLayoutEffect(()=>{
        setShow(!isEmpty(message));
    }, [message])

    return (
        <Snackbar
            open={show}
            autoHideDuration={duration}
            message={message}
            onClose={() => {setShow(false)}}
        />
    );
}

export default memo(Notification);
