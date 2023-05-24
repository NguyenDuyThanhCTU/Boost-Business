// import app from "@config/firebase";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
const auth = getAuth();

const actionCodeSettings = {
  url: "https://www.example.com/finishSignUp?cartId=1234",
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "example.page.link",
};

const email = "thanhnd2512@gmail.com";

sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    window.localStorage.setItem("emailForSignIn", email);
    console.log("Email sent");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
