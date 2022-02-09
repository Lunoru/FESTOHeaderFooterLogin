import {Navbar} from "react-bootstrap";
import {PageLayout} from "../ButtonsLayout/ButtonsLayout";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";

export const CordNav = () =>{
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
                            <a className="headerHome" href="/ClassroomManage">Classrooms management</a>
                        </div>
                        <div className="link-festo">
                            <a className="headerHome" href="/LearningHistory">Learning history</a>
                        </div>
                        <div className="link-festo">
                            <a className="headerHome" href="/help">Help</a>
                        </div>
                        <div className="link-festo">
                            <a className="headerHome" href="/profile">TestProfile</a>
                        </div>
                        <div className="link-festo">
                            <a className="headerHome" href="/hello">TestAPI</a>
                        </div>
                    </AuthenticatedTemplate>
                </PageLayout>
            </Navbar>
        </>

        )
}