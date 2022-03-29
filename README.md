Link to our API: https://github.com/220207-java-enterprise/Team-C-API

# Java Enterprise Foundations Project Requirements



## Project Description

For the foundations module of your training you are tasked with building an API that will support a new internal expense reimbursement system. This system will manage the process of reimbursing employees for expenses incurred while on company time. This system will work closely with the internal PRISM application - which is used for processing payments to employees. All registered employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.
For the technology module of your training you are tasked with building a web-based expense reimbursement system. This system will manage the process of reimbursing employees for expenses incurred while on company time. This system will work closely with the internal PRISM application - which is used for processing payments to employees. All registered employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.

### Project Design Specifications and Documents

##### Relational Data Model
![Relational Model](https://github.com/220207-java-enterprise/assignments/blob/main/foundations-project/imgs/ERS%20Relational%20Model.png)

### Project Design Specifications and Documents

**Persistence Tier**
- PostGreSQL (running on Docker)
- PostGreSQL (running locally using Docker)

**Application Tier**
- Java 8
- Spring 5 & Spring Boot
- Apache Maven
- JDBC
- Java EE Servlets
- Hibernate & Spring Data
- JSON Web Tokens
- JUnit
- Mockito

**Client Tier**
- HTML
- CSS
- TypeScript
- React

### Functional Requirements

- An new employee or new finance manager can request registration with the system
- A registered employee can authenticate with the system by providing valid credentials
- An admin user can reset a registered user's password
- Basic validation is enforced to ensure that invalid/improper data is not persisted
- User passwords will be encrypted by the system before persisting them to the data source
- Sensitive endpoints are protected from unauthenticated and unauthorized requesters using JWTs
- Errors and exceptions are handled properly and their details are obfuscated from the user
- The system's is tested with at least 80% line coverage in all service and utility classes
- The system's data schema and component design is documented and diagrammed 
