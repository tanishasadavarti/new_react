import React, { useContext } from 'react';
import { themecontext } from '../context/Themecontext';
import { IoIosMoon, IoIosSunny } from "react-icons/io";


const Click = () => {
    const { theme, themeupdaterfunction } = useContext(themecontext);

    return (
        <div className='click' style={{textAlign:"right",margin:"5px 100px 20px 0px"}}>
            {theme === "light" ? (
                < IoIosMoon 
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px",
                        fontSize: "20px",
                        borderRadius: "50%",
                        
                    }}
                    onClick={themeupdaterfunction}
                />
            ) : (
                <IoIosSunny
                    style={{
                        backgroundColor: "white",
                        color: "black",
                        padding: "10px",
                        fontSize: "20px",
                        borderRadius: "50%"
                    }}
                    onClick={themeupdaterfunction}
                />
            )}
        </div>
    );
}

export default Click;
