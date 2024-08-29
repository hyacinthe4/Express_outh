# Express_outh
Explanation of Authentication vs. Authorization
In the context of web security, authentication and authorization are two critical concepts that are often confused but serve different purposes.

Authentication
Authentication is the process of verifying the identity of a user. It answers the question, "Who are you?" When a user provides their credentials (such as a username and password), the system checks whether the provided information matches the records in the database. If it does, the user is considered authenticated, and their identity is confirmed.

Authorization
Authorization, on the other hand, is the process of determining whether an authenticated user has the necessary permissions to perform a specific action. It answers the question, "What are you allowed to do?" Even if a user is authenticated, they may not have the necessary permissions to access certain resources or perform certain actions.

Scenario: "This delete user functionality can be done after authentication"
This requirement suggests that the ability to delete users is granted once the user is authenticated. However, this approach has significant security implications.
