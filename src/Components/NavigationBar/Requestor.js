import {Navbar} from "react-bootstrap";
import {PageLayout} from "../ButtonsLayout/ButtonsLayout";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";

export const RequestNav = () =>{
    return (
        <>
            <Navbar>
                <PageLayout>
                    <div className="link-festo">
                        <a className="headerHome" href="/home">Home</a>
                    </div>
                    <AuthenticatedTemplate>
                        <div className="link-festo">
                            <a className="headerHome" href="/NewRequest">New requests</a>
                        </div>
                        <div className="link-festo">
                            <a className="headerHome" href="/LearningHistory">Learning history</a>
                        </div>
                        <div className="link-festo">
                            <a className="headerHome" href="/Help">Help</a>
                        </div>
                    </AuthenticatedTemplate>
                </PageLayout>
            </Navbar>
        </>

    )
}