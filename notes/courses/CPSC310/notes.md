# Final exam notes

## RESTful Design

- Representational state transfer
- Localization of reasoning
- Reduction in propagation of change

### Basics

1. Client **requests** to Server
2. Server **responds** to Client

#### Examples

##### Example 1

1. Browser requests URL from Server
2. Server responds with HTML document to Browser

##### Example 2

1. App sends HTTP request to RESTful service (GET/PUT/POST/DELETE)
2. RESTful service responds with uniform resource identifiers (URI) to App

### Principles

- Resources are identified by Uniform Resource Identifiers (URIs) and must be **nouns**
    - Ex. `http://twitter.com/user/tweets`
    - Ex. `http://cookbook/dinner/bestDishes/3`
- Http requests (GET/PUT/POST/DELETE) are the only **verbs**
    - GET/PUT/POST/DELETE
        - GET: Retrieve a resource
        - POST: Store a new resource
        - PUT: Store a resource at existing URI
        - DELETE: remove a resource
    - Every resource must support all four verbs
- Client maintains state
    - server doesn't retain any state about the client
    - every request can be thought of as a one-off request
- Servers maintain resource structure **(connectedness)**
    - Does not force client to recall internal structure of server resources
    - Provice relevant links inside returned resources
    - Server sends links to related resources
- **Idempotence is important**

## Design Principles

- Eliminate effects between unrelated things
- Design components that are:
    - self-contained
    - independent
    - have a single well-defined purpose
- Desired change -> Code smalls -> refactorings -> principled code

### Principles & Heuristics for modular design

- **S** : Single responsibility (high cohesion, low coupling)
- **O** : Open/Closed principle
- **L** : Liskov substitution
- **I** : Interfact segregation principle
- **D** : Dependency inversion principle

### Single responsibility principle

A class should only have a single responsibility.

#### Coupling

- How tightly a module is related to other modules
- Goal is loose coupling
- Changes in modules should not impact other modules; easier to work with them separately.

##### Types of coupling

- Content/Sementic coupling (high)
    - One module relies on inner working of another module (accessing local data of another module)
    - Changing the way second module produces data will lead to changing dependent module
- Common coupling
    - Two modules share the same global data
- External coupling
    - two modules share an externally imposed data format, protocol or device interface.
- Control coupling
    - One module controlling the flow of another
- Stamp coupling
    - When modules share composite data structure and only use part of it
- Data coupling
    - Modules share data through parameters
- Message coupling (low)
    - Loosest type of coupling, can be achieved by state decentralization
- No coupling
    - Modules do not communicate at all with one another

#### Cohesion

- Refers to how closely the functions in a module are related
- Modules should contain functions that logically belong together
- Classes should have a **single responsibility**

##### High cohesion

- Modules should contain functions that logically belong together


##### Bad

Causes divergent changes and feature envy

- Coincidental cohesion
    - When parts of a module are grouped arbitrarily. The only relationship between the parts is that they have been grouped together.
- Logical cohesion
    - When parts of a module are grouped because they logically are categorized to do the same thing even if they are different by nature
- Temporal cohesion
    - When parts of a module are grouped when they are processed

##### Very good

- Sequential cohesion
    - When parts of a module are grouped together because the output from one part is the input to another (read/write functions)

##### Best

- Functional cohesion
    - When parts of a module are grouped because they all contribute to a single well-defined task


### Open/closed principle

*Open for extension, closed for modification*

A class must be **closed** for internal change but **open** for extensions

### Liskov ssubstitution principle

*if **S** is a subtype of **T**, then objects of type **T** in a program my be replaced with objects of type **S** without altering any of the desirable properties of that program*

### Interface segregation principle

*many client-specific interfaces are better than one general-purpose interface*

- No client should be forced to depend on methods it does not use
- No implementation clas should be forced to provide methods that do not fit into its abstraction
- A move towards role-based interfaces
- Clients need only know about the methods that are of interest to them
- Relates to high cohesion
- Violating the interface-segregation-principle is basically **forcing** implementors to violate the single-responsibility-principle

### Dependency inversion principle

*"depend upon abstractions, not concretions"*

- information hiding
    - only exponse necessary functions
    - hide complecity by emphasizing on essential characteristics and suppressing details
    - caller should not assume anything about how the interface is implemented
    - effects of internal changes are localized

### Summary

- Classes should do only **one thing**
- Don't force extenders to change the implementations directly
- Have small, role-specific interfaces
- Depend upon abstractions, not implementations
- Rework design so that changes are **localized**