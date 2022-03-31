import React , {useState , useEffect} from "react";

const SingleColor = ({rgb, weight , index , hexColor}) => {
    
    const [alert , setAlert] = useState(false);
    const background = rgb.join(',');
    const hexValue = `#${hexColor}`;
    console.log(hexValue);

    useEffect (() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000);
        return () => clearTimeout(timeout);
    } , [alert]);
    return(
        <article
            className={`color ${index > 10 && 'color-right'}`}
            style = {{backgroundColor : `rgb(${background})`}}
            onClick = {() => {
                setAlert(true)
                navigator.clipboard.writeText(hexValue)
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value"> {hexValue}</p>
            {alert && <p className="alert"> copied successfully </p>}

        </article>
    )
}
export default SingleColor;