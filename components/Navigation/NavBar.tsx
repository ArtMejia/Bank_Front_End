import { FC, Fragment } from "react";
import NavLinks from "./NavLinks";

const NavBar: FC = () => {
    return(
        <Fragment>
             {/* Main Div */}
            <div style={{
                backgroundColor: "white",
                boxShadow: "1px 2px 0 red",
                display: "flex",
                flexDirection: "row",
                width: "100%",
                position: "fixed",
                zIndex: 9999, 
                top: 0,
                left: 0,
                height: "75px"
            }}>
                {/* Spacing Div */}
                <div style={{
                display: "flex",
                flexDirection: "row",
                margin: "0 6rem",
                justifyContent: "space-between",
                width: "100%"
                }}>
                    {/* Logo Div */}
                    <div style={{
                        margin: "0 1rem",
                        cursor: "pointer",
                        justifyContent: "center"
                    }}
                    onClick={() => alert("Go Home")}>
                        <h1 style={{fontWeight: "bold"}}>
                            Dev<span style={{color: "green"}}>Bank</span>
                        </h1>
                    </div>
                    <div id="linksDiv"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <NavLinks destination="/" text="Home"/>
                        <NavLinks destination="/signup" text="Sign Up"/>
                    </div>
                </div>
            </div>
            <div id="bufferDiv"
                    style={{height: "75px"
                }}
            />
        </Fragment>
    )
}

export default NavBar;