import { redirect } from "react-router-dom";

export async function requireAuth() {
 const isLoggedIn = true;

 if (!isLoggedIn) {
    return redirect("/login");
 }

 return null;
};