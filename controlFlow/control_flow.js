let userRole = "admin";
let accessLevel;

if(userRole == "admin") {
    accessLevel = "Full access granted";
} else if (userRole == "Manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch(userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber"
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authenticatio Status:", authenticationStatus);

let memberType = "Enrolled Member";
let memberContentAccess;

switch(memberType) {
    case "Employee":
        memberContentAccess = "Dietary Services";
        break;
    case "Enrolled Member":
        memberContentAccess = "Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        memberContentAccess = "Partial Access to facilitate Dietary Services";
        break;
    default:
        memberContentAccess = "Do not have access, please subsribe/enrolled to the program to enjoy access";
}

console.log("Member type:", memberType);
console.log("Member access:", memberContentAccess);