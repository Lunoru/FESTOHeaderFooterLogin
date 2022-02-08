import {Navbar} from "react-bootstrap";
import {PageLayout} from "../ButtonsLayout/ButtonsLayout";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";

export const StudTeachNav = () =>{
    return(
        <>
            <Navbar>
                <PageLayout>
                    <div className="link-festo">
                        <a className="headerHome" href="/home">Home</a>
                    </div>
                    <AuthenticatedTemplate>
                        <div className="link-festo">
                            <a className="headerHome" href="#">Learning History</a>
                        </div>
                        <div className="link-festo">
                            <a className="headerHome" href="#">Help</a>
                        </div>
                    </AuthenticatedTemplate>
                </PageLayout>
            </Navbar>
        </>
    )
}