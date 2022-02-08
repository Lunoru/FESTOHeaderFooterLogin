import {AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal} from "@azure/msal-react";

import { Nav, Navbar, Button,} from "react-bootstrap";

import { loginRequest } from "../../authConfig";
import {PageLayout} from "../ButtonsLayout/ButtonsLayout";
import {CordNav} from "./Coordinator";
import {StudTeachNav} from "./StudTeach";
import {RequestNav} from "./Requestor";

export const NavigationBar = () => {
    const isAuthenticated = useIsAuthenticated();
    const {accounts} = useMsal();
    const token = accounts[0] && accounts[0].idTokenClaims
    const role = accounts[0] && accounts[0].idTokenClaims["roles"][0];

console.log(role)
    /**
     * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
     * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
     * only render their children if a user is authenticated or unauthenticated, respectively.
     */

    if (role === "Coordinator"){
        return (
            <AuthenticatedTemplate>
                <CordNav />
            </AuthenticatedTemplate>

        )
    }else if (role === "Student"){
        return(
            <AuthenticatedTemplate>
                <StudTeachNav />
            </AuthenticatedTemplate>

        )

    }else if (role === "Teacher"){
      return (<AuthenticatedTemplate>
          <StudTeachNav />
      </AuthenticatedTemplate>)
    }else if (role === "Requestor"){
        return (<AuthenticatedTemplate>
            <RequestNav />
        </AuthenticatedTemplate>)
    } else{
        return(
            <UnauthenticatedTemplate>
                <>
                    <Navbar>
                        <PageLayout>
                            <div className="link-festo">
                                <a className="headerHome" href="/home">Home</a>
                            </div>
                        </PageLayout>
                    </Navbar>
                </>
            </UnauthenticatedTemplate>

        )
    }
}



