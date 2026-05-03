import { Suspense } from "react";
import SignInFrom from "../../componets/SignInFrom"

export default function SignInPage() {

    return (
        <div className="signin-container">
      <Suspense fallback={<div>Loading form...</div>}>
        <SignInFrom />
      </Suspense>
      
    </div>
    );
}